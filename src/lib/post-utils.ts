// lib/post-utils.ts
export interface PostData {
  slug: string;
  title: string;
  date: string;
  formattedDate: string;
  isPinned?: boolean;
  content: string;
}

export function postPath(post: PostData): string {
  return `/${post.slug}`;
}