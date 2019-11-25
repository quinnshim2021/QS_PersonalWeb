import React from 'react';
import './Resume.css';
import { Link } from 'react-router-dom';

// need to get rid of padding at the top of the page (get resume and back to main page to the very top)
const Resume = ({ }) => {
    //To do:
    // 1. make resume downloadable with button click
    // 2. fill out each section from resume
    // 3. make this page and start page look better
  return (
    <div className="Resume">
        <div className="Resume-header">
            <h1 class="title">Resume<p class="update">Updated 11/25/19</p><button>Download Resume as PDF</button></h1>
            <div class="education">
                <h2 class="section-title">Education</h2>
            </div>
            <div class="experience">
                <h2 class="section-title">Experience</h2>
            </div>
            <div class="projects">
                <h2 class="section-title">Projects and Superlatives</h2>
            </div>
            <div class="skills">
                <h2 class="section-title">Skills</h2>
            </div>
            <div class="back">
                <Link class="Resume-link" to='./App.js'>Back to Main Page</Link>
            </div>
        </div>
    </div>
  );
}
export default Resume;