import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import {
  HeaderBar,
  NavContainer,
  Brand,
  NavLinks,
  NavLinkItem,
  SocialLinks,
  SocialLink,
  ThemeToggleBtn,
  PaletteHint,
  MobileMenuBtn,
  MobilePanel,
} from './Header.styles';

const NAV_SECTIONS = ['about', 'education', 'skills', 'projects', 'contact'];

const Header = ({ isDark, toggleTheme }) => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const observers = NAV_SECTIONS.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach(o => o?.disconnect());
  }, []);

  const closeMenu = () => setOpen(false);
  const openPalette = () => window.dispatchEvent(new Event('openCommandPalette'));

  return (
    <HeaderBar>
      <NavContainer>
        <Brand>
          <span className="name">David Quintanilla</span>
          <span className="role">Software & Data Engineer</span>
        </Brand>

        <NavLinks>
          {NAV_SECTIONS.map(id => (
            <NavLinkItem key={id} href={`#${id}`} $active={activeSection === id}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </NavLinkItem>
          ))}
        </NavLinks>

        <PaletteHint onClick={openPalette} aria-label="Open command palette">
          Search <kbd>⌘K</kbd>
        </PaletteHint>

        <ThemeToggleBtn onClick={toggleTheme} aria-label="Toggle dark mode">
          {isDark ? <FaSun /> : <FaMoon />}
        </ThemeToggleBtn>

        <SocialLinks>
          <SocialLink href="https://www.linkedin.com/in/david-quintanilla-386621272/" target="_blank" rel="noreferrer" aria-label="LinkedIn Profile" className="linkedin">
            <FaLinkedin /> <span>LinkedIn</span>
          </SocialLink>
          <SocialLink href="https://github.com/davidqm7" target="_blank" rel="noreferrer" aria-label="GitHub Profile" className="github">
            <FaGithub /> <span>GitHub</span>
          </SocialLink>
          <SocialLink href="mailto:davidqm7@outlook.com" aria-label="Email David" className="email">
            <FaEnvelope /> <span>Email</span>
          </SocialLink>
        </SocialLinks>

        <MobileMenuBtn onClick={() => setOpen(!open)} aria-label="Toggle Menu">
          {open ? <FaTimes /> : <FaBars />}
        </MobileMenuBtn>
      </NavContainer>

      <MobilePanel data-open={open}>
        {NAV_SECTIONS.map(id => (
          <a key={id} href={`#${id}`} onClick={closeMenu}>
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
        <a href="#" onClick={e => { e.preventDefault(); toggleTheme(); closeMenu(); }}>
          {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </a>
        <div className="socials">
          <a href="https://www.linkedin.com/in/david-quintanilla-386621272/" target="_blank" rel="noreferrer"><FaLinkedin /> LinkedIn</a>
          <a href="https://github.com/davidqm7" target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
          <a href="mailto:davidqm7@outlook.com"><FaEnvelope /> Email</a>
        </div>
      </MobilePanel>
    </HeaderBar>
  );
};

export default Header;
