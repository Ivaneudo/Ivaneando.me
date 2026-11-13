import styled from '@emotion/styled';

export const Aside = styled.aside<{ isOpen: boolean }>`
  width: 280px;
  background-color: ${({ theme }) => theme.surface};
  border-right: 1px solid ${({ theme }) => theme.surfaceBorder};
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 50;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  }
`;

export const Header = styled.div`
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.surfaceBorder};
`;

export const Logo = styled.h1`
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0;
  color: ${({ theme }) => theme.text};

  span {
    color: ${({ theme }) => theme.primary};
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const IconButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.codeBg};
    color: ${({ theme }) => theme.primary};
  }
`;

export const CloseButton = styled(IconButton)`
  @media (min-width: 769px) {
    display: none;
  }
`;

export const NavList = styled.nav`
  flex: 1;
  overflow-y: auto;
  padding: 1rem 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`;

export const NavItem = styled.button<{ isActive: boolean }>`
  width: 100%;
  text-align: left;
  background-color: ${({ isActive, theme }) => (isActive ? theme.primary : 'transparent')};
  color: ${({ isActive, theme }) => (isActive ? '#FFFFFF' : theme.text)};
  border: none;
  border-radius: 6px;
  padding: 0.75rem 0.85rem;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: ${({ isActive, theme }) => (isActive ? theme.primary : theme.codeBg)};
    color: ${({ isActive, theme }) => (isActive ? '#FFFFFF' : theme.primary)};
  }
`;

export const Overlay = styled.div<{ isOpen: boolean }>`
  display: none;
  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 40;
  }
`;