import React from 'react';
import './Resume.css';
import { Link } from 'react-router-dom';
import resume from './resume.pdf';
import "./w3.css";

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

  return (
    <div className="Resume">
        <div className="Resume-header">
            <h1 className="title">Resume<p className="update">Updated 11/25/19 | <a className="Resume-download" href={resume} download>Download Resume as PDF</a></p></h1>
            <section className="education"> 
                <h2 className="section-title">Education</h2>
                <ul>
                    <li>
                        <div>
                            <p><b>Northwestern University</b> - Evanston, IL</p>
                            <p>BA in <b>Computer Science</b>, Minor in <b>Political Science</b>, Certificate in <b>Leadership</b></p>
                            <p>Expected Graduation: June 2021</p>
                            <p>Cumulative GPA: 3.64</p>
                        </div>
                    </li>
                </ul>
            </section>
            <section className="experience"> {/*Add Salesforce, EDC, Juni, DISC Exec, Dot Dev, then Anethesiology*/}
                <h2 className="section-title">Experience</h2>
                <table>
                    <tr>  
                        <th>Company</th>
                        <th>Role</th>
                        <th>Date</th>
                    </tr>  
                    <tr>  
                        <td><b>Salesforce</b> - Indianapolis, IN</td>
                        <td>Software Engineering Intern</td>
                        <td>6/2019-9/2019</td>
                    </tr>  
                    <tr>  
                        <td><b>Evanston Development Cooperative</b> - Evanston, IL</td>
                        <td>Software Engineer</td>
                        <td>1/2019-6/2019</td>
                    </tr>  
                    <tr>  
                        <td><b>Juni Learning</b> - Virtual</td>
                        <td>Python/Java Instructor</td>
                        <td>4/2019-Present</td>
                    </tr>  
                    <tr>  
                        <td><b>Develop + Innovate for Social Change</b> - Evanston, IL</td>
                        <td>Community/Recruitement Chair, Team Lead</td>
                        <td>12/2017-Present</td>
                    </tr> 
                    <tr>  
                        <td><b>Dot Dev</b> - Evanston, IL</td>
                        <td>Interview Tutor, Project Lead</td>
                        <td>9/2017-12/2018</td>
                    </tr> 
                    <tr>  
                        <td><b>Zhang Anesthesiology Lab, Univeristy of Cincinnati College of Medicine</b> - Cincinnati, OH</td>
                        <td>Behavioral Researcher</td>
                        <td>6/2017-9/2017</td>
                    </tr> 
                </table>
            </section>
            <section className="projects"> {/*Add work about Deployment Manager, publications, and projects I've worked on before, Deans list, high school className president, ap scholar*/}
                <h2 className="section-title">Projects and Superlatives</h2>
                <ul>
                    <li>
                        <div>
                            <button onClick={() => {document.getElementById('id01').style.display='block';}} className="projectButton">Deployment Manager</button>
                            <div id="id01" className="w3-modal">
                                <div className="w3-modal-content w3-animate-top w3-card-4">
                                    <header className="w3-container w3-teal"> 
                                        <span onClick={() => {document.getElementById('id01').style.display='none'}}
                                        className="w3-button w3-display-topright">&times;</span>
                                        <h2>Deployment Manager</h2>
                                    </header>
                                    <div className="modalText">
                                        <p>Deployment Manager is a product I worked on at Salesforce. It is used for exporting and deploying journeys across different stacks</p>
                                        <p>For this project I implemented UI features and refactored cache to create a folder navigation bar which updates dynamically</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div>
                                <button onClick={() => {document.getElementById('id02').style.display='block';}} className="projectButton">Published Op Eds</button>
                                <div id="id02" className="w3-modal">
                                    <div className="w3-modal-content w3-animate-top w3-card-4">
                                        <header className="w3-container w3-teal"> 
                                            <span onClick={() => {document.getElementById('id02').style.display='none'}}
                                            className="w3-button w3-display-topright">&times;</span>
                                            <h2>Published Op Eds</h2>
                                        </header>
                                        <div className="modalText">
                                            <p>I have two political op eds published at the Globe Post.</p>
                                            <a target="_blank" href="https://theglobepost.com/2019/06/21/2020-elections-electability/">Heading Into the 2020 Elections: What Makes a Candidate Electable?</a>
                                            <br></br>
                                            <a target="_blank" href="https://thecollegepost.com/college-admissions-meritocracy/">College Admissions: Call for a True Meritocracy</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div>
                                <button onClick={() => {document.getElementById('id03').style.display='block';}} className="projectButton">Map Tool - Evanston Development Cooperative</button>
                                <div id="id03" className="w3-modal">
                                    <div className="w3-modal-content w3-animate-top w3-card-4">
                                        <header className="w3-container w3-teal"> 
                                            <span onClick={() => {document.getElementById('id03').style.display='none'}}
                                            className="w3-button w3-display-topright">&times;</span>
                                            <h2>Map Tool - Evanston Development Cooperative</h2>
                                        </header>
                                        <div className="modalText">
                                            <p>I worked with the Evanston Development Cooperative through Develop + Innovate for Social Change as both a full-stack developer and a team lead.</p>
                                            <p>We built an interactive tool using the MapBox API to overlay property data from the city of Evanston on a map. Clicking a property would run a script I wrote to calculate if the property was compatible with EDC services.</p>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div>
                                <button onClick={() => {document.getElementById('id04').style.display='block';}} className="projectButton">Published Chrome Extension</button>
                                <div id="id04" className="w3-modal">
                                    <div className="w3-modal-content w3-animate-top w3-card-4">
                                        <header className="w3-container w3-teal"> 
                                            <span onClick={() => {document.getElementById('id04').style.display='none'}}
                                            className="w3-button w3-display-topright">&times;</span>
                                            <h2>Published Chrome Extension</h2>
                                        </header>
                                        <div className="modalText">
                                            <p>I created and published a Google Chrome Extension which uses web scraping to find a desired user on multiple social media websites. Currently serving 60+ users.</p>
                                            <a target="_blank" href="https://chrome.google.com/webstore/detail/qsearch/nndbofegbeaookkpodpkaeaelndpljbl">QSearch on the Chrome web store</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>Salesforce Campus Ambassador</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div>
                                <button onClick={() => {document.getElementById('id05').style.display='block';}} className="projectButton">Dean's List</button>
                                <div id="id05" className="w3-modal">
                                    <div className="w3-modal-content w3-animate-top w3-card-4">
                                        <header className="w3-container w3-teal"> 
                                            <span onClick={() => {document.getElementById('id05').style.display='none'}}
                                            className="w3-button w3-display-topright">&times;</span>
                                            <h2>Dean's List (4)</h2>
                                        </header>
                                        <div className="modalText">
                                            <p>I received the honors of being on the Dean's List (quarter GPA higher than 3.7) in Winter '18, Winter '19, Spring '19, and Fall '19.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div>
                                <button onClick={() => {document.getElementById('id06').style.display='block';}} className="projectButton">Questbridge Scholar</button>
                                <div id="id06" className="w3-modal">
                                    <div className="w3-modal-content w3-animate-top w3-card-4">
                                        <header className="w3-container"> 
                                            <span onClick={() => {document.getElementById('id06').style.display='none'}}
                                            className="w3-button w3-display-topright">&times;</span>
                                            <h2>Questbridge Scholar</h2>
                                        </header>
                                        <div className="modalText">
                                            <p>I am priviledged to be a Northwestern Questbridge scholar. Being a Questbridge scholar has allowed me to create a network of low-income and first-generation college students as well as take advantage of Northwestern's amazing services for low-income students.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                    <div className="other all b">Agile Quadrant Testing</div>
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