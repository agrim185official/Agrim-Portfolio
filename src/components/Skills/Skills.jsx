import { useScrollReveal } from '../../hooks/useAnimations';
import styles from './Skills.module.css';

const SKILLS = [
  'C++', 'Java', 'JavaScript', 'Spring Boot', 'REST APIs', 'MySQL',
  'JWT', 'React.js', 'HTML/CSS', 'DSA', 'Linux', 'Git',
];

export default function Skills() {
  const [ref, isVisible] = useScrollReveal(0.1);

  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-label">// Skills</span>
          <h2 className="section-title">Tech Stack</h2>
          <p className="section-subtitle">
            Technologies and tools I work with daily.
          </p>
        </div>

        <div
          ref={ref}
          className={`${styles.skillsGrid} fade-in-section ${isVisible ? 'visible' : ''}`}
        >
          {SKILLS.map((skill) => (
            <span className={styles.chip} key={skill}>{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
