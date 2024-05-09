import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className='hero'>
            <div className="banner">
                <h1>Volunteers</h1>
                <h3>Needed</h3>
                <p>Join us in our mission to help others</p>
                <Link to={'/donate'} className='btn'>Donate Now</Link>
            </div>

            <div className="banner">
                <img src="/hero.png" alt="hero" />

            </div>

        </section>
    );
};

export default Hero;