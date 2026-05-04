import React, { useState, useEffect } from 'react'
import { Studlogindatas, Studsignupdatas, Studprofiledatas, Teachsignupdatas, Teachlogindatas,
     Teachprofiledatas,TeachAssignments,Schooldata,Classdata,Classnotes,Classroom,Pchatbox,ScheduledCls,ScheduledDB,NewAssgn,Teachexams,NewExam} from './MyContext'
import { getStudSignupData, getStudLoginData, getStudProfileData,getTeachSignupData,getTeachLoginData,
    getTeachProfileData,getSchooldata,getClassdata,getClassNote,getClassroom,getScheduleData,getAssignmentData,getExamData} from '../../services/Services'

function Providers({ children }) {

    const [StudsignupData, setStudSignupData] = useState([]);
    const [StudloginData, setStudLogindata] = useState([]);
    const [Studprofiledata, setStudProfiledata] = useState([]);

    const [TeachsignupData, setTeachSignupData] = useState([]);
    const [TeachloginData, setTeachLogindata] = useState([]);
    const [Teachprofiledata, setTeachProfiledata] = useState([]);
    const [TeachAssignment,setTeachAssignment]=useState([]);
    const[newAssgn,setNewAssgn]=useState({});

    const[TeachExam,setTeachExams]=useState([]);
     const[newExams,setNewExams]=useState({});
    
    const[Schooldatas,setSchooldatas]=useState([]);
    const[Classdatas,setClassdatas]=useState([]);
    const[Classnote,setClassnote]=useState([]);
    const[ClassRoom,setClassRoom]=useState([]);

    const[pchat,setPchat]=useState([]);

     const[scheduleData,setScheduleData]=useState([]);
     const[scheduledDB,setScheduledDB]=useState([]);

    useEffect(() => {
        getstudSignup();
        getstudLogin();
        getstudProfile();
        getteachSignup();
        getteachLogin();
        getteachProfile();
        getSchoolData();
        getClassData();
        getClassDatas();
        getClassRooms();
        getScheduledatas();
        getAssignmentDatas();
        getExamDatas();
    }, []);


    //student

    async function getstudSignup() {
        try {
            let res = await getStudSignupData();
            setStudSignupData(res);
        } catch (error) {
            console.log(error)
        }
    }

    async function getstudLogin() {
        try {
            let res = await getStudLoginData();
            setStudLogindata(res);
        } catch (error) {
            console.log(error);
        }
    }

    async function getstudProfile() {
        try {
            let res = await getStudProfileData();
            setStudProfiledata(res);
        } catch (error) {
            console.log(error);
        }
    }

    //teacher

    async function getteachSignup(){
        try{
            let res = await getTeachSignupData();
            setTeachSignupData(res);
        }catch(error){
            console.log(error);
        }
    }

    async function getteachLogin(){
        try{
            let res = await getTeachLoginData();
            setTeachLogindata(res);
        }catch(error){
            console.log(error);
        }
    }
    
    async function getteachProfile(){
        try{
            let res=await getTeachProfileData();
            setTeachProfiledata(res);
        }catch(error){
            console.log(error);
        }
    }

    async function getScheduledatas(){
        try{
            let res=await getScheduleData();
            setScheduledDB(res);
        }catch(error){
            console.log(error);
        }
    }


       async function getAssignmentDatas(){
        try{
            let res=await getAssignmentData();
            setTeachAssignment(res);
        }catch(error){
            console.log(error);
        }
    }

    async function getExamDatas(){
        try{
            let res= await getExamData();
            setTeachExams(res);
        }catch(error){
                console.log(error);
        }
    }

//     useEffect(()=>{
//     console.log(TeachExam);
// },[TeachExam])
   
//school
     
    async function getSchoolData(){
        try{
          let res=await getSchooldata();
          setSchooldatas(res);
        }catch(error){
            console.log(error);
        }
    }

     async function getClassData(){
        try{
          let res=await getClassdata();
          setClassdatas(res);
        }catch(error){
            console.log(error);
        }
    }

    async function getClassDatas(){
        try{
            let res=await getClassNote();
            setClassnote(res);
        }catch(error){
            console.log(error);
        }
    }

    async function getClassRooms(){
        try{
            let res = await getClassroom();
             setClassRoom(res)
        }catch(error){
            console.log(error);
        }
    }

// useEffect(()=>{
//     console.log(ClassRoom);
// })

    // console.log(TeachsignupData);
    // console.log(TeachloginData);
    //  console.log(Teachprofiledata);




    return (

        <Studsignupdatas.Provider value={{ StudsignupData, setStudSignupData }}>
            <Studlogindatas.Provider value={{ StudloginData, setStudLogindata }}>
                <Studprofiledatas.Provider value={{ Studprofiledata, setStudProfiledata }}>
                    <Teachsignupdatas.Provider value={{ TeachsignupData, setTeachSignupData }}>
                        <Teachlogindatas.Provider value={{ TeachloginData, setTeachLogindata }}>
                            <Teachprofiledatas.Provider value={{ Teachprofiledata, setTeachProfiledata }}>
                                <Schooldata.Provider value={{Schooldatas,setSchooldatas}}>
                                    <Classdata.Provider value={{Classdatas,setClassdatas}}>
                                        <Classnotes.Provider value={{Classnote,setClassnote}}>
                                            <Classroom.Provider value={{ClassRoom,setClassRoom}}>
                                                <Pchatbox.Provider value={{pchat,setPchat}}>
                                                    <ScheduledCls.Provider value={{scheduleData,setScheduleData}}>
                                                        <ScheduledDB.Provider value={{scheduledDB,setScheduledDB}}>
                                                            <TeachAssignments.Provider value={{TeachAssignment,setTeachAssignment}}>
                                                                <NewAssgn.Provider value={{newAssgn,setNewAssgn}}>
                                                                    <Teachexams.Provider value={{TeachExam,setTeachExams}}>
                                                                        <NewExam.Provider value={{newExams,setNewExams}}>
                                                               {children}
                                                                        </NewExam.Provider>
                                                                    </Teachexams.Provider>
                                                                 </NewAssgn.Provider>
                                                               </TeachAssignments.Provider>
                                                        </ScheduledDB.Provider>
                                                    </ScheduledCls.Provider>
                                                </Pchatbox.Provider>
                                            </Classroom.Provider>
                                        </Classnotes.Provider>
                                     </Classdata.Provider>
                                </Schooldata.Provider>
                            </Teachprofiledatas.Provider>
                        </Teachlogindatas.Provider>
                    </Teachsignupdatas.Provider>
                </Studprofiledatas.Provider>
            </Studlogindatas.Provider>
        </Studsignupdatas.Provider>

    );
}


export default Providers;