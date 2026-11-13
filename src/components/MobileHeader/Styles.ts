import styled from '@emotion/styled';

export const Container = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 3.8rem;
    background-color: ${({ theme }) => theme.surface};
    border-bottom: 1px solid ${({ theme }) => theme.surfaceBorder};
    padding: 0 1rem;
    z-index: 30;
  }
`;

export const MenuButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
`;

export const Logo = styled.span`
  margin-left: 0.75rem;
  font-weight: 700;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.text};

  span {
    color: ${({ theme }) => theme.primary};
  }
`;