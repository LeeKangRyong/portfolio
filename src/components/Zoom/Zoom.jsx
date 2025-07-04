import './Zoom.css';

function Zoom({ imageSrc, altText, onClose }) {
    return (
        <div className="zoomContainer" onClick={onClose}>
            <div className="zoomImageWrapper" onClick={(e) => e.stopPropagation()}>
                <button className="zoomCloseButton" onClick={onClose}>
                    ✕
                </button>
                <img 
                    className="zoomImage" 
                    src={imageSrc} 
                    alt={altText}
                />
            </div>
        </div>
    );
}

export default Zoom;