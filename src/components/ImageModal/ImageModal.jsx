import ReactModal from "react-modal";
import styles from "./ImageModal.module.css";

const ImageModal = ({ isOpen, onRequestClose, largeImageURL }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={styles.content}
      overlayClassName={styles.overlay}
      ariaHideApp={false}
    >
      <img src={largeImageURL} alt="Large" className={styles.image} />
    </ReactModal>
  );
};

export default ImageModal;
