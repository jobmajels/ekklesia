import React from 'react'
import Schapters from './chapters'
import './subjects.css'

function Ssubjects(props){


    const{subject}=props;

    return(
        <div className="subbox">
           {subject?.map((value)=>{
                return <div>
                    <div className="subjinfo">
                    <span>{value.subjectName}</span>
                    <a href={value.syllabusPdf} target="_blank">Syllabus</a>
                    </div>
                     <Schapters chapter={value.chapters}/>
                </div>
           })}
        </div>
    )
}

export default Ssubjects;