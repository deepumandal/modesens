import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'
import style from "../styles.module/ProductDisp.module.css"

export const Productdisplay = () => {
    let [wished,setWished]=React.useState(false)
    let handlewishclick=()=>{
        if(wished)
        {
          setWished(wished=false)
        }
        else{
          setWished(wished=true)
        }
        
      }
    let [productdata,setProductdata]=React.useState([])
    const {description}=useParams()
    console.log("prod description",description)
    React.useEffect(()=>{
        axios.get(`http://localhost:8080/Mensdata?description=${description}`)
        .then((resp)=>{
            setProductdata(resp.data)
        })
    },[])
  return (
    <div>
        <div className={style.primginfodiv}>
            <div style={{border:"1px solid red",width:"60%"}}>
                    {
                        productdata.map((el)=>( <div style={{display:"flex"}}>
                                                    <img style={{width:"30%",height:'370px',margin:"auto"}} src={el.imgsrc}></img>
                                                    <div style={{fontSize:"25px"}}>
                                                    <div><i onClick={handlewishclick} style={{color: wished && "red"}} class="fa-regular fa-heart"></i></div>
                                                    <div><i class="fa-regular fa-share-from-square"></i></div>
                                                    </div>
                                                </div>))

                    }
            </div>
            

            <div className={style.prproductinfodiv}>
                    {
                        productdata.map((el)=>(<div>
                                                    <div>{el.brand}</div>
                                                    <div style={{fontSize:"14px"}}>{el.description}</div>
                                                    <div style={{fontSize:"18px"}}>{el.price}</div>
                                                    <div className={style.prdstore}>Buy from Store</div>
                                                    <div style={{fontSize:"14px"}}>Earn upto 1049 points from this purchase</div>
                                                </div>
                                                ))
                    }      
            </div>           
        </div>
        <div style={{display:"flex",width:"80%",margin:"auto",marginTop:"20px"}}>
            <div style={{width:"45%"}}>
                <div style={{textAlign:"start",marginBottom:"20px",fontSize:"30px",fontWeight:"500"}}>Shop With ModeSens Concierge</div>
                <div style={{textAlign:"start",color:"grey",fontWeight:"600"}}>We will fulfill your order by finding the best price available from our partner stores, applying any applicable promotions and providing assistance on tracking, returns or anything else you may need.</div>
            </div>
            <div style={{width:"45%"}}>
                <div style={{display:"flex",gap:"10px",marginTop:"10%",opacity:"20%"}}><div style={{width:"45%",border:"1px solid black",backgroundColor:"black",color:"white"}}>Select Size</div><div style={{width:"45%",border:"1px solid black",backgroundColor:"black",color:"white"}}>Add to bag</div></div>
                <div style={{fontSize:"15px",fontWeight:"500",marginTop:"-5%",zIndex:"2"}}>Available exclusively for Silver and above members</div>
                <div style={{textDecoration:"underline"}}>TRY SILVER</div>
            </div>
        </div>
        <div style={{width:"80%",margin:"auto",marginTop:"30px",marginBottom:"30px"}}>
            <img src={"https://modesens.com/banner/11956/getimg/?img=%2Fbanner%2F20220520-modesens-Sale-1440x250-EN.jpg"}/>
        </div>
        <div style={{textAlign:"start",width:"80%",margin:"auto",marginBottom:"30px",fontSize:"30px",fontWeight:"500"}}>Q & A</div>
        <div className={style.prQandA}>
          
            <input className={style.inp}  placeholder="Have a question about this product? Modsens community is here to help."></input>
            
            <div >
                <div ><i  style={{fontSize:"40px",width:"100%"}}class="fa-regular fa-image"></i></div>
                <div style={{border:"1px solid black",width:"45%"}}><div className={style.prpost}>POST</div></div>
            </div>
        </div>       
    </div>  
       
  
  )
}
