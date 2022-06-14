import React from 'react'
import style from "../styles.module/Menspage.module.css"
export const Mensdropdown = ({dropcontent}) => {
  return (
    <div className={style.prdropdown_firstthree}>
        { dropcontent?.map((el)=>(
            <div>{el.name}</div>
        ))  }
         { dropcontent.length>0 && <div >Home</div>} 
    </div>
  )
}
