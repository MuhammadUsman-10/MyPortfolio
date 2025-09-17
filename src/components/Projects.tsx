import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "My Portfolio",
      description: "A personal portfolio website with an elegant design built with React, TypeScript, Tailwind CSS, and Framer Motion.",
      image: "/my-portfolio.png",
      tags: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/MuhammadUsman-10/MyPortfolio",
      demo: "https://muhammadusman-10.vercel.app/"
    },
    {
      title: "Link Building Website",
      description: "A static link building website built with HTML, CSS (Bootstrap) and JavaScript, featuring services of a Link Builder Agency.",
      image: "/link-building-website.png",
      tags: ["HTML", "CSS/Bootstrap", "JavaScript"],
      github: "https://github.com/MuhammadUsman-10/Link-Building-Website",
      demo: "https://muhammadusman-10.github.io/Link-Building-Website/"
    },
    {
      title: "Backend Boilerplate for E-commerce",
      description: "An E-commerce backend boilerplate built with Node.js, Express, MongoDB for e-commerce applications.",
      image: "/e-commerce.png",
      tags: ["Node.js", "Express", "MongoDB", "JWT", "Mongoose", "Bcrypt"],
      github: "https://github.com/MuhammadUsman-10/21PWBCS0848-WP-Fall2023-Assignment-03",
      demo: "https://github.com/MuhammadUsman-10/21PWBCS0848-WP-Fall2023-Assignment-03"
    },
    {
      title: "Afghan Wheels",
      description: "A full-stack e-commerce solution built with MERN stack, featuring real-time booking and purchasing of cars, and admin dashboard.",
      image: "/afghan-wheels.png",
      tags: ["React", "Node.js", "MongoDB", "Express", "Cloudinary", "Bootstrap"],
      github: "https://github.com/MuhammadUsman-10/Afghan-Wheels",
      demo: "https://github.com/MuhammadUsman-10/Afghan-Wheels"
    },
    {
      title: "Mental Health Assistant Chatbot",
      description: "Real-time chat application with AI-powered features like sentiment analysis and automatic language translation.",
      image: "/chatbot.png",
      tags: ["Python", "FastAPI", "LangChain", "OpenAI", "React", "Tailwind CSS", "MongoDB", "Docker"],
      github: "https://github.com/MuhammadUsman-10/Chatbot-Project",
      demo: "https://mental-health-chatbot-project.vercel.app/"
    },
    {
      title: "Dribbble Clone",
      description: "A pixel-perfect clone of Dribbble, featuring user authentication, real-time updates, and image sharing.",
      image: "/dribble.png",
      tags: ["React", "Tailwind CSS", "PrimeReact UI", "DummyAPI"],
      github: "https://github.com/MuhammadUsman-10/dribble-Clone",
      demo: "https://dribble-clone-six-beta.vercel.app"
    },
  ];

  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-54 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4">
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                      aria-label="GitHub Link"
                    >
                      <Github className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                      aria-label="Demo Link"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
