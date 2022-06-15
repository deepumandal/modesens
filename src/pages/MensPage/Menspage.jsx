import React from 'react'
import {handlegclick,handlecondclick,handlecatclick,categorydrop, handlequickview} from "./functionformens.js"
import style from '../../styles.module/Menspage.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getcat, getmensAPI, pageaction, sorting } from '../../store/Mens/mensaction'
import { Mensdropdown } from '../../component/Mensdropdown'
import { Product } from '../../component/Product.jsx'
import { Dropfilt } from '../../component/Dropfilt.jsx'
import {RangeSlider,RangeSliderTrack,RangeSliderFilledTrack,RangeSliderThumb,} from '@chakra-ui/react'
export const Menspage = () => {

    let gender=["Women","Men","Kids"]
    let condition=["All","New","Pre-owned"]
    let designers=["NIKE","GUCCI","BALENCIAGA","ALEXANDER MCQUEEN","OFF-WHITE",
                    "VALENTINO","BURBERRY","D&G","VERSACE","GIVENCHY","SAINT LAURENT",
                    "ADIDAS","BOTTEGA VENETA","FENDI","PALM ANGELS","MARNI","MAISON MARGIELA",
                    "TOM FORD","RICK OWENS","THOM BROWNE","MONCLER","BALMAIN","LANVIN","ACNE STUDIOS",
                    "MOSCHINO","TOD'S","RAG & BONE","DIOR","MARSELL","NEIL BARRET","ETRO",
                    "YEEZY","CELINE","MARC JACOBS","MULBERRY","JIMMY CHOO","ROCHAS","CHANEL","KTZ","CASADEI"]
    let size=["US30","US32","US34","US36","US38","US40","US42","US44","US46",
             "US48","US50"]
    let stores=["SSENSE","NET-A-PORTER","Neiman Marcus","Farfetch","Mytheresa","Oscar de la Renta",
                "MATCHESFASHION","Ramy Brook","Shopbop","CETTIRE","Nordstrom","THE OUTNET.COM","Gucci","Prada",
                "INTERMIX","Frontgate","24S","TORY BURCH","MR PORTER","VERSACE","Verishop","AG Jeans",
                "Selfridges","macy's","Childrensalon","Salon","Baltini","MIRTA","COS","Lampoo","Belstaff",
                "ANN TAYLOR","Atterly","Chico's","Cole Haan"] 
    let price=["Free Shipping", "Free Duty"]
    let [gclick,setGclick]=React.useState(false)
    let [condclick,setCondclick]=React.useState(false)
    let [catclick,setCatclick]=React.useState(false)
    let[categories,setCategories]=React.useState(false)
    let[designer,setDesigner]=React.useState(false)
    let [sizedrop,setSizedrop]=React.useState(false)
    let [storedrop,setStoredrop]=React.useState(false)
    let [pricergdrop,setPricergdrop]=React.useState(false)
    let [saledrop,setSaledrop]=React.useState(false)

    const mensdata=useSelector((state)=>state.mens.mdata)
    const catdata=useSelector((state)=>state.mens.catdata)
    const page=useSelector((state)=>state.mens.page)
    const dispatch=useDispatch()
    
    React.useEffect(()=>{
        dispatch(getmensAPI(page))
    },[dispatch,page])


    let categorydrop=()=>{
       if(!categories)
       { dispatch(getcat())
        setCategories(!categories)
       }
       else{
        setCategories(!categories)
       }
       
     }

     let designerdrop=()=>{
        if(!designer)
        { 
         setDesigner(!designer)
        }
        else{
         setDesigner(!designer)
        }
        
      }

      let sizedropdrop=()=>{
        if(!sizedrop)
        { 
         setSizedrop(!sizedrop)
        }
        else{
         setSizedrop(!sizedrop)
        }
        
      }

      let storedropdrop=()=>{
        if(!storedrop)
        { 
         setStoredrop(!storedrop)
        }
        else{
         setStoredrop(!storedrop)
        }
        
      }

      let pricergdropdrop=()=>{
        if(!pricergdrop)
        { 
         setPricergdrop(!pricergdrop)
        }
        else{
         setPricergdrop(!pricergdrop)
        }
        
      }

      let saledropdrop=()=>{
        if(!saledrop)
        { 
         setSaledrop(!saledrop)
        }
        else{
         setSaledrop(!saledrop)
        }
        
      }

      let pagehandle=(num)=>{
        console.log("inpagehandle")
        dispatch(pageaction(num))
      }
      let handleselction=(e)=>{
        dispatch(sorting(e.target.value,page))
      }
  return (
    <div>
        <div className={style.prdesignerdiv}>
           
            <div style={{fontSize:"24px"}}><b>Designer Clothing for men</b></div>
            <p style={{fontSize:"12px",fontWeight:"500"}}>Designer clothing for men with price comparison across 500+ stores in one place. Discover the latest designer clothing for men at ModeSens.</p>
        </div>
        <div style={{display:"flex",marginBottom:"10px"}}>
            <div className={style.prpaginate}>
            <div style={{display: page>1 ? "block":"none"}} onClick={()=>pagehandle(page-1)}className={style.prpageindic}><i class="fa-solid fa-angle-left"></i></div>
                <div onClick={()=>pagehandle(1)}className={style.prpageindic}>1</div>
                <div onClick={()=>pagehandle(2)}className={style.prpageindic}>2</div>
                <div onClick={()=>pagehandle(3)}className={style.prpageindic}>3</div>
                <div onClick={()=>pagehandle(4)}className={style.prpageindic}>4</div>
                <div  style={{textAlign:"center"}}>...</div>
                <div style={{display: page>=4 ? "none":"block"}} onClick={()=>pagehandle(page+1)}className={style.prpageindic}><i class="fa-solid fa-angle-right"></i></div>
            </div>
            <div style={{marginLeft:"22%" }}>
                <select onChange={(e)=>handleselction(e)}className={style.prselect}>
                    <option value="">Best Sellers</option>
                    <option value="">New Arrival</option>
                    <option value="desc">Highest Price</option>
                    <option value="asc">Lowest Price</option>
                    <option value="">New Sale</option>
                    <option value="">Largest Discount Amount</option>
                    <option value="">Largest Discount Percentage</option>
                </select>
            </div>
            
        </div>
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
                        {categories  &&  <div style={{overflow:"hidden"}}className={style.prdesignerdropdown}>
                                        { catdata?.map((el)=>(
                                          <div style={{display:"flex",justifyContent:"space-between",fontSize:"12px",marginBottom:"15px"}}>
                                          <div style={{width:"80%",color:"#979cb5"}}>{el.name}</div>
                                          </div>
                                          ))
                                        }  
                                        
                                      </div>} 
                    </div>
       
       
   
                    
                        
                    
                        <div onClick={designerdrop}>DESIGNER</div>
                        {designer &&<div>
                                    <div style={{display:"flex",justifyContent:"space-around"}}>
                                    <input style={{width:"80%"}} placeholder='Search designers'></input>
                                    <i class="fa-solid fa-magnifying-glass"> </i>
                                    </div>
                                    <hr style={{color:"black"}}></hr>
                                    </div>}
                        { designer &&<Dropfilt dropcontent={designers}/>
                        }

                        <div onClick={sizedropdrop}>SIZE</div>
                        {sizedrop && <div>
                                    <div style={{display:"flex",justifyContent:"space-around",fontSize:"15px",color:"#979cb5"}}>
                                        <div style={{width:"80%"}} >My Sizes</div>
                                        <div>Edit</div>
                                    </div>
                                    <hr style={{color:"black"}}></hr>
                                    </div>
                        
                        }
                        {sizedrop &&<Dropfilt dropcontent={size}/>}

                        <div>COLOR</div>

                        <div onClick={pricergdropdrop}>PRIZE RANGE</div>
                        {pricergdrop &&  <RangeSlider    aria-label={["min", "max"]} min={72} max={2780} defaultValue={[10, 30]} onChangeEnd={(val) => console.log(val)}>
                                            <RangeSliderTrack>
                                            <RangeSliderFilledTrack />
                                            </RangeSliderTrack>
                                            <RangeSliderThumb index={0} />
                                            <RangeSliderThumb index={1} />
                                         </RangeSlider>
                        }
                        {pricergdrop  && price.map((el)=>(
                                        <div style={{display:"flex",justifyContent:"space-between"}}>
                                            <input style={{width:"20px",height:"20px"}} type="checkbox"></input>
                                            <div style={{width:"80%",color:"#979cb5"}}>{el}</div>
                                        </div>))}
        
                                            

                        <div onClick={saledropdrop}>ON SALE</div>
                        {saledrop &&  <RangeSlider    aria-label={["min", "max"]} min={72} max={2780} defaultValue={[10, 30]} onChangeEnd={(val) => console.log(val)}>
                                            <RangeSliderTrack>
                                            <RangeSliderFilledTrack />
                                            </RangeSliderTrack>
                                            <RangeSliderThumb index={0} />
                                            <RangeSliderThumb index={1} />
                                         </RangeSlider>
                        }


                        <div onClick={storedropdrop}>STORE</div>
                        {storedrop &&<div>
                                    <div style={{display:"flex",justifyContent:"space-around"}}>
                                    <input style={{width:"80%"}} placeholder='Search Stores'></input>
                                    <i class="fa-solid fa-magnifying-glass"> </i>
                                    </div>
                                    <hr style={{color:"black"}}></hr>
                                    </div>}
                        {storedrop &&<Dropfilt dropcontent={stores}/>}



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
