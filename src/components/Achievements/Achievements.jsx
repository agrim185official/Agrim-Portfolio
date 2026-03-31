import { useScrollReveal } from '../../hooks/useAnimations';
import styles from './Achievements.module.css';

const ACHIEVEMENTS = [
  {
    platform: 'Codeforces',
    badge: 'Pupil',
    badgeColor: '#1e88e5',
    rating: '1364',
    ratingLabel: 'Peak Rating',
    detail: 'Ranked 1445th globally in Round 984 (Div. 3)',
    logo: (
      <svg viewBox="0 0 24 24">
        <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-15c0-.828.672-1.5 1.5-1.5h3zm9 7.5c.828 0 1.5.672 1.5 1.5v7.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z" />
      </svg>
    ),
  },
  {
    platform: 'CodeChef',
    badge: '3★',
    badgeColor: '#43a047',
    rating: '1696',
    ratingLabel: 'Peak Rating',
    detail: 'Ranked 94th globally in Starters 160 Div. 3',
    logo: (
      <svg viewBox="0 0 24 24">
        <path d="M11.007.22c-.212.058-.425.098-.635.166-.12.04-.24.078-.354.13-.413.188-.779.473-1.053.826a2.42 2.42 0 00-.462 1.252 3.61 3.61 0 00.007.619c.028.296.098.586.21.862.03.078.064.154.1.23-.01.012-.022.024-.032.036-.06.068-.12.136-.175.207-.693.897-1.294 1.86-1.874 2.834-.315.527-.62 1.06-.92 1.598-.155.277-.308.555-.466.83-.15.26-.327.5-.48.764-.18.31-.34.63-.52.94-.1.15-.2.3-.29.46-.16.25-.32.5-.49.75-.2.31-.39.62-.59.93-.15.24-.32.46-.47.7-.1.15-.16.32-.25.48-.1.16-.22.32-.32.49-.18.31-.34.64-.53.95-.15.24-.32.47-.48.71-.09.13-.14.29-.23.43-.14.22-.3.42-.44.64-.18.3-.35.6-.53.91-.1.18-.24.34-.34.52-.19.34-.36.7-.55 1.04-.14.26-.3.5-.44.77-.1.16-.15.35-.25.52-.15.27-.32.53-.48.8-.13.24-.26.49-.39.73-.1.18-.22.36-.32.55-.12.2-.22.41-.36.6-.12.18-.17.38-.27.58L.17 22.37c-.07.12-.12.24-.17.37l.07.07c.14.08.26.2.41.24.3.08.62.1.93.15h.03c.3.04.61.08.91.09.41.01.81-.01 1.22.01.1 0 .2.04.3.04h16.85c.07 0 .14-.03.21-.03.2 0 .4.03.59.03h.14c.21-.02.42-.01.63-.03.26-.01.53-.03.79-.04.1-.01.2.01.31.01.09 0 .18-.03.27-.04l.13-.01c.07-.02.14-.04.2-.07.11-.06.08-.19.04-.28-.06-.13-.12-.27-.2-.39-.13-.19-.28-.37-.41-.56-.18-.27-.34-.55-.53-.81-.21-.31-.44-.61-.64-.93-.17-.27-.32-.56-.49-.83-.14-.22-.3-.43-.44-.65-.24-.4-.47-.8-.71-1.2-.13-.22-.28-.43-.42-.65-.14-.23-.27-.47-.41-.7-.13-.22-.28-.42-.42-.64-.15-.22-.27-.46-.42-.68-.23-.35-.47-.69-.7-1.04-.12-.17-.22-.35-.33-.52-.13-.2-.28-.38-.4-.58-.28-.45-.54-.92-.83-1.36-.14-.21-.3-.41-.44-.62-.18-.28-.36-.56-.55-.83-.17-.24-.35-.46-.51-.7-.12-.18-.22-.37-.34-.55-.24-.36-.48-.73-.72-1.09-.14-.21-.29-.41-.43-.62-.18-.26-.35-.53-.53-.79-.06-.09-.14-.17-.2-.26.01-.06.04-.11.06-.17.08-.23.16-.46.24-.7a8.37 8.37 0 00.3-1.59c.02-.26 0-.52-.01-.78 0-.05-.02-.1-.02-.14-.01-.17-.01-.34-.04-.51a3.03 3.03 0 00-.76-1.6 2.7 2.7 0 00-1.03-.7 3.68 3.68 0 00-.87-.24c-.15-.02-.3 0-.44-.01h-.57c-.12.01-.25.05-.37.06z" />
      </svg>
    ),
  },
  {
    platform: 'Meta Hacker Cup',
    badge: 'Top 6262',
    badgeColor: '#7c4dff',
    rating: '2023',
    ratingLabel: 'Year',
    detail: 'Competed globally in Meta Hacker Cup 2023',
    logo: (
      <svg viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
  },
];

export default function Achievements() {
  const [ref, isVisible] = useScrollReveal(0.1);

  return (
    <section className="section" id="achievements">
      <div className="container">
        <div className="section-header">
          <span className="section-label">// Achievements</span>
          <h2 className="section-title">Competitive Programming</h2>
          <p className="section-subtitle">
            Ratings, ranks, and milestones across platforms.
          </p>
        </div>

        <div
          ref={ref}
          className={`${styles.achievementsGrid} fade-in-section ${isVisible ? 'visible' : ''}`}
        >
          {ACHIEVEMENTS.map((a) => (
            <div className={styles.card} key={a.platform}>
              <div className={styles.cardTop}>
                <div className={styles.logoBox} style={{ background: `${a.badgeColor}18`, color: a.badgeColor }}>
                  {a.logo}
                </div>
                <span className={styles.badge} style={{ background: `${a.badgeColor}22`, color: a.badgeColor, borderColor: `${a.badgeColor}44` }}>
                  {a.badge}
                </span>
              </div>

              <h3 className={styles.platform}>{a.platform}</h3>

              <div className={styles.ratingRow}>
                <span className={styles.ratingValue}>{a.rating}</span>
                <span className={styles.ratingLabel}>{a.ratingLabel}</span>
              </div>

              <p className={styles.detail}>{a.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
