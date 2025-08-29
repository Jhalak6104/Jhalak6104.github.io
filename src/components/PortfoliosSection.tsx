import { motion } from 'framer-motion';
import { Link } from 'lucide-react';

const portfolios = [
  {
    title: 'LinkedIn Profile',
    description: 'Connect with me on LinkedIn to see my professional network and work history.',
    link: 'https://www.linkedin.com/in/jhalak-jain-666590243/',
  },
  {
    title: 'GitHub Profile',
    description: 'Explore my open-source contributions, projects, and code repositories.',
    link: 'https://github.com/Jhalak6104',
  },
  {
    title: 'Personal Email',
    description: 'Send me a direct email for inquiries and professional communication.',
    link: 'mailto:jhalak6104@gmail.com',
  }
];

export function PortfoliosSection() {
  return (
    <section id="portfolios" className="py-20 bg-[rgba(var(--bg-rgb),0.2)]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="container mx-auto px-4"
      >
        <h2 className="text-4xl md:text-5xl font-light mb-12 flex items-center gap-4">
          <Link className="w-8 h-8 text-blue-500" aria-hidden="true" />
          <span>cat ~/Connect</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {portfolios.map((portfolio, index) => (
            <motion.a
              key={portfolio.title}
              href={portfolio.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="h-full relative bg-[rgba(var(--bg-rgb),0.5)] border border-blue-500/20 p-6 rounded-xl overflow-hidden flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <h3 className="text-xl font-semibold mb-2 text-blue-500 group-hover:text-blue-400 transition-colors relative z-10">
                  {portfolio.title}
                </h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors flex-grow relative z-10">
                  {portfolio.description}
                </p>
                <div className="absolute bottom-3 right-3 text-blue-500/50 group-hover:text-blue-500 transition-colors">
                  <Link className="w-5 h-5" aria-hidden="true" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
