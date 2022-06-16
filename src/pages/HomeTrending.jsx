import React, { useEffect, useState } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import style from '../styles.module/NavbarTrending.module.css'
import axios from 'axios';


const HomeTrending = () => {
const [data, setData] = useState([])
const [render, setrender] = useState(true)

function fetchdata(){
  //   axios
  // .get("http://localhost:8080/Trending")
  // .then((r)=> {setData(r.data)})
  // .catch(err=>console.log("something wents wrong"))
 
}

setTimeout(()=>{
  setrender(null)
},50)

useEffect(() => {
  fetch("http://localhost:8080/Trending")
  .then((r)=>r.json())
  .then((e)=> setData(e))


}, [render])



  return (
    
    <div className="container">
      <OwlCarousel className="owl-theme" items="4" nav loop>
{ data.map((e)=>(
    <div key={e.id} className="item"
    style={{
      // border: "1px solid red",
      
      boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
      display: "flex",
      justifyContent: "center",
      flexDirection : "column",
      margin: "10px"
    }}>
<img className={style.imgspoffers} src={e.img}  alt="" />
          <div className={style.name}> {e.name} </div>
          <div className={style.about}> {e.about} </div>
          <div className={style.PriceRange}> {e.PriceRange} </div>
          <div className={style.store}> {e.store} </div>
    </div>
))}


        {/* <div
          className="item"
          style={{
            border: "1px solid red",
            display: "flex",
            justifyContent: "center",
            flexDirection : "column",
          }}
        >

          <img className={style.imgspoffers} src="https://modesens.com/banner/11005/getimg/?img=%2Fbanner%2F20220531-modesens-Sale-364x484.jpg"  alt="" />
          <h3 style={{
            fontFamily: "Suisse Intl",
            color : "#1c1c1c",
            fontSize : "20px",
            fontWeight: 400,
            marginTop : "25px",
            lineHeight : "30px"
            }} >
              New to Sale
            </h3>
          <p style={{
            fontFamily : "Suisse Intl",
            fontSize : "14px",
            lineHeight : "21px",
            color : "#1c1c1c",
            fontWeight : 400
          }} >Fresh cut</p>
          <button 
          style={{
            fontFamily : "Susse Intl",
            fontWeight : 400,
            fontSize : "14px",
            lineHeight : "14px",
            border : "1px solid #1c1c1c",
            color : "#1c1c1c",
            width : "fitcontent",
            margin : "auto",
            marginTop : "25px",
            padding : "10px 20px 11px 20px"
            
          }}
          > SHOP NOW </button>
        </div> */}
        
      </OwlCarousel>

      <button> More view </button>
    </div>
  )
}

export default HomeTrending