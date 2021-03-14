import ReactModal from 'react-modal';

const customStyles = {
  content: {
    height: '100vh',
    top: '51%',
    left: '80%',
    right: '-30%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#f2f2ef',
  },
};
function Modal({ isOpen, children }) {
  return (
    <ReactModal
      isOpen={isOpen}
      style={customStyles}
      contentLabel="Example Modal"
      shouldCloseOnOverlayClick={true}
    >
      {children}
    </ReactModal>
  );
}

export default Modal;
