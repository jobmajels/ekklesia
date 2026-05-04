import React from 'react'
import './features.css'
import {NavLink} from 'react-router-dom'
import Footersec from '../HomePage/footer'
import img1 from '../../assets/images/feature1.2.jpg'
import img2 from '../../assets/images/feature21.jpg'
import img3 from '../../assets/images/feature3.jfif'
import img4 from '../../assets/images/feature4.png'
import img5 from '../../assets/images/feature5.jfif'
import img6 from '../../assets/images/feature6.jfif'

function Features(){

    return(
        <div className="fbox">

            <div className="head">
             <NavLink className="menuitem" to="/">Home</NavLink>
             <NavLink className="menuitem" to="/features">Features</NavLink>
             <NavLink className="menuitem" to="/aboutus">About Us</NavLink>
             <NavLink className="menuitem" to="/contacts">Contact Us</NavLink>
            </div>

            <div className="mainsec">

                <div className="fet1">
                    <div className="fet1desc">
                       <h2>Multi-School Management</h2>
                        <p>Multi-School Management allows multiple schools or institutions to operate independently within a single 
                            platform. Each institution can create its own account and manage its data securely. Administrators have 
                            full control over users, classes, and resources. This ensures organized 
                           management without data overlap. It is ideal for scaling and handling multiple institutions efficiently.</p>
                    </div>

                    <div className="fet1img">
                       <img src={img1} alt="img" height="100%"/>
                    </div>
                </div>

                
                <div className="fet1 fet2">

                     <div className="fet1img">
                       <img src={img2} alt="img" height="100%"/>
                    </div>

                    <div className="fet1desc">
                       <h2>Live Interactive Classes</h2>
                        <p>Live Interactive Classes enable real-time online teaching with seamless communication between teachers and
                             students. It supports video conferencing tools for smooth virtual classrooms. Students can interact, ask 
                             questions, and participate actively during sessions. This creates an engaging and classroom-like learning 
                             environment.It enhances understanding through direct interaction and instant feedback.</p>
                    </div>
                </div>


                   
                <div className="fet1 fet3">
                    <div className="fet1desc">
                       <h2> Smart Attendance System</h2>
                        <p>The Smart Attendance System automatically records student attendance during live classes. 
                            It marks attendance as soon as a student joins the session. The system also tracks participation 
                            time for better accuracy. Teachers can access detailed
                             reports and insights easily. This reduces manual work and improves attendance management.</p>
                    </div>
                     <div className="fet1img">
                       <img src={img3} alt="img" height="100%"/>
                    </div>
                </div>


                     <div className="fet1 fet2">

                     <div className="fet1img">
                       <img src={img4} alt="img" height="100%"/>
                    </div>

                    <div className="fet1desc">
                       <h2>Online Tests, Assignments & Submission Portal</h2>
                        <p>This feature allows teachers to conduct tests and assign tasks digitally. Students can submit their
                             work through file uploads such as PDFs or images. The system supports deadlines and tracks submission 
                             status efficiently. Teachers can evaluate and
                             analyze performance easily. It provides a complete and organized assessment workflow.</p>
                    </div>
                </div>


                        
                <div className="fet1 fet5">
                    <div className="fet1desc">
                       <h2>Study Materials & Notes</h2>
                        <p>Study Materials & Notes provide a centralized hub for all learning resources. 
                            Students can access notes, PDFs, and videos in one place. Content is organized 
                            subject-wise for easy navigation. It allows students to learn anytime at their own pace.
                             This improves understanding and supports continuous learning.</p>
                    </div>
                     <div className="fet1img">
                       <img src={img5} alt="img" height="100%"/>
                    </div>
                </div>


                    <div className="fet1 fet6">

                     <div className="fet1img">
                       <img src={img6} alt="img" height="100%"/>
                    </div>

                    <div className="fet1desc">
                       <h2>Real-Time Chat & Doubt Clearing</h2>
                        <p>Real-Time Chat & Doubt Clearing enables instant communication between students and teachers. 
                            It supports both one-to-one chats and group discussions. Students can quickly ask questions and 
                            get immediate help. This improves engagement and learning efficiency. 
                            Continuous teacher support ensures better understanding of concepts.</p>
                    </div>
                </div>


            </div>




         < Footersec/>
            
            
        </div>
    )
}

export default Features;