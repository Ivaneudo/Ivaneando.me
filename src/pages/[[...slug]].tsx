import React, { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getAllPosts, PostData } from '@/lib/posts';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { MarkdownViewer } from '@/components/MarkdownViewer/MarkdownViewer';
import { MainContent, PageLayout } from '@/components/PageLyout/PageLyout';
import { MobileHeader } from '@/components/MobileHeader/MobileHeader';

interface PageProps {
  posts: PostData[];
  activeSlug: string;
}

interface HomeProps extends PageProps {
  onToggleTheme: () => void;
  isDark: boolean;
}

export default function Home({ posts, activeSlug, onToggleTheme, isDark }: HomeProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 768) setSidebarOpen(true);
  }, []);

  const toggleSidebar = useCallback(() => setSidebarOpen((open) => !open), []);
  const closeSidebar = useCallback(() => setSidebarOpen(false), []);

  const currentPost = posts.find((post) => post.slug === activeSlug) || posts[0];
  const pageTitle =
    currentPost && !currentPost.isPinned ? `${currentPost.title} — Ivaneando.me` : 'Ivaneando.me';

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <PageLayout>
        <MobileHeader onMenuClick={() => setSidebarOpen(true)} />

        <Sidebar
          posts={posts}
          selectedSlug={currentPost?.slug || ''}
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

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();

  return {
    paths: [
      { params: { slug: [] } },
      ...posts.map((post) => ({ params: { slug: [post.slug] } })),
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PageProps> = async ({ params }) => {
  const posts = getAllPosts();
  const segments = params?.slug;
  const requested = Array.isArray(segments) && segments.length > 0 ? segments.join('/') : '';
  const pinned = posts.find((post) => post.isPinned) ?? posts[0];

  if (!requested) {
    return {
      props: {
        posts,
        activeSlug: pinned?.slug ?? '',
      },
    };
  }

  const post = posts.find((item) => item.slug === requested);

  if (!post) {
    return { notFound: true };
  }

  if (post.isPinned) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      posts,
      activeSlug: post.slug,
    },
  };
};
