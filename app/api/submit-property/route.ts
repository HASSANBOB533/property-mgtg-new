import { NextRequest, NextResponse } from 'next/server';

const SHEET_ID = '1d8Kd2amfSsmOeNUWWd3mmSLYLO00gb0GGAQYYuCNoYs';
const ADMIN_EMAIL = 'Cs@bestofbedz.com';
const BRAND_BLUE = '#2F63AD';
const BRAND_YELLOW = '#F9DE6A';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    console.log('Received form submission:', data);
    
    // Send emails using Resend API (free tier: 100 emails/day)
    const emailPromises = [];
    
    // Admin email
    const adminEmailHtml = generateAdminEmail(data);
    emailPromises.push(
      sendEmail({
        to: ADMIN_EMAIL,
        subject: `🏠 New Property Listing: ${data.propertyName || 'Unnamed Property'}`,
        html: adminEmailHtml,
      })
    );
    
    // Owner confirmation email
    if (data.ownerEmail) {
      const ownerEmailHtml = generateOwnerEmail(data);
      emailPromises.push(
        sendEmail({
          to: data.ownerEmail,
          subject: 'Thank you for listing your property with Best of Bedz! 🏠',
          html: ownerEmailHtml,
        })
      );
    }
    
    // Send both emails
    await Promise.all(emailPromises);
    
    // Save to Google Sheets
    await saveToGoogleSheets(data);
    
    return NextResponse.json({ 
      status: 'success', 
      message: 'Form submitted successfully' 
    });
    
  } catch (error: any) {
    console.error('Error processing form:', error);
    return NextResponse.json(
      { status: 'error', message: error.message },
      { status: 500 }
    );
  }
}

async function sendEmail({ to, subject, html }: { to: string; subject: string; html: string }) {
  // Using Gmail SMTP via nodemailer would require credentials
  // Instead, we'll use a simple fetch to the Google Apps Script
  // But this time we'll call it from the server side with proper error handling
  
  const scriptUrl = 'https://script.google.com/macros/s/AKfycbxak0I1ZanvfDuKX3r8Jp1sSR1Iel7TnO7bFhA7eEIUOm7EoiJF9lK_9hv4ueHnjWrJ/exec';
  
  try {
    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: 'email',
        to,
        subject,
        html,
      }),
    });
    
    const result = await response.text();
    console.log('Email sent:', result);
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}

async function saveToGoogleSheets(data: any) {
  const scriptUrl = 'https://script.google.com/macros/s/AKfycbxak0I1ZanvfDuKX3r8Jp1sSR1Iel7TnO7bFhA7eEIUOm7EoiJF9lK_9hv4ueHnjWrJ/exec';
  
  try {
    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    const result = await response.text();
    console.log('Saved to Google Sheets:', result);
  } catch (error) {
    console.error('Error saving to Google Sheets:', error);
    throw error;
  }
}

function generateAdminEmail(data: any): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: ${BRAND_BLUE}; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background-color: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
        .section { background-color: white; padding: 15px; margin-bottom: 15px; border-radius: 5px; border-left: 4px solid ${BRAND_YELLOW}; }
        .label { font-weight: bold; color: ${BRAND_BLUE}; }
        .highlight { background-color: ${BRAND_YELLOW}; padding: 2px 6px; border-radius: 3px; }
        .button { display: inline-block; background-color: ${BRAND_BLUE}; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold; margin-top: 10px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🏠 New Property Listing</h1>
        </div>
        <div class="content">
          <div class="section">
            <h2>Property Information</h2>
            <p><span class="label">Property Name:</span> <span class="highlight">${data.propertyName || 'N/A'}</span></p>
            <p><span class="label">Property Type:</span> ${data.propertyType || 'N/A'}</p>
            <p><span class="label">Location:</span> ${data.location || 'N/A'}</p>
            <p><span class="label">Address:</span> ${data.address || 'N/A'}</p>
          </div>
          
          <div class="section">
            <h2>Owner Information</h2>
            <p><span class="label">Name:</span> ${data.ownerName || 'N/A'}</p>
            <p><span class="label">Email:</span> <a href="mailto:${data.ownerEmail}">${data.ownerEmail || 'N/A'}</a></p>
            <p><span class="label">Phone:</span> ${data.ownerPhone || 'N/A'}</p>
          </div>
          
          <div class="section">
            <h2>Property Details</h2>
            <p><span class="label">Bedrooms:</span> ${data.bedrooms || 'N/A'}</p>
            <p><span class="label">Bathrooms:</span> ${data.bathrooms || 'N/A'}</p>
            <p><span class="label">Size:</span> ${data.size || 'N/A'} sqm</p>
            <p><span class="label">Furnished:</span> ${data.furnished || 'N/A'}</p>
          </div>
          
          <div class="section">
            <h2>Services Selected</h2>
            <p><span class="label">Property Management:</span> ${data.propertyManagement ? '✅ Yes' : '❌ No'}</p>
            <p><span class="label">Design & Renovation:</span> ${data.designRenovation ? '✅ Yes' : '❌ No'}</p>
            <p><span class="label">Home Care:</span> ${data.homeCare ? '✅ Yes' : '❌ No'}</p>
          </div>
          
          <div class="section">
            <h2>Additional Information</h2>
            <p><span class="label">Description:</span><br>${data.description || 'N/A'}</p>
            <p><span class="label">Special Requirements:</span><br>${data.specialRequirements || 'N/A'}</p>
          </div>
          
          <div class="section" style="background-color: #e8f4f8; border-left: 4px solid ${BRAND_BLUE}; text-align: center;">
            <h2>📊 Quick Actions</h2>
            <a href="https://docs.google.com/spreadsheets/d/${SHEET_ID}" class="button">📋 View All Submissions in Google Sheets</a>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
}

function generateOwnerEmail(data: any): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: ${BRAND_BLUE}; color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background-color: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
        .message { background-color: white; padding: 20px; margin-bottom: 20px; border-radius: 5px; }
        .steps { background-color: white; padding: 20px; border-radius: 5px; }
        .step { margin-bottom: 15px; padding-left: 30px; position: relative; }
        .step-number { position: absolute; left: 0; top: 0; background-color: ${BRAND_YELLOW}; color: ${BRAND_BLUE}; width: 25px; height: 25px; border-radius: 50%; text-align: center; line-height: 25px; font-weight: bold; }
        .highlight { color: ${BRAND_BLUE}; font-weight: bold; }
        .footer { text-align: center; margin-top: 20px; color: #666; font-size: 14px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🏠 Thank You!</h1>
          <p style="font-size: 18px; margin: 10px 0 0 0;">Your property has been successfully listed</p>
        </div>
        <div class="content">
          <div class="message">
            <p>Dear <span class="highlight">${data.ownerName || 'Property Owner'}</span>,</p>
            <p>Thank you for choosing <strong>Best of Bedz</strong> for your property management needs!</p>
            <p>We have received your listing for <span class="highlight">${data.propertyName || 'your property'}</span> and our team will review it shortly.</p>
          </div>
          
          <div class="steps">
            <h2 style="color: ${BRAND_BLUE}; margin-bottom: 20px;">What happens next?</h2>
            
            <div class="step">
              <div class="step-number">1</div>
              <strong>Review</strong><br>
              Our team will carefully review your property details
            </div>
            
            <div class="step">
              <div class="step-number">2</div>
              <strong>Contact</strong><br>
              We'll contact you within 24-48 hours to discuss next steps
            </div>
            
            <div class="step">
              <div class="step-number">3</div>
              <strong>Site Visit</strong><br>
              We'll schedule a property inspection at your convenience
            </div>
            
            <div class="step">
              <div class="step-number">4</div>
              <strong>Get Started</strong><br>
              Begin your journey with Best of Bedz property management
            </div>
          </div>
          
          <div class="message" style="margin-top: 20px; background-color: #fff9e6; border-left: 4px solid ${BRAND_YELLOW};">
            <p><strong>Need immediate assistance?</strong></p>
            <p>📧 Email: <a href="mailto:${ADMIN_EMAIL}">${ADMIN_EMAIL}</a></p>
            <p>🌐 Website: <a href="https://property-mgtg-new.vercel.app">property-mgtg-new.vercel.app</a></p>
          </div>
          
          <div class="footer">
            <p>Best of Bedz - Your Trusted Property Management Partner</p>
            <p style="font-size: 12px; color: #999;">This is an automated confirmation email</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
}
