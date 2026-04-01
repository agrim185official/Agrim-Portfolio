import { useState, useEffect, useRef } from 'react';
import styles from './Navbar.module.css';

const NAV_ITEMS = ['About', 'Skills', 'Projects', 'Achievements', 'Experience', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);

      // Auto-hide logic (hide on scroll down, show on scroll up)
      if (currentScrollY > lastScrollY.current && currentScrollY > 150) {
        // Only hide if menu is not open
        setHidden(!menuOpen);
      } else {
        setHidden(false);
      }
      lastScrollY.current = currentScrollY;

      // Determine active section
      const sections = NAV_ITEMS.map((item) => ({
        id: item.toLowerCase(),
        el: document.getElementById(item.toLowerCase()),
      }));

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i].el;
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''} ${hidden ? styles.hidden : ''}`} id="navbar">
      <div className={styles.navContent}>
        <button className={styles.logo} onClick={scrollToTop} aria-label="Go to top">
          {'<'}<span>AB</span>{' />'}
        </button>

        <div className={styles.navLinks}>
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              className={`${styles.navLink} ${activeSection === item.toLowerCase() ? styles.active : ''}`}
              onClick={() => scrollTo(item.toLowerCase())}
            >
              {item}
            </button>
          ))}
          <a
            className={styles.resumeBtn}
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`${styles.mobileOverlay} ${menuOpen ? styles.open : ''}`}>
        {NAV_ITEMS.map((item) => (
          <button
            key={item}
            className={styles.mobileLink}
            onClick={() => scrollTo(item.toLowerCase())}
          >
            {item}
          </button>
        ))}
        <a
          className={styles.resumeBtn}
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume
        </a>
      </div>
    </nav>
  );
}
