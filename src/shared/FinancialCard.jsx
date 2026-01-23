import { Rating } from '@smastrom/react-rating';
import { motion } from 'framer-motion';
import { RiMapPinFill } from "react-icons/ri";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { Link } from 'react-router';

const FinancialCard = ({ item }) => {
  const {image, title, status, rating, description, location, amount, date, _id} = item || {}
    return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col h-full w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
    >
      {/* 1. Image Section */}
      <div className="relative h-48 w-full overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 duration-700"
        />
        <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary dark:text-gray-300 shadow-sm">
          {status}
        </div>
      </div>

      {/* 2. Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 title={title} className="text-xl font-bold text-slate-900 dark:text-white line-clamp-1">
            {title}
          </h3>
          <Rating style={{width: 80}} value={rating} readOnly />
        </div>

        <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-2 mb-4">
          {description}
        </p>

        {/* 3. Meta Info Grid */}
        <div className="grid grid-cols-2 gap-y-3 gap-x-2 mb-6 mt-auto border-t border-slate-100 dark:border-slate-800 pt-4">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <RiMapPinFill size={14} className="text-primary" />
            <span title={location} className="truncate">{location}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <IoCalendarNumberOutline size={14} className="text-primary" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
            <span>${amount.toLocaleString()}</span>
          </div>
        </div>

        {/* 4. Action Button */}
         <Link to={`/transaction-details/${_id}`}
          className="btn btn-primary px-10 rounded-xl text-white font-bold transition-all hover:scale-105 active:scale-95"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
};

export default FinancialCard