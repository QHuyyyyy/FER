import React, { useState, useEffect, createContext, useContext } from 'react';
const moneyfromGrand= createContext() 
export default function ContextCompoDemo() {
    const [money,setMoney] = useState (' 2 toi ');
 
    return (
      <div>
       <moneyfromGrand.Provider value={money}>
        <ConChild/>
        </moneyfromGrand.Provider>
      </div>
    )
 function ConGrand() {
    return <ConParent/>
 }
 function ConParent(){
    return <ConChild/>
 }
 function ConChild() {
    const valuefromContext = useContext(moneyfromGrand)
    return <p>{valuefromContext}</p>
 }
}
