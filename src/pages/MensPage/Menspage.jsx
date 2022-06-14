import React from 'react'
import style from "../MensPage/Menspage.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { getmensAPI } from '../../store/Mens/mensaction'
export const Menspage = () => {
    let [gclick,setGclick]=React.useState(false)
    let [condclick,setCondclick]=React.useState(false)
    let [catclick,setCatclick]=React.useState(false)
    const mensdata=useSelector((state)=>state.mens.mdata)
    const dispatch=useDispatch()
    console.log("mensData",mensdata)
    React.useEffect(()=>{
        dispatch(getmensAPI())
    },[dispatch])
    let handlegclick=()=>{
        setGclick(!gclick)
    }
    let handlecondclick=()=>{
        setCondclick(!condclick)
    }
    let handlecatclick=()=>{
        setCatclick(!catclick)
    }
  return (
    <div>
        <div>
            <h1>Designer Clothing for men</h1>
            <p>Designer clothing for men with price comparison across 500+ stores in one place. Discover the latest designer clothing for men at ModeSens.</p>
        </div>
        <div style={{border:"1px solid black"}}>hello</div>
        <div className={style.prmaincontainer}>
            <div className={style.prsidebar}>
               <div>
                    <div style={{display:"flex",justifyContent:"space-between"}}>
                        <div>Filter by</div>
                        <div>Reset</div>
                    </div>
                    <div style={{display:"flex",justifyContent:"felx-start"}}onClick={handlegclick}>Gender:Men </div>
                    { gclick && (<div style={{backgroundColor:"white",width:"15%",zIndex:"1",position:"absolute"}}>
                                <div style={{textAlign:"start"}}>Women</div>
                                <div style={{textAlign:"start"}}>Men</div>
                                <div style={{textAlign:"start"}}>Kids</div>
                                </div>)
                    }
                   
                    <div style={{display:"flex",justifyContent:"felx-start"}} onClick={handlecondclick}>Condition:New</div>
                    { condclick && (<div  style={{backgroundColor:"white",width:"15%",zIndex:"1",position:"absolute"}}>
                                <div style={{textAlign:"start"}}>All</div>
                                <div style={{textAlign:"start"}}>New</div>
                                <div style={{textAlign:"start"}}>Pre-Owned</div>
                                </div>)
                    }
                    
                    <div style={{display:"flex",justifyContent:"felx-start"}} onClick={handlecatclick}>Category:Clothing</div>
                    { catclick && (<div  style={{backgroundColor:"white",width:"15%",zIndex:"1",position:"absolute"}}>
                                <div style={{textAlign:"start"}}>All</div>
                                <div style={{textAlign:"start"}}>Clothing</div>
                                <div style={{textAlign:"start"}}>Bags</div>
                                <div style={{textAlign:"start"}}>Accessories</div>
                                <div style={{textAlign:"start"}}>Home</div>
                                </div>)
                    }
                    
                    
                
               </div>
            </div>
           
            <div className={style.prprodcontainer}>
                
                {mensdata.map((el)=>(
                    <div className={style.prindiv}>
                        <img style={{height:"50%",width:"50%"}} src={el.imgsrc}/>
                        <div className={style.prindiprop}>
                        <div>{el.brand}</div>
                        <p  style={{width:"100%",display:"inline"}}>{el.description}</p>
                        <div>{el.price}</div>
                        <div>{el.stores}</div>
                        </div>
                        </div>
                     
                ))}
              
               
            </div>
        </div>
    </div>
  )
}
