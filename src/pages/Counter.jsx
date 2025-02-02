import React , { useState } from 'react';

function Counter(){

    const [count,setCount]=useState(0);
    const [disableButton,setDisableBtton]=useState(false);
    
    const handleIncrease=()=>{
        setCount((count)=>{
            if(count+1>0){
                setDisableBtton(false);
            }
            return count+1;
        });
    }

    const handleDecrease=()=>{
        setCount((count)=>{
            if(count-1===0){
                setDisableBtton(true);
            }
            return count-1;
        });
    }

    return (
    <div className="banner-section section parallax-window" data-parallax="scroll">
    <div className="container">
    <button type='button' onClick={handleIncrease}>+</button>
    <h1>{count}</h1>
    <button type='button' onClick={handleDecrease} disabled={disableButton} >-</button>
 </div>
 </div>
 );
}

export default Counter;