import { motion } from 'framer-motion'
import { Download, Mail, Github, Linkedin } from 'lucide-react'

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm <span className="highlight">Shuvechhya Lama</span>
          </motion.h1>
          
          <motion.h2
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Final Year BCA Student | Aspiring Machine Learning Developer | Django & Python Enthusiast | Open to Internships
          </motion.h2>
          
          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Final year BCA student at Tribhuvan University seeking an internship in software development or machine learning to apply and expand practical skills. Eager to contribute to real-world projects by leveraging academic knowledge and hands-on experience from projects like web applications, prediction models, and automated testing. Also, open for QA roles. Passionate about continuous learning and working alongside experienced professionals in a collaborative development environment.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a
    className="btn btn-primary"
    href="/cv.pdf"
    download
    target="_blank"
    rel="noopener noreferrer"
  >
    <Download size={20} />
    Download CV
  </a>

            <a
  href="mailto:shubekshya22@gmail.com"
  className="btn btn-secondary"
>
  <Mail size={20} />
  Contact Me
</a>
          </motion.div>

          <motion.div
            className="social-links"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <a href="https://github.com/shubekshya11" target="_blank" rel="noopener noreferrer" className="social-link">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/shubekshya-lama-3a9802274/" target="_blank" rel="noopener noreferrer" className="social-link">
              <Linkedin size={24} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
  className="hero-image"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1, delay: 0.5 }}
>
  <img
    src="/profile.jpeg" // <-- use your actual file name here
    alt="Your Name"
    className="profile-photo"
    style={{
      width: "250px",
      height: "250px",
      borderRadius: "50%",
      objectFit: "cover",
      boxShadow: "0 4px 16px rgba(0,0,0,0.1)"
    }}
  />
</motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        
      </motion.div>
    </div>
  )
}

export default Home 