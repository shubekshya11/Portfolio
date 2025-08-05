import { motion } from 'framer-motion'

const About = () => {
  const frontendSkills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React'
  ]

  const backendSkills = [
    'Python',
    'Django',
    'MySQL',
    'PostgreSQL'
  ]

  const toolsSkills = [
    'Git & GitHub',
    'Playwright',
    'Machine Learning'
  ]

  return (
    <div className="about">
      <motion.div
        className="about-header"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>About Me</h1>
        <p>
          I'm a passionate developer with a love for creating innovative solutions. 
          With several years of learning and projects experience in web development, machine learning, automated testing, I am looking forward to working alongside experienced professionals in a collaborative development environment.
        </p>
      </motion.div>

      <div className="about-content">
        <motion.div
          className="skills-section"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2>Skills</h2>
          <div className="skills-categories">
            <div className="skill-category">
              <h3>Frontend Technologies</h3>
              <ul className="skills-list">
                {frontendSkills.map((skill, index) => (
                  <li key={index} className="skill-pill">{skill}</li>
                ))}
              </ul>
            </div>
            
            <div className="skill-category">
              <h3>Backend Technologies</h3>
              <ul className="skills-list">
                {backendSkills.map((skill, index) => (
                  <li key={index} className="skill-pill">{skill}</li>
                ))}
              </ul>
            </div>
            
            <div className="skill-category">
              <h3>Tools & Others</h3>
              <ul className="skills-list">
                {toolsSkills.map((skill, index) => (
                  <li key={index} className="skill-pill">{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="education-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h2>Education</h2>
        <div className="education-card">
          <h3>Bachelor of Computer Application</h3>
          <h4>Tribhuvan University</h4>
          <span>2022 - 2026</span>
          <p>
            with coursework focused on software development, network programming, distributed systems, data structures and algorithms, mobile programming, and database management.
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default About
    