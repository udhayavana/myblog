# Deploying to Vercel with Email Functionality

## Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **Email Service Setup**: Configure email credentials (see below)

## Email Configuration

### Option 1: SendGrid (Recommended for Vercel)
1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Create an API key in Settings > API Keys
3. Set environment variable: `SENDGRID_API_KEY`

### Option 2: Resend (Modern alternative)
1. Sign up at [resend.com](https://resend.com)
2. Get your API key from the dashboard
3. Set environment variable: `RESEND_API_KEY`

### Option 3: Gmail (Free but Limited)
1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password:
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" and "Other (custom name)"
   - Enter "Portfolio Contact Form"
   - Copy the 16-character password
4. Set environment variables: `EMAIL_USER` and `EMAIL_PASS`

## Vercel Deployment Steps

### 1. Install Vercel CLI
```bash
npm install -g vercel
```

### 2. Test Email Locally (Recommended)
```bash
# Create .env file with your credentials
cp .env.example .env
# Edit .env with your email credentials

# Test email functionality
node test-email.js
```

### 3. Deploy to Vercel
```bash
vercel
```

### 4. Configure Environment Variables
In your Vercel dashboard or using CLI:

For SendGrid:
```bash
vercel env add SENDGRID_API_KEY
```

For Resend:
```bash
vercel env add RESEND_API_KEY
```

For Gmail:
```bash
vercel env add EMAIL_USER
vercel env add EMAIL_PASS
```

### 5. Redeploy
```bash
vercel --prod
```

## API Route Details

- **Endpoint**: `/api/contact`
- **Method**: POST
- **Body**: `{ name, email, message }`
- **Response**: `{ success: boolean, message: string }`

## Troubleshooting

### Common Issues:

1. **"Authentication failed"**
   - For Gmail: Ensure you're using an App Password, not your regular password
   - For SendGrid/Resend: Check your API key is correct

2. **"Function timeout"**
   - Vercel Hobby plan has 10-second timeout
   - Upgrade to Pro plan for 15-second timeout
   - Use SendGrid or Resend for faster delivery

3. **"CORS errors"**
   - The API route includes CORS headers
   - Make sure you're calling from the same domain

4. **"ENOTFOUND" or connection errors**
   - Gmail SMTP may be blocked in some serverless environments
   - Switch to SendGrid or Resend

### Testing the API:

```bash
curl -X POST https://your-app.vercel.app/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Hello!"}'
```

### Local Testing:

```bash
# Test the email configuration
node test-email.js

# Test the API endpoint locally
npm run dev
# Then use curl or Postman to test http://localhost:5173/api/contact
```

## Security Considerations

- Never commit email credentials to Git
- Use environment variables for sensitive data
- Consider adding reCAPTCHA for spam protection
- Validate all input on both client and server side
- Use HTTPS only (Vercel provides this automatically)

## Performance Tips

- **SendGrid/Resend**: Faster and more reliable than Gmail SMTP
- **Connection pooling**: Already configured for serverless
- **Rate limiting**: Built into the API route
- **Error handling**: Comprehensive error messages for debugging

## Cost Considerations

- **Vercel Hobby Plan**: Free for personal projects
- **SendGrid**: 100 free emails/day, then $0.0009 per email
- **Resend**: 3,000 free emails/month, then $0.0002 per email
- **Gmail**: Free but limited (500 emails/day)

For production use, SendGrid or Resend provide better deliverability and higher limits.