import React from 'react'
import style from "../styles.module/Menspage.module.css"
export const Dropfilt = ({dropcontent}) => {
  return (
    <div className={style.prdesignerdropdown}>
       
    { dropcontent?.map((el)=>(
        <div style={{display:"flex",justifyContent:"space-between",fontSize:"12px",marginBottom:"5px"}}>
               <input style={{width:"20px",height:"20px"}} type="checkbox"></input>
               <div style={{width:"80%",color:"#979cb5"}}>{el}</div>
        </div>
        
    ))  }
    
</div>
  )
}
