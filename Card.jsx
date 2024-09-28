// Importing the profile picture from the assets folder
import profilePic from './assets/me.jpg'

// Define the Card component
function Card() {

    return (
    /* Add className here to work with CSS only related to this card section. This class will style the whole card container.*/
        <div className="card">

            {/* Add a className attribute within the "img" tag to work with CSS only related to the logo itself 
            and not the whole card section. This class will style only the image inside the card.*/}
            <img className="card-image" src={profilePic} alt="Profile Picture"/>

            {/* Add a className attribute to the "h2" tag to apply specific styles to the card title.*/}
            <h2 className='card-title'>Hi, my name is Andrew</h2>

            {/* Add a className attribute to the "p" tag to apply specific styles to the card text.*/}
            <p className='card-text'>I am currently a student attending NYU CAS as a computer science major and 
            I am interested in Web Development, Game Theory. I am also a heavy game fanataic!</p>
        </div>
    );
}

// Export the Card component to be used in other parts of the application
export default Card;
