import React from 'react';

function Modal({ setModal }) {
    return (
        <div 
            className="modal-overlay"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1000
            }}
            onClick={setModal}
        >
            <div 
                className="modal-content"
                style={{
                    backgroundColor: 'white',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                    maxWidth: '500px',
                    width: '90%',
                    maxHeight: '90%',
                    position: 'relative'
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <p style={{ color: 'black' }}>hello</p>
                <p style={{ color: 'black' }}>i am lee</p>
                <button 
                    onClick={setModal}
                    style={{
                        marginTop: '10px',
                        padding: '8px 16px',
                        backgroundColor: '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    닫기
                </button>
            </div>
        </div>
    );
}

export default Modal;