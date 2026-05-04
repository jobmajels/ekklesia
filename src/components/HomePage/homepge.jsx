import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'
import './homepge.css'
import  Navmenu from '../Navmenu/navbar'


import stdimg from '../../assets/images/studimg1.png'


import img1 from '../../assets/images/feature1.2.jpg'
import img2 from '../../assets/images/feature21.jpg'
import img3 from '../../assets/images/feature3.jfif'
import img4 from '../../assets/images/feature4.png'
import img5 from '../../assets/images/feature5.jfif'
import img6 from '../../assets/images/feature6.jfif'



import Footersec from '../HomePage/footer'


function Homepage() {


   

    return (
        <div className="hmainbox">



            <div className="hsection1">
              

                <div className="navsection">
                    <Navmenu/>
                </div>

                <div className="content">

                    <div className="sec1desc">
                        <span className="subhead">Smart Education Platform</span>
                        <span className="heading">Education Beyond <span>Boundaries</span>.</span>
                        <span className="desc">Redefining digital classrooms through transparency, connectivity,
                            and intelligent learning systems. Connecting classrooms beyond walls for smarter, interactive learning.</span>

                        <button>explore</button>
                    </div>

                    <img src={stdimg} alt="studentimg" />
                </div>


            </div>

            <div className="hsection2">
                <h1>What We Offer</h1>

                <div className="card card1">
                <img src={img1} alt="img"/>
                <h4>Multi-School Management</h4>
                </div>

                <div className="card card2">
                   <img src={img2} alt="img"/>
                   <h4>Live Interactive Classes</h4>
                </div>

                <div className="card card3">
                  <img src={img3} alt="img"/>
                  <h4>Smart Attendance System</h4>
                </div>

                <div className="card card4">
                     <img src={img4} alt="img"/>
                     <h4>Online Tests, Assignment & Submission Portal</h4>
                </div>
                <div className="card card5">
                     <img src={img5} alt="img"/>
                     <h4>Study Materials & Notes</h4>
                </div>
                <div className="card card6">
                     <img src={img6} alt="img"/>
                     <h4>Real-Time Chat & Doubt Clearing</h4>
                </div>
            </div>



           <div className="hsection3">
                <Link to="login/teacher" className="btn"><span>Teacher Login</span></Link>
                <Link to="login/student" className="btn"><span>Student Login</span></Link>
            </div>

           <Footersec/>

        </div>
    )
}

export default Homepage;