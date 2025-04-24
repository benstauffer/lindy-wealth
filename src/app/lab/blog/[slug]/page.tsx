import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { Metadata } from 'next';

// Define paths
const postsDirectory = path.join(process.cwd(), 'src/content/blog');

// Define the structure for the post data including mdxSource
interface PostData {
  slug: string;
  frontmatter: { [key: string]: any };
  mdxSource: Awaited<ReturnType<typeof serialize>>; // Type for serialized MDX
}

// Function to get post data by slug (add return type)
async function getPostData(slug: string): Promise<PostData | null> {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    // Use gray-matter to parse the post metadata section
    const { data, content } = matter(fileContents);

    // Serialize the MDX content
    const mdxSource = await serialize(content, {
      parseFrontmatter: false
    });

    // Combine the data with the slug and serialized content
    return {
      slug,
      frontmatter: data,
      mdxSource,
    };
  } catch (err) {
    // console.error(`Error reading or serializing post ${slug}:`, err);
    return null;
  }
}

// Define the page component props
interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// Generate static paths for all posts at build time
export async function generateStaticParams() {
  try {
    const filenames = fs.readdirSync(postsDirectory);
    const slugs = filenames
      .filter((filename) => filename.endsWith('.mdx')) // Ensure we only process .mdx files
      .map((filename) => ({
        slug: filename.replace(/\.mdx$/, ''),
      }));
    return slugs;
  } catch (error) {
    console.error('Error reading posts directory for generateStaticParams:', error);
    return []; // Return empty array on error
  }
}

// Revalidate data at most every hour (optional, adjust as needed)
export const revalidate = 3600;

// The page component
export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostData(params.slug);

  if (!post) {
    notFound(); // Trigger a 404 page if the post isn't found
  }

  return (
    <div className="mx-auto max-w-sm px-4 py-8">
      <article>
        {/* Display Title from frontmatter */}
        {post.frontmatter.title && (
           <h1 className="mb-4 text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
             {post.frontmatter.title}
           </h1>
        )}
        {/* Display Date from frontmatter if available */}
        {post.frontmatter.date && (
          <time dateTime={new Date(post.frontmatter.date).toISOString()} className="block text-sm text-zinc-500 dark:text-zinc-400 mb-8">
            {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        )}
        {/* Render the serialized MDX content */}
        {/* Apply prose styling for basic article formatting */}
        <div className="prose dark:prose-invert">
            <MDXRemote {...post.mdxSource} />
        </div>
      </article>
    </div>
  );
}

// Generate metadata (Refactored)
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const slug = params.slug; // Explicitly get slug

  if (!slug) {
    // Should not happen with generateStaticParams but good practice
    return {
      title: 'Post Not Found',
    };
  }

  // Await the data fetching using the slug
  const post = await getPostData(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  // Construct the metadata object
  const metadata: Metadata = {
    title: post.frontmatter.title || 'Blog Post',
    description: post.frontmatter.description || 'Read this blog post from Lindy Wealth.', // Add description if available, or a default
  };

  return metadata; // Return the constructed metadata
} 