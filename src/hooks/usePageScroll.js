import { useEffect, useRef, useState, useCallback } from 'react';

export function usePageScroll() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionsRef = useRef([]);

  const registerSection = useCallback((el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  }, []);

  // Get current section based on scroll position (for nav highlighting)
  const getCurrentSectionIndex = useCallback(() => {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;
    const center = scrollY + viewportHeight / 2;

    for (let i = 0; i < sectionsRef.current.length; i++) {
      const section = sectionsRef.current[i];
      if (!section) continue;
      
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;
      
      if (center >= sectionTop && center < sectionBottom) {
        return i;
      }
    }
    return 0;
  }, []);

  // Scroll to specific section (for nav clicks)
  const scrollToSection = useCallback((index) => {
    const sections = sectionsRef.current;
    if (index < 0 || index >= sections.length) return;

    const targetSection = sections[index];
    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  // Just track active section for nav highlighting - no scroll control
  useEffect(() => {
    const sections = sectionsRef.current;
    if (sections.length === 0) return;

    const handleScroll = () => {
      const newIndex = getCurrentSectionIndex();
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Set initial

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeIndex, getCurrentSectionIndex]);

  return { registerSection, activeIndex, scrollToSection, totalSections: sectionsRef.current.length };
}
