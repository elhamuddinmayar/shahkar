import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG } from '../data/emailjs'

export async function sendNewsletterSignup(email) {
  return emailjs.send(
    EMAILJS_CONFIG.SERVICE_ID,
    EMAILJS_CONFIG.NEWSLETTER_TEMPLATE_ID,
    {
      from_name: 'Newsletter signup',
      from_email: email,
      subject: 'New newsletter subscriber',
      message: `${email} subscribed to the Shahkar newsletter.`,
      to_email: EMAILJS_CONFIG.TO_EMAIL,
    },
    { publicKey: EMAILJS_CONFIG.PUBLIC_KEY }
  )
}
