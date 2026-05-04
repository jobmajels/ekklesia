import React from 'react'
import './chapters.css'


function Schapters(props){


    const{chapter}=props;
    
    return(
        <div className="chapbox">
          <h3>Chapters</h3>
          {
            chapter.map((value,key)=>{
                   return <div className="chaplst">
                        <span>{key+1}) {value.chapterName}.</span>
                         <a href={value.notesPdf} target="_blank">notes</a>
                         </div>
            })
          }
        </div>
    )
}

export default Schapters;