import React, { useState } from 'react';
import Background from './Background.jsx'; // Importing the Background component
import javaGame from './assets/2048.png'; // Importing images for projects
import Albert from './assets/albert.png';
import Albert1 from './assets/albert1.png';
import Albert2 from './assets/albert2.png';
import ER from './assets/ERlogo.png';
import ER1 from './assets/ER1.png';
import ER2 from './assets/ER2.png';
import SW from './assets/SWLogo.png';
import SW1 from './assets/SW1.png';
import SW2 from './assets/SW2.png';
import SW3 from './assets/SW3.png';
import SW4 from './assets/SW4.png';
import Cookbook from './assets/Cookbook.png';
import CB1 from './assets/CB1.png';
import CB2 from './assets/CB2.png';
import NB from './assets/NB.png';
import NB1 from './assets/NB1.png';
import NB2 from './assets/NB2.png';

// Array of project data
const projectData = [
  {
    id: 1,
    title: "2048",
    image: javaGame,
    briefDescription: "A simple and fun 2048 game.",
    detailedDescription: "This is a game where you combine tiles with the same number to get to the 2048 tile. It's built using Java and Processing. Features include sounds, game over screen, live score updates, and live color changes per tile change.",
    screenshots: [javaGame], 
  },
  {
    id: 2,
    title: "Albert",
    image: Albert,
    briefDescription: "A recreation of NYU's class selector, 'Albert', for easier accessibility and cleaner visuals.",
    detailedDescription: "This is a recreation of NYU's class selector, 'Albert'. I felt that a visual guide while picking was very important so I decided to implement the usage of a live calendar that would update/give visual cues whenever we added or removed a class so we knew when we could add a class at a specific time or when we wouldn't be able to due to conflicting schedules. I kept the cart feature so we know how many courses we have and also had a mini calendar while picking classes and a big calendar when we were at the homepage not picking any classes but just to see what our schedule would look like if the current cart was the finalized verison of our semester schedule." ,
    screenshots: [Albert, Albert1, Albert2], 
  },
  {
    id: 3,
    title: "Elden Ring Wiki",
    image: ER,
    briefDescription: "A creation of a Wikipedia page for the famous Souls game, Elden Ring.",
    detailedDescription: "A creation of a Wikipedia page where I took the most important things a user should know about the game and compiled it into one easily accessible website where a player can access game guides on where certain items are, or certain builds a user can try out that are both fun and strong while also having the homepage show the most recent up-to-date patch notes. As an avid player myself, I also tend to find out things that have been updated but not stated in the patch notes so I make sure to add those within the updates as well. Considering user time and simpicity, I tried to make it as visually appealing in terms of both simplicity and accessibility.",
    screenshots: [ER1, ER2],
  },
  {
    id: 4,
    title: "Summoners War Informative",
    image: SW,
    briefDescription: "An informative page for popular mobile game Summoners War that contains all the information that a beginner user should need to get started and progress well into the game",
    detailedDescription:"A creation of an informative page for anyone who wants to get into the popular mobile game Summoners War. I made sure to add an important live clock that updates accordingly to the game updates of attribute dungeon. I also made sure to account for all aspects of the game that could end up being important while updating as soon as new content comes out. Incorporated images as well to gives users visual cues of what's important and what they should look out for while playing." ,
    screenshots: [SW1, SW2, SW3, SW4],
  },
  {
    id: 5,
    title: "Virutal Cookbook",
    image: Cookbook,
    briefDescription: "A virtual cookbook for anything I cook in my personal life that I want to add here. (W.I.P)",
    detailedDescription: "My personal cookbook for anything I want to make in the future. What's currently on the page is recipe I borrowed from streamer QTCinderella. I plan on updating things to my own personal recipes with images later on.",
    screenshots: [CB1, CB2],
  },
  {
    id: 6,
    title: "noahboardman photo",
    image: NB,
    briefDescription: "Helped my friend create his portfolio for his career.",
    detailedDescription: "I helped my friend work on his 'multicam' page. Worked on adding embedding from personal videos, youtube and also working on styling that is visually appealing to any viewers.",
    screenshots: [NB1, NB2],
  },
];

// Define the Projects component
function Projects() {
  const [selectedProject, setSelectedProject] = useState(null); // State to track the selected project for modal view

  // Handler function to open modal with selected project
  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  // Handler function to close the modal
  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <Background>
        {/* Main heading for the Projects section */}
        <h1 style={{ fontFamily: 'Arial, sans-serif' }}>My Personal Projects</h1>
        <div className="Projects">
          {/* Map over the projectData array to render each project item */}
          {projectData.map((project) => (
            <div key={project.id} className="Projects-item" onClick={() => handleProjectClick(project)}>
              {/* Project title */}
              <h2 style={{ fontFamily: 'Arial, sans-serif' }}>{project.title}</h2>
              {/* Project image */}
              <img className="Projects-image" src={project.image} alt={project.title} />
              {/* Brief description of the project */}
              <p style={{fontFamily: 'Arial, sans-serif'}}>{project.briefDescription}</p>
            </div>
          ))}
        </div>
        <h1 style={{ fontFamily: 'Arial, sans-serif' }}>Links to Projects</h1>
        <p style={{ fontFamily: 'Arial, sans-serif' }}>
          <a href="https://66ccc5eda1100d566185e697--curious-muffin-00b58b.netlify.app/" target="_blank" rel="noopener noreferrer">
            Albert
          </a>
        </p>
        <p style={{ fontFamily: 'Arial, sans-serif' }}>
          <a href="https://66ccc576fb816a527961c35c--stupendous-licorice-fc0d20.netlify.app/" target="_blank" rel="noopener noreferrer">
            Elden Ring Wiki
          </a>
        </p>
        <p style={{ fontFamily: 'Arial, sans-serif' }}>
          <a href="https://idyllic-dieffenbachia-f752b0.netlify.app/" target="_blank" rel="noopener noreferrer">
            Summoners War Informative
          </a>
        </p>
        <p style={{ fontFamily: 'Arial, sans-serif' }}>
          <a href="https://66ccddaf99b66307671c70a2--papaya-cannoli-7ae1fe.netlify.app/" target="_blank" rel="noopener noreferrer">
            Virtual Cookbook
          </a>
        </p>
        <p style={{ fontFamily: 'Arial, sans-serif' }}>
          <a href="https://www.noahboardman.photo/multicam" target="_blank" rel="noopener noreferrer">
            NoahBoardman Portfolio multicam
          </a>
        </p>
      </Background>
      {/* Render Modal component if a project is selected */}
      {selectedProject && (
        <Modal project={selectedProject} onClose={handleCloseModal} />
      )}
    </>
  );
}

// Define the Modal component
function Modal({ project, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the current image index in the slideshow

  // Handler function to show previous screenshot
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : project.screenshots.length - 1));
  };

  // Handler function to show next screenshot
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < project.screenshots.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className="Modal-overlay">
      <div className="Modal-content">
        {/* Close button for the modal */}
        <button className="Modal-close" onClick={onClose}>X</button>
        {/* Modal heading with project title */}
        <h2 style={{fontFamily: 'Arial, sans-serif'}}>{project.title}</h2>
        {/* Detailed description of the project */}
        <p style={{fontFamily: 'Arial, sans-serif'}}>{project.detailedDescription}</p>
        <div className="Slideshow">
          <div className="Main-image">
            {/* Display current screenshot */}
            <img src={project.screenshots[currentIndex]} alt={`${project.title} screenshot ${currentIndex + 1}`} />
          </div>
          <div className="Thumbnail-container">
            {/* Button to navigate to previous screenshot */}
            <button onClick={handlePrev}>&lt;</button>
            {/* Thumbnails for all screenshots */}
            {project.screenshots.map((screenshot, index) => (
              <img
                key={index}
                src={screenshot}
                alt={`${project.title} screenshot ${index + 1}`}
                className={`Thumbnail ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
            {/* Button to navigate to next screenshot */}
            <button onClick={handleNext}>&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
