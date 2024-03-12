import React, { useEffect, useState } from 'react';
import moment from  "moment";

const DisplayDate = () => {

/* function convertTZ(date, tzString) {
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));   
} */

const localdate = new Date();
const formatting = localdate.toLocaleString();
const formatted = moment(formatting).format("D MMMM YYYY LTS");

const [newDate,setDate]=useState(formatted);

useEffect(()=>{
  setTimeout(()=>{
    const localdate = new Date();
    const formatting = localdate.toLocaleString();
    const formatted = moment(formatting).format("D MMMM YYYY LTS");
    setDate(formatted);
   // setDate(convertTZ(new Date(),'Asia/Kolkata'));
  },1000);
 });

 /*let curDate=newDate.getDay()+"-"+newDate.getMonth()+"-"+newDate.getFullYear()+" "+newDate.getHours()+
 ":"+newDate.getMinutes()+":"+newDate.getSeconds();*/
  return (
   <p>{newDate}</p> 
  )
}

export default DisplayDate;