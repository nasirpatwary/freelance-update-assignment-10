import { motion } from 'framer-motion';
import BlogCard from './BlogCard';
import Container from '../shared/Container';

// 2. Main Blog Page
const blogPosts = [
  {
    title: "The Future of Decentralized Finance in 2026",
    excerpt: "Explore how blockchain is reshaping traditional banking structures and what it means for your portfolio.",
    category: "Market Trends",
    date: "Jan 22, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Mastering Compound Interest Strategies",
    excerpt: "A deep dive into the math of long-term wealth building and why timing matters more than capital.",
    category: "Education",
    date: "Jan 18, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Protecting Assets from Global Volatility",
    excerpt: "How to hedge your investments against sudden market shifts using diversified asset classes.",
    category: "Risk Management",
    date: "Jan 12, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=500&auto=format&fit=crop",
  }
];

const BlogPage = () => {
  
  return (
    <>
    <title>Financial Blogs | Page</title>
    <div className="transition-colors duration-500 min-h-[calc(100vh-352px)] py-10 mb-16">
      <Container>
        
        {/* Header Area */}
        <div className='space-y-4'>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white"
          >
            Insights & <span className="text-indigo-600 dark:text-indigo-400">Analysis</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 dark:text-slate-400"
          >
            Expert perspectives on the economy, investment strategies, and the evolving financial landscape.
          </motion.p>
        </div>

        {/* Blog Grid */}
        <div className="mt-12 space-y-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} post={post} index={index} />
          ))}
        </div>
      </Container>
    </div>
    </>
  );
};

export default BlogPage;