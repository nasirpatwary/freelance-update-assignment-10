import { motion } from "framer-motion";
import { useParams } from "react-router";
import Container from "../shared/Container";
import { 
  IoGlobeOutline, 
  IoInformationCircleOutline 
} from "react-icons/io5"; // Premium IonIcons
import { 
  HiOutlineShieldCheck, 
} from "react-icons/hi2"; // Clean HeroIcons
import LoadingSpinner from "./LoadingSpinner";
import useDetailsTransaction from "../hooks/useDetailsTransaction";
import ErrorPage from "../pages/ErrorPage";
import FinancialCard from "./FinancialCard";
import { Rating } from "@smastrom/react-rating";
import DetailsSkeleton from "./DetailsSkeleton";

const TransactionDetails = () => {
  const { id } = useParams();
  const [transactions, isLoading, isError] = useDetailsTransaction(id)
  const {image, title, amount, category, description, rating, location, status } = transactions || {}
  
  if (isLoading) return <DetailsSkeleton />
  if(isError) return <ErrorPage />
  return (
    <div className="bg-white dark:bg-slate-950 transition-colors duration-500 py-10">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* --- Media Gallery --- */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="aspect-video group rounded-3xl overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl"
            >
              <img 
                src={image} 
                className="w-full h-full object-cover group-hover:scale-110 duration-700 transition-all"
                alt={title}
              />
            </motion.div>
          {/* --- Content & Key Info --- */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="flex items-center gap-2 text-primary dark:text-primary font-bold uppercase tracking-widest text-xs">
                <HiOutlineShieldCheck size={16} /> Verified {category}
              </span>
              <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mt-3 mb-4 leading-tight">
                {title}
              </h1>
              
              <div className="flex items-center gap-6 mb-8 text-slate-600 dark:text-slate-400 font-medium">
                <div className="flex items-center gap-1.5">
                  <Rating value={rating} style={{width: 80}} readOnly /> 
                  <span className="text-slate-900 dark:text-slate-200 font-bold">{rating || "4.9"}</span>
                  <span className="text-sm">(2.4k Reviews)</span>
                </div>
                <div className="flex items-center gap-1.5 text-sm">
                  <IoGlobeOutline size={18} className="text-primary" /> 
                  {location}
                </div>
              </div>

              {/* Amount Highlight Card */}
              <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 grid grid-cols-2 gap-8 mb-8">
                <div>
                  <p className="text-[10px] uppercase text-slate-500 dark:text-slate-400 font-bold tracking-tighter">Market Value</p>
                  <p className="text-3xl font-black text-slate-900 dark:text-white mt-1">
                    ${amount?.toLocaleString()}
                  </p>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-[10px] uppercase text-slate-500 dark:text-slate-400 font-bold tracking-tighter">Current Status</p>
                  <div className="mt-1">
                    <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-lg text-xs font-bold uppercase">
                      {status || "Available"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description Section */}
              <div className="space-y-4 mb-10">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <IoInformationCircleOutline size={22} className="text-primary" />
                  Asset Overview
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {description || "Detailed analysis of this financial instrument is conducted periodically to ensure maximum security and transparency for all stakeholders involved."}
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Suggested Section Placeholder */}
        <div className="mt-24">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Related Opportunities</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
             <FinancialCard item={transactions} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TransactionDetails;