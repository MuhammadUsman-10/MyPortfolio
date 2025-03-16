import { motion } from 'framer-motion';
import { Terminal, Cloud, Database, Brain } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      icon: <Terminal className="w-8 h-8" />,
      title: "Full Stack Development",
      description: "MERN Stack, TypeScript, Python, FastAPI",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Management",
      description: "MongoDB, MySQL, Database Design",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Computing",
      description: "Cloud Architecture, Deployment, Scaling",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI & Machine Learning",
      description: "AI Integration, ML Models, Data Analysis",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${skill.color} flex items-center justify-center text-white mb-4`}>
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white cursor-pointer">{skill.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;