import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Homepage from './components/HomePage/homepge'
import Features from './components/HomePage/features'
import Signupage from './components/SignupPage/signup'
import Loginpage from './components/LoginPage/login'
import Aboutus from './components/HomePage/aboutus'
import Contacts from './components/HomePage/contacts'
// import Dashboard from './components/Student/dashboard/dashboard'
import Tdashboard from './components/Teacher/dashboard/dashboard'
import TClassroom from './components/Teacher/classroom/classroom'
import StudentDetails from './components/Teacher/classroom/studentdetails/viewstudents'
import TProfile from './components/Teacher/profile/Profile'

import Sdashboard from './components/Student/dashboard/dashboard'
import Studprofile from './components/Student/profile/profile'
import StudClassroom from './components/Student/classroom/classroom'
import Snotes from './components/Student/notes/notes'
import Studasng from './components/Student/Assignment/asignhomepge'
import Studexam from './components/Student/exams/examhmpge'
import Studimeet from './components/Student/dashboard/imeet'

import Providers from './components/Contextz/provider'

import PchatBox from './components/chats/privatechats/privatechat'
import Scheduleclasses from './components/Teacher/scheduleclass/scheduleclass'
import Imeet from './components/Teacher/dashboard/imeet'

import Assignmenthomepge from './components/Teacher/Assignment/asignhomepge'
import AddAssign from './components/Teacher/Assignment/addnewas'

import Examhomepge from './components/Teacher/Exams/examhomepge'
import AddTest from './components/Teacher/Exams/addnewex'
import Tnotes from './components/Teacher/notes/notes'

import Noticeboard from './components/School/notice'

function App() {
 
return(


  <BrowserRouter>
  <Providers>
   <Routes>

    
    <Route path="/" element={<Homepage />}/>
    <Route path="features" element={<Features/>}/>
    <Route path="aboutus" element={<Aboutus/>}/>
    <Route path="contacts" element={<Contacts/>}/>

    <Route path="signup/:role" element={ <Signupage />}/>
    <Route path="login/:role" element={ <Loginpage/>}/>
    <Route path="teacherdashboard/:id" element={<Tdashboard/>}/>
    <Route path="tclassroom/:id" element={<TClassroom/>}/>
    <Route path="viewstudentdetails/:classid/:classname/:tid" element={<StudentDetails/>}/>

    <Route path="tprofile/:id/:sclname" element={<TProfile/>}/>

    
    <Route path="studentdashboard/:id" element={<Sdashboard/>}/>

    <Route path="studprofile/:id" element={<Studprofile/>} />
    <Route path="studClassroom/:id/:clsid" element={<StudClassroom/>}/>
    <Route path="studnotes/:clsid" element={<Snotes />}/>
    <Route path="studasng/:clsid" element={<Studasng/>}/>
    <Route path="studexam/:clsid" element={<Studexam/>}/>
    <Route path="studimeet/:stdid/:subject/:chapter/:topic/:classname" element={<Studimeet/>} />
   

    <Route path="scheduleclass/:id" element={<Scheduleclasses/>}/>
    <Route path="pchat/:role/:clsid/:stdname/:tname" element={<PchatBox />}/>
    <Route path="provider" element={<Providers/>}/>

    <Route path="imeet/:clsid/:tid/:subject/:chapter/:topic/:classname" element={<Imeet/>}/>

    <Route path="Assignmenthomepge/:tid" element={<Assignmenthomepge/>}/>
    <Route path="newassign/:subject/:clsId"  element={<AddAssign/>}/>

    <Route path="examhomepge/:tid" element={<Examhomepge/>}/>
    <Route path="AddTest/:subject/:clsId" element={<AddTest/>}/>
    <Route path="teachNotesSyllabus/:id" element={<Tnotes/>}/>

    <Route path="noticebrd" element={<Noticeboard/>}/>
   </Routes>
   </Providers>
  </BrowserRouter>
  
   
);
   
    
}

export default App
