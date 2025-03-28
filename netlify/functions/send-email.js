const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
require('dotenv').config();

exports.handler = async function(event, context) {
  // Set CORS headers for preflight requests
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  // Handle preflight OPTIONS request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }
  
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return { 
      statusCode: 405, 
      headers,
      body: JSON.stringify({ message: 'Method Not Allowed' })
    };
  }

  // Parse the request body
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

  // Extract form data
  const { name, email, phone, message } = data;

  // Validate required fields
  if (!name || !email || !message) {
    return { 
      statusCode: 400, 
      headers,
      body: JSON.stringify({ message: 'Missing required fields' })
    };
  }

  // Log environment variables (redacted for security)
  console.log('Using MAILGUN_API_KEY:', process.env.MAILGUN_API_KEY ? 'Key exists' : 'Key missing');
  console.log('Using MAILGUN_DOMAIN:', process.env.MAILGUN_DOMAIN);
  
  try {
    // Initialize Mailgun client
    console.log('Setting up Mailgun client...');
    const mg = mailgun.client({
      username: 'api',
      key: process.env.MAILGUN_API_KEY
    });

    // Configure email content
    console.log('Preparing email content...');
    const emailData = {
      from: `Portfolio Contact <mailgun@${process.env.MAILGUN_DOMAIN}>`,
      to: process.env.TO_EMAIL || 'celinecongling@hotmail.com',
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
      'h:Reply-To': email
    };

    // Send email
    console.log('Sending email via Mailgun...');
    const response = await mg.messages.create(process.env.MAILGUN_DOMAIN, emailData);
    console.log('Email sent successfully:', response.id);
    
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        message: "Email sent successfully",
        id: response.id
      })
    };
  } catch (error) {
    console.error('Error sending email:', error);
    console.error('Error details:', error.message);
    
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