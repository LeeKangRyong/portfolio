import './Zoom.css';

interface ZoomProps {
    imageSrc: string;
    altText: string;
    onClose: () => void;
}

function Zoom({ imageSrc, altText, onClose }: ZoomProps) {
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