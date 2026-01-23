import { FaArrowRight } from "react-icons/fa6";
import Container from '../shared/Container';
import { Link } from "react-router";

const blogs = [
  {
    id: 1,
    category: "Marketplace",
    date: "Oct 12, 2025",
    title: "How to Land Your First $1k Client on Upwork",
    description: "Learn the exact proposal strategy that high-earning freelancers use to stand out in a crowded market.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 2,
    category: "Finance",
    date: "Nov 05, 2025",
    title: "5 Tax Saving Tips for Self-Employed Pros",
    description: "Managing taxes can be a nightmare for freelancers. Discover how to keep more of your hard-earned money.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 3,
    category: "Productivity",
    date: "Dec 20, 2025",
    title: "Best Tools to Manage Multiple Freelance Projects",
    description: "From Trello to Notion, we review the top project management tools to keep your workflow organized.",
    image: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=500&auto=format&fit=crop",
  },
];

const Blog = () => {
  return (
    <>
      <Container>
        {/* Section Header */}
        <div className="flex flex-wrap justify-between md:items-end gap-6">
          <div className="space-y-4">
            <p className="inline-block

              bg-[#eeedfc] dark:bg-[#1e1d2a]

              border border-primary

            dark:text-gray-300

              w-fit px-4 py-2 rounded-full

              text-sm font-medium tracking-widest uppercase text-primary">
              Resources & Insights
            </p>
            <h2 className="text-2xl md:text-5xl leading-[1.1] font-bold text-gray-900 dark:text-white max-w-[20ch]">
              Latest From Our <span className="text-primary">Freelance</span> Blog
            </h2>
          </div>
          <Link 
            to="/blog" 
            className="flex items-center gap-2 text-lg font-semibold text-primary hover:gap-4 duration-300"
          >
            View All Articles <FaArrowRight />
          </Link>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 gap-6">
          {blogs.map((blog) => (
            <article 
              key={blog.id} 
              className="group bg-white dark:bg-[#1e1d2a] rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-800"
            >
              {/* Image Section */}
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover group-hover:scale-110 duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 dark:bg-black/80 backdrop-blur-md text-primary text-xs font-bold px-3 py-1.5 rounded-full uppercase shadow-sm">
                    {blog.category}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 space-y-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {blog.date}
                </p>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary duration-300 line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 line-clamp-3">
                  {blog.description}
                </p>
                
                <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                  <button 
                    className="flex items-center gap-2 font-bold text-gray-900 dark:text-white group-hover:text-primary duration-300"
                  >
                    Read Full Story 
                    <FaArrowRight className="-rotate-45 group-hover:rotate-0 duration-300" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Blog;