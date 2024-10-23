import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css"; // Импортируем стили
import "./style.css";
import img from "./img/11.jpg";
import img1 from "./img/22.jpg";
import img2 from "./img/33.jpg";
import img3 from "./img/44.jpg";
import img4 from "./img/55.jpg";

const Gallery = () => {
  const images = [
    {
      original: img,
      thumbnail: img,
    },
    {
      original: img1,
      thumbnail: img1,
    },
    {
      original: img2,
      thumbnail: img2,
    },
    {
      original: img3,
      thumbnail: img3,
    },
    {
      original: img4,
      thumbnail: img4,
    },
  ];

  return (
    <div className="gallery-container">
      <ImageGallery
        items={images}
        showThumbnails={true}
        showFullscreenButton={false}
        showPlayButton={true} // Отключаем кнопку воспроизведения
        autoPlay={true} // Отключаем автопроигрывание
      />
    </div>
  );
};

export default Gallery;
