// EmailJS configuration
// --------------------------------------------------------------
// 1. Go to https://dashboard.emailjs.com/admin
// 2. Email Services -> copy your Service ID into SERVICE_ID below
// 3. Email Templates -> copy your Template ID into TEMPLATE_ID below
//    (create a separate, simpler template for the newsletter forms
//    if you want, or reuse the same one)
// 4. Account -> General -> copy your Public Key into PUBLIC_KEY below
// 5. In the Template itself, set "To Email" to elhamuddinmayar@gmail.com
//    and set "Reply To" to {{from_email}} so you can hit reply and
//    respond straight to the visitor.
// --------------------------------------------------------------

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_dpz9chm',
  TEMPLATE_ID: 'template_tcm6wmd',
  NEWSLETTER_TEMPLATE_ID: 'template_your_newsletter_id', // can reuse TEMPLATE_ID if you don't make a separate one
  PUBLIC_KEY: 'sEagqVifHbizZNJt9',
  TO_EMAIL: 'elhamuddinmayar@gmail.com',
}
