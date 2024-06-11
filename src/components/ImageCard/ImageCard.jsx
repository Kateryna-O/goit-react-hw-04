
import styles from "./ImageCard.module.css";

const ImageCard = ({ urls, description }) => {
  return (
    <div className={styles.card}>
      <img src={urls.small} alt={description} className={styles.image} />
    </div>
  );
};

export default ImageCard;
