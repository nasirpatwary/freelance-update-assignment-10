import { FaShieldVirus, FaBolt, FaLayerGroup } from "react-icons/fa6";
import Container from "../shared/Container";

const features = [
  { title: "Ultra Secure", desc: "Military-grade encryption for all your financial data.", icon: <FaShieldVirus /> },
  { title: "Fast Execution", desc: "Real-time processing for instant global transfers.", icon: <FaBolt /> },
  { title: "Unified Dashboard", desc: "Manage all your assets from one simple interface.", icon: <FaLayerGroup /> },
];

const Features = () => (
  <>
    <Container>
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-5xl font-bold dark:text-white">Why Choose <span className="text-primary">Us</span></h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div key={i} className="group relative p-10 bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-sm">
            <div className="absolute top-0 left-0 w-[3px] h-0 bg-primary group-hover:h-full transition-all duration-500" />
            <div className="text-5xl text-primary mb-6 group-hover:[animation:spin_0.8s_ease-in-out_1] w-fit">
              {f.icon}
            </div>
            <h3 className="text-2xl font-bold dark:text-white mb-4">{f.title}</h3>
            <p className="text-gray-500 dark:text-gray-400">{f.desc}</p>
          </div>
        ))}
      </div>
    </Container>
  </>
);

export default Features;