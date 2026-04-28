import styled from 'styled-components';

export const EducationSection = styled.section`
  background: ${({ theme }) => theme.colors.cardBg};
`;

export const SectionHeader = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 60px 20px 32px;
  text-align: center;

  h2 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 2rem;
    margin-bottom: 8px;
  }

  p {
    color: ${({ theme }) => theme.colors.textLight};
    font-size: 1.05rem;
  }
`;

export const CardsGrid = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 0 20px 60px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.cardBg};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: 22px 24px;
  box-shadow: ${({ theme }) => theme.shadow.sm};
  border-top: 4px solid ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  gap: 6px;

  .icon {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 4px;
  }

  .title {
    font-weight: 700;
    font-size: 1.05rem;
    color: ${({ theme }) => theme.colors.text};
  }

  .institution {
    font-size: 0.95rem;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
  }

  .date {
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.textLight};
  }

  .detail {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.textLight};
    margin-top: 4px;
  }
`;

export const TypeLabel = styled.span`
  display: inline-block;
  padding: 3px 10px;
  border-radius: ${({ theme }) => theme.radius.pill};
  font-size: 0.75rem;
  font-weight: 600;
  background: ${({ theme }) => theme.colors.chipBg};
  color: ${({ theme }) => theme.colors.primary};
  align-self: flex-start;
  margin-bottom: 4px;
`;
