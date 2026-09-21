import { lazy, Suspense, useEffect, useState } from 'react';
import './App.css';

const HeroScene = lazy(() => import('./components/HeroScene'));
const projects = [
  { id: 'A01', title: 'ResolveIT', type: 'Systems / 2026', description: 'A grievance platform that turns messy escalation workflows into one dependable operating system.', stack: ['Java', 'Spring Boot', 'MySQL'], href: 'https://github.com/agrim185official/ResolveIT', tone: 'orange' },
  { id: 'A02', title: 'Interactive Web Portfolio', type: 'Interface / 2025', description: 'A living profile for the work behind the work: clear, responsive, and deliberately unlike a template.', stack: ['React', 'Vite', 'CSS'], href: 'https://github.com/agrim185official/Agrim-Portfolio', tone: 'blue' },
];
const skills = ['Java', 'Spring Boot', 'REST APIs', 'MySQL', 'React', 'JavaScript', 'C++', 'Git', 'Linux', 'DSA'];
const achievements = [
  { rank: 'Pupil', platform: 'Codeforces', rating: '1364', label: 'Peak Rating', detail: 'Ranked 1445th globally in Round 984 (Div. 3)', color: 'blue' },
  { rank: '3 Star', platform: 'CodeChef', rating: '1696', label: 'Peak Rating', detail: 'Ranked 94th globally in Starters 160 Div. 3', color: 'orange' },
  { rank: 'Top 6262', platform: 'Meta Hacker Cup', rating: '2023', label: 'Year', detail: 'Competed globally in Meta Hacker Cup 2023', color: 'blue' },
];
const experience = [
  { company: 'Infosys Springboard', role: 'Java Full Stack Developer Intern', period: 'Nov 2025 – Jan 2026', location: 'Remote', points: [
    'Built ResolveIT — a full-stack grievance management system with Spring Boot and MySQL',
    'Implemented Spring Security with JWT-based stateless authentication & 3-tier role hierarchy',
    'Designed normalized MySQL schema and RESTful APIs for file uploads and report generation',
    'Developed automated escalation engine with configurable business rules',
    'Delivered CSV and PDF export endpoints for grievance analytics'
  ] }
];

function ExternalArrow() { return <span className="external-arrow" aria-hidden="true">↗</span>; }

function App() {
  const [isDark, setIsDark] = useState(() => localStorage.getItem('portfolio-theme') === 'dark');
  useEffect(() => {
    document.documentElement.dataset.theme = isDark ? 'dark' : 'light';
    localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
  }, [isDark]);
  const jump = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="field-notes">
      <button className="theme-toggle" onClick={() => setIsDark((value) => !value)} aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}>
        {isDark ? '☀️' : '🌙'}
      </button>
      <aside className="index-rail">
        <button className="rail-monogram" onClick={() => jump('top')} aria-label="Back to top">
          <img src="/logo-ab.svg" alt="AB" />
        </button>
        <div className="rail-line" />
        <nav className="rail-nav" aria-label="Section index">
          <button onClick={() => jump('work')}><b>01</b><span>Work</span></button>
          <button onClick={() => jump('experience')}><b>02</b><span>Experience</span></button>
          <button onClick={() => jump('about')}><b>03</b><span>About</span></button>
          <button onClick={() => jump('achievements')}><b>04</b><span>Achievements</span></button>
          <button onClick={() => jump('skills')}><b>05</b><span>Skills</span></button>
          <button onClick={() => jump('contact')}><b>06</b><span>Collaborate</span></button>
        </nav>
        <div className="rail-bottom"><span>AGB</span></div>
      </aside>

      <main className="notes-main">
        <section className="opening" id="top">
          <div className="opening-top"><span>FIELD NOTES / 2026</span><span>NEW DELHI, IN</span></div>
          <div className="opening-grid">
            <div className="opening-copy"><p className="micro-label"><i /> Available for thoughtful work</p><h1>Agr<span>i</span>m<br /><em>Bhardwaj</em></h1><p className="opening-lede">Software developer building dependable systems, clean APIs, and interfaces that make complex work feel simple.</p><div className="opening-actions"><button onClick={() => jump('work')}>Read the case studies <ExternalArrow /></button><a href="mailto:agrim185official@gmail.com">Start a conversation <ExternalArrow /></a></div></div>
            <div className="opening-object"><div className="object-grid" /><div className="object-label"><span>OBJECT / 001</span><span>BACKEND + PRODUCT</span></div><Suspense fallback={<div className="scene-loading" />}><HeroScene /></Suspense><span className="object-coord">28.6139° N / 77.2090° E</span></div>
          </div>
          <div className="opening-bottom"><span>SCROLL TO EXPLORE</span><span>↓</span><span>01 — 07</span></div>
        </section>

        <section className="manifesto"><span className="manifesto-number">↳</span><p>I care about the part most people never see: the structure underneath, the decision that removes ten others, the small interaction that makes a product feel considered.</p></section>
        <section className="notes-section" id="work"><div className="section-marker"><span>01</span><span>SELECTED WORK</span></div><div className="work-intro"><h2>Built in public.<br /><em>Refined in private.</em></h2><p>Two projects, different problems, one consistent instinct: make the system clearer than you found it.</p></div><div className="case-list">{projects.map((project) => <a className={`case-file ${project.tone}`} href={project.href} target="_blank" rel="noreferrer" key={project.id}><div className="case-id">{project.id}</div><div className="case-main"><p className="case-type">{project.type}</p><h3>{project.title}</h3><p>{project.description}</p><div className="case-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div></div><ExternalArrow /></a>)}</div></section>
        <section className="notes-section" id="experience"><div className="section-marker"><span>02</span><span>EXPERIENCE</span></div><div className="work-intro"><h2>Professional<br /><em>Experience</em></h2><p>Professional experience and internships.</p></div><div className="case-list">{experience.map((exp, index) => <div className="case-file" key={index}><div className="case-id">{exp.period.split(' – ')[0].split(' ')[0]}</div><div className="case-main"><p className="case-type">{exp.role} · {exp.company} · {exp.location}</p><h3>{exp.company}</h3><ul className="exp-points">{exp.points.map((p, i) => <li key={i}>{p}</li>)}</ul></div></div>)}</div></section>
        <section className="notes-section about-notes" id="about"><div className="section-marker"><span>03</span><span>WORKING NOTES</span></div><div className="about-layout"><div><h2>Good software<br /><em>has a point of view.</em></h2><p className="pull-quote">&ldquo;The best backend is the one that gives the product room to breathe.&rdquo;</p></div><div className="about-text"><p>I work at the intersection of product thinking and engineering discipline. APIs, data models, authentication, and the quiet decisions that keep a system understandable as it grows.</p><p>Outside the editor, I sharpen the same muscles through competitive programming: 500+ problems, two peak ratings, and a lasting curiosity for hard problems.</p><a href="mailto:agrim185official@gmail.com">More about my approach <ExternalArrow /></a></div></div><div className="stat-notes"><div><strong>1364</strong><span>Codeforces peak</span></div><div><strong>1696</strong><span>CodeChef peak</span></div><div><strong>01</strong><span>Industry internship</span></div></div></section>
        <section className="notes-section achievements-section" id="achievements"><div className="section-marker"><span>04</span><span>ACHIEVEMENTS</span></div><div className="achievements-intro"><h2>Competitive<br /><em>Programming</em></h2><p>Ratings, ranks, and milestones across platforms.</p></div><div className="achievements-grid">{achievements.map((achievement, index) => <div className={`achievement-card ${achievement.color}`} key={index}><div className="achievement-rank">{achievement.rank}</div><div className="achievement-platform">{achievement.platform}</div><div className="achievement-rating"><strong>{achievement.rating}</strong><span>{achievement.label}</span></div><p className="achievement-detail">{achievement.detail}</p></div>)}</div></section>
        <section className="toolkit" id="skills"><div className="section-marker"><span>05</span><span>THE TOOLKIT</span></div><div className="toolkit-content"><h2>Tools for making<br /><span>things work.</span></h2><div className="tool-grid">{skills.map((skill, index) => <span key={skill}><b>{String(index + 1).padStart(2, '0')}</b>{skill}</span>)}</div></div></section>
        <section className="notes-section closing" id="contact"><div className="section-marker"><span>06</span><span>OPEN CHANNEL</span></div><div className="closing-layout"><h2>Have a hard<br /><span>problem?</span></h2><div><p>Good work starts with a clear question. Tell me what you&apos;re trying to make, fix, or understand.</p><a className="email-link" href="mailto:agrim185official@gmail.com">agrim185official@gmail.com <ExternalArrow /></a></div></div></section>
        <footer className="notes-footer">
          <span>AGRIM BHARDWAJ / SOFTWARE DEVELOPER</span>
          <span>© {new Date().getFullYear()}</span>
          <a href="/resume.pdf" target="_blank" rel="noreferrer">Resume <ExternalArrow /></a>
          <a href="https://www.linkedin.com/in/agrim-bhardwaj-b149b1285/" target="_blank" rel="noreferrer">LinkedIn <ExternalArrow /></a>
          <a href="https://github.com/agrim185official" target="_blank" rel="noreferrer">GitHub <ExternalArrow /></a>
          <a href="https://codeforces.com/profile/Agrim_Bhardwaj" target="_blank" rel="noreferrer">Codeforces <ExternalArrow /></a>
          <a href="https://codechef.com/users/agrim03" target="_blank" rel="noreferrer">CodeChef <ExternalArrow /></a>
        </footer>
      </main>
    </div>
  );
}

export default App;
