import React from 'react'
import './notice.css'
import sclpic1 from '../../assets/images/schoolimg.jfif'
import principle from '../../assets/images/frpic.jfif'
import img1 from '../../assets/images/event1.jfif'
import img2 from '../../assets/images/event2.jfif'
import img3 from '../../assets/images/event3.jfif'
import img4 from '../../assets/images/event4.jfif'
import img5 from '../../assets/images/event5.jfif'
import img6 from '../../assets/images/event6.jfif'
import img7 from '../../assets/images/event7.jfif'
import img8 from '../../assets/images/event8.jfif'

import img9 from '../../assets/images/even11.jfif'
import img10 from '../../assets/images/event12.jfif'
import img11 from '../../assets/images/event13.jfif'
import img12 from '../../assets/images/event14.jfif'
import img13 from '../../assets/images/event15.jfif'
import img14 from '../../assets/images/event16.jfif'
import img15 from '../../assets/images/event17.jfif'






function Noticeboard() {
  return (

    <div className="noticbox">

      <div className="scholimg">
        <span>Cochin International School</span>
      </div>

      <div className="scholinto">


        <div>
          <h1>Global Horizon International School</h1>
          “Inspiring Minds, Shaping Futures”
          <p>GHIS strives to nurture confident, creative, and compassionate learners who are prepared to thrive in a rapidly changing world.</p>

          At GHIS:
          <p>We envision our students as curious thinkers who embrace challenges and grow through learning
            We envision our teachers as passionate mentors who inspire excellence and innovation
            We envision our school as a vibrant space that encourages creativity, collaboration, and discovery
            We envision our community as a supportive network that fosters respect, responsibility, and global awareness</p>
        </div>

      </div>


      <div className="principal">
        <span>
          <h1>Principal's message</h1>
          <img src={principle} alt="img1" width="300px" />
        </span>

        <div>
          <p>
            It is my pleasure to welcome you to Global Horizon International School. As the Principal, I am proud
            to lead a vibrant learning community that values diversity, innovation, and excellence. At GHIS, we are committed to nurturing well-rounded individuals who are equipped with the knowledge, skills, and values required to succeed in a global society. Our mission—to inspire
            lifelong learning and responsible citizenship—guides every aspect of our educational approach.<br />
            The curriculum at GHIS is thoughtfully designed to combine international standards with real-world relevance.
            We offer a blend of Cambridge and IB programmes, ensuring that students receive a balanced and globally recognized
            education. Beyond academics, we emphasize co-curricular and extracurricular activities, leadership development, and community engagement, enabling students to explore their interests and talents while developing essential life skills.
            Our dedicated team of educators plays a vital role in shaping the future of our students. With passion and
            commitment, they guide learners to think critically, act ethically, and grow confidently. <br />We strongly believe
            in building meaningful partnerships with parents, as education is most effective when there is collaboration
            between school and home.What truly sets GHIS apart is our strong sense of community. We foster an environment of respect, empathy, and
            teamwork, where every student feels valued and inspired. I warmly invite you to visit our campus and experience firsthand the spirit and excellence that define Global Horizon International School.

            – Fr Thomas
          </p>
        </div>
      </div>

      <div className="events">
          
          <div className="card">
                        <img src={img1} alt="img1" width="300px" />
          </div>

           <div className="card">
                             <img src={img2} alt="img1" width="300px" />
          </div>

           <div className="card">
                         <img src={img3} alt="img1" width="300px" />
          </div>

            <div className="card">
                        <img src={img4} alt="img1" width="300px" />
          </div>

            <div className="card">
                        <img src={img5} alt="img1" width="300px" />
          </div>

            <div className="card">
                        <img src={img6} alt="img1" width="300px" />
          </div>

            <div className="card">
                        <img src={img7} alt="img1" width="300px" />
          </div>

            <div className="card">
                        <img src={img8} alt="img1" width="300px" />
          </div>

  <div className="card">
                        <img src={img9} alt="img1" width="300px" />
  </div>

    <div className="card">
                        <img src={img10} alt="img1" width="300px" />
          </div>

  <div className="card">
                        <img src={img11} alt="img1" width="300px" />
          </div>


  <div className="card">
                        <img src={img13} alt="img1" width="300px" />
          </div>


  <div className="card">
                        <img src={img12} alt="img1" width="300px" />
          </div>

  <div className="card">
                        <img src={img14} alt="img1" width="300px" />
          </div>

  <div className="card">
                        <img src={img15} alt="img1" width="300px" />
          </div>



           

      </div>

    </div>
  )
}

export default Noticeboard;