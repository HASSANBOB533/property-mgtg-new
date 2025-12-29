import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    console.log('Received form submission:', data);
    
    // Submit to Google Apps Script (handles both emails and sheet saving)
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbwEWT7P1LsULEX-xaM1GpXuzLTHIx_vM4KNCgeo4F9e1JqkIccIQtDSPFPtA1UYXVwV/exec';
    
    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    const result = await response.text();
    console.log('Apps Script response:', result);
    
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
