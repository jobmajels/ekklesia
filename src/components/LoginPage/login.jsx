import React, { useState, useContext, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import './login.css'

import stdlogins from '../../assets/images/stdlogin.png'
import teachlogin from '../../assets/images/teachlogin.png'

import { Studlogindatas, Teachlogindatas, Studsignupdatas, Teachsignupdatas } from '../Contextz/MyContext'


function Loginpage() {


  const { role } = useParams();
  const navigate = useNavigate();

  const [showPwd, setShowpwd] = useState(true)
  function togglepwd() {
    setShowpwd(prev => !prev);
  }


  //  state

  const [logdata, setLogdata] = useState({
    email: "",
    password: ""
  });

  function handleChange(value, key) {
    const temp = { ...logdata };
    temp[key] = value;
    setLogdata(temp);
  }

  const [uid, setUid] = useState("")


  //context

  const { StudloginData, setStudLogindata } = useContext(Studlogindatas);
  const { StudsignupData, setStudSignupData } = useContext(Studsignupdatas);

  const { TeachloginData, setTeachLogindata } = useContext(Teachlogindatas);
  const { TeachsignupData, setTeachSignupData } = useContext(Teachsignupdatas);



  useEffect(() => {
    console.log(StudsignupData);
    console.log(StudloginData);
  }, [StudloginData, StudsignupData])


  const[errormsg,setErrormsg]=useState(false);
  
  function submitData(e) {
    e.preventDefault();

    if (role === "student") {
      const stdLogi = StudloginData.find((value) => {
        return value.email === logdata.email && value.password === logdata.password
      });

      if (!stdLogi) {
        console.log("please register to become a user");
        setErrormsg(true);
        return;
      }
      const stdSign = StudsignupData.find((value) => {
        return value.email === stdLogi.email && value.password === stdLogi.password;
      });

      setUid(stdSign?.id);
    } else {
      const teachLogi = TeachloginData.find((value) => {
        return value.mail === logdata.email && value.password === logdata.password
      });

      if (!teachLogi) {
        console.log("please register to become a user");
        setErrormsg(true);
        return;
      }
      const teachSign = TeachsignupData.find((value) => {
        return value.mail === teachLogi.mail && value.password === teachLogi.password;
      });
      setUid(teachSign?.id);

    }

  }

  useEffect(() => {
    if (!uid) return;
    role === "student" ? navigate(`/studentdashboard/${uid}`) : navigate(`/teacherdashboard/${uid}`);
  }, [uid])

  return (
    <div className="maincontainer">

      <div className="logininfos">
        {role === "teacher" && <div>


          <span>mail:-rahul.roy@gmail.com<br />
            password:-teach789</span>

          <span>mail:-meera.pathros@gmail.com<br />
            password:-teach101</span>

          <span>mail:-arjun.pillai@gmail.com<br />
            password:-teach202</span>

          <span>mail:-lakshmi.baiju@gmail.com<br />
            password:-teach303</span>

          <span>mail:-vishnu.joy@gmail.com<br />
            password:-teach404</span>
        </div>}

        {role === "student" && <div>

          <span>mail:-arjun.ashok@gmail.com<br />
            password:-Arjun@901</span>

          <span>mail:-meera.krishnan@gmail.com<br />
            password:-Meera@902</span>


          <span>mail:-rahul.das@gmail.com<br />
            password:-RahulD@101</span>

          <span>mail:-sneha.antony@gmail.com<br />
            password:-Sneha@102</span>

          <span>mail:-annop.antony@gmail.com<br />
            password:-Annop@201</span>

          <span>mail:-anu.dev@gmail.com<br />
            password:-AnuDev@202</span>
          <span>mail:-vishnu.b@gmail.com<br />
            password:-VishnuB@301</span>

          <span>mail:-anjali.raksh@gmail.com<br />
            password:-AnjaliR@302</span>
        </div>}


      </div>


      <div className="sec1">

        {role === "student" ? <><h1>student login</h1> <img src={stdlogins} alt="studentlogo" /></> :
          <><h1>teacher login</h1> <img src={teachlogin} alt="teacherlogo" style={{ width: "14rem", marginBottom: "0.5rem" }} /></>}




        <form onSubmit={submitData}>

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="mail@gmail.com"
            value={logdata.email} onChange={(e) => { handleChange(e.target.value, "email") }} />

          <div className="pwdsec">
            <label htmlFor="password">Password:</label>
            <input type={showPwd ? "password" : "text"} placeholder="password"
              value={logdata.password} onChange={(e) => { handleChange(e.target.value, "password") }} />

            {showPwd ? <FontAwesomeIcon className="eicon" icon={faEye} style={{ color: "rgb(126, 10, 126)", }} onClick={togglepwd} /> :
              <FontAwesomeIcon className="eicon" icon={faEyeSlash} style={{ color: "rgb(126, 10, 126)", }} onClick={togglepwd} />}


          </div>


          <button type="submit">submit</button>
        </form>

        <span>New User?<Link to={`/signup/${role}`} className="signup">Signup</Link></span>

      </div>

      
      <div style={{display:errormsg?"block":"none",position:"absolute",color:"rgb(42, 20, 236)",zIndex:"2"}}>
        <h3>please register to become a valid user</h3>
      </div>

    </div>
  )
}


export default Loginpage;