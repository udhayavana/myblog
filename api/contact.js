const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      });
    }

    // Log environment check
    console.log('EMAIL_USER exists:', !!process.env.EMAIL_USER);
    console.log('EMAIL_PASS exists:', !!process.env.EMAIL_PASS);

    // Create nodemailer transporter with more reliable settings
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      // Additional settings for serverless
      pool: true,
      maxConnections: 1,
      maxMessages: 5,
      rateDelta: 20000, // 20 seconds
      rateLimit: 5 // 5 emails per rateDelta
    });

    // Verify transporter configuration
    try {
      await transporter.verify();
      console.log('Transporter verified successfully');
    } catch (verifyError) {
      console.error('Transporter verification failed:', verifyError);
      return res.status(500).json({
        success: false,
        message: 'Email service configuration error'
      });
    }

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'udhayavanan.s89@gmail.com',
      subject: `Portfolio Contact: Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #06b6d4;">New Contact Form Message</h2>
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 4px; border-left: 4px solid #06b6d4;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #64748b; font-size: 14px;">
            This message was sent from your portfolio contact form.
          </p>
        </div>
      `,
      replyTo: email
    };

    // Send email with timeout
    const sendResult = await Promise.race([
      transporter.sendMail(mailOptions),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Email send timeout')), 8000)
      )
    ]);

    console.log(`Email sent successfully from ${name} (${email})`);
    console.log('Send result:', sendResult);

    // Close transporter connection
    transporter.close();

    res.status(200).json({
      success: true,
      message: 'Message sent successfully!'
    });

  } catch (error) {
    console.error('Error sending email:', error.message);
    console.error('Error stack:', error.stack);

    // More specific error messages
    let errorMessage = 'Failed to send message. Please try again later.';

    if (error.message.includes('Authentication failed')) {
      errorMessage = 'Email authentication failed. Please check credentials.';
    } else if (error.message.includes('timeout')) {
      errorMessage = 'Email service timeout. Please try again.';
    } else if (error.message.includes('ENOTFOUND')) {
      errorMessage = 'Email service unavailable. Please try again later.';
    }

    res.status(500).json({
      success: false,
      message: errorMessage
    });
  }
}