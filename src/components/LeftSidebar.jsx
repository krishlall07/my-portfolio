import React from 'react';
import { FaEnvelope, FaLinkedin, FaTwitter, FaGithub, FaGraduationCap, FaDownload } from 'react-icons/fa';
import { FiMapPin } from 'react-icons/fi';
import { SiLeetcode, SiCodechef, SiGeeksforgeeks, SiCodeforces } from 'react-icons/si';
import profileImg from '../assets/10.png';

const LeftSidebar = () => {
  return (
    <div className="sidebar-content">
      {/* Profile Identity */}
      <div className="profile-section">
        <div className="image-container">
          {/* Add your image in src/assets and change the src here later */}
          <img src={profileImg} alt="Krish Lall" className="profile-pic" />
        </div>
        <h1 className="name">Krish Lall</h1>
        <p className="quote">Aspiring Data Scientist | AI & ML Enthusiast</p>
        
        {/* Social Icons */}
       <div className="social-links">
          <a href="mailto:lallkrish992@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>
          <a href="https://www.linkedin.com/in/krish-lall-169963319?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          {/* I left the Twitter placeholder here. Add your link, or delete this whole line if you don't use Twitter! */}
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://github.com/krishlall07" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        </div>

        {/* Resume Button */}
        {/* Place your actual resume PDF in the public folder and link it in the href */}
        <a href="/resume.pdf" download className="resume-btn">
          Get Resume <FaDownload className="btn-icon"/>
        </a>
      </div>

      {/* Logistics */}
      <div className="logistics-section">
        <div className="logistic-item">
          <FiMapPin className="logistic-icon" />
          <span>India</span>
        </div>
        <div className="logistic-item">
          <FaGraduationCap className="logistic-icon" />
          <span>Jaypee University of Engineering & Technology</span>
        </div>
      </div>

      {/* Problem Solving Grid */}
      <div className="problem-solving-section">
        <h3 className="section-title">PROBLEM SOLVING</h3>
        <div className="ps-grid">
          <a href="https://leetcode.com/yourprofile" target="_blank" rel="noopener noreferrer" className="ps-card">
            <SiLeetcode className="ps-icon leetcode" />
            <span>LeetCode</span>
          </a>
          <a href="https://codechef.com/users/yourprofile" target="_blank" rel="noopener noreferrer" className="ps-card">
            <SiCodechef className="ps-icon codechef" />
            <span>CodeChef</span>
          </a>
          <a href="https://auth.geeksforgeeks.org/user/yourprofile" target="_blank" rel="noopener noreferrer" className="ps-card">
            <SiGeeksforgeeks className="ps-icon gfg" />
            <span>GFG</span>
          </a>
          <a href="https://codeforces.com/profile/yourprofile" target="_blank" rel="noopener noreferrer" className="ps-card">
            <SiCodeforces className="ps-icon codeforces" />
            <span>CodeForces</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;