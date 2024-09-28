// Importing necessary libraries and components
import { useState } from 'react'; // useState hook from React for state management
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // React Router components for navigation
import Background from './Background.jsx'; // Background component
import NavBar from './NavBar.jsx'; // NavBar component
import Projects from './Projects.jsx'; // Projects component
import About from './About.jsx'; // About component
import ContactForm from './ContactForm.jsx'; // ContactForm component
import Home from './Home.jsx'; // Home component

// Main App component
function App() {
  // State to manage the visibility of the contact form
  const [isContactFormVisible, setContactFormVisible] = useState(false);

  // Function to handle the contact button click, shows the contact form
  const handleContactClick = (e) => {
    e.preventDefault(); // Prevent default link behavior
    setContactFormVisible(true); // Show contact form
  };

  // Function to handle closing the contact form
  const handleCloseForm = () => {
    setContactFormVisible(false); // Hide contact form
  };

  return (
    // Router component to enable navigation
    <Router>
      {/* Background component wrapping the entire application */}
      <Background>
        {/* NavBar component with a prop to handle contact button click */}
        <NavBar onContactClick={handleContactClick} />
        {/* Routes component to define different routes/pages */}
        <Routes>
          {/* Route for the home page */}
          <Route path="/" element={<Home />} />
          {/* Route for the projects page */}
          <Route path="/projects" element={<Projects />} />
          {/* Route for the about page */}
          <Route path="/about" element={<About />} />
        </Routes>
        {/* ContactForm component with visibility and close handler props */}
        <ContactForm isVisible={isContactFormVisible} onClose={handleCloseForm} />
      </Background>
    </Router>
  );
}

// Exporting the App component as the default export
export default App;
