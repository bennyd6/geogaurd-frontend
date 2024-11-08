import './home.css';
import arrow from '../assets/down-arrow.png';
import { useState } from 'react';
import ps from '../assets/ps.webp'
import as from '../assets/apple.svg'

export default function Home() {
    const [hovered, setHovered] = useState(false);

    return (
        <>
        <div className="home-main">
            <div
                className={`home-main-content ${hovered ? 'hovered' : ''}`}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <h1>Explore Now</h1>
                {hovered && (
                    <div className="down-arrow">
                        <img src={arrow} alt="Down Arrow" />
                    </div>
                )}
            </div>
            <div className="store">
                <div className="ps">
                    <img src={ps} alt=""/>
                    <h2>Get the app from<br/> Play Store</h2>
                </div>
                <div className="as">
                    <img src={as} alt=""/>
                    <h2>Get the app from<br/> AppStore</h2>
                </div>
            </div>
        </div>
        <div className="home-main-services">
            <div className="home-main-services-in">
                <a href='#'>Quick Predict</a>
            </div>
        </div>
        </>
    );
}
