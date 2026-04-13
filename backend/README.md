# MyBlog Backend - Email Service

This backend provides email functionality for the contact form using Node.js, Express, and Nodemailer.

## Setup Instructions

### 1. Environment Configuration

Create a `.env` file in the backend directory with your email credentials:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
PORT=3001
```

### 2. Gmail Setup (Required)

Since emails are sent to `udhayavanan.s89@gmail.com`, you need to configure Gmail SMTP:

#### For Gmail:
1. Go to your Google Account settings
2. Enable 2-Factor Authentication
3. Generate an App Password:
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" and "Other (custom name)"
   - Enter "Portfolio Contact Form" as the name
   - Copy the 16-character password
4. Use your Gmail address as `EMAIL_USER` and the app password as `EMAIL_PASS`

**Important:** Never use your regular Gmail password. Always use an App Password for security.

### 3. Running the Backend

```bash
# Install dependencies
npm install

# Start the server
npm start

# For development with auto-restart
npm run dev
```

The server will run on `http://localhost:3001`

### 4. API Endpoints

- `POST /api/contact` - Send contact form email
- `GET /api/health` - Health check

### 5. Rate Limiting

The contact form is rate-limited to 5 submissions per 15 minutes per IP address to prevent spam.

### 6. Email Template

The emails are sent with a professional HTML template including:
- Sender's name and email
- Message content
- Styled layout matching the portfolio theme

## Security Notes

- Input validation for all form fields
- CORS enabled for frontend communication
- Rate limiting to prevent abuse
- Email validation using regex
- Error handling with appropriate HTTP status codes

## Troubleshooting

1. **"Authentication failed"**: Check your Gmail credentials and app password
2. **"Too many requests"**: Rate limit exceeded, wait 15 minutes
3. **"Network error"**: Ensure backend server is running on port 3001
4. **Emails not received**: Check spam folder and Gmail settings