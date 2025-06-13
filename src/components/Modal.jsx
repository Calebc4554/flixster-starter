import React from 'react';
import '../components-css/Modal.css'; 

const Modal = ({ show, onClose, children }) => {
    if (!show) {
        return null;
    }
    return (
        <div className='modalOverlay'>
            <div className='modalContent'>
                <button className='modalClose' onClick={onClose}>&times;</button>
                {children}
            </div>
        </div>
    );
};
export default Modal;