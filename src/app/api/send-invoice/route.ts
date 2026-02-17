import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { email, invoiceData, invoiceNumber } = await req.json();

        // Check if environment variables are set
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            console.error('Missing email credentials');
            return NextResponse.json({ success: false, error: 'Server configuration error' }, { status: 500 });
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail', // Or relevant service
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Email content
        const mailOptions = {
            from: `"The Eco Ranch" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: `Booking Confirmed - Invoice #${invoiceNumber}`,
            text: `Thank you for booking with The Eco Ranch! Your booking (Invoice #${invoiceNumber}) has been confirmed. Please find attached your invoice details.\n\nWe look forward to seeing you soon!`,
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
                    <p style="font-size: 12px; color: #888;">For any queries, contact us at +91 95914 27954.</p>
                </div>
            `,
            // Ideally passing the PDF attachment here would be best, but generating it on server
            // requires moving the jsPDF logic to server or sending the blob. 
            // For now, we will just send the confirmation text.
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
    }
}
