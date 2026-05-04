import React, { useState, useContext, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import './schedulearea.css'
import {ScheduledDB} from '../../Contextz/MyContext'




function Studschedulearea(props) {

    const {
        clsId,
        stdid
    } = props

    let navigate=useNavigate();

    const[schedata,setSchedata]=useState();


     const {scheduledDB} = useContext(ScheduledDB);

    function getScheduledata(){

           let scheddata=scheduledDB?.filter((value)=>{
                 return value.clsid==clsId;
           });
           let schedules=scheddata.map((value)=>{
                      return value.schedules;
           });
          

           let flatschedules=schedules.flatMap((value)=>{
                         return value;
           });

           setSchedata(flatschedules);
            
        console.log(flatschedules)
    }

   useEffect(()=>{
    getScheduledata()
   },[scheduledDB,clsId])


    return (

        <div className="samainbox">
               
               <div className="todaysch">
                <div className="schhead">Today's schedule</div>
               {
                schedata?.map((value)=>{

                    if(value.scheduledate==="todaysclass"){
                    return <div className="schlist">
                         <span><span className="desc">subject:</span> {value.subject}</span>
                        <span><span className="desc">chapter:</span> {value.chapter}</span>
                        <span><span className="desc">topic:</span> {value.topic}</span>
                         <div>{value.time}am</div>
                         <button onClick={()=>{navigate(`/studimeet/${stdid}/${encodeURIComponent(value.subject)}/${encodeURIComponent(value.chapter)}/${encodeURIComponent(value.topic)}/${encodeURIComponent(value.classname)}`)}}>Attend</button>
                        </div>
                    }
                })
               }
               </div>

                  <div className="tommorsch">
                      <div className="schhead">Tommorow's schedule</div>
               {
                schedata?.map((value)=>{
                      if(value.scheduledate==="tomorrowclass"){
                    return <div className="schlist">
                         <span><span className="desc">subject:</span> {value.subject}</span>
                        <span><span className="desc">chapter:</span> {value.chapter}</span>
                        <span><span className="desc">topic:</span> {value.topic}</span>
                         <div>{value.time}am</div>
                          <button onClick={()=>{navigate(`/studimeet/${stdid}/${encodeURIComponent(value.subject)}/${encodeURIComponent(value.chapter)}/${encodeURIComponent(value.topic)}/${encodeURIComponent(value.classname)}`)}}>Attend</button>
                    </div>
                      }
                })
               }
               </div>
            
        </div>

    );
}


export default  Studschedulearea;
