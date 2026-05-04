import React, { useState, useContext, useEffect } from 'react'
import './scheduleclass.css'

import { useParams,useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import { Classroom, Classnotes,ScheduledCls,ScheduledDB } from '../../Contextz/MyContext'

function Scheduleclasses() {

    const { id } = useParams()
    const navigate =useNavigate()
    //this state

    const [currentcls, setCurrentcls] = useState({
        className: "",
        classId: ""
    });

    const [subj, setSubj] = useState([]);

    const [currentsubj, setCurrentsubj] = useState({
        classId: currentcls.classId,
        subjectName: ""
    });

    const [chaplist, setChaplist] = useState([]);


    // 

    const [currentSchedule, setCurrentSchedule] = useState({
        scheduleid: Math.random().toString(36).substring(2, 10),
        scheduledate: "tomorrowclass",
        tid: id,
        clsid: "",
        classname: "",
        subject: "",
        chapter: "",
        topic: "",
        time: "",
    });

    useEffect(() => {
        setCurrentSchedule((prev) => {
            return { ...prev, clsid: currentcls.classId }
        })
    }, [currentcls]);

    function handleChange(value, key) {
        const temp = { ...currentSchedule };
        temp[key] = value;
        setCurrentSchedule(temp);
    }

    //control states

    const [showClslist, setShowClslist] = useState(false);
    function toggleshowClslist() {
        setShowClslist((prev) => !prev);
        setShowSublst(false);
        setShowChaplst(false);
    }

    const [showSublst, setShowSublst] = useState(false);
    function toggleshowSublst() {
        setShowSublst((prev) => !prev);
        setShowClslist(false);
        setShowChaplst(false);
    }

    const [showChaplst, setShowChaplst] = useState(false);
    function toggleshowChaplst() {
        setShowChaplst((prev) => !prev);
        setShowSublst(false);
        setShowClslist(false);
    }

    const [active, setActive] = useState("btn1");





    //context

    const { ClassRoom } = useContext(Classroom);
    const { Classnote } = useContext(Classnotes);

    //state

    function findSubj() {
        const clsid = currentcls.classId;
        const data = ClassRoom.find((value) => {
            return value.teachers;
        });

        const teachlist = data?.teachers;

        const currentteach = teachlist?.find((value) => {
            return value.teacherid === id;
        })

        setSubj(currentteach?.subjects);

    }

    useEffect(() => {
        findSubj()
    }, [currentcls]);

    useEffect(() => {
        getChapters();
    }, [currentsubj]);

    

    function getChapters() {

        let classinfo = Classnote.find((value) => {
            return value.classId === currentsubj.classId;
        });
        let subjectinfo = classinfo?.subjects?.find((value) => {
            return value.subjectName === currentsubj.subjectName;
        })
        setChaplist(subjectinfo?.chapters);

    }


    const{scheduleData,setScheduleData}=useContext(ScheduledCls);

    function onsubmit() {
        setScheduleData((prev) => {
            return [...prev, currentSchedule];
        });

        setCurrentSchedule({
            scheduleid: Math.random().toString(36).substring(2, 10),
            scheduledate: "tomorrowclass",
            tid: id,
            clsid: "",
            classname: "",
            subject: "",
            chapter: "",
            topic: "",
            time: "",
        });

    }

    //  useEffect(() => {
    //     console.log(scheduleData);
    // }, [scheduleData])

    const{scheduledDB}=useContext(ScheduledDB);

    const[dbscheduleddata,setDbscheduleddata]=useState();


    function scheduleDbdata(){
          let sheddata=scheduledDB.filter((value)=>{
                return value.tid===id;
          });

          let schedules=sheddata.map((value)=>{
            if(value.schedules?.length>0){
               return value.schedules;
            }
          })

         let subjts=schedules.flat();
         setDbscheduleddata(subjts);

    }

    useEffect(()=>{
        scheduleDbdata();
    },[scheduledDB])
    
     useEffect(()=>{
        dbscheduleddata?.map((value)=>{
        })
    },[dbscheduleddata])


   useEffect(() => {
          console.log(scheduleData);
    }, [scheduleData])

    return (
        <div className="schedulecontainer">
 
            <div className="scheduleheader">
                <button style={{ backgroundColor: active === "btn1" ? "#8eb69b" : "#daf1de" }}
                    onClick={() => {
                        handleChange("tomorrowclass", "scheduledate"); setActive("btn1")
                    }}>Schedule tomorrow's class</button>

                <button style={{ backgroundColor: active === "btn2" ? "#8eb69b" : "#daf1de" }}
                    onClick={() => {
                        handleChange("todayclass", "scheduledate"); setActive("btn2")
                    }}>Schedule today's class</button>

                <button style={{ backgroundColor: active === "btn3" ? "#8eb69b" : "#daf1de" }}
                    onClick={() => { setActive("btn3") }}
                    id="btn3">Start an instant class</button>
            </div>

            <div className="schedulebox">

                {/* Classname */}

                <span onClick={toggleshowClslist}>Classname <FontAwesomeIcon icon={faAngleDown} /></span>
                <ul className="clsname" style={{ display: showClslist ? "block" : "none" }}>
                    <li onClick={(e) => {
                        setCurrentcls({ className: "class-9th", classId: "cls_9" });
                        handleChange("class-9th", "classname"); toggleshowClslist()
                    }} >class-9th</li>

                    <li onClick={() => {
                        setCurrentcls({ className: "class-10th", classId: "cls_10" });
                        handleChange("class-10th", "classname"); toggleshowClslist()
                    }}>class-10th</li>

                    <li onClick={() => {
                        setCurrentcls({ className: "plus1", classId: "cls_plus1" });
                        handleChange("plus1", "classname"); toggleshowClslist()
                    }}>plus1</li>

                    <li onClick={() => {
                        setCurrentcls({ className: "plus2", classId: "cls_plus2" });
                        handleChange("plus2", "classname"); toggleshowClslist()
                    }}>plus2</li>
                </ul>

                {/* subject */}

                <span onClick={toggleshowSublst}>subject<FontAwesomeIcon icon={faAngleDown} /></span>
                <ul className="subname" style={{ display: showSublst ? "block" : "none" }}>
                    {subj?.map((value) => {
                        return <li
                            key={value}
                            onClick={() => {
                                setCurrentsubj({ classId: currentcls.classId, subjectName: value });
                                handleChange(value, "subject");
                                toggleshowSublst()
                            }}>{value}</li>
                    })}
                </ul>

                {/* chapter name  */}

                <span onClick={toggleshowChaplst}>chapter name <FontAwesomeIcon icon={faAngleDown} /></span>
                <ul className="subjlist" style={{ display: showChaplst ? "block" : "none" }}>
                    {chaplist?.map((value, key) => {
                        return <li key={key} onClick={() => {
                            handleChange(value.chapterName, "chapter");
                            toggleshowChaplst()
                        }}>{value.chapterName}</li>
                    })}
                </ul>

                <span><label htmlFor="topic">topic name</label></span>
                <span><label htmlFor="time">time</label></span>

            </div>

            <div className="schedulebody">

                <div className="currentitem">
                    <input type="text" placeholder="Classname" value={currentSchedule.classname} readOnly />

                    <input type="text" placeholder="subject" value={currentSchedule.subject} readOnly />

                    <input type="text" placeholder="chapter" value={currentSchedule.chapter} readOnly />

                    <input type="text" placeholder="topic " id="topic" value={currentSchedule.topic}
                        onChange={(e) => { handleChange(e.target.value, "topic") }} />
                    <input type="time" value={currentSchedule.time} id="time"
                        onChange={(e) => { handleChange(e.target.value, "time") }} />

                    <button onClick={onsubmit}>enter</button>
                </div>



                <div className="scheduleitemlist">



                    <div className="scheduledlist">
                        <div style={{ color: "#163832" }}>today's class</div>
                        {scheduleData?.map((value) => {
                            if (value.scheduledate === "todayclass") {
                                return <div className="scheduleditem" key={value.scheduleid}>

                                    <span>{value.classname}</span>
                                    <span>{value.subject}</span>
                                    <span>{value.chapter}</span>
                                    <span>{value.topic}</span>
                                    <span>{value.time}</span>

                                </div>
                            }
                        })}
                    </div>

                    {/* db */}
                    
                    <div className="scheduledlist" style={{borderTop:"none",marginTop:0}}>
                        {dbscheduleddata?.map((value) => {
                                  if (value.scheduledate === "todaysclass") {
                                return <div className="scheduleditem" key={value.scheduleid}>

                                    <span>{value.classname}</span>
                                    <span>{value.subject}</span>
                                    <span>{value.chapter}</span>
                                    <span>{value.topic}</span>
                                    <span>{value.time}</span>
                             
                                </div>
                                  }
                        })}
                    </div>


                    
                    <div className="scheduledlist">
                        <div style={{ color: "#163832" }}>tomorrow's class</div>
                        {scheduleData?.map((value) => {
                            if (value.scheduledate === "tomorrowclass") {
                                return <div className="scheduleditem" key={value.scheduleid}>

                                    <span>{value.classname}</span>
                                    <span>{value.subject}</span>
                                    <span>{value.chapter}</span>
                                    <span>{value.topic}</span>
                                    <span>{value.time}</span>

                                </div>
                            }
                        })}
                    </div>

                      {/* db */}
                    
                    <div className="scheduledlist" style={{borderTop:"none",marginTop:0}}>
                        {dbscheduleddata?.map((value) => {
                                  if (value.scheduledate === "tomorrowclass") {
                                return <div className="scheduleditem" key={value.scheduleid}>

                                    <span>{value.classname}</span>
                                    <span>{value.subject}</span>
                                    <span>{value.chapter}</span>
                                    <span>{value.topic}</span>
                                    <span>{value.time}</span>
                             
                                </div>
                                  }
                        })}
                    </div>

                </div>

            </div>
    <button id="btn" onClick={()=>{navigate(`/teacherdashboard/${id}`)}}>back</button>
        </div>
    )
}

export default Scheduleclasses;