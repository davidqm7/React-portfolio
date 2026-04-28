import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1100;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 110px;
  padding-left: 16px;
  padding-right: 16px;
`;

export const Modal = styled.div`
  width: 100%;
  max-width: 560px;
  background: ${({ theme }) => theme.colors.cardBg};
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.35);
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

export const SearchRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  svg {
    color: ${({ theme }) => theme.colors.textLight};
    font-size: 1rem;
    flex-shrink: 0;
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  font-family: inherit;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textLight};
  }
`;

export const CommandList = styled.div`
  max-height: 360px;
  overflow-y: auto;
  padding: 6px 0;
`;

export const GroupLabel = styled.div`
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${({ theme }) => theme.colors.textLight};
  padding: 10px 20px 4px;
`;

export const CommandItem = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 20px;
  background: ${({ $active, theme }) => $active ? theme.colors.chipBg : 'transparent'};
  border: none;
  cursor: pointer;
  text-align: left;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.95rem;
  font-family: inherit;
  transition: background 0.12s;

  svg {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 0.9rem;
    flex-shrink: 0;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.chipBg};
  }
`;

export const PaletteFooter = styled.div`
  display: flex;
  gap: 16px;
  padding: 10px 20px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 0.78rem;
  color: ${({ theme }) => theme.colors.textLight};
`;

export const Kbd = styled.kbd`
  background: ${({ theme }) => theme.isDark ? 'rgba(255,255,255,0.1)' : '#f0f0f5'};
  border-radius: 4px;
  padding: 2px 6px;
  font-size: 0.75rem;
  font-family: inherit;
  color: ${({ theme }) => theme.colors.textLight};
  margin-right: 4px;
`;

export const EmptyMsg = styled.div`
  text-align: center;
  padding: 32px 20px;
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 0.95rem;
`;
