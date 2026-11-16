import React, { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { getAllPosts, PostData } from '@/lib/posts';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { MarkdownViewer } from '@/components/MarkdownViewer/MarkdownViewer';
import { MainContent, PageLayout } from '@/components/PageLyout/PageLyout';
import { MobileHeader } from '@/components/MobileHeader/MobileHeader';

interface HomeProps {
  posts: PostData[];
  onToggleTheme: () => void;
  isDark: boolean;
}

export default function Home({ posts, onToggleTheme, isDark }: HomeProps) {
  const [selectedSlug, setSelectedSlug] = useState<string>(posts[0]?.slug || '');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 768) setSidebarOpen(true);
  }, []);

  const toggleSidebar = useCallback(() => setSidebarOpen((open) => !open), []);
  const closeSidebar = useCallback(() => setSidebarOpen(false), []);

  const currentPost = posts.find((p) => p.slug === selectedSlug) || posts[0];

  return (
    <>
      <Head>
        <title>Ivaneando.me</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <PageLayout>
        <MobileHeader onMenuClick={() => setSidebarOpen(true)} />

        <Sidebar
          posts={posts}
          selectedSlug={selectedSlug}
          onSelectPost={(slug) => setSelectedSlug(slug)}
          isOpen={sidebarOpen}
          onClose={closeSidebar}
          onToggle={toggleSidebar}
          onToggleTheme={onToggleTheme}
          isDark={isDark}
        />

        <MainContent isSidebarOpen={sidebarOpen}>
          {currentPost ? (
            <MarkdownViewer content={currentPost.content} />
          ) : (
            <p>Nenhum post encontrado na pasta posts/.</p>
          )}
        </MainContent>
      </PageLayout>
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