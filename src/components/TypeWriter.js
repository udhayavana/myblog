import React, { useEffect, useState } from 'react';

const TypeWriter = ({text,delay}) => {

    const [currentText,setCurrentText]=useState("");
    const [currentInd,setCurrentInd]=useState(0);

    useEffect(() => {
        let changingText=text;
        if (currentInd <= changingText.length) {
            const timeout = setTimeout(() => {
            if(text[currentInd]===","){
              setCurrentText("");
              setCurrentInd(prevIndex => prevIndex + 1);
              changingText=changingText.slice(currentInd+1);
            }
            else{
			  if( changingText[currentInd] === " "){
				  setCurrentText(prevText => prevText + changingText[currentInd] + `\u2003`);
			  }
			  else{
              setCurrentText(prevText => prevText + changingText[currentInd] + `\u2002`);
              }
			  setCurrentInd(prevIndex => prevIndex + 1);
            }
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