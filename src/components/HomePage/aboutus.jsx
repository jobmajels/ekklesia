import React from 'react'
import './features.css'
import {NavLink} from 'react-router-dom'
import './aboutus.css'
import img1 from '../../assets/images/aboutus1.png'
import img2 from '../../assets/images/aboutus3.jfif'
import img3 from '../../assets/images/aboutus2.jpg'

import Footersec from '../HomePage/footer'

function Aboutus(){
 
 
    return(
         <div className="aboutbox">

            <div className="head">
             <NavLink className="menuitem" to="/">Home</NavLink>
             <NavLink className="menuitem" to="/features">Features</NavLink>
             <NavLink className="menuitem" to="/aboutus">About Us</NavLink>
             <NavLink className="menuitem" to="/contacts">Contact Us</NavLink>
            </div>


                <div className="mainsec">
            
                            <div className="fet1">
                                <div className="fet1desc">
                                   <h2>Who We Are</h2>
                                    <p>Ekklesia is a modern online learning platform designed to simplify and enhance digital education for schools,
                                         teachers, and students. We provide a unified system that enables institutions to manage classes, conduct live
                                          sessions, track attendance, and share learning resources efficiently. Our platform focuses on creating an
                                           engaging and interactive learning environment that bridges the gap between traditional and digital education.
                                            With a user-friendly interface 
                                        and powerful features, Ekklesia empowers educators to deliver quality education anytime and anywhere.</p>
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
                                   <h2>Our Technologies</h2>
                                    <p>Ekklesia is built using modern web technologies to ensure performance, scalability, and reliability. Our 
                                        frontend is developed with React.js, providing a fast and responsive user experience. We use JavaScript (ES6+),
                                         HTML5, and CSS3 to create clean and dynamic interfaces. The platform integrates APIs for real-time functionalities 
                                         such as live classes and communication. We also implement 
                                        efficient state management and routing to ensure smooth navigation and seamless user interaction.</p>
                                </div>
                            </div>
               


              
            
                            <div className="fet1 fet3">
                                <div className="fet1desc">
                                   <h2>Vision & Mission</h2>
                                    <p>Our vision is to make quality education accessible, interactive, and efficient for everyone through technology.
                                         We aim to transform the way institutions deliver and manage learning in the digital era. 
                                         Our mission is to provide a reliable and all-in-one platform that supports teachers, engages students,
                                          and simplifies academic processes. We are committed to continuous innovation, 
                                        user satisfaction, and delivering high-quality solutions that empower the future of education.</p>
                                </div>
            
                                <div className="fet1img">
                                   <img src={img3} alt="img" height="100%"/>
                                </div>
                            </div>
             
             </div>

             <Footersec/>
        </div>
    )



 }

 export default Aboutus;