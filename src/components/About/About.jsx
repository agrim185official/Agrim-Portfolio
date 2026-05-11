import { useScrollReveal } from '../../hooks/useAnimations';
import styles from './About.module.css';

export default function About() {
  const [ref, isVisible] = useScrollReveal(0.15);

  return (
    <div className="container">
      <div
        ref={ref}
        className={`${styles.about} fade-in-section ${isVisible ? 'visible' : ''}`}
      >
          <div className={styles.aboutGrid}>
            <div className={styles.avatarWrapper}>
              <div className={styles.avatarOuter}>
                <div className={styles.avatarInner}>
                  <span className={styles.avatarInitials}>AB</span>
                </div>
              </div>
            </div>

            <div className={styles.aboutContent}>
              <span className={styles.aboutLabel}>// About Me</span>
              <h2>
                Software Developer &amp; <span>Competitive Programmer</span>
              </h2>
              <p className={styles.bio}>
                Software Developer & competitive programmer. I build performant
                backends, clean APIs, and ship things that work.
              </p>
              <div className={styles.statsRow}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>1364</span>
                  <span className={styles.statLabel}>CF Peak Rating</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>1696</span>
                  <span className={styles.statLabel}>CC Peak Rating</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>5+</span>
                  <span className={styles.statLabel}>Projects Built</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>500+</span>
                  <span className={styles.statLabel}>Problems Solved</span>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}
