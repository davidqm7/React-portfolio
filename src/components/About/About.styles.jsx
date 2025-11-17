import styled from 'styled-components';

export const AboutSection = styled.section`
  background: ${({ theme }) => theme.colors.bg};
`;

export const AboutGrid = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.1fr 1.4fr;
  align-items: center;
  gap: 32px;
  padding: 0 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const Avatar = styled.div`
  img {
    width: 100%;
    max-width: 540px;
    border-radius: 16px;
    box-shadow: ${({ theme }) => theme.shadow.md};
  }
`;

export const AboutText = styled.div`
  h1 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 2.4rem;
    margin-bottom: 12px;
  }

  .wave { margin-left: 8px; }

  .lead {
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.9;
  }
`;

export const Attributes = styled.div`
  margin-top: 18px;
  background: ${({ theme }) => theme.colors.cardBg};
  border-radius: 12px;
  padding: 18px 20px;
  border-left: 4px solid ${({ theme }) => theme.colors.primary};
  box-shadow: ${({ theme }) => theme.shadow.sm};

  h3 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 8px;
    font-size: 1.1rem;
  }

  ul {
    margin: 0;
    padding-left: 18px;
    color: ${({ theme }) => theme.colors.textLight};
  }
  li { margin: 6px 0; }
`;