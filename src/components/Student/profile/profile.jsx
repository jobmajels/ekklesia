import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import './profile.css'

import { Studprofiledatas, Studsignupdatas,Classdata,Schooldata } from '../../Contextz/MyContext'



function Profile() {

    const { id } = useParams();

    //context
    const { Studprofiledata} = useContext(Studprofiledatas);
    const { StudsignupData,setStudSignupData} = useContext(Studsignupdatas);
    const {Classdatas}=useContext(Classdata);
    const {Schooldatas}=useContext(Schooldata);

    //state
    const [profilecurrent, setProfileCurrent] = useState();
    const [signcurrent, setSigncurrent] = useState();
    const [schoolinfo,setschoolinfo]=useState({
        schoolname:"",
        classname:""
    })

    const [userCurrentdata, setUserCurrentdata] = useState(
        {
            id:"",
            schoolid: "",
            fname: "",
            lname: "",
            fullName: "",
            gender: "",
            email: "",
            phno: 0,
            parentsphno: 0,
            role: "",
            classId: "",
            className: "",
            country: "",
            state: ""
        }
    );

    function onchange(value,key){
        let temp = {...userCurrentdata};
        temp[key]=value;
        setUserCurrentdata(temp);
    }

    const[toggleprof,setToggleprof]=useState(true);
    function toggleprofile(){
        setToggleprof(prev=>!prev);
    }

    function changeData(){
       setStudSignupData((prev)=>{
        const sdata = prev.filter((value)=>{
             return value.id !== userCurrentdata.id
        });
          return [...sdata,{
    id:userCurrentdata.id,
    schoolid:userCurrentdata.schoolid,
    fname:userCurrentdata.fname,
    lname:userCurrentdata.lname,
    gender:userCurrentdata.gender,
    email:userCurrentdata.email,
    phno:userCurrentdata.phno,
    password:"",
    role: "student",
    classId:userCurrentdata.classId,
    country:userCurrentdata.country,
    state:userCurrentdata.state,
  }]
       })
    }

    useEffect(() => {
        searchCurrentuser()
    }, [id, Studprofiledata])

    function searchCurrentuser() {
        const pdata = Studprofiledata.find((value) => {
            return value.id === id
        });
        if (pdata) {
            setProfileCurrent(pdata);
        } else if (!profilecurrent) {
            const udata = StudsignupData.find((value) => {
                return value.id === id;
            })
            setSigncurrent(udata);
        }
    }
  
    useEffect(()=>{
       if(profilecurrent){
         setUserCurrentdata(profilecurrent)
       }else if(signcurrent){
        setUserCurrentdata({
            id:signcurrent.id,
            schoolid:signcurrent.schoolid,
            fname:signcurrent.fname,
            lname:signcurrent.lname,
            fullName:signcurrent.fname+" "+signcurrent.lname,
            gender:signcurrent.gender,
            email:signcurrent.email,
            phno:signcurrent.phno,
            parentsphno:0,
            role:signcurrent.role,
            classId:signcurrent?.classId,
            className:schoolinfo?.classname,
            country:signcurrent.country,
            state:signcurrent.state
        });
       }
    },[profilecurrent,signcurrent]);


    useEffect(()=>{
        console.log(userCurrentdata);
        let schoodata = Schooldatas.find((value)=>{
               return value.schoolid===userCurrentdata.schoolid;
        })
        let classdata = Classdatas.find((value)=>{
               return value.classId===userCurrentdata.classId;
        })
       setschoolinfo({
        schoolname:schoodata?.schoolname,
        classname:classdata?.className,
    })

    },[userCurrentdata,Classdatas,Schooldatas]);

   useEffect(()=>{
    console.log(StudsignupData)
   },[StudsignupData]);

    return (

        <div className="pmainbox">
            <div className="head"><h1>Student Profile</h1><span onClick={toggleprofile}>edit</span></div>
            <div className="profileData" style={{display:toggleprof?"flex":"none"}}>
               <span><span className="data">Name:</span> {userCurrentdata?.fullName}</span>
               <span><span className="data">Gender:</span> {userCurrentdata?.gender}</span>
               <span><span className="data">Email:</span> {userCurrentdata?.email}</span>
               <span><span className="data">Phone:</span> {userCurrentdata?.phno}</span>
               <span><span className="data">Parents phno:</span> {userCurrentdata?.parentsphno}</span>
               <span><span className="data">School id:</span> {userCurrentdata?.schoolid}</span>
               <span><span className="data">School name:</span> {schoolinfo?.schoolname}</span>
               <span><span className="data">Class id:</span> {userCurrentdata?.classId}</span>
               <span><span className="data">Class name:</span> {schoolinfo?.classname}</span>
               <span><span className="data">Country:</span> {userCurrentdata?.country}</span>
               <span><span className="data">State:</span> {userCurrentdata?.state}</span>
            </div>
             <div className="profileData" style={{display:toggleprof?"none":"flex"}}>
                <label>Fname:
                <input type="text" value={userCurrentdata?.fname} onChange={(e)=>{onchange(e.target.value,"fname")}}/>
                </label>
                <label>Lname:
                <input type="text" value={userCurrentdata?.lname} onChange={(e)=>{onchange(e.target.value,"lname")}}/>
                </label>
                <label>Gender:
                    <input type="text" value={userCurrentdata?.gender} onChange={(e)=>{onchange(e.target.value,"gender")}}/>
                </label>
                <label>Phone:
                    <input type="number" value={userCurrentdata?.phno} onChange={(e)=>{onchange(e.target.value,"phno")}}/>
                </label>
                <label>Parents phno:
                         <input type="number" value={userCurrentdata?.parentsphno} onChange={(e)=>{onchange(e.target.value,"parentsphno")}}/>
                </label>
                <span><span className="data">School id:</span> {userCurrentdata?.schoolid}</span>
               <span><span className="data">School name:</span> {schoolinfo?.schoolname}</span>
                <span><span className="data">Class id:</span> {userCurrentdata?.classId}</span>
               <span><span className="data">Class name:</span> {schoolinfo?.classname}</span>
                <label>Country:
                 <input type="text" value={userCurrentdata?.country} onChange={(e)=>{onchange(e.target.value,"country")}}/>
                </label>
                     <label>State:
                 <input type="text" value={userCurrentdata?.state} onChange={(e)=>{onchange(e.target.value,"state")}}/>
                </label>
                <button onClick={changeData}>submit</button>
             </div>   
        </div>
    );
}


export default Profile;