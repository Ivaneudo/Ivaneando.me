import React from 'react';
import styled from '@emotion/styled';
import { Paintbrush, X, FileText } from 'lucide-react';
import { PostData } from '@/lib/posts';

interface SidebarProps {
  posts: PostData[];
  selectedSlug: string;
  onSelectPost: (slug: string) => void;
  isOpen: boolean;
  onClose: () => void;
  onToggleTheme: () => void;
  isDark: boolean;
}

const Aside = styled.aside<{ isOpen: boolean }>`
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

const Header = styled.div`
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.surfaceBorder};
`;

const Logo = styled.h1`
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0;
  color: ${({ theme }) => theme.text};

  span {
    color: ${({ theme }) => theme.primary};
  }
`;

const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const IconButton = styled.button`
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

const CloseButton = styled(IconButton)`
  @media (min-width: 769px) {
    display: none;
  }
`;

const NavList = styled.nav`
  flex: 1;
  overflow-y: auto;
  padding: 1rem 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`;

const NavItem = styled.button<{ isActive: boolean }>`
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

const Overlay = styled.div<{ isOpen: boolean }>`
  display: none;
  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 40;
  }
`;

export const Sidebar: React.FC<SidebarProps> = ({
  posts,
  selectedSlug,
  onSelectPost,
  isOpen,
  onClose,
  onToggleTheme,
  isDark,
}) => {
  return (
    <>
      <Overlay isOpen={isOpen} onClick={onClose} />
      <Aside isOpen={isOpen}>
        <Header>
          <Logo>
            Ivaneando<span>.me</span>
          </Logo>
          <ActionButtons>
            <IconButton
              onClick={onToggleTheme}
              title={isDark ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
            >
              <Paintbrush size={20} />
            </IconButton>
            <CloseButton onClick={onClose} title="Fechar menu">
              <X size={20} />
            </CloseButton>
          </ActionButtons>
        </Header>
        <NavList>
          {posts.map((post) => (
            <NavItem
              key={post.slug}
              isActive={selectedSlug === post.slug}
              onClick={() => {
                onSelectPost(post.slug);
                onClose();
              }}
            >
              <FileText size={18} style={{ flexShrink: 0 }} />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span>{post.title}</span>
                <small style={{ fontSize: '0.75rem', opacity: 0.7, marginTop: '2px' }}>
                  {post.formattedDate}
                </small>
              </div>
            </NavItem>
          ))}
        </NavList>
      </Aside>
    </>
  );
};