import Background from './Background.jsx'; // Importing the Background component
import javaGame from './assets/2048.png'; // Importing image for the 2048 game
import Albert from './assets/albert.png'; // Importing image for the Albert remake
// Add more image imports as needed
import Gojo from './assets/gojochill.png'; // Importing image for another project
import SW from './assets/SWLogo.png';
import ER from './assets/ERlogo.png';

function Recents() {
    return (
        <Background>
            {/* Main header for the Recents section */}
            <h1 style={{fontFamily: 'Arial, sans-serif'}}>Recent Activity</h1>
            <div className="gallery">
                {/* Gallery item for the 2048 game */}
                <div className="gallery-item">
                    <h2 style={{fontFamily: 'Arial, sans-serif'}}>Elden Ring Wiki</h2>
                    <img className="gallery-image" src={ER} alt="Elden Ring Wiki"/>
                    <p style={{fontFamily: 'Arial, sans-serif'}}>A Wiki Page regarding content from the popular Souls game: Elden Ring</p>
                </div>
                {/* Gallery item for the Albert remake */}
                <div className="gallery-item">
                    <h2 style={{fontFamily: 'Arial, sans-serif'}}>Albert</h2>
                    <img className="gallery-image" src={Albert} alt="Albert remake" />
                    <p style={{fontFamily: 'Arial, sans-serif'}}>A recreation of NYU's class selector, "Albert", for easier accessibility and cleaner visuals.</p>
                </div>
                {/* Gallery item for another project */}
                <div className="gallery-item">
                    <h2 style={{fontFamily: 'Arial, sans-serif'}}>Summoners War informative</h2>
                    <img className="gallery-image" src={SW} alt="Summoners War informative" />
                    <p style={{fontFamily: 'Arial, sans-serif'}}>A Summoners War informative page for beginners to learn from.</p>
                </div>
                {/* Gallery item for yet another project */}
            </div>
        </Background>
    );
}

export default Recents;
