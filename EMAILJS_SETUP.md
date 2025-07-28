# EmailJS Setup Guide for Contact Form

This guide will help you set up EmailJS to make your contact form functional.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Set up Email Service

1. In your EmailJS dashboard, click on "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. **Important**: Copy your **Service ID** - you'll need this later

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. **Important**: Copy your **Template ID** - you'll need this later

## Step 4: Get Your Public Key

1. Go to "Account" > "General"
2. Find your **Public Key** in the API Keys section
3. **Important**: Copy your **Public Key** - you'll need this later

## Step 5: Update Configuration

Open `src/services/emailService.js` and replace the placeholder values:

```javascript
const EMAILJS_SERVICE_ID = "your_service_id_here"; // Replace with your Service ID
const EMAILJS_TEMPLATE_ID = "your_template_id_here"; // Replace with your Template ID
const EMAILJS_PUBLIC_KEY = "your_public_key_here"; // Replace with your Public Key
```

## Step 6: Test Your Contact Form

1. Start your development server: `npm start`
2. Navigate to your contact form
3. Fill out the form and submit
4. Check your email inbox for the message

## Template Variables Available

The following variables are sent to your email template:

- `{{from_name}}` - The sender's name from the form
- `{{from_email}}` - The sender's email address from the form
- `{{message}}` - The message content from the form
- `{{to_email}}` - Your email address (rumeshth20@gmail.com)

## Troubleshooting

### Common Issues:

1. **"User ID is required"** - Make sure you've set the correct Public Key
2. **"Service is not found"** - Check your Service ID
3. **"Template is not found"** - Check your Template ID
4. **Emails not received** - Check spam folder, verify email service setup

### Testing:

- Open browser developer tools (F12) to see any error messages
- Check the Network tab to see if requests are being sent
- Verify all IDs are correctly copied (no extra spaces)

## Security Notes

- EmailJS public keys are safe to expose in frontend code
- Your email service credentials are kept secure on EmailJS servers
- Consider implementing rate limiting in production to prevent spam

## Free Plan Limits

- 200 emails per month
- EmailJS branding in emails
- Basic support

For higher volumes, consider upgrading to a paid plan.

## Alternative Email Template (More Professional)

```
Subject: Portfolio Contact: {{from_name}}

Dear Rumesh,

You have received a new message through your portfolio contact form.

Sender Details:
- Name: {{from_name}}
- Email: {{from_email}}

Message:
{{message}}

---
Sent via Portfolio Contact Form
```

Save this guide and follow the steps to make your contact form fully functional!
