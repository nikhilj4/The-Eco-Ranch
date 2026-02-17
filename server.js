
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

// Send Invoice Email API
app.post('/api/send-invoice', async (req, res) => {
    try {
        const { email, invoiceData, invoiceNumber } = req.body;

        const mailOptions = {
            from: `"The Eco Ranch" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: `Booking Confirmed - Invoice #${invoiceNumber}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
                    <h2 style="color: #6F8F72; text-align: center;">Booking Confirmation</h2>
                    <p>Dear Customer,</p>
                    <p>Thank you for choosing <strong>The Eco Ranch</strong>. Your booking has been successfully confirmed.</p>
                    
                    <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
                        <p><strong>Invoice Number:</strong> ${invoiceNumber}</p>
                        <p><strong>Date of Visit:</strong> ${invoiceData.date}</p>
                        <p><strong>Time:</strong> ${invoiceData.time}</p>
                        <p><strong>Total Amount:</strong> Rs ${invoiceData.amount}</p>
                    </div>

                    <p>We are excited to host you for your adventure!</p>
                    <p style="font-size: 12px; color: #888;">For any queries, contact us at +91 74118 89506.</p>
                </div>
            `,
        };

        await transporter.sendMail(mailOptions);
        console.log(`Email sent to ${email}`);
        res.json({ success: true, message: 'Email sent successfully' });

    } catch (error) {
        console.error('Email Error:', error);
        res.status(500).json({ success: false, error: 'Failed to send email' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
