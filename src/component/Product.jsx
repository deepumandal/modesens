import React from 'react'
import style from "../styles.module/Menspage.module.css"

export const Product = ({el}) => {
 
  return (
    <div className={style.prindiv}>
                        <div className={style.primgquidiv}>
                            <div>heart</div>
                            <img className={style.primg}  src={el.imgsrc}/>
                            <div className={style.prquickdiv}>Quick View</div>
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


