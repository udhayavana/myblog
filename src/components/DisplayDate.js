import React, { useEffect, useState } from 'react';
// import moment from  "moment";

const DisplayDate = () => {

function convertTZ(date, tzString) {
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));   
}

const zeroPad = (num, places) => String(num).padStart(places, '0');

function toFormat(dateObject){
  let day = zeroPad(dateObject.getDate(),2);
  let monthIndex = dateObject.getMonth();
  let year = dateObject.getFullYear();
  let hours = dateObject.getHours();
  let mins = zeroPad(dateObject.getMinutes(),2);
  let seconds = zeroPad(dateObject.getSeconds(),2);
  let monthNames = ["January", "Febrauary", "March", "April", "May", "June", "July", "August","September", "October", "November", "December"];
  let month = monthNames[monthIndex];
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours=zeroPad((hours>12)?hours-12:hours,2);
   return `${day} ${month} ${year} ${hours}:${mins}:${seconds} ${ampm.toUpperCase()}`;
}


const localdate = new Date();
//const formatting = localdate.toLocaleString();
// const formatted = moment(formatting).format("D MMMM YYYY LTS");
const formatted=convertTZ(localdate,Intl.DateTimeFormat().resolvedOptions().timeZone);
const [newDate,setDate]=useState(formatted);

useEffect(()=>{
  setTimeout(()=>{
    const localdate = new Date();
    //const formatting = localdate.toLocaleString();
    // const formatted = moment(formatting).format("D MMMM YYYY LTS");
    const formatted=convertTZ(localdate,Intl.DateTimeFormat().resolvedOptions().timeZone);
    setDate(formatted);
  },1000);
 });

  let curDate=toFormat(newDate);
  return (
   <p>{curDate}</p> 
  )
}

export default DisplayDate;