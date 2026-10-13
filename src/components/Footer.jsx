import { Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="contact-strip" id="contact">
      <div className="container-page contact-grid">
        <h2>Let&apos;s Connect</h2>
        <a href="mailto:Parshvigandhi28@gmail.com"><Mail size={20} aria-hidden="true" />Parshvigandhi28@Gmail.Com</a>
        <a href="tel:+918827145468"><Phone size={20} aria-hidden="true" />88271-45468</a>
        <span><MapPin size={20} aria-hidden="true" />Indore</span>
        <a className="footer-name" href="/#top">Parshvi Gandhi</a>
      </div>
    </footer>
  )
}
