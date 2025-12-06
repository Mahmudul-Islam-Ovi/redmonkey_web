import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const { name, email, phone, projectType, message } = await request.json();

    // Validation
    if (!name || !email || !phone || !projectType || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Phone validation
    const phoneRegex = /^[0-9]{11}$/;
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { error: 'Invalid phone number. Please enter a valid 11-digit number.' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f4f4;">
          <div style="background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #ea580c; margin-bottom: 20px; border-bottom: 3px solid #ea580c; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #333; margin-bottom: 5px; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">
                Name
              </h3>
              <p style="color: #555; margin: 0; font-size: 16px; padding: 10px; background-color: #f9f9f9; border-left: 3px solid #ea580c;">
                ${name}
              </p>
            </div>

            <div style="margin-bottom: 20px;">
              <h3 style="color: #333; margin-bottom: 5px; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">
                Email
              </h3>
              <p style="color: #555; margin: 0; font-size: 16px; padding: 10px; background-color: #f9f9f9; border-left: 3px solid #ea580c;">
                <a href="mailto:${email}" style="color: #ea580c; text-decoration: none;">${email}</a>
              </p>
            </div>

            <div style="margin-bottom: 20px;">
              <h3 style="color: #333; margin-bottom: 5px; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">
                Phone
              </h3>
              <p style="color: #555; margin: 0; font-size: 16px; padding: 10px; background-color: #f9f9f9; border-left: 3px solid #ea580c;">
                <a href="tel:${phone}" style="color: #ea580c; text-decoration: none;">${phone}</a>
              </p>
            </div>

            <div style="margin-bottom: 20px;">
              <h3 style="color: #333; margin-bottom: 5px; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">
                Project Type
              </h3>
              <p style="color: #555; margin: 0; font-size: 16px; padding: 10px; background-color: #f9f9f9; border-left: 3px solid #ea580c;">
                ${projectType}
              </p>
            </div>

            <div style="margin-bottom: 20px;">
              <h3 style="color: #333; margin-bottom: 5px; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">
                Message
              </h3>
              <p style="color: #555; margin: 0; font-size: 16px; padding: 15px; background-color: #f9f9f9; border-left: 3px solid #ea580c; line-height: 1.6; white-space: pre-wrap;">
                ${message}
              </p>
            </div>

            <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 30px 0;">

            <p style="color: #999; font-size: 12px; margin: 0; text-align: center;">
              This message was sent from the Red Monkey contact form
            </p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone}
Project Type: ${projectType}

Message:
${message}

---
This message was sent from the Red Monkey contact form
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
