import React, { useImperativeHandle } from 'react'

function CustomInput({style,...props},ref) {
    useImperativeHandle(ref,()=>{
        return{
            alertHi:()=>alert('Hi')
        }
    },[])
  return (
    <input
    ref={ref}  
    {...props}
    style={{
        border:'none',
        backgroundColor:'lightpink',
        padding:'.25rem',
        marginBottom:'1rem',
        borderBottom:'.1em solid black',
        borderTopRightRadius:'.25em',
        borderTopLeftRadius:'.25em',
        ...style
    }}/>
    
  )
}

export default React.forwardRef(CustomInput)