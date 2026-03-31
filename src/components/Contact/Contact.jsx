import { useState } from 'react';
import { useScrollReveal } from '../../hooks/useAnimations';
import styles from './Contact.module.css';

export default function Contact() {
  const [ref, isVisible] = useScrollReveal(0.1);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // UI-only — no backend integration
    alert(`Thanks, ${form.name}! Your message has been noted.`);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-label">// Contact</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have an opportunity or just want to say hi? Reach out!
          </p>
        </div>

        <div
          ref={ref}
          className={`${styles.contactGrid} fade-in-section ${isVisible ? 'visible' : ''}`}
        >
          {/* Left — Info */}
          <div className={styles.contactInfo}>
            <div>
              <span className={styles.contactLabel}>// Let's Talk</span>
              <h3 className={styles.contactHeading}>
                Ready to <span>Collaborate?</span>
              </h3>
              <p className={styles.contactDesc}>
                Whether it's a full-stack project, a competitive programming challenge,
                or an open-source contribution — I'm always up for a conversation.
              </p>
            </div>

            <div className={styles.contactDetails}>
              <a href="mailto:agrim185official@gmail.com" className={styles.contactItem}>
                <div className={styles.contactItemIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                agrim185official@gmail.com
              </a>
            </div>

            <div className={styles.socialRow}>
              <a
                className={styles.socialIcon}
                href="https://github.com/agrim185official"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <svg viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
              <a
                className={styles.socialIcon}
                href="https://linkedin.com/in/agrim-bhardwaj-b149b1285"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a
                className={styles.socialIcon}
                href="https://codeforces.com/profile/Agrim_Bhardwaj"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Codeforces"
              >
                <svg viewBox="0 0 24 24"><path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-15c0-.828.672-1.5 1.5-1.5h3zm9 7.5c.828 0 1.5.672 1.5 1.5v7.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z"/></svg>
              </a>
              <a
                className={styles.socialIcon}
                href="https://codechef.com/users/agrim03"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CodeChef"
              >
                <svg viewBox="0 0 24 24"><path d="M11.007.22c-.212.058-.425.098-.635.166-.12.04-.24.078-.354.13-.413.188-.779.473-1.053.826a2.42 2.42 0 00-.462 1.252 3.61 3.61 0 00.007.619c.028.296.098.586.21.862.03.078.064.154.1.23-.01.012-.022.024-.032.036-.06.068-.12.136-.175.207-.693.897-1.294 1.86-1.874 2.834-.315.527-.62 1.06-.92 1.598-.155.277-.308.555-.466.83-.15.26-.327.5-.48.764-.18.31-.34.63-.52.94-.1.15-.2.3-.29.46-.16.25-.32.5-.49.75-.2.31-.39.62-.59.93-.15.24-.32.46-.47.7-.1.15-.16.32-.25.48-.1.16-.22.32-.32.49-.18.31-.34.64-.53.95-.15.24-.32.47-.48.71-.09.13-.14.29-.23.43-.14.22-.3.42-.44.64-.18.3-.35.6-.53.91-.1.18-.24.34-.34.52-.19.34-.36.7-.55 1.04-.14.26-.3.5-.44.77-.1.16-.15.35-.25.52-.15.27-.32.53-.48.8-.13.24-.26.49-.39.73-.1.18-.22.36-.32.55-.12.2-.22.41-.36.6-.12.18-.17.38-.27.58L.17 22.37c-.07.12-.12.24-.17.37l.07.07c.14.08.26.2.41.24.3.08.62.1.93.15h.03c.3.04.61.08.91.09.41.01.81-.01 1.22.01.1 0 .2.04.3.04h16.85c.07 0 .14-.03.21-.03.2 0 .4.03.59.03h.14c.21-.02.42-.01.63-.03.26-.01.53-.03.79-.04.1-.01.2.01.31.01.09 0 .18-.03.27-.04l.13-.01c.07-.02.14-.04.2-.07.11-.06.08-.19.04-.28-.06-.13-.12-.27-.2-.39-.13-.19-.28-.37-.41-.56-.18-.27-.34-.55-.53-.81-.21-.31-.44-.61-.64-.93-.17-.27-.32-.56-.49-.83-.14-.22-.3-.43-.44-.65-.24-.4-.47-.8-.71-1.2-.13-.22-.28-.43-.42-.65-.14-.23-.27-.47-.41-.7-.13-.22-.28-.42-.42-.64-.15-.22-.27-.46-.42-.68-.23-.35-.47-.69-.7-1.04-.12-.17-.22-.35-.33-.52-.13-.2-.28-.38-.4-.58-.28-.45-.54-.92-.83-1.36-.14-.21-.3-.41-.44-.62-.18-.28-.36-.56-.55-.83-.17-.24-.35-.46-.51-.7-.12-.18-.22-.37-.34-.55-.24-.36-.48-.73-.72-1.09-.14-.21-.29-.41-.43-.62-.18-.26-.35-.53-.53-.79-.06-.09-.14-.17-.2-.26.01-.06.04-.11.06-.17.08-.23.16-.46.24-.7a8.37 8.37 0 00.3-1.59c.02-.26 0-.52-.01-.78 0-.05-.02-.1-.02-.14-.01-.17-.01-.34-.04-.51a3.03 3.03 0 00-.76-1.6 2.7 2.7 0 00-1.03-.7 3.68 3.68 0 00-.87-.24c-.15-.02-.3 0-.44-.01h-.57c-.12.01-.25.05-.37.06z"/></svg>
              </a>
            </div>
          </div>

          {/* Right — Form */}
          <form className={styles.contactForm} onSubmit={handleSubmit} id="contact-form">
            <div className={styles.formGroup}>
              <label htmlFor="contact-name">Your Name</label>
              <input
                type="text"
                id="contact-name"
                name="name"
                placeholder="John Doe"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="contact-email">Your Email</label>
              <input
                type="email"
                id="contact-email"
                name="email"
                placeholder="john@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows="5"
                placeholder="Your message here..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className={styles.submitBtn} id="contact-submit">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
              Send Message
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className={styles.footer}>
          <p className={styles.footerText}>
            Designed &amp; built by <span>Agrim Bhardwaj</span> © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </section>
  );
}
