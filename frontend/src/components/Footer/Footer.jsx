import './Footer.css';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();

  const handleFooterClick = (event, target) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setTimeout(() => {
      if (target.startsWith('#')) {
        window.location.hash = target;
      } else if (target) {
        navigate(target);
      }
    }, 250);
  };

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">Tech Savvy School</span>
          <p className="footer__tagline">Built for Indian developers. Made in India.</p>
        </div>

        <div className="footer__links">
          <a href="#curriculum" onClick={(e) => handleFooterClick(e, '#curriculum')}>Curriculum</a>
          <a href="#mentor" onClick={(e) => handleFooterClick(e, '#mentor')}>Mentor</a>
          <a href="#pricing" onClick={(e) => handleFooterClick(e, '#pricing')}>Pricing</a>
          <a href="#faq" onClick={(e) => handleFooterClick(e, '#faq')}>FAQ</a>
          <a href="/privacy" onClick={(e) => handleFooterClick(e, '/privacy')}>Privacy</a>
          <a href="#" onClick={(e) => e.preventDefault()}>Terms</a>
          <a href="#" aria-label="LinkedIn" onClick={(e) => e.preventDefault()}>LinkedIn</a>
          <a href="#" aria-label="YouTube" onClick={(e) => e.preventDefault()}>YouTube</a>
        </div>

        <p className="footer__copy">© 2026 Tech Savvy School Pvt Ltd</p>
      </div>
    </footer>
  );
}
