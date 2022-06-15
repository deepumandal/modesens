import React from 'react'
import style from "../styles.module/Menspage.module.css"
export const Mensdropdown = ({dropcontent}) => {
  console.log(dropcontent)
  return (
    <div className={style.prdropdown_firstthree}>
        { dropcontent?.map((el)=>(
          
          
             <div>{el.name}</div>
          
           
        ))  }
        
    </div>
  )
}
