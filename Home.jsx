import Card from './Card.jsx'; // Importing the Card component
import Recents from './Recents.jsx'; // Importing the Recents component
import Background from './Background.jsx'; // Importing the Background component

function Home() {
    return (
        <>
            {/* Applying the Background component to wrap around the main content */}
            <Background>
                {/* Card component to display a card element */}
                <Card />
                {/* Container for the Recents component */}
                <div className="home-container">
                    <Recents />
                </div>
            </Background>
        </>
    );
}

export default Home;
