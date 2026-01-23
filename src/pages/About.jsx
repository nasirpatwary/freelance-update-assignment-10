import { motion } from 'framer-motion';
import Container from '../shared/Container';

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    // transition-colors duration-500 ensures the theme switch is smooth for the eyes
    <div className="bg-white dark:bg-slate-950 transition-colors duration-500 min-h-[calc(100vh-352px)]">
      
      {/* Hero Section */}
      <Container className="py-10 transition-colors duration-500">
        <div className="text-center">
          <motion.h1 
            initial="hidden" 
            animate="visible" 
            variants={fadeIn}
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight"
          >
            Building the future of <span className="text-indigo-600 dark:text-indigo-400">financial clarity.</span>
          </motion.h1>
          
          <motion.p 
            initial="hidden" 
            animate="visible" 
            transition={{ delay: 0.2 }} 
            variants={fadeIn}
            className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            We started with a simple idea: finance shouldn't be a black box. Our platform combines deep data analytics with human-centric design.
          </motion.p>
        </div>
      </Container>

      {/* Stats / Pillars */}
      <Container className="py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { label: 'Founded', value: '2020', desc: 'A decade of digital excellence.' },
            { label: 'Assets Managed', value: '$2.5B+', desc: 'Trusted by institutional investors.' },
            { label: 'Global Users', value: '150k', desc: 'Active users across 40 countries.' },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              // Updated cards with dark borders and subtle hover glow
              className="text-center p-8 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-xl dark:hover:shadow-indigo-500/10 transition-all duration-300"
            >
              <h3 className="text-indigo-600 dark:text-indigo-400 text-4xl font-bold mb-2">
                {stat.value}
              </h3>
              <p className="font-semibold text-slate-800 dark:text-slate-200">
                {stat.label}
              </p>
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default About;