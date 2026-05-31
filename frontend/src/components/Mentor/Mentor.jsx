import './Mentor.css';

const skills = [
  'Python',
  'JavaScript',
  'React',
  'Node.js',
  'FastAPI',
  'LangChain',
  'RAG',
  'Vector DBs',
  'DevOps',
  'AI system design',
];


export default function Mentor() {
  return (
    <section id="mentor" className="mentor">
      <div className="container mentor__inner">
        <div className="mentor__content">
          <p className="section-label">Your Mentor</p>
          <h2 className="mentor__heading">
            Learn from an architect who builds full stack and AI systems in production — not a YouTube reseller.
          </h2>
          <p className="mentor__bio">
            I'm a senior software engineer with 6+ years of experience shipping full stack web apps, backend APIs,
            and production-ready AI systems for global teams. Tech Savvy School is the programme I wish I had when I was breaking
            into AI and modern web development — direct, opinionated, and built for Indian developers.
          </p>

          <div className="mentor__badge">
            <span>Live mentor</span>
            <span>6+ yrs · Ex-Ed Tech</span>
          </div>
        </div>
      </div>
    </section>
  );
}
