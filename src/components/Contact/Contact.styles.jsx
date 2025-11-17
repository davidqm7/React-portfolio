import styled from 'styled-components';

export const ContactSection = styled.section`
  background: ${({ theme }) => theme.colors.bg};

  h2 {
    text-align: center;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 2rem;
    margin-bottom: 24px;
  }
`;

export const ContactGrid = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 18px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const ContactCard = styled.div`
  background: ${({ theme }) => theme.colors.cardBg};
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: ${({ theme }) => theme.shadow.sm};
  padding: 22px;

  h3 {
    margin-bottom: 12px;
    color: ${({ theme }) => theme.colors.text};
  }

  .link {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
    padding: 10px 14px;
    border-radius: ${({ theme }) => theme.radius.pill};
    border: 2px solid ${({ theme }) => theme.colors.primary};
    margin-right: 10px;
    margin-bottom: 10px;
    transition: all 0.25s ease;
  }
  .link:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }

  .link.linkedin:hover { background: #0077b5; border-color: #0077b5; }
  .link.github:hover { background: #333; border-color: #333; color: #fff; }
  .link.email:hover { background: #ea4335; border-color: #ea4335; }
`;

export const ContactForm = styled.form`
  background: ${({ theme }) => theme.colors.cardBg};
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: ${({ theme }) => theme.shadow.sm};
  padding: 22px;
  display: grid;
  gap: 12px;

  h3 {
    margin-bottom: 4px;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const Input = styled.input`
  padding: 12px 14px;
  border-radius: ${({ theme }) => theme.radius.md};
  border: 1.5px solid #e6e6e9;
  outline: none;
  font-size: 1rem;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const TextArea = styled.textarea`
  padding: 12px 14px;
  border-radius: ${({ theme }) => theme.radius.md};
  border: 1.5px solid #e6e6e9;
  outline: none;
  font-size: 1rem;
  resize: vertical;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const SubmitBtn = styled.button`
  padding: 12px 16px;
  border-radius: ${({ theme }) => theme.radius.pill};
  border: 0;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 800;
  cursor: pointer;
  transition: background 0.25s ease, transform 0.1s ease;

  &:hover { background: ${({ theme }) => theme.colors.primaryDark}; }
  &:active { transform: translateY(1px); }
`;