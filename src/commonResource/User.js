import React, { useEffect, useState } from 'react'
import axios from "axios"



function User() {
const[user,setuser]=useState([])
const Url="https://randomuser.me/api/"

useEffect(()=>{
    axios.get(Url).then(response=>{
        console.log(response.data);
        setuser(response.data.results);
    } ) 
},[])
console.log(user);
const userName=user.map((item,index)=>{
    return(
        <div key={index}>
        <img src={item.picture.medium}alt="picture"/>

       < h3>{item.name.first}{item.name.last}</h3>
        </div>
    )
}
)


  return (
    <div>
<h1>User</h1>
   {userName}
    </div>
  )
}

export default User