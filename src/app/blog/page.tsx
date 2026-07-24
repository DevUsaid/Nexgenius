"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Clock, Calendar, ChevronRight, ArrowRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

// --- CATEGORIES ---
const CATEGORIES = [
  "All", 
  "Agentic AI", 
  "Artificial Intelligence", 
  "AI Automation", 
  "Business Automation", 
  "Workflow Automation", 
  "Web Development", 
  "Enterprise AI", 
  "Case Studies", 
  "Cloud Computing", 
  "Software Engineering", 
  "Cybersecurity"
];

// --- 15 PREMIUM BLOG POSTS ---
const BLOG_POSTS = [
  {
    id: "the-rise-of-agentic-ai",
    title: "The Rise of Agentic AI",
    summary: "Discover how Agentic AI is moving beyond simple chatbots to fully autonomous agents capable of executing complex multi-step workflows without human intervention.",
    category: "Agentic AI",
    date: "July 20, 2026",
    readTime: "6 min read",
    author: "Elena Rodriguez",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "ai-automation-in-modern-business",
    title: "AI Automation in Modern Business",
    summary: "A deep dive into how legacy enterprises are leveraging advanced neural networks to automate supply chain logistics and internal reporting.",
    category: "Business Automation",
    date: "July 18, 2026",
    readTime: "8 min read",
    author: "Michael Chang",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "ai-chatbots-vs-ai-agents",
    title: "AI Chatbots vs AI Agents",
    summary: "Understand the critical differences between conversational chatbots and action-oriented AI agents that actually perform tasks on your behalf.",
    category: "Artificial Intelligence",
    date: "July 15, 2026",
    readTime: "5 min read",
    author: "David Kim",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "custom-web-application-development",
    title: "Custom Web Application Development",
    summary: "How modern web development teams are utilizing AI coding assistants to reduce boilerplate and focus on complex business logic.",
    category: "Web Development",
    date: "July 12, 2026",
    readTime: "10 min read",
    author: "Sarah Jenkins",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "workflow-automation",
    title: "Workflow Automation",
    summary: "The era of manual data entry is over. How to deploy simple agentic scripts to completely automate your weekly reporting workflows.",
    category: "Workflow Automation",
    date: "July 10, 2026",
    readTime: "4 min read",
    author: "Alex Mercer",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "enterprise-ai-solutions",
    title: "Enterprise AI Solutions",
    summary: "A comprehensive guide on transitioning from monolithic, on-premise systems to agile, cloud-native architectures driven by AI automation.",
    category: "Enterprise AI",
    date: "July 08, 2026",
    readTime: "7 min read",
    author: "Jessica Lin",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "ai-security",
    title: "AI Security",
    summary: "Navigating the complex landscape of AI compliance. How to build secure, auditable, and transparent AI models for financial institutions.",
    category: "Cybersecurity",
    date: "July 05, 2026",
    readTime: "9 min read",
    author: "Robert Vance",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "cloud-computing",
    title: "Cloud Computing",
    summary: "Comparing AWS, GCP, and specialized GPU clusters for training large language models efficiently and cost-effectively.",
    category: "Cloud Computing",
    date: "July 02, 2026",
    readTime: "5 min read",
    author: "Elena Rodriguez",
    image: "https://images.unsplash.com/photo-1620825937374-87fc2d6defd2?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "api-integrations",
    title: "API Integrations",
    summary: "Why robust API architecture is critical for deploying enterprise AI. Learn the best practices for secure, high-throughput data pipelines.",
    category: "Software Engineering",
    date: "June 28, 2026",
    readTime: "12 min read",
    author: "David Kim",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "sales-automation",
    title: "Sales Automation",
    summary: "Moving from manual qualification to automated, intent-based lead scoring using multi-modal AI analysis.",
    category: "Business Automation",
    date: "June 25, 2026",
    readTime: "6 min read",
    author: "Michael Chang",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "customer-support-ai",
    title: "Customer Support AI",
    summary: "Case study: How deploying context-aware AI chatbots reduced customer support ticket resolution time by 85%.",
    category: "Case Studies",
    date: "June 22, 2026",
    readTime: "8 min read",
    author: "Sarah Jenkins",
    image: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation",
    summary: "Why the next decade of digital transformation won't be about digitizing records, but about delegating decisions to autonomous systems.",
    category: "Artificial Intelligence",
    date: "June 18, 2026",
    readTime: "7 min read",
    author: "Jessica Lin",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "ai-strategy",
    title: "AI Strategy",
    summary: "Building an effective long-term AI strategy to maintain competitive advantage in a rapidly evolving market.",
    category: "AI Automation",
    date: "June 15, 2026",
    readTime: "11 min read",
    author: "Alex Mercer",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "software-development-with-ai",
    title: "Software Development with AI",
    summary: "Building Resilient AI Pipelines in Production: A technical guide to avoiding model drift and ensuring high availability.",
    category: "Software Engineering",
    date: "June 10, 2026",
    readTime: "6 min read",
    author: "Robert Vance",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "future-of-work-with-ai",
    title: "Future of Work with AI",
    summary: "Exploring the ethical and practical applications of autonomous agents in everyday corporate operations and what it means for the workforce.",
    category: "Enterprise AI",
    date: "June 05, 2026",
    readTime: "9 min read",
    author: "Elena Rodriguez",
    image: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=800&q=80"
  }
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Separate the featured post (latest)
  const featuredPost = BLOG_POSTS[0];
  const regularPosts = BLOG_POSTS.slice(1);

  // Filter posts based on search and category
  const filteredPosts = regularPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || post.summary.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const currentPosts = filteredPosts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

  return (
    <main className="min-h-screen bg-[#050505] pt-32 pb-24 relative overflow-hidden">
      
      {/* Dark background with animated neural network (Neon Mesh) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-primary/10 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-dark/10 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="neon-mesh-bg opacity-30 absolute inset-0"></div>
      </div>

      {/* 1. Page Header */}
      <section className="max-w-7xl mx-auto px-6 text-center mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center space-x-2 bg-surface/80 backdrop-blur-md border border-border-subtle rounded-full px-4 py-2 text-xs font-semibold mb-8 text-white transition-all hover:border-brand-primary">
            <span className="flex h-2 w-2 rounded-full bg-brand-primary animate-pulse"></span>
            <span>Insights & Resources</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif tracking-tight text-white mb-6">
            AI Insights, Automation & <span className="text-brand-primary drop-shadow-[0_0_15px_rgba(57,255,20,0.4)] font-bold">Innovation</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-3xl mx-auto leading-relaxed">
            Explore expert articles, practical guides, industry trends, and case studies on Artificial Intelligence, Agentic AI, Business Automation, Web Development, and Digital Transformation.
          </p>
        </motion.div>
      </section>

      {/* 2. Featured Article Hero */}
      <section className="max-w-7xl mx-auto px-6 mb-24 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card rounded-[2.5rem] border border-border-subtle overflow-hidden flex flex-col md:flex-row group cursor-pointer shadow-2xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(57,255,20,0.15)] hover:border-brand-primary/30"
        >
          <div className="md:w-1/2 min-h-[300px] md:min-h-[450px] relative overflow-hidden">
             <img src={featuredPost.image} alt={featuredPost.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
             
             <div className="absolute top-6 left-6 z-10">
               <span className="text-brand-primary font-mono text-sm tracking-widest uppercase border border-brand-primary/30 px-4 py-2 rounded-full bg-[#050505]/80 backdrop-blur-md shadow-lg">
                 {featuredPost.category}
               </span>
             </div>
          </div>
          
          <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center bg-surface/40 backdrop-blur-sm">
            <div className="flex items-center gap-4 text-xs font-mono text-text-muted mb-6 uppercase tracking-wider">
              <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-brand-primary" /> {featuredPost.date}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-brand-primary" /> {featuredPost.readTime}</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 leading-tight group-hover:text-brand-primary transition-colors">
              {featuredPost.title}
            </h2>
            
            <p className="text-text-secondary text-lg mb-8 leading-relaxed">
              {featuredPost.summary}
            </p>
            
            <div className="flex items-center justify-between mt-auto pt-8 border-t border-border-subtle">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#111] border border-border-subtle flex items-center justify-center text-white font-bold text-sm shadow-inner">
                  {featuredPost.author.charAt(0)}
                </div>
                <span className="text-sm font-medium text-white">{featuredPost.author}</span>
              </div>
              <Button variant="outline" className="rounded-full hover:bg-brand-primary hover:text-black hover:border-brand-primary transition-all shadow-[0_0_15px_rgba(57,255,20,0.1)]">
                Read More <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3. Search & Filters Bar */}
      <section className="max-w-7xl mx-auto px-6 mb-12 relative z-20">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 glass-card p-4 rounded-2xl border border-border-subtle sticky top-24 shadow-lg backdrop-blur-xl bg-surface/60">
          
          {/* Scrollable Categories */}
          <div className="flex overflow-x-auto w-full lg:w-3/4 gap-2 pb-2 lg:pb-0 hide-scrollbar" style={{ scrollbarWidth: 'none' }}>
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => { setActiveCategory(category); setCurrentPage(1); }}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === category 
                    ? 'bg-brand-primary text-black shadow-[0_0_15px_rgba(57,255,20,0.4)] font-bold' 
                    : 'bg-[#111] text-text-secondary hover:bg-surface hover:text-white border border-border-subtle hover:border-brand-primary/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="w-full lg:w-1/4 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-primary" />
            <input 
              type="text" 
              placeholder="Search articles..." 
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
              className="w-full bg-[#0D0D0D] border border-border-subtle rounded-full py-3 pl-11 pr-4 text-sm text-white placeholder:text-text-muted focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all shadow-inner"
            />
          </div>

        </div>
      </section>

      {/* 4. Blog Grid */}
      <section className="max-w-7xl mx-auto px-6 min-h-[500px] relative z-10">
        <AnimatePresence mode="wait">
          {currentPosts.length > 0 ? (
            <motion.div 
              key={`${activeCategory}-${searchQuery}-${currentPage}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {currentPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`} passHref>
                  <motion.article 
                    whileHover={{ y: -8 }}
                    className="glass-card h-full rounded-[2rem] border border-border-subtle overflow-hidden flex flex-col group cursor-pointer transition-all duration-300 hover:shadow-[0_15px_40px_rgba(57,255,20,0.15)] hover:border-brand-primary/30 bg-surface/40"
                  >
                    {/* Realistic Cover Image */}
                    <div className="h-56 w-full relative overflow-hidden border-b border-border-subtle">
                      <img src={post.image} alt={post.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-80"></div>
                      
                      <div className="absolute top-4 left-4 z-10">
                        <span className="px-3 py-1 bg-[#050505]/80 backdrop-blur-md rounded-full border border-border-subtle text-[10px] font-bold text-brand-primary uppercase tracking-widest shadow-lg">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-8 flex flex-col flex-1">
                      <div className="flex items-center gap-4 text-[10px] font-mono text-text-muted mb-4 uppercase tracking-wider">
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3 text-brand-primary/70" /> {post.date}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-brand-primary/70" /> {post.readTime}</span>
                      </div>
                      
                      <h3 className="text-2xl font-serif text-white mb-3 group-hover:text-brand-primary transition-colors leading-snug">
                        {post.title}
                      </h3>
                      
                      <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-1">
                        {post.summary}
                      </p>
                      
                      <div className="flex items-center justify-between pt-6 border-t border-border-subtle mt-auto">
                        <span className="text-xs font-medium text-text-muted">{post.author}</span>
                        <Button variant="ghost" className="p-0 h-auto hover:bg-transparent text-brand-primary text-sm font-semibold flex items-center group-hover:translate-x-1 transition-transform">
                          Read More <ChevronRight className="w-4 h-4 ml-0.5" />
                        </Button>
                      </div>
                    </div>
                  </motion.article>
                </Link>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-24 glass-card rounded-3xl border border-border-subtle bg-surface/30"
            >
              <Search className="w-12 h-12 text-brand-primary mx-auto mb-4 opacity-50" />
              <h3 className="text-2xl font-serif text-white mb-2">No articles found</h3>
              <p className="text-text-secondary">Try adjusting your search or category filters.</p>
              <Button 
                variant="outline" 
                onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
                className="mt-6 rounded-full hover:border-brand-primary hover:text-brand-primary"
              >
                Clear Filters
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pagination Controls */}
        {totalPages > 1 && currentPosts.length > 0 && (
          <div className="flex justify-center items-center gap-4 mt-16">
            <Button 
              variant="outline" 
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="rounded-full w-28 hover:border-brand-primary hover:text-brand-primary transition-all shadow-[0_0_10px_rgba(0,0,0,0.2)]"
            >
              Previous
            </Button>
            <span className="text-sm font-mono text-text-muted px-4 py-2 glass-card rounded-full">
              Page <span className="text-white font-bold">{currentPage}</span> of {totalPages}
            </span>
            <Button 
              variant="outline" 
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="rounded-full w-28 hover:border-brand-primary hover:text-brand-primary transition-all shadow-[0_0_10px_rgba(0,0,0,0.2)]"
            >
              Next
            </Button>
          </div>
        )}
      </section>

      {/* 5. Newsletter Subscription Section */}
      <section className="max-w-5xl mx-auto px-6 mt-32 relative z-10">
        <div className="glass-card rounded-[3rem] p-12 md:p-20 text-center border border-border-subtle relative overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-all hover:border-brand-primary/30">
          <div className="absolute inset-0 bg-brand-primary/5 blur-[80px]"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise-pattern-with-subtle-cross-lines.png')] opacity-[0.03]"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-brand-primary/10 flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(57,255,20,0.2)]">
              <Mail className="w-8 h-8 text-brand-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Stay Ahead with <span className="text-brand-primary drop-shadow-[0_0_15px_rgba(57,255,20,0.4)]">AI Insights</span></h2>
            <p className="text-text-secondary text-lg mb-10 leading-relaxed">
              Get the latest articles, AI trends, automation strategies, and technology updates delivered directly to your inbox.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 bg-[#080808] border border-border-subtle rounded-full px-6 py-4 text-sm text-white placeholder:text-text-muted focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all shadow-inner"
                required
              />
              <Button type="submit" className="rounded-full px-8 py-4 h-auto font-bold shadow-[0_0_20px_rgba(57,255,20,0.2)] hover:shadow-[0_0_40px_rgba(57,255,20,0.5)] bg-brand-primary text-black hover:bg-brand-accent transition-all">
                Subscribe <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
            <p className="text-xs text-text-muted mt-6 uppercase tracking-wider font-mono">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>

      {/* 6. CTA Section */}
      <section className="max-w-7xl mx-auto px-6 mt-32 relative z-10">
        <div className="bg-[#111] rounded-[3rem] border border-brand-primary/20 p-12 md:p-16 flex flex-col items-center justify-center text-center shadow-[0_0_50px_rgba(57,255,20,0.05)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-primary/10 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] bg-brand-dark/20 blur-[100px] rounded-full pointer-events-none"></div>
          
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 relative z-10">
            Ready to Build <span className="text-brand-primary">Intelligent AI Solutions?</span>
          </h2>
          <p className="text-xl text-text-secondary mb-10 max-w-2xl relative z-10">
            Let's turn these insights into reality. Automate your workflow, scale your operations, and lead your industry with custom AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 relative z-10">
            <Link href="/contact">
              <Button size="lg" className="rounded-full font-bold px-8 shadow-[0_0_30px_rgba(57,255,20,0.3)] hover:shadow-[0_0_50px_rgba(57,255,20,0.5)] bg-brand-primary text-black hover:bg-brand-accent w-full sm:w-auto">
                Book Consultation
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="rounded-full font-bold px-8 hover:bg-white/5 border-border-subtle text-white w-full sm:w-auto hover:border-brand-primary">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
