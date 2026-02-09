import React from 'react';
import './App.css';

const App = () => {
    return (
        <div className="app-container">
            {/* Liquid Background Blobs */}
            <div className="blob blob-1"></div>
            <div className="blob blob-2"></div>
            <div className="blob blob-3"></div>

            <nav className="navbar glass">
                <div className="logo">Yuhao Qiu</div>
                <div className="nav-links">
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
            </nav>

            <main className="content">
                <section className="hero glass">
                    <h1>Engineering<br /> <span className="gradient-text">Portfolio</span></h1>
                    <p className="subtitle">
                        Dedicating this year to exploring and learning through ambitious software
                        and electronics projects. Fueled by curiosity and committed to building
                        the skillset necessary to one day change the world.
                    </p>
                    <div className="button-group">
                        <button className="btn-primary">View Projects</button>
                        <button className="btn-secondary">Download Resume</button>
                    </div>
                </section>

                <section className="projects-grid">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="project-card glass">
                            <div className="card-image"></div>
                            <div className="card-content">
                                <h3>Project Title {i}</h3>
                                <p>A brief description of the engineering project and the impact it had.</p>
                                <div className="tags">
                                    <span>TypeScript</span>
                                    <span>React</span>
                                    <span>Node.js</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            </main>

            <footer className="footer glass">
                <p>&copy; 2026 Yuhao Qiu. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default App;
