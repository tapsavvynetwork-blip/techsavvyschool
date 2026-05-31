import './Mentor.css';

const skills = ['Python', 'LangChain', 'RAG', 'LangGraph', 'Vector DBs', 'Agents', 'Evals', 'FastAPI'];
const stats = [
  { value: '1,800+', label: 'Engineers taught' },
  { value: '12+', label: 'Years building AI' },
  { value: '4.9★', label: 'Avg cohort rating' },
];

export default function Mentor() {
  return (
    <section id="mentor" className="mentor">
      <div className="container mentor__inner">
        <div className="mentor__content">
          <p className="section-label">Your Mentor</p>
          <h2 className="mentor__heading">
            Learn from an architect who builds AI systems in production — not a YouTube reseller.
          </h2>
          <p className="mentor__bio">
            I'm a senior software engineer with 12+ years of experience shipping Python, ML and Generative AI
            systems for global teams. TSN Education is the programme I wish I had when I was breaking into AI
            — direct, opinionated, and built for Indian developers.
          </p>

          <div className="mentor__badge">
            <span>Live mentor</span>
            <span>12+ yrs · Ex-Big Tech</span>
          </div>

          <div className="mentor__stats">
            {stats.map((s) => (
              <div key={s.label} className="mentor__stat">
                <span className="mentor__stat-value">{s.value}</span>
                <span className="mentor__stat-label">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="mentor__skills">
            {skills.map((s) => (
              <span key={s} className="mentor__skill">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
