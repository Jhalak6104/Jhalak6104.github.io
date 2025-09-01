import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-4xl md:text-5xl font-light mb-12 flex items-center gap-4">
          <Terminal className="w-8 h-8 text-blue-500" aria-hidden="true" />
          <span>whoami</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-gray-400 leading-relaxed">
              I'm a <span className="text-blue-400">highly motivated</span> and results-driven<span className="text-blue-400"> Computer Science </span> 
              student Passionate about proactive <span className="text-blue-400">Threat Hunting, Penetration Testing</span> and building <span className="text-blue-400">Java SpringBoot </span>web applications.
            </p>
            
            <p className="text-gray-400 leading-relaxed mt-4">
            My expertise lies in both <span className="text-blue-400"> offensive Security </span>and <span className="text-blue-400"> Software Development. </span>I apply my passion for problem-solving to build robust and scalable solutions, while also designing enterprise security labs and developing red team tooling to test and strengthen system defenses. I thrive on turning vulnerabilities into valuable insights and ensuring data integrity.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="font-mono text-sm bg-[rgba(var(--bg-rgb),0.3)] p-6 rounded-xl border border-green-500/20 shadow-lg relative group"
          >
            <motion.div 
              className="ghost-ascii relative w-fit mx-auto"
              animate={{
                y: [0, -10, 0],
                x: [0, 5, 0, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <motion.div 
                className="ghost-bubble opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -top-8 left-1/2 transform -translate-x-1/2 bg-blue-500/10 px-3 py-1 rounded-full text-blue-400 border border-blue-500/20"
                initial={{ y: 10 }}
                animate={{ y: [10, 0, 10] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Boo!
              </motion.div>
              <motion.pre 
                className="text-blue-500 text-center transition-colors duration-300 relative ghost-glow"
              >
{`
⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⣦⠀
⠀⠀⠀⠀⣰⣿⡟⢻⣿⡟⢻⣧
⠀⠀⠀⣰⣿⣿⣇⣸⣿⣇⣸⣿
⠀⠀⣴⣿⣿⣿⣿⠟⢻⣿⣿⣿
⣠⣾⣿⣿⣿⣿⣿⣤⣼⣿⣿⠇
⢿⡿⢿⣿⣿⣿⣿⣿⣿⣿⡿⠀
⠀⠀⠈⠿⠿⠋⠙⢿⣿⡿⠁⠀
`}
              </motion.pre>
              <div className="absolute inset-0 -z-10 opacity-20 blur-xl bg-blue-500/20 rounded-full filter" />
            </motion.div>

            <div className="text-gray-300 space-y-1 mt-6 relative z-10">
              <p><span className="text-blue-400">Focus:</span> CyberSecurity, SDE, SpringBoot, Threat Hunting</p>
              <p><span className="text-blue-400">Toolset:</span> BurpSuite, Nmap, OwaspZap, Metasploit, SIEM tools, SpringBoot, MySQL, ThymeLeaf</p>
              <p><span className="text-blue-400">Languages:</span> Python, Java, Bash, C, SQL</p>
              <p><span className="text-blue-400">Specialty:</span> Penetration Testing, Incident Response, Cryptography</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}