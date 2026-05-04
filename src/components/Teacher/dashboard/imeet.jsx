import React,{useContext,useEffect,useState} from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import './imeet.css'
import {Studprofiledatas} from '../../Contextz/MyContext'
import meetimg from '../../../assets/images/meetimg1.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSpinner,faVideo,faVideoSlash,faMicrophone,faMicrophoneSlash} from "@fortawesome/free-solid-svg-icons";


function Imeet(props){

    const{
    clsid,
    tid,
    subject,
    chapter,
    topic,
    classname
    }=useParams();

    const navigate=useNavigate();

    const{Studprofiledata}=useContext(Studprofiledatas)

    const decodeData={
    subject:decodeURIComponent(chapter),
    chapter:decodeURIComponent(chapter),
    topic:decodeURIComponent(topic),
    classname:decodeURIComponent(classname)
    }

    //views state

   const[viewVideo,setviewVideo]=useState(false);
   function viewVideoi(){
     setviewVideo(prev=>!prev);
   }
  
   const[viewAudio,setviewAudio]=useState(false);
   function viewAudioi(){
     setviewAudio(prev=>!prev);
   }

   const[present,setPresent]=useState({})
    function attendancePresent(idz){
    
          setAbsent((prev)=>{
            return{
                ...prev,
                [idz]:null,
            }
        })
     setPresent((prev)=>{ 
        if(prev[idz]==="present"){
            const temp={...prev};
            temp[idz]=null;
            return temp;
        }
        return {
            ...prev,
            [idz]:"present"
        }
     })
   }
   
    const[absent,setAbsent]=useState({})
    function attendanceAbsent(idz){
        setPresent((prev)=>{
            return{
                ...prev,
                [idz]:null,
            }
        })
        
        setAbsent((prev)=>{ 
        if(prev[idz]==="absent"){
            const temp={...prev};
            temp[idz]=null;
            return temp;
        }
        return {
            ...prev,
            [idz]:"absent"
        }
     })
   }

    return(

        <div className="imeetmainbox">

            <div className="studDetails">
                  <div className="attendsec">
                  <h2>Mark Attendance</h2>
                   
                   {Studprofiledata.map((value)=>{
                    if(value.classId===clsid){
                     return <div className="studsec">
                        <span className="sec1">
                        <span>{value.fullName}</span>
                        <span>{value.email}</span>
                        </span>
                        <span className="sec2">
                        <span>std-id: {value.id}</span>
                        <span className="status" style={{backgroundColor:present[value.id]==="present"?"#40ff00":"#ebe4e4"}} onClick={()=>{attendancePresent(value.id)}}>P</span>
                        <span className="status"  style={{backgroundColor:absent[value.id]==="absent"?"#ffe600":"#ebe4e4"}} onClick={()=>{attendanceAbsent(value.id)}}>A</span>
                        </span>

                     </div>
                    }
                   })}
                  </div>
            </div>

            <div className="meetsec">


                  <div className="meetbox">

                     <div className="meetinter">
                    <FontAwesomeIcon icon={faSpinner} spinPulse style={{color: "rgba(214, 208, 208, 0.72)",}} />
                       </div>

                    <span className="meetfooter">
                           <span>
                           <FontAwesomeIcon icon={faVideo} onClick={viewVideoi} style={{display:viewVideo?"inline":"none",color: "rgb(255, 255, 255)",}}/>
                           <FontAwesomeIcon icon={faVideoSlash} onClick={viewVideoi}  style={{display:viewVideo?"none":"inline",color: "rgb(255, 255, 255)",}} />
                           </span>
                           <span onClick={()=>{navigate(`/teacherdashboard/${tid}`)}}>
                            <img src={meetimg} width="50rem" />
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faMicrophone} onClick={viewAudioi}  style={{display:viewAudio?"inline":"none",color: "rgb(255, 255, 255)",}}/>
                                <FontAwesomeIcon icon={faMicrophoneSlash} onClick={viewAudioi}  style={{display:viewAudio?"none":"inline",color: "rgb(255, 255, 255)",}} />
                            </span>
                  </span>

                  </div>

                 <div className="currentmeetinfo">
                    <h3>{classname}</h3>
                    <h3>{subject}</h3>
                    <h3>chapter: <span>{chapter}</span></h3>
                    <h3>topic: <span>{topic}</span></h3>
                 </div>

            </div>

           
              
        </div>

    );
}

export default Imeet;