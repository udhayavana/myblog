import React, { useEffect, useState } from 'react';

const TypeWriter = ({text,delay}) => {

    const [currentText,setCurrentText]=useState("");
    const [currentInd,setCurrentInd]=useState(0);

    useEffect(() => {
        if (currentInd < text.length) {
          const timeout = setTimeout(() => {
            setCurrentText(prevText => prevText + text[currentInd]);
            setCurrentInd(prevIndex => prevIndex + 1);
          }, delay);
      
          return () => clearTimeout(timeout);
        }
        else{
          setCurrentText("");
          setCurrentInd(0);
        }
      }, [currentInd, delay, text]);

    
     return (
       <>{currentText}</> 
      )
}

export default TypeWriter;