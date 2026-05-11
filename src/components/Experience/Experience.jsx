import { useScrollReveal } from '../../hooks/useAnimations';
import styles from './Experience.module.css';

const EXPERIENCES = [
  {
    company: 'Infosys Springboard',
    role: 'Java Full Stack Developer Intern',
    date: 'Nov 2025 – Jan 2026',
    location: 'Remote',
    highlights: [
      'Built ResolveIT — a full-stack grievance management system with Spring Boot and MySQL',
      'Implemented Spring Security with JWT-based stateless authentication & 3-tier role hierarchy',
      'Designed normalized MySQL schema and RESTful APIs for file uploads and report generation',
      'Developed automated escalation engine with configurable business rules',
      'Delivered CSV and PDF export endpoints for grievance analytics',
    ],
  },
];

export default function Experience() {
  const [ref, isVisible] = useScrollReveal(0.1);

  return (
    <div className="container">
      <div className="section-header">
        <span className="section-label">// Experience</span>
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">
          Professional experience and internships.
        </p>
      </div>

      <div
        ref={ref}
        className={`${styles.timeline} fade-in-section ${isVisible ? 'visible' : ''}`}
      >
          {EXPERIENCES.map((exp) => (
            <div className={styles.timelineItem} key={exp.company}>
              <div className={styles.timelineDot}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
                </svg>
              </div>

              <div className={styles.timelineCard}>
                <div className={styles.cardMeta}>
                  <span className={styles.company}>{exp.company}</span>
                  <span className={styles.dateBadge}>{exp.date}</span>
                </div>
                <h3 className={styles.role}>{exp.role}</h3>
                <p className={styles.location}>📍 {exp.location}</p>
                <ul className={styles.highlights}>
                  {exp.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
