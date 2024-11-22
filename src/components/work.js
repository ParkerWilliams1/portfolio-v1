import React from 'react';
import '../styles/work.css';

const Work = () => {
  return(
    <div id="work-wrapper">
      <div className="job-wrapper">
       <h2 className="job-title">Student Researcher</h2>
       <h3 className="job-company">California Baptist University</h3>
         <ul className="job-description">
           <li>Developed Python scripts for 3D coordinate manipulation, text file parsing, and generation to facilitate research on Pelvic Organ Prolapse Surgery.</li>
           <li>Facilitated the transition of Finite Element Model simulations from Abaqus to FEBio software, improving
computation time by 50% and saving $10,000+ in annual software costs.</li>
           <li>Refined and optimized Sequential Machine Learning model using the Keras API, training it with over
10,000+ simulations to enhance accuracy predicting tissue properties to 85%.</li>
           <li>Co-authoring a Methods Research Paper on the application of machine learning for inverse finite element
analysis.</li>
         </ul>
      </div>

    <div className="work-wrapper">
      <div className="job-wrapper">
       <h2 className="job-title">Undergraduate Student Worker</h2>
       <h3 className="job-company">California Baptist University</h3>
         <ul className="job-description">
           <li>Developed R scripts for instance of Concerto, a CAT (Computer-Aided Testing) software hosted on AWS,
enhancing its functionality for use in class grading in the Engineering Department.</li>
           <li>Implemented SQL tables to efficiently store and visualize student test performance data, enhancing data
management capabilities.</li>
           <li>Collaborated closely with Dr. Mark Gordon throughout development cycle to ensure alignment with university’s
objectives and achieve desired outcomes.</li>
         </ul>
      </div>
    </div>
    </div>
  );
};

export default Work;
