import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Code2, Github, ExternalLink, Star } from 'lucide-react';

const projects = [
  {
    title: 'Automated Subdomain Enumeration',
    description: 'Built an automated threat hunting tool integrating 5+ security platforms for continuous monitoring and anomaly detection, demonstrating strong skills in system integration and automation.',
    tech: ['Python', 'Nmap', 'Nuclei', 'Recon-ng', 'SubFinder', 'SubList3r', 'SSL'],
    github: 'https://github.com/Jhalak6104/Automated-Subdomain-Enumeration.git',
    featured: true
  },
  {
    title: 'Integrated Steganography & Breach Monitoring Solution',
    description: 'Designed and deployed a secure full-stack web platform (Flask, HTML/CSS/JS) featuring 3+ cybersecurity tools,including a custom LSB steganography engine, HaveIBeenPwned email breach checker, and 10+ JWT-secured RESTful API endpoints with HTTPS for encrypted data transmission.',
    tech: ['HTML', 'CSS', 'JS', 'Flask'],
    github: 'https://github.com/Jhalak6104/ThreatX---Integrated-Steganography-Breach-Monitoring-Solution.git',
    featured: true
  },
  {
    title: 'Banking Application',
    description: 'Built and deployed a Spring-based web app with Thymeleaf UI and RESTful API, enabling accurate CRUD operationsand secure financial transactions on a MySQL database via Tomcat for scalable performance',
    tech: ['Java Springboot', 'MySQL', 'REST API', 'SpringMVC'],
    github: 'https://github.com/Jhalak6104/Banking-System.git',
  },
  {
    title: 'IPv4 Malware Obfuscation',
    description: 'Engineered a Python framework with IPv4 obfuscation to reduce Metasploit shellcode detection, showcasing expertise in advanced malware evasion techniques.',
    tech: ['Python', 'Metasploit', 'Struct Module'],
    github: 'https://github.com/Jhalak6104/IPv4-obfuscation',
  },
  {
    title: 'Advanced Persistent Threat Simulation',
    description: 'Created red team tooling for penetration testing and threat emulation, achieving 100% data exfiltration efficiency to simulate real-world attacks.',
    tech: ['Python', 'PyAutoGUI', 'Sockets'],
    github: 'https://github.com/Jhalak6104/REVERSE-SHELL',
  },
  {
    title: 'Enterprise Security Lab',
    description: ' Designed enterprise environment simulation with role-based access controls and incident response workflows for 5 users.',
    tech: ['Windows Server 2022', 'Windows 10'],
  },
  {
    title: 'HoneyPot',
    description: 'Implemented custom SSH port and traffic filtering to reduce incoming traffic by 80%, protecting against DDoS/DoS attacks.',
    tech: ['Python', 'Scapy', 'IP Route Tables'],
    github: 'https://github.com/Jhalak6104/HoneyPot.git',
  },
  {
    title: 'Image Steganography & Cryptography',
    description: 'Designed a Python script using the LSB algorithm to hide binary data in images and deployed robust AES encryption to secure sensitive data with 100% integrity.',
    tech: ['Python', 'Steganography', 'Cryptography'],
    github: 'https://github.com/Jhalak6104/PixelCloak',
  },
  {
    title: 'Audio Steganography & Cryptography',
    description: 'Developed a precise script that embeds binary data in audio files using LSB techniques, improving data hiding capabilities with minimal impact on audio quality.',
    tech: ['Python', 'Wave Module', 'Cryptography'],
    github: 'https://github.com/Jhalak6104/EchoCrypt',
  }
];

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleInteraction = (e: React.MouseEvent | React.TouchEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    let x, y;

    if ('touches' in e) {
      // Touch event
      const touch = e.touches[0];
      x = touch.clientX - rect.left;
      y = touch.clientY - rect.top;
    } else {
      // Mouse event
      x = (e as React.MouseEvent).clientX - rect.left;
      y = (e as React.MouseEvent).clientY - rect.top;
    }
    
    mouseX.set(x);
    mouseY.set(y);
  };

  const isFeatured = project.featured;
  const borderColor = isFeatured ? 'border-amber-500/40' : 'border-blue-500/20';
  const glowColor = isFeatured ? 'rgba(245, 158, 11, 0.06)' : 'rgba(59, 130, 246, 0.06)';
  const hoverGlowColor = isFeatured ? 'rgba(245, 158, 11, 0.1)' : 'rgba(59, 130, 246, 0.1)';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px" }}
      className={`group relative rounded-xl bg-[rgba(var(--bg-rgb),0.5)] border ${borderColor} p-6 shadow-lg ${
        isFeatured ? 'md:col-span-2 lg:col-span-3' : ''
      } min-h-fit`}
      onMouseMove={handleInteraction}
      onTouchMove={handleInteraction}
      onTouchStart={handleInteraction}
      style={{
        background: useMotionTemplate`
          radial-gradient(
            ${window.innerWidth < 768 ? '300px' : '600px'} circle at ${mouseX}px ${mouseY}px,
            ${glowColor},
            transparent 40%
          )
        `,
      }}
    >
      <motion.div
        className="absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              ${window.innerWidth < 768 ? '200px' : '400px'} circle at ${mouseX}px ${mouseY}px,
              ${hoverGlowColor},
              transparent 40%
            )
          `,
        }}
      />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-3">
          <h3 className={`text-xl font-semibold ${
            isFeatured ? 'text-amber-500 group-hover:text-amber-400' : 'text-blue-500 group-hover:text-blue-400'
          } transition-colors flex items-center gap-2`}>
            {project.title}
            {isFeatured && (
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Star className="w-5 h-5 text-amber-500 fill-amber-500/50" aria-hidden="true" />
              </motion.div>
            )}
          </h3>
        </div>
        
        <p className={`text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition-colors ${
          isFeatured ? 'md:text-base' : ''
        }`}>
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map(tech => (
            <span
              key={tech}
              className={`text-xs px-2 py-1 rounded-full ${
                isFeatured 
                  ? 'bg-amber-500/10 text-amber-500 group-hover:bg-amber-500/15 group-hover:text-amber-400'
                  : 'bg-blue-500/10 text-blue-500 group-hover:bg-blue-500/15 group-hover:text-blue-400'
              } transition-all`}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 text-sm">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 text-gray-400 ${
              isFeatured ? 'hover:text-amber-500' : 'hover:text-blue-500'
            } transition-colors`}
          >
            <Github className="w-4 h-4" aria-hidden="true" />
            <span>Source</span>
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 text-gray-400 ${
                isFeatured ? 'hover:text-amber-500' : 'hover:text-blue-500'
              } transition-colors`}
            >
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-[rgba(var(--bg-rgb),0.3)]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="container mx-auto px-4"
      >
        <h2 className="text-4xl md:text-5xl font-light mb-12 flex items-center gap-4">
          <Code2 className="w-8 h-8 text-blue-500" aria-hidden="true" />
          <span>ls ~/projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
