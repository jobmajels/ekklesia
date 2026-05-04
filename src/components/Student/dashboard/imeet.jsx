import React,{useContext,useEffect,useState} from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import './imeet.css'
import {Studprofiledatas} from '../../Contextz/MyContext'
import meetimg from '../../../assets/images/meetimg1.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSpinner,faVideo,faVideoSlash,faMicrophone,faMicrophoneSlash} from "@fortawesome/free-solid-svg-icons";


function Studimeet(props){

    const{
    stdid,
    subject,
    chapter,
    topic,
    classname,
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

    

            <div className="meetsec">


                  <div className="meetbox">
                      <h4 style={{color:"grey"}}>waiting for teacher to admit you…</h4>
                     <div className="meetinter">
                    <FontAwesomeIcon icon={faSpinner} spinPulse style={{color: "rgba(214, 208, 208, 0.72)",}} />
                       </div>

                    <span className="meetfooter">
                           <span>
                           <FontAwesomeIcon icon={faVideo} onClick={viewVideoi} style={{display:viewVideo?"inline":"none",color: "rgb(255, 255, 255)",}}/>
                           <FontAwesomeIcon icon={faVideoSlash} onClick={viewVideoi}  style={{display:viewVideo?"none":"inline",color: "rgb(255, 255, 255)",}} />
                           </span>
                           <span onClick={()=>{navigate(`/studentdashboard/${stdid}`)}}>
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

export default Studimeet;