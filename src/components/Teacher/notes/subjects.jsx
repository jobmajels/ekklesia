import React from 'react'
import Chapters from './chapters'
import './subjects.css'

function Subjects(props){


    const{subject}=props;

    return(
        <div className="subbox">
           {subject.map((value)=>{
                return <div>
                    <div className="subjinfo">
                    <span>{value.subjectName}</span>
                    <a href={value.syllabusPdf} target="_blank">Syllabus</a>
                    </div>
                     <Chapters chapter={value.chapters}/>
                </div>
           })}
        </div>
    )
}

export default Subjects;