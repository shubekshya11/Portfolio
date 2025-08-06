import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Create mailto link with form data
    const mailtoLink = `mailto:shubekshya22@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Hello Shubekshya,

My name is ${formData.name} and my email is ${formData.email}.

${formData.message}

Best regards,
${formData.name}`)}`
    
    // Open email client
    window.open(mailtoLink, '_blank')
    
    // Show success message
    alert('Opening your email client... Please send the email manually.')
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const contactInfo = [
    {
      icon: <Mail />,
      title: 'Email',
      value: 'shubekshya22@gmail.com',
      link: 'mailto:shubekshya22@gmail.com'
    },
    {
      icon: <Phone />,
      title: 'Phone',
      value: '+977 9803326740',
      link: 'tel:+9779803326740'
    },
    {
      icon: <MapPin />,
      title: 'Location',
      value: 'Kathmandu, Nepal',
      link: null
    }
  ]

  const socialLinks = [
    {
      icon: <Github />,
      name: 'GitHub',
      url: 'https://github.com/shubekshya11'
    },
    {
      icon: <Linkedin />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/shubekshya-lama-3a9802274/'
    },
    
  ]

  return (
    <div className="contact">
      <motion.div
        className="contact-header"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Get In Touch</h1>
        <p>
          I'm always interested in hearing about new opportunities and exciting projects. 
          Feel free to reach out if you'd like to collaborate or just want to say hello!
        </p>
      </motion.div>

      <div className="contact-content">
        <motion.div
          className="contact-form-section"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2>Send a Message</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your email address"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What's this about?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message here.."
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              <Send size={20} />
              Send Message
            </button>
          </form>
        </motion.div>

        <motion.div
          className="contact-info-section"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2>Contact Information</h2>
          
          <div className="contact-info">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                className="contact-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="contact-icon">{info.icon}</div>
                <div className="contact-details">
                  <h3>{info.title}</h3>
                  {info.link ? (
                    <a href={info.link} className="contact-link">
                      {info.value}
                    </a>
                  ) : (
                    <span>{info.value}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="social-section">
            <h3>Follow Me</h3>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                  whileHover={{ scale: 1.1 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="availability-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h2>Availability</h2>
        <p>
          I’m currently available for internship opportunities or collaborative projects. I'm especially interested in projects related to machine learning, web development, and automation.
        </p>
        <div className="availability-status">
          <span className="status-dot available"></span>
          <span>Available for new opportunities</span>
        </div>
      </motion.div>
    </div>
  )
}

export default Contact 