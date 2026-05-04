import React from 'react'
import axios from 'axios'


const Api = axios.create({
    baseURL:"/modelDataBase",
    headers:{
        "Content-Type":"application/json",
    }
});

export default Api;