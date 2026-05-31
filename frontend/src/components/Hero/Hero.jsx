import './Hero.css';

const tags = ['Programming Foundations', 'JavaScript', 'React', 'Backend', 'AI Powered Development', 'LangChain', 'RAG', 'And more...'];

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg-grid" aria-hidden="true" />
      <div className="container hero__inner">
        <p className="hero__eyebrow">Next cohort opens · Live in India</p>

        <h1 className="hero__headline">
          Master <br />Web Development & AI,<br />
          <span className="hero__headline--accent">RAG & LangChain</span><br />
        </h1>

        <p className="hero__sub">
          A 20-week live online program for Indian developers. Build real-world projects, get code reviews from senior mentors, and launch your career in web development and AI.
        </p>

        <div className="hero__actions">
          <a href="#curriculum" className="btn-primary">View Curriculum</a>
          <a href="#mentor" className="btn-outline">Meet your instructor</a>
        </div>

        <div className="hero__meta">
          <span>4.9★ rated</span>
          <span className="hero__dot" />
          <span>800+ Indian engineers trained</span>
          <span className="hero__dot" />
          <span>Cohort capped at 30</span>
        </div>

        <div className="hero__tags">
          {tags.map((t) => (
            <span key={t} className="hero__tag">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
