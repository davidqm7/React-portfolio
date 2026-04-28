import React, { useState, useEffect } from 'react';
import {
  HeaderBar,
  NavContainer,
  Brand,
  NavLinks,
  NavLinkItem,
  SocialLinks,
  SocialLink,
  MobileMenuBtn,
  MobilePanel
} from './Header.styles';
import { FaLinkedin, FaGithub, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

const NAV_SECTIONS = ['about', 'education', 'skills', 'projects', 'contact'];

const Header = () => {
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

  return (
    <HeaderBar>
      <NavContainer>
        <Brand>
          <span className="name">David Quintanilla</span>
          <span className="role">Software & Data Engineer</span>
        </Brand>

        <NavLinks>
          <NavLinkItem href="#about" $active={activeSection === 'about'}>About</NavLinkItem>
          <NavLinkItem href="#education" $active={activeSection === 'education'}>Education</NavLinkItem>
          <NavLinkItem href="#skills" $active={activeSection === 'skills'}>Skills</NavLinkItem>
          <NavLinkItem href="#projects" $active={activeSection === 'projects'}>Projects</NavLinkItem>
          <NavLinkItem href="#contact" $active={activeSection === 'contact'}>Contact</NavLinkItem>
        </NavLinks>

        <SocialLinks>
          <SocialLink
            href="https://www.linkedin.com/in/david-quintanilla-386621272/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="linkedin"
          >
            <FaLinkedin /> <span>LinkedIn</span>
          </SocialLink>
          <SocialLink
            href="https://github.com/davidqm7"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="github"
          >
            <FaGithub /> <span>GitHub</span>
          </SocialLink>
          <SocialLink
            href="mailto:davidqm7@outlook.com"
            aria-label="Email David"
            className="email"
          >
            <FaEnvelope /> <span>Email</span>
          </SocialLink>
        </SocialLinks>

        <MobileMenuBtn onClick={() => setOpen(!open)} aria-label="Toggle Menu">
          {open ? <FaTimes /> : <FaBars />}
        </MobileMenuBtn>
      </NavContainer>

      <MobilePanel data-open={open}>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#education" onClick={closeMenu}>Education</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
        <div className="socials">
          <a href="https://www.linkedin.com/in/david-quintanilla-386621272/" target="_blank" rel="noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="https://github.com/davidqm7" target="_blank" rel="noreferrer">
            <FaGithub /> GitHub
          </a>
          <a href="mailto:davidqm7@outlook.com">
            <FaEnvelope /> Email
          </a>
        </div>
      </MobilePanel>
    </HeaderBar>
  );
};

export default Header;
