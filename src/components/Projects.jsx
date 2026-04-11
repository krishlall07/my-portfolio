import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import projectImg from '../assets/11.png';
import portfolioImg from '../assets/portfolio-pic.png'; // <--- Import for your second project image
import skycastImg from '../assets/skycast-pic.png';

const Projects = () => {
  // State to track which project is currently selected for the modal
  const [selectedProject, setSelectedProject] = useState(null);

  // Your actual project data
  const projectsData = [
    {
      id: 1,
      title: 'Smart Crop Advisory System',
      date: 'October 2025',
      // I've simplified the tech list a bit for the mini-pills on the card
      tech: ['React.js', 'Next.js', 'Scikit-learn', 'CSS', 'Javascript', 'Vercel'],
      shortDesc: 'Smart Crop Advisory System using real-time data to guide crop choice, irrigation, fertilization, and pest control—boosting yield and reducing losses.',
      fullDesc: 'A Smart Crop Advisory System that uses real-time weather, soil, and crop data to give farmers personalized recommendations on crop selection, irrigation, fertilizer, and pest management helping them increase yield and reduce losses. ',
      image: projectImg, 
      githubUrl: 'https://github.com/krishlall07/agriculture-web-app-4y', // Add your GitHub repo URL here when you have it
      liveUrl: 'https://v0-agriculture-web-app-five.vercel.app/'
    },
    // <--- YOUR NEW PORTFOLIO PROJECT STARTS HERE --->
    {
      id: 2,
      title: 'My Portfolio',
      date: 'April 2026',
      tech: ['React', 'CSS', 'JavaScript'],
      shortDesc: 'My Portfolio Website',
      fullDesc: 'A fully responsive, interactive personal portfolio website designed to showcase my projects, skills, and educational background. Built entirely from scratch utilizing functional React components, CSS for a custom dark/neon theme, and dynamic state management for interactive elements like the project gallery modal.',
      image: portfolioImg, // Uses your newly imported image
      githubUrl: 'https://github.com/krishlall07/my-portfolio', // Put your GitHub link here when you push the code
      liveUrl: 'krishlallportfolio.vercel.app' // Put your live Vercel link here later
    },
    // ... (Your previous projects are above this)
    {
      id: 3,
      title: 'Skycast - Real-Time Weather Dashboard',
      date: 'Recent',
      tech: ['React', 'JavaScript', 'CSS'],
      shortDesc: 'A dynamic, real-time weather application featuring live data integration.',
      fullDesc: 'A high-performance, fully responsive weather dashboard built with React and Vite. Features real-time atmospheric data, intelligent autocomplete search, an interactive global map, and a premium dark/light adaptive UI.',
      image: skycastImg, // Uses your new imported image
      githubUrl: 'https://github.com/krishlall07/Skycast', // Add your Skycast GitHub repo URL here
      liveUrl: 'https://skycast-ind.vercel.app/' // Add your live Vercel link for Skycast here
    }
  ];

  // Functions to handle opening and closing the modal
  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <div className="content-section">
      <div className="content-card">
        <h2 className="section-title-large">Projects</h2>
        
        {/* Projects Grid */}
        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card" onClick={() => openModal(project)}>
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <div className="tech-stack">
                  {/* Shows the first 3 tech items on the card */}
                  {project.tech.slice(0, 3).map((t, index) => (
                    <span key={index} className="tech-mini-pill">{t}</span>
                  ))}
                  {/* Shows '+X' if there are more than 3 */}
                  {project.tech.length > 3 && <span className="tech-mini-pill">+{project.tech.length - 3}</span>}
                </div>
                <p className="project-short-desc">{project.shortDesc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL OVERLAY - This is the "pop-up" that appears when you click a card */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button className="close-btn" onClick={closeModal}><FaTimes /></button>
            
            {/* Modal Image */}
            <img src={selectedProject.image} alt={selectedProject.title} className="modal-image" />
            
            {/* Modal Body */}
            <div className="modal-body">
              <div className="modal-header">
                <h2 className="modal-title">{selectedProject.title}</h2>
                <span className="modal-date">{selectedProject.date}</span>
              </div>
              
              <div className="tech-stack modal-tech">
                {/* Shows ALL tech items in the modal */}
                {selectedProject.tech.map((t, index) => (
                  <span key={index} className="tech-mini-pill">{t}</span>
                ))}
              </div>
              
              <p className="modal-desc">{selectedProject.fullDesc}</p>
              
              {/* Action Buttons */}
              <div className="modal-actions">
                <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="action-btn github-btn">
                  <FaGithub /> View Code
                </a>
                <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className="action-btn live-btn">
                  <FaExternalLinkAlt /> View Live
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;