import React, { useState } from 'react';
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

const Header = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <HeaderBar>
      <NavContainer>
        <Brand>
          <span className="name">David Quintanilla</span>
          <span className="role">Data Professional</span>
        </Brand>

        <NavLinks>
          <NavLinkItem href="#about">About</NavLinkItem>
          <NavLinkItem href="#skills">Skills</NavLinkItem>
          <NavLinkItem href="#projects">Projects</NavLinkItem>
          <NavLinkItem href="#contact">Contact</NavLinkItem>
        </NavLinks>

        <SocialLinks>
          <SocialLink
            href="https://www.linkedin.com/in/david-quintanilla-386621272/"
            target="_blank"
            aria-label="LinkedIn Profile"
            className="linkedin"
          >
            <FaLinkedin /> <span>LinkedIn</span>
          </SocialLink>
          <SocialLink
            href="https://github.com/davidqm7"
            target="_blank"
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
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
        <div className="socials">
          <a
            href="https://www.linkedin.com/in/david-quintanilla-386621272/"
            target="_blank" rel="noreferrer"
          >
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