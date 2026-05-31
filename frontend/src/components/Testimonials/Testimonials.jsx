import { useEffect, useState } from 'react';
import { fetchTestimonials } from '../../api';
import './Testimonials.css';

const fallback = [
  { _id: '1', name: 'Aniket Ahire', role: 'SDE, Mumbai', avatar: 'AA', quote: 'The RAG track was exactly what I needed. I shipped a production retrieval pipeline at work two weeks after the module.' },
  { _id: '2', name: 'Rohan Jadhav', role: 'Data Analyst, Pune', avatar: 'RJ', quote: 'Most AI courses in India stop at prompts. This one actually teaches evals, streaming and agent orchestration.' },
  { _id: '3', name: 'Rushikesh Rathod', role: 'Software Engineer, Hyderabad', avatar: 'RR', quote: 'Code reviews from a senior engineer were a game changer. My commits got noticeably cleaner in 6 weeks.' },
];

export default function Testimonials() {
  const [items, setItems] = useState(fallback);

  useEffect(() => {
    fetchTestimonials()
      .then((res) => { if (res.data?.data?.length) setItems(res.data.data); })
      .catch(() => {});
  }, []);

  return (
    <section className="testimonials">
      <div className="container">
        <p className="section-label">03 — From the cohort</p>
        <h2 className="testimonials__heading">Developers shipping real AI work.</h2>

        <div className="testimonials__grid">
          {items.map((t) => (
            <div key={t._id} className="testimonial-card">
              <p className="testimonial-card__quote">"{t.quote}"</p>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">{t.avatar || t.name.slice(0,2).toUpperCase()}</div>
                <div>
                  <p className="testimonial-card__name">{t.name}</p>
                  <p className="testimonial-card__role">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
