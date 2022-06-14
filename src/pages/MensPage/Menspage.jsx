import React from 'react'
import {handlegclick,handlecondclick,handlecatclick,categorydrop, handlequickview} from "./functionformens.js"
import style from '../../styles.module/Menspage.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getcat, getmensAPI } from '../../store/Mens/mensaction'
import { Mensdropdown } from '../../component/Mensdropdown'
import { Product } from '../../component/Product.jsx'
export const Menspage = () => {

    let gender=["Women","Men","Kids"]
    let condition=["All","New","Pre-owned"]
    let [gclick,setGclick]=React.useState(false)
    let [condclick,setCondclick]=React.useState(false)
    let [catclick,setCatclick]=React.useState(false)
    let[categories,setCategories]=React.useState(false)
   


    const mensdata=useSelector((state)=>state.mens.mdata)
    const catdata=useSelector((state)=>state.mens.catdata)
    const dispatch=useDispatch()
    
    React.useEffect(()=>{
        dispatch(getmensAPI())
    },[dispatch])


    let categorydrop=()=>{
       if(!categories)
       { dispatch(getcat())
        setCategories(!categories)
       }
       else{
        setCategories(!categories)
       }
       
     }
  return (
    <div>
        <div className={style.prdesignerdiv}>
            <div style={{fontSize:"24px"}}><b>Designer Clothing for men</b></div>
            <p style={{fontSize:"12px",fontWeight:"500"}}>Designer clothing for men with price comparison across 500+ stores in one place. Discover the latest designer clothing for men at ModeSens.</p>
        </div>
        <div style={{border:"1px solid black"}}>hello</div>
        <div className={style.prmaincontainer}>
            <div className={style.prsidebar}>
               <div >
                    <div style={{display:"flex",justifyContent:"space-between"}}>
                        <div>Filter by</div>
                        <div>Reset</div>
                    </div>
                   <div style={{marginTop:"10px",marginBottom:"10px"}}>
                   <div className={style.prcatcondgen}onClick={()=>handlegclick(gclick,setGclick)}>Gender:Men </div>
                    { gclick && (<div className={style.prdropdown_firstthree}>
                                { gender.map((el)=>(
                                        <div  style={{textAlign:"start"}}>{el}</div>
                                ))}
                                </div>)
                    }
                   
                    <div className={style.prcatcondgen} onClick={()=>handlecondclick(condclick,setCondclick)}>Condition:New</div>
                    { condclick && (<div  className={style.prdropdown_firstthree}>
                                    { condition.map((el)=>(
                                        <div  style={{textAlign:"start"}}>{el}</div>
                                    ))}
                                    </div>)
                    }
                    
                    <div className={style.prcatcondgen} onClick={()=>handlecatclick(catclick,setCatclick)}>Category:Clothing</div>
                   </div>
                    { catclick && ( <div >
                                    <Mensdropdown dropcontent={catdata}/>
                                    </div>)
                    }
                    <div className={style.prsavemysearch}>Save My Search</div>
                    
                    <div className={style.prshareandsave}>
                        <div>Share my search</div>
                        <div>My saved Searches</div>
                    </div>
                    <div className={style.prheavyfilters}>
                        <div onClick={categorydrop}>CATEGORY
                        {categories &&<Mensdropdown dropcontent={catdata}/>}
                        </div>
                           
                    
                        <div>DESIGNER</div>

                        <div>SIZE</div>

                        <div>COLOR</div>

                        <div>PRIZE RANGE</div>

                        <div>ON SALE</div>

                        <div>STORE</div>

                        <div>KEYWORD</div>
                    </div>
                </div>
            </div>
           
            <div className={style.prprodcontainer}>
                {mensdata.map((el)=>(
                  <Product  el={el}/>
                ))}
            </div>

        </div>
    </div>
  )
}
