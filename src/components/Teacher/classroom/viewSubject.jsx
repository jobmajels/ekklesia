import React from 'react'
import './viewSubject.css'
import {useNavigate} from 'react-router-dom'
function Showsubj(props){

    const{
     classname,
      subjects,
      classid,
      tid
    }=props

    const navigate=useNavigate();



    return(
    <div className="viewbox">

        {subjects.map((value)=>{
            return <div className="viewcontent" >
            <span>{classname}</span>
            <span>{value}</span>
            <button onClick={()=>{navigate(`/viewstudentdetails/${classid}/${classname}/${ tid}`)}}>View Students</button>
            </div>
        })}
    </div>
    );
}

export default  Showsubj;