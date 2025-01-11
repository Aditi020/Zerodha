import React from 'react';
import Menu from './Menu';
import '../Styles/Navbar.css';

function Burger() {
    return (
        <div className="burger-container">
            <div className="mobile-menu">
                <Menu />
            </div>
            <div className="extra-links">
                <div className="link-group">
                    <h3>Utilities</h3>
                    <p>Brokerage calculator</p>
                    <p>Margin calculator</p>
                    <p>Holiday calculator</p>
                </div>
                <div className="link-group">
                    <h3>Updates</h3>
                    <p>Z-Connect blog</p>
                    <p>Pulse news</p>
                    <p>Circulars / Bulletin</p>
                    <p>IPOs</p>
                </div>
                <div className="link-group">
                    <h3>Education</h3>
                    <div className="education-links">
                        <div className="education-item">
                            <img src="https://zerodha.com/static/images/products/varsity.png" alt="Varsity" />
                            <p>Varsity</p>
                        </div>
                        <div className="education-item">
                            <img src="https://zerodha.com/static/images/products/tqna.png" alt="Trading Q&A" />
                            <p>Trading Q&A</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Burger;
