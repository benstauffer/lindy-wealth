import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { Metadata } from 'next';

// Define paths
const postsDirectory = path.join(process.cwd(), 'src/content/blog');

// Define the structure for post metadata
interface PostMetadata {
  slug: string;
  frontmatter: {
    [key: string]: any; // Allow any frontmatter fields
    title?: string;
    date?: string;
    description?: string; // Optional description
  };
}

// Function to get all post metadata
async function getAllPostsMetadata(): Promise<PostMetadata[]> {
  try {
    const filenames = fs.readdirSync(postsDirectory);

    const posts = filenames
      .filter((filename) => filename.endsWith('.mdx')) // Only include .mdx files
      .map((filename): PostMetadata | null => {
        try {
          // Read markdown file as string
          const fullPath = path.join(postsDirectory, filename);
          const fileContents = fs.readFileSync(fullPath, 'utf8');

          // Use gray-matter to parse the post metadata section
          const { data } = matter(fileContents);

          // Extract slug from filename
          const slug = filename.replace(/\.mdx$/, '');

          // Basic validation for essential data
          if (!data.title || !data.date) {
             console.warn(`Post ${filename} is missing title or date in frontmatter.`);
             // Optionally skip this post or provide defaults
          }

          // Return metadata and slug
          return {
            slug,
            frontmatter: data,
          };
        } catch (readError) {
            console.error(`Error processing file ${filename}:`, readError);
            return null; // Skip files that cause errors during processing
        }
      })
      .filter((post): post is PostMetadata => post !== null) // Filter out null values from errors
      // Sort posts by date (most recent first)
      .sort((postA, postB) => {
        const dateA = postA.frontmatter.date ? new Date(postA.frontmatter.date).getTime() : 0;
        const dateB = postB.frontmatter.date ? new Date(postB.frontmatter.date).getTime() : 0;
        // Ensure valid dates are sorted correctly, put posts without dates at the end
        if (dateB === 0) return -1;
        if (dateA === 0) return 1;
        return dateB - dateA;
      });

    return posts;
  } catch (error) {
    console.error('Error reading posts directory for metadata:', error);
    return []; // Return empty array on error
  }
}

// The main blog listing page component
export default async function BlogIndexPage() {
  const posts = await getAllPostsMetadata();

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          From the blog
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          All the latest news, insights, and updates from the Lindy Wealth team.
        </p>
      </header>

      <div className="mt-12 sm:mt-16">
        {posts.length === 0 ? (
          <p className="text-zinc-600 dark:text-zinc-400">No blog posts found yet. Check back soon!</p>
        ) : (
          <div className="space-y-16">
            {posts.map((post) => (
              <article key={post.slug} className="group relative flex flex-col items-start">
                {/* Post Link Area */}
                <Link href={`/lab/blog/${post.slug}`} className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></Link>
                {/* Date */}
                {post.frontmatter.date && (
                   <time className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5" dateTime={new Date(post.frontmatter.date).toISOString()}>
                     <span className="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
                       <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
                     </span>
                     {new Date(post.frontmatter.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                   </time>
                )}
                 {/* Title */}
                <h2 className="relative z-10 text-2xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                  <Link href={`/lab/blog/${post.slug}`}>
                    {post.frontmatter.title || 'Untitled Post'}
                  </Link>
                </h2>
                 {/* Description (Optional) */}
                 {post.frontmatter.description && (
                   <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                     {post.frontmatter.description}
                   </p>
                 )}
                 {/* Read More Link */}
                <div aria-hidden="true" className="relative z-10 mt-4 flex items-center text-sm font-medium text-primary-600 dark:text-primary-400 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition">
                  Read article
                   <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="ml-1 h-4 w-4 stroke-current"><path d="M6.75 5.75 9.25 8l-2.5 2.25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// Metadata for the blog index page
export const metadata: Metadata = {
  title: 'Blog | Lindy Wealth',
  description: 'Read the latest articles, news, insights, and updates from the Lindy Wealth team.',
};
