import { motion } from 'framer-motion'
import { ExternalLink, Github, Globe } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'Walmart Sales Prediction',
      description: 'Developed a regression-based ML model using Python to forecast weekly Walmart sales across 45 stores. Focused on data preprocessing, feature engineering, and model evaluation using RMSE and R².',
      technologies: ['Python', 'pandas', 'scikit-learn', 'Matplotlib'],
      image: '📊',
      liveUrl: 'https://github.com/shubekshya/WalmartSalesPrediction',
      githubUrl: 'https://github.com/shubekshya11/Walmart',
      featured: true
    },
    {
      title: 'Real Estate Platform',
      description: 'Built a web platform for buying and selling properties with automated price prediction using Support Vector Machine (SVM). Integrated a content-based recommendation system to suggest similar listings based on user preferences and property features.',
      technologies: ['Django', 'HTML', 'PostgreSQL', 'SMTP'],
      image: '🏘️',
      liveUrl: '"C:\Users\Shubekshya\Videos\Screen Recordings\Screen Recording 2025-04-19 070620.mp4"',
      githubUrl: 'https://github.com/shubekshya11/RealEstatePlatform',
      featured: true
    },
    {
      title: 'Automated Website Testing',
      description: 'Developed automated test scripts using Playwright to perform end-to-end testing on the BooksMandala website. Covered scenarios including login with valid and invalid credentials, product search, add to cart, and logout. Validated UI elements, ensured functional accuracy, and reported bugs to improve site performance and user experience.',
      technologies: ['Playwright', 'JavaScript', 'Testing'],
      image: '🧪',
      liveUrl: '',
      githubUrl: 'https://github.com/shubekshya11/QA-Booksmandala',
      featured: false
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing my projects, skills, and background',
      technologies: ['React', 'CSS3', 'Framer Motion', 'Vite'],
      image: '🎨',
      liveUrl: 'https://project4.com',
      githubUrl: 'https://github.com/username/project4',
      featured: false
    },
   
    {
      title: 'Online Bookstore',
      description: 'Developed an e-commerce website with user registration, book catalog, shopping cart, and invoice system. Included an admin panel for managing products and orders, enabling full checkout flow.',
      technologies: ['PHP', 'HTML', 'CSS', 'MySQL'],
      image: '📚',
      liveUrl: '',
      githubUrl: 'https://github.com/shubekshya11/NovelNest',
      featured: false
    }
  ]
  

  return (
    <div className="projects">
      <motion.div
        className="projects-header"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>My Projects</h1>
        <p>
          Here are some of the projects I've worked on. Each project represents 
          different skills and technologies I've learned throughout my journey.
        </p>
      </motion.div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className={`project-card ${project.featured ? 'featured' : ''}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <div className="project-image">
              <span className="project-emoji">{project.image}</span>
              {project.featured && <span className="featured-badge">Featured</span>}
            </div>
            
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <div className="project-technologies">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <div className="project-links">
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <Globe size={16} />
                  Live Demo
                </a>
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <Github size={16} />
                  Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="github-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <h2>More Projects</h2>
        <p>
          Check out my GitHub profile for more projects and contributions to open source.
        </p>
        <a 
          href="https://github.com/shubekshya11" 
          target="_blank" 
          rel="noopener noreferrer"
          className="github-btn"
        >
          <Github size={20} />
          View GitHub Profile
        </a>
      </motion.div>
    </div>
  )
}

export default Projects 