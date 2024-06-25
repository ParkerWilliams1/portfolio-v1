import React from 'react';
import './Sidebar.css'; 

function Sidebar() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const scrollToProjects = () => {
        const projectsSection = document.getElementById('projects-section');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="sidebar">
            <ul>
                <li><button onClick={scrollToTop}>Home</button></li>
                <li><button onClick={scrollToProjects}>Projects</button></li>
                {/* Add more buttons for other sections if needed */}
            </ul>
        </div>
    );
}

export default Sidebar;
