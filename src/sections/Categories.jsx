
import { motion } from 'framer-motion';
// ফিন্যান্সিয়াল ক্যাটাগরির জন্য প্রফেশনাল আইকন
import { 
  FaChartPie, 
  FaCalculator, 
  FaHandHoldingDollar, 
  FaFileInvoiceDollar, 
  FaArrowTrendUp, 
  FaShieldVirus  
} from "react-icons/fa6";
import Container from '../shared/Container';

const financeCategories = [
  { 
    id: 1, 
    name: "Investment Analysis", 
    icon: <FaArrowTrendUp />, 
    desc: "Data-driven insights to maximize your portfolio growth and market returns.",
    stats: "500+ Expert Gigs"
  },
  { 
    id: 2, 
    name: "Tax & Compliance", 
    icon: <FaCalculator />, 
    desc: "Stay compliant with local and international tax laws for your freelance business.",
    stats: "300+ Consultants"
  },
  { 
    id: 3, 
    name: "Wealth Management", 
    icon: <FaChartPie />, 
    desc: "Long-term financial planning and asset allocation for high-net-worth individuals.",
    stats: "150+ Advisors"
  },
  { 
    id: 4, 
    name: "Freelance Invoicing", 
    icon: <FaFileInvoiceDollar />, 
    desc: "Streamlined billing solutions to get paid faster by international clients.",
    stats: "Used by 10k+ Pros"
  },
  { 
    id: 5, 
    name: "Risk Management", 
    icon: <FaShieldVirus  />, 
    desc: "Mitigate financial risks and protect your digital assets and investments.",
    stats: "Secure Solutions"
  },
  { 
    id: 6, 
    name: "Startup Funding", 
    icon: <FaHandHoldingDollar />, 
    desc: "Connect with investors and learn how to raise seed capital for your venture.",
    stats: "200+ Active VCs"
  },
];

const Categories = () => {
  return (
    <>
      <Container>
        {/* Header Section */}
        <div className="text-center space-y-4">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary
              inline-block
              bg-[#eeedfc] dark:bg-[#1e1d2a]

              border border-primary

            dark:text-gray-300

              w-fit px-4 py-2 rounded-full tracking-widest uppercase text-sm font-medium"
          >
            Our Expertise
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white"
          >
            Financial <span className="text-primary">Ecosystem</span>
          </motion.h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 gap-8">
          {financeCategories.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.1 }}
              className="relative group p-8 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-transparent hover:border-primary/20 hover:bg-white dark:hover:bg-gray-800 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-2xl"
            >
              {/* Vertical Line on Hover */}
              <div className="absolute top-0 left-0 w-[3px] h-0 bg-primary group-hover:h-full transition-all duration-700 ease-in-out" />

              <div className="space-y-5">
                {/* Icon with Spin Once Effect */}
                <div className="text-5xl text-primary w-fit group-hover:[animation:spin_0.8s_ease-in-out_1]">
                  {item.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.desc}
                </p>

                <div className="pt-4 flex items-center justify-between border-t border-gray-200 dark:border-gray-700">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-tighter">
                    {item.stats}
                  </span>
                  <button className="text-primary font-bold text-sm hover:underline">
                    Explore →
                  </button>
                </div>
              </div>

              {/* Decorative Number */}
              <span className="absolute -bottom-2 -right-2 text-8xl font-black text-gray-200/40 dark:text-gray-800/20 group-hover:text-primary/5 transition-colors pointer-events-none">
                {index + 1}
              </span>
            </motion.div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Categories;