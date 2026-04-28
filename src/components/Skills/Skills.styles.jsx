import styled from 'styled-components';

export const SkillsSection = styled.section`
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

export const SkillsGrid = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 18px;
`;

export const SkillCardContainer = styled.div`
  background: ${({ theme }) => theme.colors.cardBg};
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: ${({ theme }) => theme.shadow.sm};
  text-align: center;
  padding: 22px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadow.md};
  }

  h3 { margin: 10px 0 6px; }
  p { color: ${({ theme }) => theme.colors.textLight}; font-weight: 600; font-size: 0.85rem; }
`;

export const SkillIcon = styled.div`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const SoftSkillCard = styled.div`
  background: ${({ theme }) => theme.colors.cardBg};
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: ${({ theme }) => theme.shadow.sm};
  text-align: center;
  padding: 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadow.md};
  }

  h3 { margin: 0; font-size: 1rem; }
`;

export const SoftBadge = styled.span`
  background: ${({ theme }) => theme.colors.chipBg};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radius.pill};
  padding: 5px 14px;
  font-size: 0.82rem;
  font-weight: 700;
`;

export const SkillLevel = styled.div`
  margin: 12px 0;
  height: 10px;
  background: ${({ theme }) => theme.colors.chipBg};
  border-radius: 6px;
  overflow: hidden;

  .progress {
    height: 100%;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 6px;
  }
`;