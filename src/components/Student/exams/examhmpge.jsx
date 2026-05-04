import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './examhmpge.css'
import { Classroom, Classdata, Teachexams } from '../../Contextz/MyContext'

import Examitems from './examlst'

function Studexam() {


     const {clsid} = useParams();

    //context
    const { ClassRoom } = useContext(Classroom);
    const { Classdatas } = useContext(Classdata);
    const { TeachExam} = useContext(Teachexams);

    //state
    const [currentExam, setCurrentexam] = useState([]);
    const [subj, setSubj] = useState([]);




  function getAssign(){
    let assignmentinfo=TeachExam.filter((value)=>{
         return value.clsId===clsid;
    });
    let assignlist=assignmentinfo?.map((value)=>{
              return value.tests;
    });
    let flatassignlist=assignlist?.flatMap((value)=>{
                   return value;
    });
     console.log(flatassignlist);
   setCurrentexam(flatassignlist);
  }

  useEffect(()=>{
    getAssign()
  },[TeachExam]);

  function subjdata(){
        let clsdata=ClassRoom?.find((value)=>{
             return value.classId===clsid
        });
         let teachsubj=clsdata?.teachers;

        let subj=teachsubj?.map((value)=>{
                   return value.subjects;
        });
        let flatsubj=subj?.flatMap((value)=>{
                return value; 
        })

        setSubj(flatsubj);
  }

    useEffect(()=>{
    subjdata()
  },[ClassRoom,clsid]);


    return (


        <div className="exambox">

            <div className="asgcont">

              {
                subj?.map((value)=>{
                   return <div className="assmainbox">
                              <div className="subjname">subject: {value}</div>
                               <Examitems datas={currentExam} subjnme={value}/>
                          </div>
                })
              }


            </div>
        </div>


    )
}


export default Studexam;