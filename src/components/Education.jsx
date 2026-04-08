import React from 'react';
import { FaGraduationCap, FaSchool, FaStar } from 'react-icons/fa';

const Education = () => {
  return (
    <div className="content-section">
      <div className="content-card">
        <h2 className="section-title-large">Education</h2>
        
        <div className="timeline-container">
          
          {/* College Node */}
          <div className="timeline-item">
            <div className="timeline-icon college-icon">
              <FaGraduationCap />
            </div>
            <div className="timeline-content">
              <h3 className="degree-title">Bachelors in Computer Science and Engineering</h3>
              <h4 className="institution-name">Jaypee University of Engineering and Technology, Guna</h4>
              
              <div className="achievements-list">
                <div className="achievement">
                  <FaStar className="star-icon" /> <span>9.06 CGPA</span>
                </div>
                <div className="achievement">
                  <FaStar className="star-icon" /> <span>Designed posters and digital creatives for college events, maintaining consistent branding</span>
                </div>
                <div className="achievement">
                  <FaStar className="star-icon" /> <span>Captured and edited event photographs for social media and promotions</span>
                </div>
              </div>

              <div className="tech-stack mt-3">
                <span className="tech-mini-pill">Data Structures & Algorithms</span>
                <span className="tech-mini-pill">Machine Learning</span>
                <span className="tech-mini-pill">Database Systems</span>
                <span className="tech-mini-pill">OOPS</span>
                <span className="tech-mini-pill">Operating Systems</span>
                <span className="tech-mini-pill">Deep Learning</span>
                <span className="tech-mini-pill">Neural Networks</span>
              </div>
            </div>
          </div>

          {/* Schooling Node */}
          <div className="timeline-item">
            <div className="timeline-icon school-icon">
              <FaSchool />
            </div>
            <div className="timeline-content">
              <h3 className="degree-title">Schooling</h3>
              <h4 className="institution-name">BNS DAV Public School, Giridih Jharkhand</h4>
              
              <div className="achievements-list">
                <div className="achievement">
                  <FaStar className="star-icon" /> <span>85.6% in Class 12th</span>
                </div>
                <div className="achievement">
                  <FaStar className="star-icon" /> <span>90.0% in Class 10th</span>
                </div>
              </div>

              <div className="tech-stack mt-3">
                <span className="tech-mini-pill">Physics</span>
                <span className="tech-mini-pill">Chemistry</span>
                <span className="tech-mini-pill">Mathematics</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Education;