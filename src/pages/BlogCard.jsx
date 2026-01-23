const BlogCard = ({ post, index }) => {
  return (
    <div
      key={index}
      className="group bg-white dark:bg-gray-950 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-800"
    >
      {/* Image Section */}
      <div className="relative h-60 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-110 duration-700"
        />
      </div>

      <div className="space-y-2 p-6">
        <span className="text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest">
          {post.category}
        </span>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {post.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
          {post.excerpt}
        </p>
        <div className="flex items-center gap-4 text-sm font-medium text-slate-400">
          <span>{post.date}</span>
          <span className="w-1 h-1 bg-slate-300 dark:bg-slate-700 rounded-full"></span>
          <span>{post.readTime}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
