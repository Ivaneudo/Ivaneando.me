import React from 'react';
import { Paintbrush, X, FileText } from 'lucide-react';
import { PostData } from '@/lib/posts';
import { 
  ActionButtons, 
  Aside, 
  CloseButton, 
  Header, 
  IconButton, 
  Logo, 
  NavItem, 
  NavList, 
  Overlay 
} from './Styles';

interface SidebarProps {
  posts: PostData[];
  selectedSlug: string;
  onSelectPost: (slug: string) => void;
  isOpen: boolean;
  onClose: () => void;
  onToggleTheme: () => void;
  isDark: boolean;
}

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