'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form data submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700&family=Poppins:wght@400;600&display=swap');

        .contact-wrapper {
          font-family: 'Poppins', sans-serif;
          background-color: #05020a;
          background-image: url('https://www.transparenttextures.com/patterns/stardust.png');
          color: #f0f0f0;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          padding: 40px 20px;
        }

        .contact-section {
          max-width: 1100px;
          width: 100%;
        }

        .contact-section h1 {
          font-family: 'Orbitron', sans-serif;
          font-size: 3rem;
          text-align: center;
          margin-bottom: 40px;
          color: #fff;
          text-shadow: 0 0 10px #22d3ee, 0 0 20px #22d3ee;
        }

        .contact-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(12px);
          padding: 40px;
        }

        /* FORM SECTION */
        .form-column h2 {
          font-family: 'Orbitron', sans-serif;
          font-size: 1.8rem;
          margin-bottom: 20px;
          color: #22d3ee;
        }

        .form-group { margin-bottom: 20px; }
        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          color: rgba(240, 240, 240, 0.7);
          font-size: 0.9rem;
        }

        .form-group input, .form-group textarea {
          width: 100%;
          padding: 12px 15px;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: rgba(0, 0, 0, 0.3);
          color: #f0f0f0;
          font-family: 'Poppins', sans-serif;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .form-group input:focus, .form-group textarea:focus {
          outline: none;
          border-color: #22d3ee;
          box-shadow: 0 0 15px -2px #22d3ee;
        }

        .form-group textarea { resize: vertical; min-height: 120px; }

        .submit-btn {
          width: 100%;
          padding: 15px;
          border: none;
          border-radius: 8px;
          background-color: #22d3ee;
          color: #000;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 0 20px -5px #22d3ee;
        }

        .submit-btn:hover {
          transform: scale(1.02);
          box-shadow: 0 0 30px 0px #22d3ee;
        }

        /* INFO SECTION */
        .info-column {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        /* Top header (Contact Us + Email) */
        .contact-us-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
        }

        .contact-us-header h2 {
          font-size: 1.5rem;
          color: #22d3ee;
          font-family: 'Orbitron', sans-serif;
        }

        .contact-us-header a {
          font-size: 1.1rem;
          color: #f0f0f0;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .contact-us-header a:hover {
          color: #22d3ee;
        }

        /* Vaibhav - main coordinator */
        .main-coordinator {
          text-align: center;
        }
        .main-coordinator h3 {
          color: #22d3ee;
          font-size: 1.2rem;
          margin-bottom: 5px;
        }
        .main-coordinator a, .main-coordinator p {
          color: #f0f0f0;
          font-size: 1rem;
        }

        /* Co-fest coordinators grid */
        .coordinators-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 25px;
        }
        .coordinator-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          padding: 15px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
          transition: all 0.3s ease;
        }
        .coordinator-card:hover {
          transform: scale(1.02);
          box-shadow: 0 0 15px -3px #22d3ee;
        }
        .coordinator-card h3 {
          color: #22d3ee;
          font-size: 1.1rem;
          margin-bottom: 5px;
        }
        .coordinator-card a, .coordinator-card p {
          color: #f0f0f0;
          font-size: 0.95rem;
        }

        /* Map */
        .map-container {
          width: 100%;
          height: 300px;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 0 20px -5px #22d3ee;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .contact-container {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .contact-wrapper { padding: 40px 15px; }
          .contact-section h1 { font-size: 2.2rem; }
          .coordinators-grid { grid-template-columns: 1fr; }
          .contact-us-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 5px;
          }
        }
      `}</style>

      <div className="contact-wrapper">
        <section className="contact-section">
          <h1>Get In Touch</h1>
          <div className="contact-container">
            {/* FORM SECTION */}
            <div className="form-column">
              <h2>Send us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john.doe@example.com"
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
                    placeholder="Query about Energia"
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
                    placeholder="Your message..."
                  />
                </div>

                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </div>

            {/* INFO SECTION */}
            <div className="info-column">
              <div className="contact-us-header">
                <h2>Contact Us:</h2>
                <a href="mailto:urjasangam@rgipt.ac.in">urjasangam@rgipt.ac.in</a>
              </div>

              <div className="main-coordinator">
                <h3>Vaibhav (Fest Coordinator)</h3>
                <a href="mailto:23ev3030@rgipt.ac.in">23ev3030@rgipt.ac.in</a>
                <p>+91 9956316310</p>
              </div>

              <div className="coordinators-grid">
                <div className="coordinator-card">
                  <h3>Gaurav Lal</h3>
                  <a href="mailto:23it3020@rgipt.ac.in">23it3020@rgipt.ac.in</a>
                  <p>+91 8354946276</p>
                </div>
                <div className="coordinator-card">
                  <h3>Apurv Gupta</h3>
                  <a href="mailto:23mc3012@rgipt.ac.in">23mc3012@rgipt.ac.in</a>
                  <p>+91 8840050280</p>
                </div>
                <div className="coordinator-card">
                  <h3>Arpit Sinha</h3>
                  <a href="mailto:23mc3013@rgipt.ac.in">23mc3013@rgipt.ac.in</a>
                  <p>+91 7290914630</p>
                </div>
                <div className="coordinator-card">
                  <h3>Kaushal Sharma</h3>
                  <a href="mailto:23ce3015@rgipt.ac.in">23mc3029@rgipt.ac.in</a>
                  <p>+91 9336725625</p>
                </div>
              </div>

              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.885943798218!2d81.50712891503133!3d26.265364883410747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399ba1580bf13c33%3A0x32df0c8e914ab52e!2sRajiv%20Gandhi%20Institute%20of%20Petroleum%20Technology!5e0!3m2!1sen!2sin!4v1577687589293!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
