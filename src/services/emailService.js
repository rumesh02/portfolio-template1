import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_ymtk20z'; // Replace with your EmailJS service ID
const EMAILJS_TEMPLATE_ID = 'template_8t1o7sm'; // Replace with your EmailJS template ID
const EMAILJS_PUBLIC_KEY = 'Hxjp4uKPZdDPrBejq'; // Replace with your EmailJS public key

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export const sendEmail = async (formData) => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: 'rumeshth20@gmail.com', // Your email address
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    return { success: true, response };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, error };
  }
};
