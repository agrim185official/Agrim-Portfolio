import { useScrollReveal } from '../../hooks/useAnimations';
import styles from './Projects.module.css';

const PROJECTS = [
  {
    title: 'ResolveIT',
    description:
      'Full-stack grievance management system with 3-tier role-based access control (Admin, Staff, User). Features stateless JWT auth, automated escalation logic, file upload APIs, and CSV/PDF report generation.',
    tech: ['Java', 'Spring Boot', 'Spring Security', 'MySQL', 'JWT', 'REST API'],
    date: 'Nov 2025 – Feb 2026',
    github: 'https://github.com/agrim185official',
  },
  {
    title: 'Interactive Web Portfolio',
    description:
      'Responsive SPA built with React, featuring component-based architecture, smooth scroll navigation, typing animations, and cross-device responsive design with a dark-mode aesthetic.',
    tech: ['HTML', 'CSS', 'JavaScript', 'React.js'],
    date: '2024',
    github: '#',
  },
];

export default function Projects() {
  const [ref, isVisible] = useScrollReveal(0.1);

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-label">// Projects</span>
          <h2 className="section-title">Featured Work</h2>
          <p className="section-subtitle">
            Applications I've designed, built, and shipped.
          </p>
        </div>

        <div
          ref={ref}
          className={`${styles.projectsGrid} fade-in-section ${isVisible ? 'visible' : ''}`}
        >
          {PROJECTS.map((project) => (
            <div className={styles.projectCard} key={project.title}>
              <div className={styles.cardHeader}>
                <div className={styles.folderIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2v11z" />
                  </svg>
                </div>
                <span className={styles.cardDate}>{project.date}</span>
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.description}</p>
                <div className={styles.techStack}>
                  {project.tech.map((t) => (
                    <span className={styles.techTag} key={t}>{t}</span>
                  ))}
                </div>
              </div>

              <div className={styles.cardFooter}>
                <a
                  className={styles.projectLink}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                  </svg>
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
