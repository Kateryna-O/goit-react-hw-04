import ImageCard from "../ImageCard/ImageCard.jsx";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ images, openModal }) => {
  return (
    <div className={styles.gallery}>
      {images.map((image) => (
        <div
          key={image.id}
          className={styles.imageWrapper}
          onClick={() => openModal(image)}
        >
          <ImageCard urls={image.urls} description={image.description} />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
