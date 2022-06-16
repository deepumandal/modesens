import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import style from '../styles.module/Navbar.module.css'
import { cx } from "classnames";

const SpecialOff = () => {
  //  className={cx(owl-theme , style.owl-prev)}
  return (
    <div className="container">
      <OwlCarousel className="owl-theme" items="3"  nav loop>
        <div
          className="item"
          style={{
            // border: "1px solid red",
            display: "flex",
            justifyContent: "center",
            flexDirection : "column",
          }}
        >

          <img className={style.imgspoffers} src="https://modesens.com/banner/11005/getimg/?img=%2Fbanner%2F20220531-modesens-Sale-364x484.jpg" styl alt="" />
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
        </div>
        <div className="item" 
        style={{
            // border: "1px solid red",
            display: "flex",
            justifyContent: "center",
            flexDirection : "column"
          }}
          >

        <img className={style.imgspoffers} src="https://modesens.com/banner/12025/getimg/?img=%2Fbanner%2F20220531-modesens-Farfetch-364x484.jpg" styl alt="" />
          <h3 style={{
            fontFamily: "Suisse Intl",
            color : "#1c1c1c",
            fontSize : "20px",
            fontWeight: 400,
            marginTop : "25px",
            lineHeight : "30px"
            }} >
              Sale is here
            </h3>
          <p style={{
            fontFamily : "Suisse Intl",
            fontSize : "14px",
            lineHeight : "21px",
            color : "#1c1c1c",
            fontWeight : 400
          }} >Enjoy up to 50% off</p>
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
          </div>
        <div className="item" 
        style={{
            // border: "1px solid red",
            display: "flex",
            justifyContent: "center",
            flexDirection : "column"
          }}
          >

        <img className={style.imgspoffers} src="https://modesens.com/banner/12412/getimg/?img=%2Fbanner%2F20220609-modesens-FPillowBags-364x484-F.jpg" styl alt="" />
          <h3 style={{
            fontFamily: "Suisse Intl",
            color : "#1c1c1c",
            fontSize : "20px",
            fontWeight: 400,
            marginTop : "25px",
            lineHeight : "30px"
            }} >
              Relive That Slumber Party Fun 
            </h3>
          <p style={{
            fontFamily : "Suisse Intl",
            fontSize : "14px",
            lineHeight : "21px",
            color : "#1c1c1c",
            fontWeight : 400
          }} > Discover a pillow bag for everyday wear </p>
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
        </div>
        <div className="item" 
        style={{
            // border: "1px solid red",
            display: "flex",
            justifyContent: "center",
            flexDirection : "column"
          }}
          >

        <img className={style.imgspoffers} src="https://modesens.com/banner/12414/getimg/?img=%2Fbanner%2F20220609-modesens-Sheerpants-364x484-Fgai.jpg" styl alt="" />
          <h3 style={{
            fontFamily: "Suisse Intl",
            color : "#1c1c1c",
            fontSize : "20px",
            fontWeight: 400,
            marginTop : "25px",
            lineHeight : "30px"
            }} >
              Delight in Your see-Though-Ness
            </h3>
          <p style={{
            fontFamily : "Suisse Intl",
            fontSize : "14px",
            lineHeight : "21px",
            color : "#1c1c1c",
            fontWeight : 400
          }} >
            Wear transparent pants
          </p>
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
          > Read now </button>
        </div>
        <div className="item" 
        style={{
            // border: "1px solid red",
            display: "flex",
            justifyContent: "center",
            flexDirection : "column"
          }}
          >
            
        <img className={style.imgspoffers} src="https://modesens.com/banner/12441/getimg/?img=%2Fbanner%2F20220610-modesens-blog-364x484-F.jpg" styl alt="" />
          <h3 style={{
            fontFamily: "Suisse Intl",
            color : "#1c1c1c",
            fontSize : "20px",
            fontWeight: 400,
            marginTop : "25px",
            lineHeight : "30px"
            }} >
             Less Seasons and More Sizes
            </h3>
          <p style={{
            fontFamily : "Suisse Intl",
            fontSize : "14px",
            lineHeight : "21px",
            color : "#1c1c1c",
            fontWeight : 400
          }} >
            Blog by SSENSE
          </p>
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
          > READ NOW </button>
        </div>
        <div className="item" 
        style={{
            // border: "1px solid red",
            display: "flex",
            justifyContent: "center",
            flexDirection : "column"
          }}
          >
            
        <img className={style.imgspoffers} src="https://modesens.com/banner/12478/getimg/?img=%2Fbanner%2F20220615-modesens-SummerFashionGuide-364x484.jpg" styl alt="" />
          <h3 style={{
            fontFamily: "Suisse Intl",
            color : "#1c1c1c",
            fontSize : "20px",
            fontWeight: 400,
            marginTop : "25px",
            lineHeight : "30px"
            }} >
              ModeSens FAshion Guide
            </h3>
          <p style={{
            fontFamily : "Suisse Intl",
            fontSize : "14px",
            lineHeight : "21px",
            color : "#1c1c1c",
            fontWeight : 400
          }} >
            2022 Summer trends
          </p>
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
        </div>
        <div className="item" 
        style={{
            // border: "1px solid red",
            display: "flex",
            justifyContent: "center",
            flexDirection : "column"
          }}
          >
            
        <img className={style.imgspoffers} src="https://modesens.com/banner/12487/getimg/?img=%2Fbanner%2F20220615Designer-Collab-modesens364x484-F.jpg" styl alt="" />
          <h3 style={{
            fontFamily: "Suisse Intl",
            color : "#1c1c1c",
            fontSize : "20px",
            fontWeight: 400,
            marginTop : "25px",
            lineHeight : "30px"
            }} >
              Our Kind of Dream Teams
              </h3>
          <p style={{
            fontFamily : "Suisse Intl",
            fontSize : "14px",
            lineHeight : "21px",
            color : "#1c1c1c",
            fontWeight : 400
          }} >
            Collaboration is SO in Fashion
          </p>
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
          > READ NOW </button>
        </div>
      </OwlCarousel>

      <button> More view </button>

    </div>
  );
};

export default SpecialOff;
