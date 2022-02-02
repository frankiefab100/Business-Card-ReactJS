import React from "react";

const Bio = () => {
  return (
    <div className="bio">
      <img src="./img/Profile-photo.jpg" alt="Franklin profile" />
      <div className="info">
        <h1>Franklin Ohaegbulam</h1>
        <p>Frontend/UI Engineer</p>
        <a href="https://frankiefab.tech">
          <small>www.frankiefab.tech</small>
        </a>
      </div>

      <div className="buttons">
        <a href="mailto:ohaegbulamfrank@gmail.com">
          <button className="email-btn">
            <i className="fas fa-envelope"></i>
            Email
          </button>
        </a>

        <a href="https://linkedin.com/in/frankiefab100">
          <button className="linkedin-btn">
            <i className="fab fa-linkedin"></i>
            LinkedIn
          </button>
        </a>
      </div>
    </div>
  );
};

export default Bio;
