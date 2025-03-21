const nodemailer = require('nodemailer');
require('dotenv').config();

exports.handler = async function(event, context) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }
  
  if (event.httpMethod !== 'POST') {
    return { 
      statusCode: 405, 
      headers,
      body: JSON.stringify({ message: 'Method Not Allowed' })
    };
  }

  let data;
  try {
    data = JSON.parse(event.body);
  } catch (error) {
    return { 
      statusCode: 400, 
      headers,
      body: JSON.stringify({ message: 'Invalid JSON', error: error.message })
    };
  }

  const { name, email, phone, message } = data;

  if (!name || !email || !message) {
    return { 
      statusCode: 400, 
      headers,
      body: JSON.stringify({ message: 'Missing required fields' })
    };
  }

  // Log credentials being used (redacted for security)
  console.log('Using EMAIL_USER:', process.env.EMAIL_USER?.substring(0, 3) + '...');
  console.log('EMAIL_PASSWORD exists:', !!process.env.EMAIL_PASSWORD);

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
    debug: true
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'congling00369@gmail.com', 
    subject: `Portfolio Contact: ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
        <h2 style="color: #044BD9; border-bottom: 1px solid #e0e0e0; padding-bottom: 10px;">New Message from Your Portfolio</h2>
        
        <div style="margin: 20px 0;">
          <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
          <p style="margin: 5px 0;"><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        </div>
        
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 20px;">
          <h3 style="margin-top: 0; color: #333;">Message:</h3>
          <p style="white-space: pre-wrap;">${message.replace(/\n/g, '<br>')}</p>
        </div>
        
        <p style="font-size: 12px; color: #999; margin-top: 30px; text-align: center;">
          This email was sent from your portfolio contact form.
        </p>
      </div>
    `,
    replyTo: email,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: "Email sent successfully" })
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        message: "Error sending email", 
        error: error.message,
        stack: error.stack
      })
    };
  }
};