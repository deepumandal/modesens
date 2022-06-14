import React from 'react'
import style from "../styles.module/Menspage.module.css"
import { handlequickview } from '../pages/MensPage/functionformens'
export const Product = ({el}) => {
    let [quickviewstatus,setQuickviewstatus]=React.useState(false)
  return (
    <div className={style.prindiv}>
                        <div className={style.primgquidiv}>
                        <img onMouseLeave={()=>handlequickview(quickviewstatus,setQuickviewstatus)} onMouseOver={()=>handlequickview(quickviewstatus,setQuickviewstatus)} style={{height:"80%",width:"50%"}} src={el.imgsrc}/>
                        <div style={{border:"1px solid blue",height:"15%",display: quickviewstatus ? "block":"none"}}>Quick View</div>
                        </div>
                      
                        <div className={style.prindiprop}>
                        <div>{el.brand}</div>
                        <p  style={{width:"100%",display:"inline"}}>{el.description}</p>
                        <div>{el.price}</div>
                        <div>{el.stores}</div>
                        </div>
</div>
  )
}
