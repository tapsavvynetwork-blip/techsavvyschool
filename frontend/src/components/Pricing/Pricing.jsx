import { useState } from 'react';
import { submitEnrollment } from '../../api';
import './Pricing.css';

const plans = [
  {
    id: 'self-paced',
    name: 'Full Stack & AI Foundation',
    price: '₹14,999',
    period: '',
    features: ['Lifetime access to recordings', 'Project templates', 'Community Discord access', 'Certificate on completion'],
    cta: 'Start Learning',
    popular: false,
  },
  {
    id: 'cohort',
    name: 'Full Stack & AI Professional',
    price: '₹24,999',
    period: '',
    features: ['Live weekly studio sessions', '1:1 code reviews from senior mentor', 'Capstone project + portfolio review', 'Career & interview prep', 'Everything in Self-Paced'],
    cta: 'Join Advanced Cohort',
    popular: true,
  },
];

export default function Pricing() {
  const [modal, setModal] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', phone: '', city: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const openModal = (planId) => { setModal(planId); setStatus('idle'); };
  const closeModal = () => { setModal(null); setForm({ name: '', email: '', phone: '', city: '' }); };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await submitEnrollment({ ...form, plan: modal });
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="pricing">
      <div className="container">
        <p className="section-label">04 — Pricing</p>
        <h2 className="pricing__heading">Investment in your AI career.</h2>
        <p className="pricing__sub">EMI available.</p>

        <div className="pricing__grid">
          {plans.map((p) => (
            <div key={p.id} className={`plan-card ${p.popular ? 'plan-card--popular' : ''}`}>
              {p.popular && <span className="plan-card__badge">Most popular</span>}
              <h3 className="plan-card__name">{p.name}</h3>
              <div className="plan-card__price">
                <span className="plan-card__amount">{p.price}</span>
                <span className="plan-card__period">{p.period}</span>
              </div>
              <ul className="plan-card__features">
                {p.features.map((f) => (
                  <li key={f}><span className="plan-card__check">✓</span>{f}</li>
                ))}
              </ul>
              <button
                className={p.popular ? 'btn-primary plan-card__btn' : 'btn-outline plan-card__btn'}
                onClick={() => openModal(p.id)}
              >
                {p.cta}
              </button>
            </div>
          ))}
        </div>
      </div>

      {modal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal__close" onClick={closeModal}>✕</button>
            {status === 'success' ? (
              <div className="modal__success">
                <span className="modal__success-icon">✓</span>
                <h3>You're on the list!</h3>
                <p>We'll reach out to confirm your spot shortly.</p>
              </div>
            ) : (
              <>
                <h3 className="modal__title">Apply — {plans.find((p) => p.id === modal)?.name}</h3>
                <form className="modal__form" onSubmit={handleSubmit}>
                  {['name', 'email', 'phone', 'city'].map((field) => (
                    <div key={field} className="modal__field">
                      <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                      <input
                        type={field === 'email' ? 'email' : 'text'}
                        name={field}
                        value={form[field]}
                        onChange={handleChange}
                        required={field !== 'city'}
                        placeholder={field === 'city' ? 'City (optional)' : ''}
                      />
                    </div>
                  ))}
                  {status === 'error' && <p className="modal__error">Something went wrong. Try again.</p>}
                  <button type="submit" className="btn-primary modal__submit" disabled={status === 'loading'}>
                    {status === 'loading' ? 'Submitting…' : 'Submit Application'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
