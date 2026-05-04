import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './examhomepge.css'
import  Examitems from './examlist'

import { Classroom, Classdata, Teachexams } from '../../Contextz/MyContext'



function Examhomepge() {

    const { tid } = useParams()

    //context
    const { ClassRoom } = useContext(Classroom);
    const { Classdatas } = useContext(Classdata);
    const { TeachExam} = useContext(Teachexams);


    //state
    const [currentsubj, setCurrentsubj] = useState([]);
    const [subj, setSubj] = useState([]);


    function extractdata() {
        let result = [];

        for (let i = 0; i < Classdatas.length; i++) {

            let clsid = Classdatas[i].classId;
            let clsname = Classdatas[i].className;

            let currentcls = ClassRoom.find((value) => {
                return value.classId === clsid
            })

            let currentteacher = currentcls.teachers;


            let data;
            for (let j = 0; j < currentteacher.length; j++) {

                if (currentteacher[j].teacherid === tid) {
                    data = { classname: clsname, classid: clsid, subject: currentteacher[j].subjects };
                    break;
                }
            }
            if (data) {
                result.push(data);
            }
        }
        setCurrentsubj(result);
    };


    useEffect(() => {
        extractdata();
    }, [Classdatas, ClassRoom, tid, TeachExam]);


    useEffect(() => {
        let single = currentsubj.flatMap((value) => {
            return value.subject.map((sub) => {
                return {
                    classname: value.classname,
                    classid: value.classid,
                    subject: sub
                };
            })

        });
        setSubj(single);
    }, [currentsubj]);


    return (


        <div className="asgmainbox">

            <div className="asgcont">

                {subj.map((value) => {
                    return <div>
                        <div className="asghead">
                            <span>{value.classname}</span>
                            <span>{value.subject}</span>
                        </div>

                        <div className="asglistitem">
                            <Examitems datas={TeachExam} tid={tid} clsid={value.classid} subject={value.subject}/>
                        </div>
                    </div>
                })}


            </div>

        </div>


    )
}


export default Examhomepge;