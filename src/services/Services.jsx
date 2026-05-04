import React from 'react' 
import Api from './Api'


//student data fetch 

export const getStudSignupData=async ()=>{
    let res = await Api.get('/studentDB/StudSignup.json');
    return res.data;
}

export const getStudLoginData=async()=>{
    let res = await Api.get('/studentDB/StudLogin.json');
    return res.data;
}

export const getStudProfileData=async()=>{
    let res = await Api.get('/studentDB/profile.json');
    return res.data;
}


//teacher data fetch

export const getTeachSignupData=async()=>{
    let res = await Api.get('/teacherDB/TeachSignup.json');
    return res.data;
}
export const getTeachLoginData=async()=>{
    let res = await Api.get('/teacherDB/TeachLogin.json');
    return res.data;
}
export const getTeachProfileData=async()=>{
    let res = await Api.get('/teacherDB/profile.json');
    return res.data;
}

export const getAssignmentData=async()=>{
    let res = await Api.get('/teacherDB/assignment.json');
    return res.data;
}

export const getExamData=async()=>{
    let res = await Api.get('/teacherDB/test.json');
    return res.data;
}

//school

export const getSchooldata=async()=>{
    let res = await Api.get("/schoolDB/schoolinfo.json");
    return res.data;
}

export const getClassdata=async()=>{
    let res = await Api.get("/classlist/classlist.json");
    return res.data;
}

export const getClassNote=async()=>{
    let res = await Api.get("/classlist/notes.json");
    return res.data;
}

export const getClassroom=async()=>{
    let res = await Api.get('/classlist/classroom.json');
    return res.data;
}

export const getScheduleData=async()=>{
    let res = await Api.get('/classlist/scheduledcls.json');
    return res.data;
}
//subjects

//9th 

export const get9thNoteBiology=async()=>{
    let res = await Api.get("/subjects/9thnote/biology.json");
    return res.data;
}

export const get9thNoteChemistry=async()=>{
    let res = await Api.get("/subjects/9thnote/chemistry.json");
    return res.data;
}
export const get9thNoteComputer=async()=>{
    let res = await Api.get("/subjects/9thnote/computer.json");
    return res.data;
}
export const get9thNoteEng=async()=>{
    let res = await Api.get("/subjects/9thnote/english.json");
    return res.data;
}
export const get9thNoteHis=async()=>{
    let res = await Api.get("/subjects/9thnote/history.json");
    return res.data;
}
export const get9thNoteMalay=async()=>{
    let res = await Api.get("/subjects/9thnote/malayalam.json");
    return res.data;
}
export const get9thNoteMath=async()=>{
    let res = await Api.get("/subjects/9thnote/maths.json");
    return res.data;
}
export const get9thNotePhysic=async()=>{
    let res = await Api.get("/subjects/9thnote/physics.json");
    return res.data;
}

//10th

export const get10thNoteBiology=async()=>{
    let res = await Api.get("/subjects/10thnote/biology.json");
    return res.data;
}
export const get10thNoteChemis=async()=>{
    let res = await Api.get("/subjects/10thnote/chemistry.json");
    return res.data;
}
export const get10thNoteComputery=async()=>{
    let res = await Api.get("/subjects/10thnote/computer.json");
    return res.data;
}
export const get10thNoteEng=async()=>{
    let res = await Api.get("/subjects/10thnote/english.json");
    return res.data;
}
export const get10thNoteHis=async()=>{
    let res = await Api.get("/subjects/10thnote/history.json");
    return res.data;
}
export const get10thNoteMalay=async()=>{
    let res = await Api.get("/subjects/10thnote/malayalam.json");
    return res.data;
}
export const get10thNoteMath=async()=>{
    let res = await Api.get("/subjects/10thnote/maths.json");
    return res.data;
}
export const get10thNotePhysic=async()=>{
    let res = await Api.get("/subjects/10thnote/physics.json");
    return res.data;
}