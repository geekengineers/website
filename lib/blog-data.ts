import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  readTime: string;
  tags: string[];
}

const contentDirectory = path.join(process.cwd(), "content");

// Read all file names once, cache it for efficiency if needed
const fileNames = fs
  .readdirSync(contentDirectory)
  .filter((f) => f.endsWith(".mdx"));

// Get metadata only for all posts (no content body)
export function getBlogPosts(): Omit<BlogPost, "content">[] {
  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "");
    const fullPath = path.join(contentDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title ?? "",
      excerpt: data.excerpt ?? "",
      author: data.author ?? "",
      publishDate: data.publishDate ?? "",
      readTime: data.readTime ?? "",
      tags: data.tags ?? [],
    };
  });

  return posts.sort(
    (a, b) =>
      new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime(),
  );
}

// Get full post content including serialized MDX
export async function getBlogPost(slug: string): Promise<BlogPost | undefined> {
  const fileName = `${slug}.mdx`;
  const fullPath = path.join(contentDirectory, fileName);

  if (!fs.existsSync(fullPath)) return undefined;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title ?? "",
    excerpt: data.excerpt ?? "",
    author: data.author ?? "",
    publishDate: data.publishDate ?? "",
    readTime: data.readTime ?? "",
    tags: data.tags ?? [],
    content,
  };
}
