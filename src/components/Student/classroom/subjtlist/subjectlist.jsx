import React from 'react'
import './subjectlist.css'
import {useNavigate} from 'react-router-dom'


function Subjectlist(props){

    const{
     subjectname,
     teachername,
     clsid, 
     stdid,
      tid,
    }=props

    const navigate = useNavigate();

    let role="student"
    return(<div className="sbox">

        <div><span>Subject:</span> <span>{subjectname}</span> </div>
        <div><span>Teacher Name:</span> <span>{teachername}</span> </div>
        <button onClick={()=>{navigate(`/pchat/${role}/${clsid}/${stdid}/${teachername}`)}}>Message Teacher</button>
            
       </div>);
}

export default Subjectlist;