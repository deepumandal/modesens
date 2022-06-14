import React from 'react'
import style from "../MensPage/Menspage.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { getcat, getmensAPI } from '../../store/Mens/mensaction'
import { Mensdropdown } from '../../component/Mensdropdown'
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

    let handlegclick=()=>{
        setGclick(!gclick)
    }
    let handlecondclick=()=>{
        setCondclick(!condclick)
    }
    let handlecatclick=()=>{
        setCatclick(!catclick)
    }
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
                    <div style={{border:"1px solid red",display:"flex",justifyContent:"felx-start"}}onClick={handlegclick}>Gender:Men </div>
                    { gclick && (<div style={{backgroundColor:"white",width:"15%",zIndex:"1",position:"absolute"}}>
                                { gender.map((el)=>(
                                        <div  style={{textAlign:"start"}}>{el}</div>
                                ))}
                                </div>)
                    }
                   
                    <div style={{border:"1px solid red",display:"flex",justifyContent:"felx-start"}} onClick={handlecondclick}>Condition:New</div>
                    { condclick && (<div  style={{backgroundColor:"white",width:"15%",zIndex:"1",position:"absolute"}}>
                                    { condition.map((el)=>(
                                        <div  style={{textAlign:"start"}}>{el}</div>
                                    ))}
                                    </div>)
                    }
                    
                    <div style={{border:"1px solid red",display:"flex",justifyContent:"felx-start"}} onClick={handlecatclick}>Category:Clothing</div>
                    { catclick && ( <div  style={{backgroundColor:"white",width:"15%",zIndex:"1",position:"absolute"}}>
                                    <Mensdropdown dropcontent={catdata}/>
                                    </div>)
                    }
                    <div  style={{border:"1px solid red"}}>Save My Search</div>
                    
                    <div style={{border:"1px solid red"}}>
                        <div>Share my search</div>
                        <div>My saved Searches</div>
                    </div>
                    <div onClick={categorydrop}>CATEGORY</div>
                        {categories &&<Mensdropdown dropcontent={catdata}/>}
                   
                    <div>DESIGNER</div>

                    <div>SIZE</div>

                    <div>COLOR</div>

                    <div>PRIZE RANGE</div>

                    <div>ON SALE</div>

                    <div>STORE</div>

                    <div>KEYWORD</div>
                    
                
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
