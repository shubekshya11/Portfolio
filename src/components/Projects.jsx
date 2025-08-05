import { motion } from 'framer-motion'
import { ExternalLink, Github, Globe, Play, FileText, X } from 'lucide-react'
import { useState } from 'react'

const Projects = () => {
  const [selectedVideo, setSelectedVideo] = useState(null)

  const projects = [
    {
      title: 'Walmart Sales Prediction',
      description: 'Developed a regression-based ML model using Python to forecast weekly Walmart sales across 45 stores. Focused on data preprocessing, feature engineering, and model evaluation using RMSE and R².',
      technologies: ['Python', 'pandas', 'scikit-learn', 'Matplotlib'],
      image: '📊',
      liveUrl: '/walmart-demo.mp4', // Local video file in public folder
      githubUrl: 'https://github.com/shubekshya11/Walmart',
      demoType: 'local-video', // Changed to local video demo
      featured: true
    },
    {
      title: 'Real Estate Platform',
      description: 'Built a web platform for buying and selling properties with automated price prediction using Support Vector Machine (SVM). Integrated a content-based recommendation system to suggest similar listings based on user preferences and property features.',
      technologies: ['Django', 'HTML', 'PostgreSQL', 'SMTP'],
      image: '🏘️',
      liveUrl: '/real-estate-demo.mp4', // Local video file in public folder
      githubUrl: 'https://github.com/shubekshya11/RealEstatePlatform',
      demoType: 'local-video',
      featured: true
    },
    {
      title: 'Automated Website Testing',
      description: 'Developed automated test scripts using Playwright to perform end-to-end testing on the BooksMandala website. Covered scenarios including login with valid and invalid credentials, product search, add to cart, and logout. Validated UI elements, ensured functional accuracy, and reported bugs to improve site performance and user experience.',
      technologies: ['Playwright', 'JavaScript', 'Testing'],
      image: '🧪',
      liveUrl: '/testing-demo.mp4', // Local video file in public folder
      githubUrl: 'https://github.com/shubekshya11/QA-Booksmandala',
      demoType: 'local-video',
      featured: false
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing my projects, skills, and background.',
      technologies: ['React', 'CSS3', 'Framer Motion', 'Vite'],
      image: '🎨',
      liveUrl: 'https://your-portfolio.vercel.app', // Replace with actual deployed URL
      githubUrl: 'https://github.com/shubekshya11/Portfolio',
      demoType: 'external',
      featured: false
    },
   
    {
      title: 'Online Bookstore',
      description: 'Developed an e-commerce website with user registration, book catalog, shopping cart, and invoice system. Included an admin panel for managing products and orders, enabling full checkout flow.',
      technologies: ['PHP', 'HTML', 'CSS', 'MySQL'],
      image: '📚',
      liveUrl: '/bookstore-demo.mp4', // Local video file in public folder
      githubUrl: 'https://github.com/shubekshya11/NovelNest',
      demoType: 'local-video',
      featured: false
    }
  ]

  const renderDemoLink = (project) => {
    if (!project.liveUrl || project.demoType === 'none') {
      return (
        <button className="project-link disabled" disabled>
          <FileText size={16} />
          No Demo
        </button>
      )
    }

    const getDemoIcon = () => {
      switch (project.demoType) {
        case 'external':
          return <Globe size={16} />
        case 'github':
          return <Github size={16} />
        case 'video':
        case 'local-video':
          return <Play size={16} />
        default:
          return <ExternalLink size={16} />
      }
    }

    const getDemoText = () => {
      switch (project.demoType) {
        case 'external':
          return 'Live Demo'
        case 'github':
          return 'View Project'
        case 'video':
        case 'local-video':
          return 'Watch Demo'
        default:
          return 'Demo'
      }
    }

    const handleDemoClick = (e, project) => {
      if (project.demoType === 'video' || project.demoType === 'local-video') {
        e.preventDefault()
        setSelectedVideo(project)
      }
    }

    return (
      <a 
        href={project.liveUrl} 
        target={project.demoType === 'video' || project.demoType === 'local-video' ? '_self' : '_blank'}
        rel="noopener noreferrer"
        className="project-link"
        onClick={(e) => handleDemoClick(e, project)}
      >
        {getDemoIcon()}
        {getDemoText()}
      </a>
    )
  }

  const VideoModal = ({ video, onClose }) => {
    if (!video) return null

    const getVideoEmbedUrl = (url) => {
      // Convert YouTube URL to embed URL
      if (url.includes('youtube.com/watch?v=')) {
        const videoId = url.split('v=')[1]
        return `https://www.youtube.com/embed/${videoId}`
      }
      // Convert YouTube short URL to embed URL
      if (url.includes('youtu.be/')) {
        const videoId = url.split('youtu.be/')[1]
        return `https://www.youtube.com/embed/${videoId}`
      }
      return url
    }

    const isLocalVideo = video.demoType === 'local-video'

    return (
      <motion.div
        className="video-modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="video-modal"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="video-modal-close" onClick={onClose}>
            <X size={24} />
          </button>
          <div className="video-modal-content">
            <h3>{video.title}</h3>
            <div className="video-container">
              {isLocalVideo ? (
                <video
                  controls
                  autoPlay
                  muted
                  className="local-video-player"
                >
                  <source src={video.liveUrl} type="video/mp4" />
                  <source src={video.liveUrl.replace('.mp4', '.webm')} type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <iframe
                  src={getVideoEmbedUrl(video.liveUrl)}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    )
  }

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
                {renderDemoLink(project)}
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

      {selectedVideo && (
        <VideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />
      )}
    </div>
  )
}

export default Projects 