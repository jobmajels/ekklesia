import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Profile.css';

import { Teachprofiledatas, Teachsignupdatas, Schooldata } from '../../Contextz/MyContext';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";



function TProfile() {

    const {id,sclname} = useParams();

    //context
    const { Teachprofiledata, setTeachProfiledata } = useContext(Teachprofiledatas);

    //state
    const [teachdata, setTeachdata] = useState({});
    const[subj,setSubj]=useState([]);

    function getprofData() {
        let tdata = Teachprofiledata.find((value) => {
            return value.id === id;
        });
        setTeachdata(tdata);
    }

    useEffect(() => {
        getprofData();
    }, [Teachprofiledata])

    useEffect(() => {
        let subje=teachdata?.subjects;
        setSubj(subje)
    }, [teachdata])

    return (
        <div className="profbox">

            <span><FontAwesomeIcon icon={faCircleUser} style={{ color: "rgb(227, 221, 221)", }} /></span>
               <h1>Profile</h1>
            <div className="profinfo">
                {
                    <div className="proflist">
                        <span><span className="desc">school name:</span>{sclname}</span>
                        <span><span className="desc">Name:</span>{teachdata?.fullName}</span>
                        <span><span className="desc">gender:</span>{teachdata?.gender}</span>
                        <span><span className="desc">email:</span>{teachdata?.email}</span>
                        <span><span className="desc">phno:</span>{teachdata?.phno}</span>
                        <span><span className="desc">role:</span>teacher</span>
                        <span><span className="desc">subject:</span>{subj?.map(value=><span>{value}, </span>)}</span>
                        <span><span className="desc">experience:</span>{teachdata?.experience}</span>
                        <span><span className="desc">qualification:</span>{teachdata?.qualification}</span>
                        <span><span className="desc">country:</span>{teachdata?.country}</span>
                        <span><span className="desc">state:</span>{teachdata?.state}</span>
                    </div>

                }
            </div>
        </div>
    );



}

export default TProfile;