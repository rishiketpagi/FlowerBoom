import React, { useState, useCallback } from "react";
import "./Gallery.css";

/* ---------------------------------------------------
   FLOWER DATA
---------------------------------------------------- */

const FLOWERS = [
  {
    name: "Red Roses",
    img: "https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg",
    desc: "Symbol of love and passion, these crimson beauties captivate hearts."
  },
  {
    name: "Sunflower Field",
    img: "https://images.pexels.com/photos/46216/sunflower-flowers-bright-yellow-46216.jpeg",
    desc: "Golden rays of sunshine dancing in the warm summer breeze."
  },
  {
    name: "Pink Tulips",
    img: "https://images.pexels.com/photos/36488/tulip-flower-spring-pink.jpg",
    desc: "Elegant spring blossoms representing perfect love and care."
  },
  {
    name: "Lavender Field",
    img: "https://images.unsplash.com/photo-1522383225653-ed111181a951",
    desc: "Fragrant purple waves creating a serene, calming landscape."
  },
  {
    name: "Cherry Blossoms",
    img: "https://images.unsplash.com/photo-1522383225653-ed111181a951",
    desc: "Delicate pink petals marking the arrival of spring."
  }
];

/* ---------------------------------------------------
   CAROUSEL COMPONENT
---------------------------------------------------- */

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const total = FLOWERS.length;

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  return (
    <div className="new-carousel">
      <button className="new-btn prev" onClick={prev}>‹</button>

      <div className="carousel-center">
        <div className="carousel-image-wrapper">
          <img
            src={FLOWERS[index].img}
            alt={FLOWERS[index].name}
            className="carousel-fixed-image"
          />
        </div>

        <div className="carousel-text">
          <h3 className="flower-title">{FLOWERS[index].name}</h3>
          <p className="flower-desc">{FLOWERS[index].desc}</p>

          <div className="carousel-count">
            {index + 1} <span>/</span> {total}
          </div>
        </div>
      </div>

      <button className="new-btn next" onClick={next}>›</button>
    </div>
  );
};

/* ---------------------------------------------------
   GRID COMPONENT
---------------------------------------------------- */

const FlowerGrid = () => {
  return (
    <div className="new-grid">
      {FLOWERS.map((f, i) => (
        <div key={i} className="new-grid-card">
          <img src={f.img} alt={f.name} className="new-grid-img" />
          <div className="new-grid-info">
            <h4>{f.name}</h4>
            <p>{f.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

/* ---------------------------------------------------
   MAIN GALLERY SECTION
---------------------------------------------------- */

const Gallery = () => {
  return (
    <section className="new-gallery-section">
      <h2 className="gallery-title">🌸 Featured Blooms 🌸</h2>
      <p className="gallery-subtitle">Nature's elegance captured in petals</p>

      <Carousel />

      <h2 className="gallery-title mt">Flower Collection</h2>
      <p className="gallery-subtitle">Explore the full gallery</p>

      <FlowerGrid />
    </section>
  );
};

export default Gallery;
