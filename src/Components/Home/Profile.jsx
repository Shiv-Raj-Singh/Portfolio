import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { useNavigate } from "react-router-dom";
import "./profile.css";

// Import the image
import profileImage from "../../assets/Home/IMG_20240522_094655.jpg"; // Ensure this path is correct

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div className="profile-container">
      <div className="profile-parent">
        {/* Profile Picture Section */}
        <div className="profile-picture">
          <img
            src={profileImage} // Use the imported image
            alt="Shiv Raj Singh"
            className="profile-img"
          />
        </div>

        {/* Profile Details */}
        <div className="profile-details">
          <div className="profile-details-name">
            <h1 className="primary-text">
              Hi, I'm <span className="highlighted-text">Shiv Raj Singh</span>
            </h1>
          </div>
          <div className="profile-details-role">
            <h2>
              <Typewriter
                words={[
                  "Web Developer",
                  "Full Stack Developer",
                  "MERN Stack Developer",
                  "Node.js Developer",
                  "React.js Developer",
                ]}
                loop={Infinity}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h2>
            <p className="profile-role-tagline">
              Experienced in creating interactive, scalable web apps and APIs.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="profile-option">
            <button
              className="btn primary-btn"
              onClick={() => navigate("/Contact")}
            >
              Hire Me
            </button>
            <a href="shiv_CV.pdf" download={"shivraj_resume"}>
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
