import styled from 'styled-components';

export const HeaderBar = styled.header`
  position: fixed;
  top: 0; left: 0; right: 0;
  height: ${({ theme }) => theme.layout.headerHeight};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadow.sm};
  z-index: 1000;
`;

export const NavContainer = styled.nav`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  height: 100%;
  padding: 0 20px;
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const Brand = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.1;
  .name { font-weight: 700; font-size: 1.1rem; }
  .role { font-size: 0.85rem; opacity: 0.9; }
`;

export const NavLinks = styled.div`
  margin-left: auto;
  display: flex;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const NavLinkItem = styled.a`
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.95;
  font-weight: 500;
  position: relative;
  padding: 6px 0;

  &:after {
    content: '';
    position: absolute;
    height: 2px; left: 0; bottom: -6px;
    width: 0;
    background: ${({ theme }) => theme.colors.white};
    transition: width 0.25s ease;
  }
  &:hover:after { width: 100%; }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 10px;
  margin-left: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border-radius: ${({ theme }) => theme.radius.pill};
  background: rgba(255,255,255,0.12);
  color: ${({ theme }) => theme.colors.white};
  transition: all 0.25s ease;
  font-weight: 600;
  svg { font-size: 1.1rem; }

  &:hover {
    transform: translateY(-2px);
    background: rgba(255,255,255,0.22);
  }

  &.linkedin:hover { background: #0077b5; }
  &.github:hover { background: #333; }
  &.email:hover { background: #ea4335; }
`;

export const MobileMenuBtn = styled.button`
  margin-left: auto;
  display: none;
  background: transparent;
  border: 0;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: inline-flex;
  }
`;

export const MobilePanel = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
    position: absolute;
    top: ${({ theme }) => theme.layout.headerHeight};
    left: 0; right: 0;
    background: ${({ theme }) => theme.colors.primary};
    border-top: 1px solid rgba(255,255,255,0.15);
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;

    &[data-open="true"] {
      max-height: 360px;
      box-shadow: ${({ theme }) => theme.shadow.sm};
    }

    a {
      display: block;
      color: ${({ theme }) => theme.colors.white};
      padding: 14px 20px;
      border-bottom: 1px solid rgba(255,255,255,0.1);
      font-weight: 600;
    }

    .socials {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 12px;
      padding: 14px 20px;

      a {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 8px 12px;
        border-radius: ${({ theme }) => theme.radius.pill};
        border: 1px solid rgba(255,255,255,0.25);
        color: ${({ theme }) => theme.colors.white};
        background: rgba(255,255,255,0.12);
        font-weight: 600;
        transition: background 0.25s ease, transform 0.25s ease;

        &:hover { transform: translateY(-2px); }
        &:nth-child(1):hover { background: #0077b5; } /* LinkedIn */
        &:nth-child(2):hover { background: #333; }    /* GitHub   */
        &:nth-child(3):hover { background: #ea4335; } /* Email    */
      }
    }
  }
`;