"use client";
import { Layout, Code, LineChart, Cpu, ArrowUpRight } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import Link from 'next/link';

const services = [
  {
    title: 'UI/UX Design',
    slug: 'ui-ux-design',
    description: 'Creating intuitive, premium interfaces that delight users and drive conversions.',
    icon: <Layout className="h-7 w-7" />
  },
  {
    title: 'Custom Development',
    slug: 'custom-development',
    description: 'Building robust, scalable applications using modern stacks like Next.js and Node.js.',
    icon: <Code className="h-7 w-7" />
  },
  {
    title: 'Strategic Marketing',
    slug: 'strategic-marketing',
    description: 'Data-driven growth strategies to put your brand in front of the right audience.',
    icon: <LineChart className="h-7 w-7" />
  },
  {
    title: 'AI Solutions',
    slug: 'ai-solutions',
    description: 'Integrating cutting-edge AI features to automate and optimize your business.',
    icon: <Cpu className="h-7 w-7" />
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] as const }
  }
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-slate-900">
            Our <span className="text-indigo-600">Specialties</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg font-medium">
            Tailored digital solutions designed to accelerate your growth and 
            establish your market dominance.
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <Link key={index} href={`/services/${service.slug}`} className="group h-full">
              <motion.div 
                variants={itemVariants}
                className="glass-card p-10 h-full rounded-[2.5rem] flex flex-col items-start text-left"
              >
                <div className="mb-8 p-4 bg-indigo-50 rounded-2xl text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-indigo-200 group-hover:-rotate-6">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-indigo-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>
                
                <div className="flex items-center text-sm font-bold text-indigo-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                  Learn More <ArrowUpRight className="ml-1 h-4 w-4" />
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
