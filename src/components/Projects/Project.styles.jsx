import styled from 'styled-components';

export const ProjectsSection = styled.section`
  background: ${({ theme }) => theme.colors.bg};
`;

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 36px;

  h2 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 2rem;
    margin-bottom: 6px;
  }
  p { color: ${({ theme }) => theme.colors.textLight}; }
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 26px;

  button {
    padding: 8px 18px;
    border-radius: ${({ theme }) => theme.radius.pill};
    border: 2px solid ${({ theme }) => theme.colors.primary};
    background: transparent;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
    cursor: pointer;
    transition: all 0.25s ease;
  }
  button.active, button:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const ProjectsGrid = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 18px;
`;

export const ProjectCardContainer = styled.div`
  background: ${({ theme }) => theme.colors.cardBg};
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: ${({ theme }) => theme.shadow.sm};
  padding: 22px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  .desc {
    color: ${({ theme }) => theme.colors.textLight};
  }
`;

export const ProjectHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  .icon {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.5rem;
    display: inline-flex;
  }

  h3 {
    font-size: 1.1rem;
    margin: 0;
  }
`;

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  span {
    background: ${({ theme }) => theme.colors.chipBg};
    color: ${({ theme }) => theme.colors.primary};
    padding: 6px 10px;
    border-radius: ${({ theme }) => theme.radius.pill};
    font-weight: 600;
    font-size: 0.85rem;
  }
`;

export const ProjectLinks = styled.div`
  margin-top: 6px;
  display: flex;
  gap: 12px;

  a {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
    padding: 8px 12px;
    border-radius: ${({ theme }) => theme.radius.pill};
    border: 2px solid ${({ theme }) => theme.colors.primary};
    transition: all 0.25s ease;
  }

  a:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }

  a.demo {
    border-color: ${({ theme }) => theme.colors.primaryDark};
    color: ${({ theme }) => theme.colors.primaryDark};
  }
  a.demo:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
    color: ${({ theme }) => theme.colors.white};
  }
`;