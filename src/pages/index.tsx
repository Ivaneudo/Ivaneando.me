import React, { useState } from 'react';
import Head from 'next/head';
import styled from '@emotion/styled';
import { Menu } from 'lucide-react';
import { GetStaticProps } from 'next';
import { getAllPosts, PostData } from '@/lib/posts';
import { Sidebar } from '@/components/Sidebar';
import { MarkdownViewer } from '@/components/MarkdownViewer';

const LayoutWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.background};
`;

const MainContent = styled.main`
  flex: 1;
  margin-left: 280px;
  padding: 2.5rem 2rem;
  min-height: 100vh;

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 1.5rem 1rem;
    padding-top: 4.5rem;
  }
`;

const MobileHeader = styled.div`
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

const MobileMenuButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
`;

const MobileLogo = styled.span`
  margin-left: 0.75rem;
  font-weight: 700;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.text};

  span {
    color: ${({ theme }) => theme.primary};
  }
`;

interface HomeProps {
  posts: PostData[];
  onToggleTheme: () => void;
  isDark: boolean;
}

export default function Home({ posts, onToggleTheme, isDark }: HomeProps) {
  // O primeiro arquivo (00-readme) é o padrão exibido
  const [selectedSlug, setSelectedSlug] = useState<string>(posts[0]?.slug || '');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const currentPost = posts.find((p) => p.slug === selectedSlug) || posts[0];

  return (
    <>
      <Head>
        <title>Ivaneando.me</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <LayoutWrapper>
        <MobileHeader>
          <MobileMenuButton onClick={() => setSidebarOpen(true)}>
            <Menu size={24} />
          </MobileMenuButton>
          <MobileLogo>
            Ivaneando<span>.me</span>
          </MobileLogo>
        </MobileHeader>

        <Sidebar
          posts={posts}
          selectedSlug={selectedSlug}
          onSelectPost={(slug) => setSelectedSlug(slug)}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          onToggleTheme={onToggleTheme}
          isDark={isDark}
        />

        <MainContent>
          {currentPost ? (
            <MarkdownViewer content={currentPost.content} />
          ) : (
            <p>Nenhum post encontrado na pasta posts/.</p>
          )}
        </MainContent>
      </LayoutWrapper>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts();
  return {
    props: {
      posts,
    },
  };
};