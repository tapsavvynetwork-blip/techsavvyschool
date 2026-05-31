import { useEffect, useState } from 'react';
import { fetchCourses } from '../../api';
import './Curriculum.css';

const fallback = [
  { _id: '1', title: 'Foundations of Programming', description: 'How the Web Actually Works', level: 'Beginner-friendly', modules: 6 },
  { _id: '2', title: 'JavaScript and Interactivity', description: 'Making Pages come Alive', level: 'Practical', modules: 8 },
  { _id: '3', title: 'React and Modern UI Development', description: 'Build Real UI like a Developer', level: 'Advanced', modules: 6 },
  { _id: '4', title: 'Backend and Databases', description: 'The Engine Behind the App', level: 'Engineering', modules: 5 },
  { _id: '5', title: 'AI - Powered Development', description: 'Build 100x Faster with AI', level: 'Engineering', modules: 4 },
  { _id: '6', title: 'Deploy, Shift, Polish', description: 'Go Live like a Professional', level: 'Capstone', modules: null, duration: '4 weeks' },
   { _id: '7', title: 'AI Tools you will Use throughout', description: 'Claude, ChatGPT, and more', level: 'Tools', isCapstone: true, modules: null},
];

export default function Curriculum2() {
  const [courses, setCourses] = useState(fallback);

  useEffect(() => {
    fetchCourses()
      .then((res) => { if (res.data?.data?.length) setCourses(res.data.data); })
      .catch(() => {});
  }, []);

  return (
    <section id="curriculum">
      <div className="container">
        <p className="section-label">02 — Curriculum</p>
        <h2 className="curriculum__heading">Full Stack & <br /> AI Foundation</h2>
        <p className="curriculum__sub">
          Each track is a focused sprint into a modern technical stack — live whiteboard sessions,
          code-along labs, and code reviews on the work you ship.
        </p>

        <div className="curriculum__grid">
          {courses.map((c) => (
            <div key={c._id} className={`course-card ${c.isCapstone ? 'course-card--capstone' : ''}`}>
              <div className="course-card__top">
                <span className="course-card__level">{c.level}</span>
                <span className="course-card__modules">
                  {c.isCapstone ? c.duration : `${c.modules} Modules`}
                </span>
              </div>
              <h3 className="course-card__title">{c.title}</h3>
              <p className="course-card__desc">{c.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
