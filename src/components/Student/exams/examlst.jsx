import React, { useState, useEffect, useContext } from 'react'
import './examlst.css'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";


function Examitems(props) {

    const {
        datas,
        subjnme
    } = props

    const [asgnlist, setAsgnlist] = useState()

    function getasgnlist() {
        let aslst = datas?.filter((value) => {
            return value.subjectName === subjnme;
        });
        setAsgnlist(aslst);
    }

    useEffect(() => {
        getasgnlist()
    }, [datas, subjnme]);


      const [showQue, setShowques] = useState({});
    
        function showQues(id) {
            setShowques((prev) => {
                return {
                    ...prev,
                    [id]: !prev[id]
                }
            });
        }
     

    return (
        <div>
            {asgnlist?.map((value,key) => {
                return <div className="examlst">
                    <span>Assignment-{value.testNo}</span>
                     <span>Test Type-{value.testType}</span>
                    <span>Topic: {value.topic}</span>

                    <button onClick={() => { showQues(key) }} id="btn1">view questions</button>


                    <div className="question" style={{ display: showQue[key] ? "flex" : "none" }}>
                        <button onClick={() => { showQues(key) }}><FontAwesomeIcon icon={faXmark} style={{ color: "rgb(0, 0, 0)", }} /></button>
                        {value.questions?.map((value, key) => {
                            return <span>{key + 1 + ")"} {value}</span>;
                        })}
                    </div>
                </div>
            })}

        </div>
    )

}

export default Examitems;