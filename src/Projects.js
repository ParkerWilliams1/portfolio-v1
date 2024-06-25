import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Projects.css'; 

function Projects() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <div className="projects-section">
            <h1 className="projects-header" data-aos="fade-up">Projects</h1>
            <div className="projects-container" data-aos="fade-up">
                <div className="project-card" id="betterblackboardlearn">
                    <img src="BbLearn.png" alt="Better Blackboard Learn" />
                    <h1>Better Blackboard Learn, 200+ Users</h1>
                    <p>Chrome Extension for Blackboard Learn providing students customization of Themes, fonts, Class Images, and Names.</p>
                </div>
                <div className="project-card" id="stockmarketprediction">
                    <img src="SP500.png" alt="Stock Market Prediction" />
                    <h1>Stock Market Prediction, ML Model</h1>
                    <p>Engineered a machine learning model using Sci-Kit Learn's Random Forest to predict S&P 500 stock prices.</p>
                </div>
            </div>
        </div>
    );
}

export default Projects;
