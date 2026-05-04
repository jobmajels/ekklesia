import React,{useContext,useState} from 'react'
import './privatechat.css'
import {Pchatbox} from '../../Contextz/MyContext'
import {useParams} from 'react-router-dom'



function PchatBox(){


    const{role,clsid,stdname,tname}=useParams();



    //context
    const{pchat,setPchat}=useContext(Pchatbox);
     
    //state
    const[message,setMessage]=useState({
         chat:""
        });
   
    function handlechange(value){
       
        setMessage({
             chat:value
        });

    }

    function sendmsg(){

          setPchat((prev)=>{
            return [...prev, message]
          });

          setMessage({
             chat:""
        });
    }
    
console.log(message)

    return(

        <div className="pcontainer">

             <div className="msgbox">
                <div className="msghead">
                <span>{role=="student"?tname:stdname}</span>
                </div>

                <div  className="msgbody">
                 
                 <div className="chats"> 
                  {pchat?.map((value)=>{
                      return <div className="singlechat"><span className="msg">you</span><br/>{value.chat}</div>;
                  })}
                  <br/>
                  </div>

                </div>

                <div className="footer">
                  <input type="text" value={message.chat} onChange={(e)=>{handlechange(e.target.value)}}/>
                  <button onClick={sendmsg}>send</button>
                </div>
             </div>

        </div>
    )
}

export default PchatBox;