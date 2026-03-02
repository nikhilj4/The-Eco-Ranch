
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import Razorpay from 'razorpay';

dotenv.config();

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Verify Environment Variables
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.warn('Warning: Email credentials not found in .env');
}
if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
    console.warn('Warning: Razorpay credentials not found in .env');
}

// Razorpay Instance
const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID || 'RAZORPAY_KEY_ID',
    key_secret: process.env.RAZORPAY_KEY_SECRET || 'RAZORPAY_KEY_SECRET',
});

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Create Order API
app.post('/api/razorpay', async (req, res) => {
    try {
        const { amount } = req.body;

        const options = {
            amount: amount * 100, // Amount in paise
            currency: "INR",
            receipt: `receipt_${Date.now()}`,
        };

        const order = await razorpay.orders.create(options);

        res.json({
            success: true,
            orderId: order.id,
            amount: order.amount,
            currency: order.currency,
            key: process.env.RAZORPAY_KEY_ID,
        });
    } catch (error) {
        console.error('Razorpay Error:', error);
        res.status(500).json({ success: false, error: 'Failed to create order' });
    }
});

// Send Enquiry Email API
app.post('/api/send-enquiry', async (req, res) => {
    try {
        const { name, email, phone, items, totalAmount, date, time } = req.body;

        const itemRows = items.map(item =>
            `<tr>
                <td style="padding:10px 12px;border-bottom:1px solid #eee;">${item.name}</td>
                <td style="padding:10px 12px;border-bottom:1px solid #eee;text-align:center;">${item.qty}</td>
                <td style="padding:10px 12px;border-bottom:1px solid #eee;text-align:right;">Rs ${item.price.toLocaleString('en-IN')}</td>
                <td style="padding:10px 12px;border-bottom:1px solid #eee;text-align:right;font-weight:600;">Rs ${(item.price * item.qty).toLocaleString('en-IN')}</td>
            </tr>`
        ).join('');

        const mailOptions = {
            from: `"The Eco Ranch" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: `Thank You for Your Enquiry – The Eco Ranch`,
            html: `
                <div style="font-family:'Segoe UI',Arial,sans-serif;max-width:620px;margin:0 auto;background:#fff;border-radius:16px;overflow:hidden;border:1px solid #e8e8e8;">
                    <!-- Header -->
                    <div style="background:#6F8F72;padding:36px 32px;text-align:center;">
                        <h1 style="color:#fff;margin:0;font-size:26px;letter-spacing:0.5px;">The Eco Ranch</h1>
                        <p style="color:rgba(255,255,255,0.8);margin:6px 0 0;font-size:13px;">Kanakapura, Karnataka • +91 74118 89506</p>
                    </div>

                    <!-- Body -->
                    <div style="padding:32px;">
                        <h2 style="color:#3d3d3d;margin:0 0 8px;font-size:20px;">Thank you for your enquiry, ${name}! 🐴</h2>
                        <p style="color:#666;font-size:15px;line-height:1.6;margin:0 0 24px;">
                            We've received your enquiry and our team will reach out to you on <strong>${phone}</strong> shortly to confirm your booking.
                        </p>

                        <!-- Enquiry Summary -->
                        <div style="background:#f7faf7;border-radius:12px;padding:20px;margin-bottom:24px;">
                            <p style="margin:0 0 6px;font-size:13px;text-transform:uppercase;letter-spacing:0.8px;color:#6F8F72;font-weight:700;">Enquiry Summary</p>
                            <p style="margin:4px 0;font-size:14px;color:#555;"><strong>Preferred Date:</strong> ${date || 'To be confirmed'}</p>
                            <p style="margin:4px 0;font-size:14px;color:#555;"><strong>Preferred Time:</strong> ${time || 'To be confirmed'}</p>
                        </div>

                        <!-- Price Breakdown Table -->
                        <table style="width:100%;border-collapse:collapse;font-size:14px;margin-bottom:8px;">
                            <thead>
                                <tr style="background:#6F8F72;">
                                    <th style="padding:10px 12px;color:#fff;text-align:left;border-radius:8px 0 0 0;">Item</th>
                                    <th style="padding:10px 12px;color:#fff;text-align:center;">Qty</th>
                                    <th style="padding:10px 12px;color:#fff;text-align:right;">Unit Price</th>
                                    <th style="padding:10px 12px;color:#fff;text-align:right;border-radius:0 8px 0 0;">Total</th>
                                </tr>
                            </thead>
                            <tbody style="color:#444;">
                                ${itemRows}
                            </tbody>
                            <tfoot>
                                <tr style="background:#FFF8F0;">
                                    <td colspan="3" style="padding:12px;font-weight:700;font-size:15px;color:#3d3d3d;">Grand Total (Estimate)</td>
                                    <td style="padding:12px;font-weight:700;font-size:17px;color:#F2A65A;text-align:right;">Rs ${totalAmount.toLocaleString('en-IN')}</td>
                                </tr>
                            </tfoot>
                        </table>
                        <p style="font-size:12px;color:#aaa;margin:0 0 28px;">*Final pricing may vary. Our team will confirm on WhatsApp/call.</p>

                        <!-- CTA -->
                        <div style="text-align:center;margin-bottom:28px;">
                            <a href="https://wa.me/917411889506" style="display:inline-block;background:#25D366;color:#fff;font-weight:700;padding:14px 36px;border-radius:50px;text-decoration:none;font-size:15px;">💬 Chat with us on WhatsApp</a>
                        </div>

                        <p style="color:#888;font-size:13px;text-align:center;margin:0;">Looking forward to hosting you at The Eco Ranch!</p>
                    </div>

                    <!-- Footer -->
                    <div style="background:#f2f2f2;padding:16px 32px;text-align:center;">
                        <p style="color:#aaa;font-size:12px;margin:0;">© ${new Date().getFullYear()} The Eco Ranch, Kanakapura. All rights reserved.</p>
                    </div>
                </div>
            `,
        };

        await transporter.sendMail(mailOptions);
        console.log(`Enquiry email sent to ${email}`);
        res.json({ success: true, message: 'Enquiry email sent successfully' });

    } catch (error) {
        console.error('Enquiry Email Error:', error);
        res.status(500).json({ success: false, error: 'Failed to send enquiry email' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
