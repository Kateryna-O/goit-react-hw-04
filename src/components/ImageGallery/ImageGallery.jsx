import ImageCard from "../ImageCard/ImageCard.jsx";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ images }) => {
  return (
    <ul className={styles.gallery}>
      {images.map(({ id, urls, description }) => (
        <li key={id} className={styles.galleryItem}>
          <ImageCard urls={urls} description={description} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
