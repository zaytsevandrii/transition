import React, { useRef, useState } from "react"
import CustomInput from "./CustomInput"
import List from "./List"

function App() {
   const [value,setValue]= useState('red')
   const inputRef=useRef()
    return (
        <div>
         <CustomInput ref={inputRef} value={value} onChange={e=>setValue(e.target.value)}/>
         <br />
         <button onClick={()=>inputRef.current.alertHi()}>Focus</button>
        </div>
    )
}

export default App
