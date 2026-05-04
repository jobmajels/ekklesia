import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './asignhomepge.css'
import Sasignitems from './asignlist'

import { Classroom, Classdata, TeachAssignments } from '../../Contextz/MyContext'



function Studasng() {

    const {clsid} = useParams();
   

    //context
    const { ClassRoom } = useContext(Classroom);
    const { TeachAssignment } = useContext(TeachAssignments);

    //state
    const [currentassing, setCurrentassing] = useState([]);
    const [subjname,setSubjname] = useState([]);


  function getAssign(){
    let assignmentinfo=TeachAssignment.filter((value)=>{
         return value.clsId===clsid;
    });
    let assignlist=assignmentinfo?.map((value)=>{
              return value.assignments;
    });
    let flatassignlist=assignlist?.flatMap((value)=>{
                   return value;
    })
    setCurrentassing(flatassignlist);
  }

  useEffect(()=>{
    getAssign()
  },[TeachAssignment]);

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
        setSubjname(flatsubj);
  }

    useEffect(()=>{
    subjdata()
  },[ClassRoom,clsid]);


    return (


        <div className="asgbox">

            <div className="asgcont">

              {
                subjname?.map((value)=>{
                   return <div className="assmainbox">
                              <div className="subjname">subject: {value}</div>
                               <Sasignitems datas={currentassing} subjnme={value}/>
                          </div>
                })
              }


            </div>

        </div>


    )
}


export default Studasng;