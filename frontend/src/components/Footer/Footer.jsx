import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">TSN EDUCATION</span>
          <p className="footer__tagline">Built for Indian developers. Made in India.</p>
        </div>

        <div className="footer__links">
          <a href="#curriculum">Curriculum</a>
          <a href="#mentor">Mentor</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#" aria-label="LinkedIn">LinkedIn</a>
          <a href="#" aria-label="YouTube">YouTube</a>
        </div>

        <p className="footer__copy">© 2026 TSN Education Pvt Ltd</p>
      </div>
    </footer>
  );
}
