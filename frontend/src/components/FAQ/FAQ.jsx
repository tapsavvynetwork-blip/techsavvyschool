import { useEffect, useState } from 'react';
import { fetchFAQs } from '../../api';
import './FAQ.css';

const fallback = [
  { _id: '1', question: 'What does the curriculum cover?', answer: 'A blended curriculum covering full-stack development, AI foundations, machine learning workflows, LangChain, RAG, and production-ready deployment practices.' },
  { _id: '2', question: 'Do I need prior AI / ML experience?', answer: 'No. The course starts with Python and data science basics, then builds up to applied AI engineering for modern web apps.' },
  { _id: '3', question: 'How are the AI projects structured?', answer: 'Projects are built around real-world use cases with hands-on labs, mentor reviews, and incremental milestones to reinforce both code and model design.' },
  { _id: '4', question: 'Can I customize the learning path?', answer: 'Yes. We offer flexible track guidance, and our curriculum adapts to your goals across full-stack and AI career paths.' },
  { _id: '5', question: 'What support is included for job readiness?', answer: 'You get portfolio-ready project reviews, mock interviews, resume feedback, and access to our network of AI and software hiring partners.' },
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
