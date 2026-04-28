import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const FooterBar = styled.footer`
  background: ${({ theme }) => theme.colors.primary};
  color: rgba(255, 255, 255, 0.9);
  padding: 36px 20px;
  text-align: center;
`;

const FooterInner = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const SocialRow = styled.div`
  display: flex;
  gap: 24px;

  a {
    color: rgba(255, 255, 255, 0.8);
    font-size: 1.4rem;
    display: inline-flex;
    transition: color 0.2s, transform 0.2s;

    &:hover {
      color: #fff;
      transform: translateY(-3px);
    }
  }
`;

const Copy = styled.p`
  font-size: 0.85rem;
  opacity: 0.65;
  margin: 0;
`;

const Footer = () => (
  <FooterBar>
    <FooterInner>
      <SocialRow>
        <a
          href="https://www.linkedin.com/in/david-quintanilla-386621272/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/davidqm7"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a href="mailto:davidqm7@outlook.com" aria-label="Email">
          <FaEnvelope />
        </a>
      </SocialRow>
      <Copy>© {new Date().getFullYear()} David Quintanilla · Built with React</Copy>
    </FooterInner>
  </FooterBar>
);

export default Footer;
