import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function NotFound() {
  const navigate = useNavigate();

  return (
    <div 
      className="min-h-[100svh] min-h-[100vh] w-screen bg-[rgb(var(--bg-rgb))] overflow-hidden relative flex items-center justify-center p-clamp"
      style={{ '--p-clamp': 'clamp(1rem, 3vw, 2rem)' } as React.CSSProperties}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-black" />

      {/* Main Content Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-[clamp(300px,90vw,800px)] mx-auto relative z-10"
      >
        <div className="terminal-container bg-[rgba(var(--bg-rgb),0.8)] backdrop-blur-sm border border-blue-500/20 rounded-lg overflow-hidden shadow-2xl">
          {/* Terminal Header */}
          <div className="terminal-header flex items-center justify-between p-3 border-b border-blue-500/20 bg-[rgba(var(--bg-rgb),0.5)]">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-blue-500/50" />
            </div>
            <span className="text-xs text-gray-500">system_error.log</span>
          </div>

          {/* Terminal Content */}
          <div className="p-clamp space-y-6">
            {/* ASCII Art */}
            <pre className="text-blue-500 whitespace-pre-wrap text-left font-mono text-[clamp(0.75rem,2vw,1rem)] leading-tight">
{`
    .---.    .----.      .---.  
   / .  |   /  ..  \\    / .  |  
  / /|  |  .  /  \\  .  / /|  |  
 / / |  |_ |  |  '  | / / |  |_ 
/  '-'    |'  \\  /  '/  '-'    |
\`----|  |-' \\  \`'  / \`----|  |-'
      \`--'     \`---''       \`--'
`}
            </pre>

            {/* Error Message */}
            <div className="h-16">
              <span className="text-blue-400 font-mono text-lg">Error 404: Endpoint not found.</span>
            </div>

            {/* Error Details */}
            <div className="space-y-2 text-sm text-gray-400 font-mono">
              <p>
                <span className="text-blue-500">{'>'}</span> Location: {window.location.pathname}
              </p>
              <p>
                <span className="text-blue-500">{'>'}</span> Timestamp: {new Date().toISOString()}
              </p>
              <p>
                <span className="text-blue-500">{'>'}</span> Status: 404 Not Found
              </p>
            </div>

            {/* Return Home Button */}
            <motion.button
              onClick={(e) => {
                e.preventDefault();
                navigate('/');
              }}
              className="group flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-400 rounded-lg 
                         border border-blue-500/20 hover:bg-blue-500/20 focus:outline-none 
                         focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-black
                         transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              aria-label="Return to home page"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
              <span>Return Home</span>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
