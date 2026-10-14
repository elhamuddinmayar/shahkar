export const company = {
  name: 'Shahkar Software Solution',
  tagline: 'Software shaped around your business.',
  location: 'Afghanistan',
  email: '',
  phones: ['0794583734', '0748036107', '0748451797'],
  socials: [],
}

// 0794583734 -> display "079 458 3734", link "tel:+93794583734"
export const formatPhone = phone => phone.replace(/^(\d{3})(\d{3})(\d{4})$/, '$1 $2 $3')
const international = phone => `93${phone.replace(/^0/, '')}`
export const phoneLink = phone => `tel:+${international(phone)}`
// Opens a WhatsApp chat with this number, with an optional pre-filled message
export const whatsappLink = (phone, message = '') => `https://wa.me/${international(phone)}${message ? `?text=${encodeURIComponent(message)}` : ''}`
