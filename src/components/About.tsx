import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4 text-gray-600 dark:text-gray-300">
            <p>
              With over a year of experience in Full Stack Development, I've developed a passion for creating efficient,
              scalable, and user-friendly applications. My journey in tech has been driven by curiosity and a constant
              desire to learn and grow.
            </p>
            <p>
              Currently, I'm expanding my horizons by exploring AI and Cloud Computing, while maintaining expertise in:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>JavaScript/TypeScript Development</li>
              <li>MERN Stack (MongoDB, Express.js, React, Node.js)</li>
              <li>Python & FastAPI</li>
              <li>Database Management (MongoDB, MySQL)</li>
              <li>Cloud Technologies</li>
            </ul>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Coding Environment"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;