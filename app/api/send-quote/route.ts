import { NextResponse } from 'next/server';
import { SESClient, SendRawEmailCommand } from "@aws-sdk/client-ses";

// Create SES client
const ses = new SESClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function POST(request: Request) {
  try {
    // Check if AWS credentials are set
    if (!process.env.AWS_ACCESS_KEY_ID || !process.env.AWS_SECRET_ACCESS_KEY || !process.env.AWS_REGION) {
      console.error('AWS credentials are not set');
      return NextResponse.json(
        { error: 'Email configuration is not set up correctly' },
        { status: 500 }
      );
    }

    const { pdfBase64, userDetails } = await request.json();

    if (!pdfBase64 || !userDetails) {
      return NextResponse.json(
        { error: 'Missing required data' },
        { status: 400 }
      );
    }

    const pdfBuffer = Buffer.from(pdfBase64.split(',')[1], 'base64');

    // Create raw email with proper MIME structure
    const rawEmail = Buffer.concat([
      Buffer.from(
        `From: Texam Confection <contact@douq.ma>
To: texamcontact@gmail.com, marouaneamqor@gmail.com
Subject: Nouveau devis de ${userDetails.name}
MIME-Version: 1.0
Content-Type: multipart/mixed; boundary="boundary"

--boundary
Content-Type: text/plain; charset=UTF-8

Nouveau devis reçu de:
Nom: ${userDetails.name}
Email: ${userDetails.email}
Téléphone: ${userDetails.phone}

--boundary
Content-Type: application/pdf
Content-Disposition: attachment; filename="devis-texam.pdf"
Content-Transfer-Encoding: base64

`
      ),
      pdfBuffer,
      Buffer.from('\n--boundary--')
    ]);

    try {
      const command = new SendRawEmailCommand({
        RawMessage: { Data: rawEmail }
      });
      const response = await ses.send(command);
      console.log('Email sent successfully:', response);
      return NextResponse.json({ success: true });
    } catch (error) {
      console.error('Error sending email:', error);
      return NextResponse.json(
        { error: 'Failed to send email', details: error instanceof Error ? error.message : 'Unknown error' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error in /api/send-quote:', error);
    return NextResponse.json(
      { error: 'Failed to send email', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
} 