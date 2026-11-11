import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export interface PostData {
  slug: string;
  title: string;
  date: string;
  formattedDate: string; // Já formatada em DD/MM/AAAA sem erro de fuso
  isPinned?: boolean;
  content: string;
}

export function getAllPosts(): PostData[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPosts = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const stats = fs.statSync(fullPath);

      const { data, content } = matter(fileContents);

      const title =
        data.title ||
        slug
          .replace(/^\d+-/, '')
          .replace(/-/g, ' ')
          .replace(/\b\w/g, (l) => l.toUpperCase());

      // Tratamento da Data sem sofrer com fuso horário
      let dateIso = '';
      let formattedDate = '';

      if (data.date) {
        // Se veio do YAML (string ou objeto Date)
        const dateStr =
          data.date instanceof Date
            ? data.date.toISOString().split('T')[0]
            : String(data.date).split('T')[0];

        const [year, month, day] = dateStr.split('-');
        formattedDate = `${day}/${month}/${year}`;
        // Horário do meio-dia (12:00) para garantir ordenação correta
        dateIso = `${dateStr}T12:00:00.000Z`;
      } else {
        // Fallback: data do arquivo no sistema operacional
        const mtime = stats.mtime;
        const day = String(mtime.getDate()).padStart(2, '0');
        const month = String(mtime.getMonth() + 1).padStart(2, '0');
        const year = mtime.getFullYear();
        formattedDate = `${day}/${month}/${year}`;
        dateIso = mtime.toISOString();
      }

      const isPinned = data.pinned === true || slug.toLowerCase().includes('readme');

      return {
        slug,
        title,
        date: dateIso,
        formattedDate,
        isPinned,
        content,
      };
    });

  return allPosts.sort((a, b) => {
    if (a.isPinned && !b.isPinned) return -1;
    if (!a.isPinned && b.isPinned) return 1;

    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}