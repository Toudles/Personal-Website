// Background.jsx
import React from 'react';
import './index.css'; // Ensure CSS file is imported correctly

function Background({ children }) {
    return (
        <div className="Background">
        {children}
        </div>
    );
}

export default Background;
