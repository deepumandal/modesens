import React from 'react'
import style from "../styles.module/Menspage.module.css"
export const Dropfilt = ({dropcontent}) => {
  return (
    <div className={style.prdesignerdropdown}>
        <div style={{display:"flex",justifyContent:"space-around",border:"1px solid red"}}>
            <input style={{width:"80%"}} placeholder='Search designers'></input>
            <i class="fa-solid fa-magnifying-glass"></i>
        </div>
    
        <hr style={{color:"black"}}></hr>
    { dropcontent?.map((el)=>(
        <div style={{display:"flex",justifyContent:"space-between"}}>
               <input style={{width:"20px",height:"20px"}} type="checkbox"></input>
               <div style={{width:"80%"}}>{el}</div>
        </div>
        
    ))  }
    
</div>
  )
}
