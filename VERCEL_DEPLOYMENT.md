# Deploying to Vercel with Email Functionality

## Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **Email Service Setup**: Configure email credentials (see below)

## Email Configuration

### Option 1: Gmail (Free but Limited)
1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password:
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" and "Other (custom name)"
   - Enter "Portfolio Contact Form"
   - Copy the 16-character password

### Option 2: Professional Email Service (Recommended)
For production, use services like:
- **SendGrid** (Free tier: 100 emails/day)
- **Mailgun** (Free tier: 5,000 emails/month)
- **Resend** (Free tier: 3,000 emails/month)

## Vercel Deployment Steps

### 1. Install Vercel CLI
```bash
npm install -g vercel
```

### 2. Deploy to Vercel
```bash
vercel
```

### 3. Configure Environment Variables
In your Vercel dashboard or using CLI:

```bash
vercel env add EMAIL_USER
vercel env add EMAIL_PASS
```

For Gmail:
- `EMAIL_USER`: your-gmail@gmail.com
- `EMAIL_PASS`: your-16-character-app-password

For other services, follow their SMTP configuration.

### 4. Redeploy
```bash
vercel --prod
```

## API Route Details

- **Endpoint**: `/api/contact`
- **Method**: POST
- **Body**: `{ name, email, message }`
- **Response**: `{ success: boolean, message: string }`

## Rate Limiting

Vercel doesn't have built-in rate limiting for serverless functions. Consider adding:
- Custom rate limiting logic
- External services like Upstash Rate Limit
- Or use a service like Vercel Edge Functions with rate limiting

## Troubleshooting

### Common Issues:

1. **"Authentication failed"**
   - Check your email credentials
   - For Gmail, ensure you're using an App Password, not your regular password

2. **"CORS errors"**
   - The API route includes CORS headers
   - Make sure you're calling from the same domain

3. **"Function timeout"**
   - Email sending might take time; Vercel has a 10-second timeout for Hobby plan
   - Consider upgrading to Pro plan for longer timeouts

4. **"Too many requests"**
   - Gmail has sending limits (500/day)
   - Consider using a dedicated email service

### Testing the API:

```bash
curl -X POST https://your-app.vercel.app/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Hello!"}'
```

## Security Considerations

- Never commit email credentials to Git
- Use environment variables for sensitive data
- Consider adding reCAPTCHA for spam protection
- Validate all input on both client and server side
- Use HTTPS only (Vercel provides this automatically)

## Cost Considerations

- **Vercel Hobby Plan**: Free for personal projects
- **Email Services**: Most have generous free tiers
- **Gmail**: Free but limited (500 emails/day, potential deliverability issues)

For production use, consider paid email services for better deliverability and higher limits.