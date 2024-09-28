import ER from './assets/eldenring.gif'; // Importing an animated GIF for Elden Ring
import Background from './Background.jsx'; // Importing the Background component

// Define the About component
function About() {
    return (
        <>
            <Background>
                {/* Container for the About Me section */}
                <div className="about-container">
                    
                    {/* Bubble containing the header text */}
                    <div className="header-bubble">
                        <h1 style={{fontFamily: 'Arial, sans-serif'}}>About Me</h1> {/* Main heading */}
                    </div>
                    
                    {/* Bubble containing the main text and image */}
                    <div className="text-bubble">
                        {/* Paragraph describing the user's passion for web design */}
                        <p style={{fontFamily: 'Arial, sans-serif'}}>
                        As a newcomer to the world of computer science, I've recently discovered
                        a passion for web development. The idea of creating websites that others can use
                        that could improve their daily lives excites me. While my current websites 
                        may not yet measure up to the polished designs we're all accustomed to, I'm committed 
                        to working hard to improve my skills. I'm eager to grow as a developer and am ready to 
                        seize every opportunity to learn and create well-designed, user-friendly websites.
                        </p>
                        
                        {/* Paragraph about hobbies */}
                        <p style={{fontFamily: 'Arial, sans-serif'}}>
                            My non CS related hobbies consist of: Finding new music, playing games with friends or napping.
                        </p>
                        
                        {/* Paragraph about favorite games */}
                        <p style={{fontFamily: 'Arial, sans-serif'}}>
                            Games I enjoy are League of Legends, Valorant/Cs2 and I've recently been heavily addicted to Elden Ring.
                        </p>
                        
                        {/* Image of Elden Ring */}
                        <img src={ER} alt="Elden Ring" /> {/* Added alt text for accessibility */}
                    </div>
                </div>
            </Background>
        </>
    );
}

export default About;
