import { useEffect, useState } from 'react';
import { fetchFAQs } from '../../api';
import './FAQ.css';

const fallback = [
  { _id: '1', question: 'Who is this programme for?', answer: 'Working software engineers and serious CS students in India who want to move into AI engineering.' },
  { _id: '2', question: 'Do I need prior AI / ML experience?', answer: 'No. We start from Python and Data Science and build up to LangChain, RAG and Gen AI.' },
  { _id: '3', question: 'What are the live session timings?', answer: 'Live cohort sessions run on weekday evenings IST, with recordings posted within 24 hours.' },
  { _id: '4', question: 'Is there a placement guarantee?', answer: 'No empty guarantees. What you get is real portfolio projects, 1:1 mentor reviews, mock interviews and a referral network.' },
  { _id: '5', question: 'Can my company sponsor me?', answer: 'Yes — we provide GST invoices, and our Team tier supports private cohorts with custom curriculum.' },
];

export default function FAQ() {
  const [items, setItems] = useState(fallback);
  const [open, setOpen] = useState(null);

  useEffect(() => {
    fetchFAQs()
      .then((res) => { if (res.data?.data?.length) setItems(res.data.data); })
      .catch(() => {});
  }, []);

  const toggle = (id) => setOpen(open === id ? null : id);

  return (
    <section id="faq">
      <div className="container faq__container">
        <p className="section-label">05 — FAQ</p>
        <h2 className="faq__heading">Questions, answered straight.</h2>

        <div className="faq__list">
          {items.map((f) => (
            <div key={f._id} className={`faq-item ${open === f._id ? 'faq-item--open' : ''}`}>
              <button className="faq-item__question" onClick={() => toggle(f._id)}>
                <span>{f.question}</span>
                <span className="faq-item__icon">{open === f._id ? '−' : '+'}</span>
              </button>
              <div className="faq-item__answer">
                <p>{f.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
