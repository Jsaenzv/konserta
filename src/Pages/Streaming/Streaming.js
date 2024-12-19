import React from 'react';

const Streaming = () => {
    const handleWatchChannel = () => {
        window.location.href = 'https://www.youtube.com/channel/UCXXXXXX'; // Replace with actual channel URL
    };

    const handleWatchLastStream = () => {
        window.location.href = 'https://www.youtube.com/watch?v=XXXXXXX'; // Replace with actual last stream URL
    };

    return (
        <div className="streaming-page">
            <img 
                src="/path/to/konserta-channel-photo.jpg" 
                alt="Konserta Channel" 
                className="channel-photo"
            />
            <div className="buttons-container">
                <button onClick={handleWatchChannel} className="watch-button">
                    Ver Canal
                </button>
                <button onClick={handleWatchLastStream} className="watch-button">
                    Ver Último Stream
                </button>
            </div>
        </div>
    );
};

export default Streaming;