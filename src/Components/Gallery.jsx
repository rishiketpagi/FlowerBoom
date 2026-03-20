import React, { useState, useCallback, useEffect } from "react";
import "./Gallery.css";

const Carousel = ({ flowers }) => {
    const [index, setIndex] = useState(0);
    const total = flowers.length;

    const next = useCallback(() => {
        setIndex((prev) => (prev + 1) % total);
    }, [total]);

    const prev = useCallback(() => {
        setIndex((prev) => (prev - 1 + total) % total);
    }, [total]);

    if (total === 0) return null;

    return (
        <div className="new-carousel">
            <button className="new-btn prev" onClick={prev}>‹</button>

            <div className="carousel-center">
                <div className="carousel-image-wrapper">
                    <img
                        src={flowers[index].image}
                        alt={flowers[index].name}
                        className="carousel-fixed-image"
                    />

                    <div className="carousel-overlay"></div>

                    <div className="carousel-content">
                        <span className="carousel-badge">
                            {flowers[index].category || "Featured Bloom"}
                        </span>

                        <h3 className="flower-title">{flowers[index].name}</h3>
                        <p className="flower-desc">{flowers[index].description}</p>

                        <div className="carousel-footer">
                            <div className="carousel-dots">
                                {flowers.map((_, i) => (
                                    <span
                                        key={i}
                                        className={`dot ${i === index ? "active" : ""}`}
                                        onClick={() => setIndex(i)}
                                    ></span>
                                ))}
                            </div>

                            <div className="carousel-count">
                                {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <button className="new-btn next" onClick={next}>›</button>
        </div>
    );
};

const FlowerGrid = ({ flowers }) => {
    return (
        <div className="new-grid">
            {flowers.map((flower) => (
                <div key={flower.id} className="new-grid-card">
                    <div className="new-grid-img-wrap">
                        <img src={flower.image} alt={flower.name} className="new-grid-img" />
                        <span className="grid-tag">{flower.category || "Bloom"}</span>
                    </div>

                    <div className="new-grid-info">
                        <h4>{flower.name}</h4>
                        <p>{flower.description}</p>
                        <p><strong>₹{flower.price}</strong></p>
                    </div>
                </div>
            ))}
        </div>
    );
};

const Gallery = () => {
    const [flowers, setFlowers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchFlowers = async () => {
            try {
                const res = await fetch("http://localhost:5000/api/flowers");
                const data = await res.json();

                if (res.ok) {
                    setFlowers(data);
                } else {
                    setError("Failed to fetch flowers");
                }
            } catch (err) {
                setError("Something went wrong while fetching flowers");
            } finally {
                setLoading(false);
            }
        };

        fetchFlowers();
    }, []);

    return (
        <section className="new-gallery-section">
            <div className="bg-blob blob-1"></div>
            <div className="bg-blob blob-2"></div>

            <h2 className="gallery-title">Featured Blooms</h2>
            <p className="gallery-subtitle">
                Discover elegant floral beauty through a soft, modern gallery experience.
            </p>

            {loading && <p className="gallery-subtitle">Loading flowers...</p>}
            {error && <p className="gallery-subtitle">{error}</p>}

            {!loading && !error && flowers.length > 0 && (
                <>
                    <Carousel flowers={flowers} />

                    <h2 className="gallery-title mt">Flower Collection</h2>
                    <p className="gallery-subtitle">
                        Explore our curated garden of timeless blossoms.
                    </p>

                    <FlowerGrid flowers={flowers} />
                </>
            )}
        </section>
    );
};

export default Gallery;