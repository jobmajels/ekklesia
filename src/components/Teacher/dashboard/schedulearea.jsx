import React, { useState, useContext, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import './schedulearea.css'
import { ScheduledCls, ScheduledDB } from '../../Contextz/MyContext'




function Schedulearea(props) {

    const {
        tid,
    } = props

    const navigate = useNavigate();

    const {scheduleData} = useContext(ScheduledCls);

    const { scheduledDB } = useContext(ScheduledDB);
    const [dbscheduleddata, setDbscheduleddata] = useState();


    function scheduleDbdata() {
        let sheddata = scheduledDB.filter((value) => {
            return value.tid === tid;
        });

        let schedules = sheddata.map((value) => {
            if (value.schedules?.length > 0) {
                return value.schedules;
            }
        })

        let subjts = schedules.flat();
        setDbscheduleddata(subjts);

    }

    useEffect(() => {
        scheduleDbdata();
    }, [scheduledDB,tid])

    useEffect(() => {
       console.log(scheduleData)
    }, [scheduleData])

    return (

        <div className="samainbox">

              
               
                <div className="scheduledlist">
                <div>today's schedule</div>
                {scheduleData?.map((value) => {
                    if (value.scheduledate === "todayclass") {
                        return <div className="scheduleditem" key={value.scheduleid}>
                            <span className="head">
                                <span className="title">classname:</span>
                                <div>{value.classname}</div>
                            </span>
                            <span className="head">
                                <span className="title">subject:</span>
                                <div>{value.subject}</div>
                            </span>
                            <span className="head">
                                <span className="title"> chapter:</span>
                                <div>{value.chapter}</div>
                            </span>
                            <span className="head">
                                <span className="title">topic:</span>
                                <div>{value.topic}</div>
                            </span>
                            <span>
                                <span className="title"> time:</span>
                                <span>{value.time}</span>
                            </span>

                            <button onClick={()=>{navigate(`/imeet/${value.clsid}/${value.tid}/${encodeURIComponent(value.subject)}/${encodeURIComponent(value.chapter)}/${encodeURIComponent(value.topic)}/${encodeURIComponent(value.classname)}`)}}>take class</button>
                        </div>
                    }
                })}
            </div>

             <div className="scheduledlist" style={{borderTop:"none", marginTop:"0"}}>
                {dbscheduleddata?.map((value) => {
                    if (value.scheduledate === "todaysclass") {
                        return <div className="scheduleditem" key={value.scheduleid}>
                            <span className="head">
                                <span className="title">classname:</span>
                                <div>{value.classname}</div>
                            </span>
                            <span className="head">
                                <span className="title">subject:</span>
                                <div>{value.subject}</div>
                            </span>
                            <span className="head">
                                <span className="title"> chapter:</span>
                                <div>{value.chapter}</div>
                            </span>
                            <span className="head">
                                <span className="title">topic:</span>
                                <div>{value.topic}</div>
                            </span>
                            <span>
                                <span className="title"> time:</span>
                                <span>{value.time}</span>
                            </span>

                            <button onClick={()=>{navigate(`/imeet/${value.clsid}/${value.tid}/${encodeURIComponent(value.subject)}/${encodeURIComponent(value.chapter)}/${encodeURIComponent(value.topic)}/${encodeURIComponent(value.classname)}`)}}>take class</button>
                        </div>
                    }
                })}
            </div> 


            <div className="scheduledlist">
                <div>tomorrow's schedule</div>
                {scheduleData?.map((value) => {
                    if (value.scheduledate === "tomorrowclass") {
                        return <div className="scheduleditem" key={value.scheduleid}>

                            <span className="head">
                                <span className="title">classname:</span>
                                <div>{value.classname}</div>
                            </span>

                            <span className="head">
                                <span className="title">subject:</span>
                                <div>{value.subject}</div>
                            </span>

                            <span className="head">
                                <span className="title"> chapter:</span>
                                <div>{value.chapter}</div>
                            </span>

                            <span className="head">
                                <span className="title">topic:</span>
                                <div>{value.topic}</div>
                            </span>

                            <span>
                                <span className="title"> time:</span>
                                <span>{value.time}</span>
                            </span>

                            <button onClick={()=>{navigate(`/imeet/${value.clsid}/${value.tid}/${encodeURIComponent(value.subject)}/${encodeURIComponent(value.chapter)}/${encodeURIComponent(value.topic)}/${encodeURIComponent(value.classname)}`)}}>take class</button>

                        </div>
                    }
                })}
            </div>

              <div className="scheduledlist" style={{borderTop:"none", marginTop:"0"}}>
                {dbscheduleddata?.map((value) => {
                    if (value.scheduledate === "tomorrowclass") {
                        return <div className="scheduleditem" key={value.scheduleid}>
                            <span className="head">
                                <span className="title">classname:</span>
                                <div>{value.classname}</div>
                            </span>
                            <span className="head">
                                <span className="title">subject:</span>
                                <div>{value.subject}</div>
                            </span>
                            <span className="head">
                                <span className="title"> chapter:</span>
                                <div>{value.chapter}</div>
                            </span>
                            <span className="head">
                                <span className="title">topic:</span>
                                <div>{value.topic}</div>
                            </span>
                            <span>
                                <span className="title"> time:</span>
                                <span>{value.time}</span>
                            </span>

                            <button onClick={()=>{navigate(`/imeet/${value.clsid}/${value.tid}/${encodeURIComponent(value.subject)}/${encodeURIComponent(value.chapter)}/${encodeURIComponent(value.topic)}/${encodeURIComponent(value.classname)}`)}}>take class</button>
                        </div>
                    }
                })}
            </div>

        </div>

    );
}


export default Schedulearea;

