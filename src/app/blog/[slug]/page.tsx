import fs from 'fs';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const blogDir = path.join(process.cwd(), 'src', 'content', 'blog');
  if (!fs.existsSync(blogDir)) return [];
  
  const files = fs.readdirSync(blogDir);
  return files.map((file) => ({
    slug: file.replace('.mdx', ''),
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const filePath = path.join(process.cwd(), 'src', 'content', 'blog', `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContent = fs.readFileSync(filePath, 'utf8');

  return (
    <main className="pt-32 pb-24 px-6 min-h-screen relative overflow-hidden">
      <article className="max-w-3xl mx-auto prose prose-invert prose-emerald prose-headings:font-serif prose-h1:text-4xl prose-h1:text-white prose-p:text-text-secondary prose-a:text-brand-accent">
        <h1 className="capitalize mb-8 text-5xl font-serif text-white text-center">
          {slug.replace(/-/g, ' ')}
        </h1>
        <div className="glass-card p-10 rounded-[2.5rem] border border-border-subtle bg-surface/20">
          <MDXRemote source={fileContent} />
        </div>
      </article>
    </main>
  );
}
