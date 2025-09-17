import { motion } from 'framer-motion';
import { Brain, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6 inline-block"
          >
            <span className="px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm font-medium">
              Available for Work
            </span>
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Full Stack Developer & AI Enthusiast
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Transforming ideas into elegant, scalable solutions with modern technologies.
            Specializing in MERN Stack, Python, and exploring the frontiers of AI.
          </p>
          <div className="flex gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="/MuhammadUsman-FullStack Developer.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 border border-purple-600 text-purple-600 dark:text-purple-400 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
            >
              <Download className="w-5 h-5" />
              Hire Me
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 0.7 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-square rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center overflow-hidden">
            <img src="/MyPic.png" alt='Profile-Pic' className="w-full" />
          </div>
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-0 left-0 w-full h-full"
          >
            <Brain className="w-12 h-12 text-blue-500 absolute top-0" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
