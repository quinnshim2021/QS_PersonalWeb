import React from 'react';
import './Resume.css';
import { Link } from 'react-router-dom';
import resume from './resume.pdf';

// need to get rid of padding at the top of the page (get resume and back to main page to the very top)
const Resume = ({ }) => {
    var elements = ['all', 'tech', 'lang', 'other'];
    var curr = 'all';
    function show(c){
        var btn = document.getElementById(c);
        btn.classList.add('active');
        document.getElementById(curr).classList.remove('active');
        curr = c;
        var li = document.getElementsByClassName(c);
        for(let item of li){
            item.classList.remove('filterDiv');
        }
        if (c !== 'all'){
            for(let cl of elements){
                if (cl !== c && cl !== 'all'){
                    hide(cl);
                    document.getElementById(cl).classList.remove('active');
                }
            }
        }
    }
    function hide(c){
        var li = document.getElementsByClassName(c);
        for(let item of li){
            item.classList.add('filterDiv');
        }
    }
    //To do:
    // 1. make resume downloadable with button click
    // 2. fill out each section from resume
    // 3. make this page and start page look better
  return (
    <div className="Resume">
        <div className="Resume-header">
            <h1 className="title">Resume<p className="update">Updated 11/25/19</p><a className="Resume-download" href={resume} download>Download Resume as PDF</a></h1>
            <section className="education"> {/*Northwestern then certificates*/}
                <h2 className="section-title">Education</h2>
                <ul>
                    <li>
                        <div>
                            <p>Northwestern University - Evanston, IL</p>
                            <p>BA in <b>Computer Science</b>, Minor in <b>Political Science</b>, Certificate in <b>Leadership</b></p>
                            <p>Expected Graduation: June 2021</p>
                            <p>Cumulative GPA: 3.62</p>
                        </div>
                    </li>
                </ul>
            </section>
            <section className="experience"> {/*Add Salesforce, EDC, Juni, DISC Exec, Dot Dev, then Anethesiology*/}
                <h2 className="section-title">Experience</h2>
                <ul>
                    <li>
                        <div>
                            <p>Salesforce - Indianapolis, IN - June 2019-September 2019</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>Evanston Development Cooperative - Evanston, IL - January 2019-June 2019</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>Juni Learning - Virtual - April 2019-Present</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>Develop + Innovate for Social Change - Evanston, IL - December 2017-Present</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>Dot Dev - Evanston, IL - September 2017-December 2018</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>Zhang Anesthesiology Lab, University of Cincinnati College of Medicine - Cincinnati, OH - June 2017-September 2017</p>
                        </div>
                    </li>
                </ul>
            </section>
            <section className="projects"> {/*Add work about Deployment Manager, publications, and projects I've worked on before, Deans list, high school className president, ap scholar*/}
                <h2 className="section-title">Projects and Superlatives</h2>
                <ul>
                    <li>
                        <div>
                            <p>Deployment Manager</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>Published Op Eds</p>
                            {/*Link them here*/}
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>Map Tool - Evanston Development Cooperative</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>Published Chrome Extension</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>Salesforce Campus Ambassador</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>Dean's List</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>Questbridge Scholar</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>High School Senior Class President</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>AP Scholar with Distinction</p>
                        </div>
                    </li>
                </ul>
            </section>
            <section className="skills"> {/*Skills from resume and certificates */}
                <h2 className="section-title">Skills</h2>
                {/*Do table with filter for Languages/Frameworks, Soft Skills, IDE's, and things like Agile*/}
                <div id="myBtnContainer">
                    <button id="all" className="btn active" onClick={() => show('all')}> Show all</button>
                    <button id="lang" className="btn" onClick={() => show('lang')}> Languages/Frameworks</button>
                    <button id="tech" className="btn" onClick={() => show('tech')}> Technology</button>
                    <button id="other" className="btn" onClick={() => show('other')}> Other</button>
                </div>

                <div className="container">
                    <div className="lang all b">JavaScript</div>
                    <div className="lang all b">React</div>
                    <div className="lang all b">Python</div>
                    <div className="lang all b">Java</div>
                    <div className="lang all b">C#</div>
                    <div className="lang all b">C++</div>
                    <div className="lang all b">jQuery</div>
                    <div className="lang all b">HTML/CSS</div>
                    <div className="tech all b">Git</div>
                    <div className="tech all b">Visual Studio</div>
                    <div className="tech all b">Command Line</div>
                    <div className="tech all b">Chrome Extension Development</div>
                    <div className="tech all b">LaTeX</div>
                    <div className="other all b">Agile Methodology</div>
                    <div className="other all b">Leadership</div>
                    <div className="other all b">American Politics</div>
                    <div className="other all b">Tutoring</div>
                    <div className="other all b">Web Application Development</div>
                </div>
            </section>
            <br></br>
            <div className="back">
                <Link className="Resume-link" to='./App.js'>Back to Main Page</Link>
            </div>
        </div>
    </div>
  );
}
export default Resume;