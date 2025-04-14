import React from 'react';
import './about.css';
import './photo.css';

const Projects = () => {
  return (
    <section id="projects" className="about-section d-flex flex-column align-items-center " 
      style={{ backgroundColor: "white", minHeight: "100vh", padding: "80px 0" }}>
      
      <div className="about-card d-flex justify-content-left align-items-center p-4 shadow-lg mb-4" 
        style={{
          width: "80%",
          borderRadius: "20px",
          backgroundColor: "#ffffff",
          transition: "transform 0.3s ease-in-out",
        }}>
        <div style={{ textAlign: "left", flex: 1 }}>
          <p style={{ fontWeight: "bold", fontSize: "24px", color: "#2c3e50" }}>A Fox Story</p>
          <h3 style={{ fontSize: "18px", color: "#2c3e50", lineHeight: "1.5" }}>
            Foxi, a fox cursed from birth, sets out to find his brother. This game is a platformer rogue-like with a story that I made by myself from free assets, and it's the first game I've ever made.
            <br />
            <br />
             Game link :{" "}
            <a href="https://baysalgames.itch.io/a-fox-story" target="_blank" rel="noopener noreferrer">
              A Fox Story
            </a>{" "}
          </h3>
        </div>
        <div style={{ flex: 1, textAlign: "right" }}>
           <iframe
            width="90%"
            height="300px"
            src="https://www.youtube.com/embed/STD92cmPuUk?autoplay=1&mute=1"
            title="A Fox Story Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              borderRadius: "15px",
            }}
          ></iframe>
        </div>
      </div>

      <div className="about-card d-flex justify-content-right align-items-center p-4 shadow-lg" 
        style={{
          width: "80%",
          borderRadius: "20px",
          backgroundColor: "#ffffff",
          transition: "transform 0.3s ease-in-out",
        }}>
          <div style={{ flex: 1, textAlign: "left" }}>
          <iframe
            width="90%"
            height="300"
            src="https://www.youtube.com/embed/baFt7wlF0q4?autoplay=1&mute=1"
            title="Bally Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              borderRadius: "15px",
            }}
          ></iframe>
        </div>
        <div style={{ textAlign: "right", flex: 1 }}>
          <p style={{ fontWeight: "bold", fontSize: "24px", color: "#2c3e50" }}>Bally</p>
          <h3 style={{ fontSize: "18px", color: "#2c3e50", lineHeight: "1.5" }}>
            Your main goal is to finish the game by completing differently designed levels with Bally.
            <br />
            <br />
             Game link:{" "}
            <a href="https://play.google.com/store/apps/details?id=com.BaysalGames.Bally" target="_blank" rel="noopener noreferrer">
              Play Store Link
            </a>{" "}
          </h3>
        </div>
      </div>
      <br />
      <div className="about-card d-flex justify-content-left align-items-center p-4 shadow-lg mb-4" 
        style={{
          width: "80%",
          borderRadius: "20px",
          backgroundColor: "#ffffff",
          transition: "transform 0.3s ease-in-out",
        }}>
        <div style={{ textAlign: "left", flex: 1 }}>
          <p style={{ fontWeight: "bold", fontSize: "24px", color: "#2c3e50" }}>Dodge the Asteroids!</p>
          <h3 style={{ fontSize: "18px", color: "#2c3e50", lineHeight: "1.5" }}>
In this game where you control the spaceship, the goal is to avoid damage from asteroids and destroy them.            <br />
            <br />
             Game link:{" "}
            <a href="https://baysalgames.itch.io/dodge-the-asteroids" target="_blank" rel="noopener noreferrer">
              Dodge the Asteroids
            </a>{" "}
          </h3>
        </div>
        <div style={{ flex: 1, textAlign: "right" }}>
          <img
            className="profile-img"
            src="/dta.jpg"
            alt="dta"
            style={{
              maxWidth: "80%",
              height: "300px",
              borderRadius: "15px",
              transition: "transform 0.4s ease-in-out",
            }}
          />
        </div>
      </div>

      <div className="about-card d-flex justify-content-right align-items-center p-4 shadow-lg" 
        style={{
          width: "80%",
          borderRadius: "20px",
          backgroundColor: "#ffffff",
          transition: "transform 0.3s ease-in-out",
        }}>
          <div style={{ flex: 1, textAlign: "left" }}>
          <img
            className="profile-img"
            src="/cor.png"
            alt="cor" 
            style={{
              maxWidth: "80%",
              height: "300px",
              borderRadius: "15px",
              transition: "transform 0.4s ease-in-out",
            }}
          />
        </div>
        <div style={{ textAlign: "right", flex: 1 }}>
          <p style={{ fontWeight: "bold", fontSize: "24px", color: "#2c3e50" }}>Cost of Redemption</p>
          <h3 style={{ fontSize: "18px", color: "#2c3e50", lineHeight: "1.5" }}>
Step into the shoes of a troubled yet loyal guardian, caught between the shadows of a haunting past and the dangers of the present. Cost of Redemption is a dramatic 2D pixel art game where every choice matters.            <br />
            <br />
             Game link:{" "}
            <a href="https://baysalgames.itch.io/cost-of-redemption" target="_blank" rel="noopener noreferrer">
              Cost of Redemption
            </a>{" "}
          </h3>
        </div>
        
      </div>
    </section>
  );
};

export default Projects;
