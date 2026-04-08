import React from 'react';
// Using universally stable FontAwesome icons for the main tech stack
import { 
  FaJava, FaPython, FaHtml5, FaCss3Alt, FaJsSquare, FaReact, 
  FaGithub, FaGitAlt, FaFire, FaPalette, FaPaintBrush, FaCode, 
  FaRobot, FaChartBar 
} from 'react-icons/fa';

const About = () => {
  // Updated skills array using safe FontAwesome equivalents
  const skills = [
    { name: 'C / C++', icon: <FaCode /> },
    { name: 'Java', icon: <FaJava /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'Pandas', icon: <FaChartBar /> },
    { name: 'NumPy', icon: <FaChartBar /> },
    { name: 'Scikit-Learn', icon: <FaRobot /> },
    { name: 'HuggingFace', icon: <FaRobot /> },
    { name: 'HTML5', icon: <FaHtml5 /> },
    { name: 'CSS3', icon: <FaCss3Alt /> },
    { name: 'JavaScript', icon: <FaJsSquare /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Firebase', icon: <FaFire /> },
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'GitHub', icon: <FaGithub /> },
    { name: 'Photoshop', icon: <FaPalette /> },
    { name: 'Illustrator', icon: <FaPaintBrush /> }
  ];

  return (
    <div className="content-section">
      
      {/* About Me Block */}
      <div className="content-card">
        <h2 className="section-title-large">About Me</h2>
        <p className="about-text">
          I am a 4th-semester Computer Science undergraduate at Jaypee University of Engineering and Technology, interested in Data Science, Machine Learning, and web development. Skilled in Python, SQL, NumPy, and DSA, I build efficient, data-driven solutions. I enjoy solving real-world problems and creating impactful applications with a blend of technical and creative skills.
        </p>
      </div>

      {/* Skills Block */}
      <div className="content-card">
        <h2 className="section-title-large">Skills & Tech Stack</h2>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div key={index} className="skill-pill">
              <span className="skill-icon">{skill.icon}</span>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default About;