import React from 'react'
import style from "../styles.module/Menspage.module.css"
export const Mensdropdown = ({dropcontent}) => {
  console.log(dropcontent)

  return (
    <div className={style.prdropdown_firstthree}>
        { dropcontent?.map((el)=>(
          
          
             <div style={{display:"flex",border : "10px solid red",justifyContent:"flex-start"}}>{el.name}</div>
          
           
        ))  }
        
    </div>
  )
}


{/* <Mensdropdown dropcontent={catdata}/> */}