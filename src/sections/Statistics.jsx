
import { FaUsers, FaGlobe, FaBriefcase, FaAward } from "react-icons/fa6";
import Container from '../shared/Container';

const stats = [
  { id: 1, label: "Active Freelancers", value: "50k+", icon: <FaUsers />, color: "text-blue-500" },
  { id: 2, label: "Global Clients", value: "120+", icon: <FaGlobe />, color: "text-emerald-500" },
  { id: 3, label: "Projects Completed", value: "85k+", icon: <FaBriefcase />, color: "text-secondary" },
  { id: 4, label: "Success Rate", value: "99.9%", icon: <FaAward />, color: "text-primary" },
];

const Statistics = () => {
  return (
    <div className="bg-white dark:bg-[#0b0b0f] py-16 border-y border-gray-100 dark:border-gray-800">
      <Container>
        <div className="flex flex-wrap justify-between gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center space-y-3 group">
              <div className={`text-4xl ${stat.color} flex justify-center group-hover:scale-110 duration-300`}>
                {stat.icon}
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white">
                {stat.value}
              </h2>
              <p className="text-gray-500 dark:text-gray-400 font-medium uppercase tracking-widest text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Statistics;