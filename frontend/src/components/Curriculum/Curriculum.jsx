import { useEffect, useState } from 'react';
import { fetchCourses } from '../../api';
import './Curriculum.css';

const fallback = [
  { _id: '1', title: 'Introduction to Full Stack', description: 'Decoding the software world, one line of code at a time.', level: 'Beginner-friendly', duration: '2 weeks' },
  { _id: '2', title: 'Mastering Java', description: 'Deep dive into the Java programming language and its ecosystem.', level: 'Intermediate', duration: '3 weeks' },
  { _id: '3', title: 'OOPs', description: 'Object-oriented programming concepts and practices.', level: 'Advanced', duration: '2 weeks' },
  { _id: '4', title: 'DSA', description: 'Data structures and algorithms for efficient problem-solving.', level: 'Advanced', duration: '3 weeks' },
  { _id: '5', title: 'HTML5 and CSS3', description: 'Learn the latest web technologies for building modern, responsive websites.', level: 'Beginner-friendly', duration: '2 weeks' },
  { _id: '6', title: 'JavaScript', description: 'Master the fundamentals of JavaScript and its applications in modern web development.', level: 'Intermediate', duration: '3 weeks' },
  { _id: '7', title: 'React.js', description: 'Build modern, fast, and scalable user interfaces with React.', level: 'Intermediate', duration: '3 weeks' },
  { _id: '8', title: 'Node.js', description: 'Build scalable server-side applications with Node.js.', level: 'Intermediate', duration: '3 weeks' },
  { _id: '9', title: 'MySQL', description: 'Learn to design and manage relational databases with MySQL.', level: 'Intermediate', duration: '2 weeks' },
  { _id: '10', title: 'MongoDB', description: 'Learn to design and manage NoSQL databases with MongoDB.', level: 'Intermediate', duration: '2 weeks' },
  { _id: '11', title: 'DevOps', description: 'Learn to design and manage DevOps practices and tools.', level: 'Advanced', duration: '3 weeks' },
];

export default function Curriculum() {
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
        <h2 className="curriculum__heading">Full Stack & <br /> AI Professional</h2>
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
                  {c.duration}
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
