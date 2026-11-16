import React, { useEffect } from 'react';
import { Paintbrush, X, FileText, PanelLeft, PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import { PostData } from '@/lib/posts';
import { 
  ActionButtons, 
  Aside, 
  CloseButton, 
  DesktopToggleButton, 
  Header, 
  IconButton, 
  Logo, 
  NavItem, 
  NavList, 
  OpenButton, 
  Overlay 
} from './Styles';

interface SidebarProps {
  posts: PostData[];
  selectedSlug: string;
  onSelectPost: (slug: string) => void;
  isOpen: boolean;
  onClose: () => void;
  onToggle: () => void;
  onToggleTheme: () => void;
  isDark: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({
  posts, selectedSlug, onSelectPost, isOpen,
  onClose, onToggle, onToggleTheme, isDark,
}) => {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'b') {
        e.preventDefault();
        onToggle();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onToggle]);
  return (
    <>
      <OpenButton isOpen={isOpen} onClick={onToggle} title="Abrir menu (Ctrl+B)">
        <PanelLeftOpen size={20} />
      </OpenButton>
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
            <DesktopToggleButton onClick={onToggle} title="Recolher menu (Ctrl+B)">
              <PanelLeftClose size={20} />
            </DesktopToggleButton>
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