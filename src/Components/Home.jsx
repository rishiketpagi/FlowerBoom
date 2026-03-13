import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div className="home-container">
 
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Bloom with <span>FlowerBoom</span></h1>
                    <p>
                        Fresh blooms delivered with love — explore our exclusive flower
                        collections designed to brighten your every moment.
                    </p>
                    <div className="hero-buttons">
                        <Link to="/gallery" className="explore-btn">Shop Flowers</Link>
                        <Link to="/about" className="learn-btn">Learn More</Link>
                    </div>
                </div>
                <div className="hero-image"></div>
            </section>

            {/* Feature Section */}
            <section className="features">
                <h2>Why Choose <span>FlowerBoom?</span></h2>
                <div className="feature-grid">
                    <div className="feature-card">
                        <img src="https://cdn-icons-png.flaticon.com/512/706/706164.png" alt="Fresh" />
                        <h3>Freshly Handpicked</h3>
                        <p>Every bouquet is crafted from hand-selected, farm-fresh flowers.</p>
                    </div>

                    <div className="feature-card">
                        <img src="https://cdn-icons-png.flaticon.com/512/3106/3106770.png" alt="Delivery" />
                        <h3>Same-Day Delivery</h3>
                        <p>We deliver your happiness right on time — every time.</p>
                    </div>

                    <div className="feature-card">
                        <img src="https://cdn-icons-png.flaticon.com/512/616/616408.png" alt="Custom" />
                        <h3>Customized Bouquets</h3>
                        <p>Choose colors, styles, and wrapping for a personalized gift.</p>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials">
                <h2>What Our Customers Say</h2>
                <div className="testimonial-grid">
                    <div className="testimonial">
                        <p>“The roses were absolutely stunning — my wife loved them!”</p>
                        <span>– Tarak </span>
                    </div>
                    <div className="testimonial">
                        <p>“Super fast delivery and beautifully wrapped. Totally worth it!”</p>
                        <span>– Atmaram B</span>
                    </div>
                    <div className="testimonial">
                        <p>“FlowerBoom made my mom’s birthday truly special. Thank you!”</p>
                        <span>– Ananya P</span>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <p>© 2025 FlowerBoom | Crafted with 💖 for every bloom lover.</p>
            </footer>
        </div>
    );
};

export default Home;
