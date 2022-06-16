import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const SpecialOff = () => {
  return (
    <div className="container">
      <OwlCarousel className="owl-theme" items="3" autoplay nav loop>
        <div
          className="item"
          style={{
            border: "1px solid red",
            display: "flex",
            justifyContent: "center",
            flexDirection : "column"
          }}
        >

          <img src="https://modesens.com/banner/11005/getimg/?img=%2Fbanner%2F20220531-modesens-Sale-364x484.jpg" alt="" />
          <h3>Sale is here</h3>
          <p>Enjoy up to 50% off</p>
          <button> SHOP NOW </button>
        </div>
        <div className="item" 
        style={{
            border: "1px solid red",
            display: "flex",
            justifyContent: "center",
            flexDirection : "column"
          }}
          >

        <img src="https://modesens.com/banner/12025/getimg/?img=%2Fbanner%2F20220531-modesens-Farfetch-364x484.jpg" alt="" />
          <h3>Sale is here</h3>
          <p>Enjoy up to 50% off</p>
          <button> SHOP NOW </button>
          </div>
        <div className="item" 
        style={{
            border: "1px solid red",
            display: "flex",
            justifyContent: "center",
            flexDirection : "column"
          }}
          >

        <img src="https://modesens.com/banner/12412/getimg/?img=%2Fbanner%2F20220609-modesens-FPillowBags-364x484-F.jpg" alt="" />
          <h3>Sale is here</h3>
          <p>Enjoy up to 50% off</p>
          <button> SHOP NOW </button>
        </div>
        <div className="item" 
        style={{
            border: "1px solid red",
            display: "flex",
            justifyContent: "center",
            flexDirection : "column"
          }}
          >

        <img src="https://modesens.com/banner/12414/getimg/?img=%2Fbanner%2F20220609-modesens-Sheerpants-364x484-Fgai.jpg" alt="" />
          <h3>Sale is here</h3>
          <p>Enjoy up to 50% off</p>
          <button> SHOP NOW </button>
        </div>
        <div className="item" 
        style={{
            border: "1px solid red",
            display: "flex",
            justifyContent: "center",
            flexDirection : "column"
          }}
          >
            
        <img src="https://modesens.com/banner/12441/getimg/?img=%2Fbanner%2F20220610-modesens-blog-364x484-F.jpg" alt="" />
          <h3>Sale is here</h3>
          <p>Enjoy up to 50% off</p>
          <button> SHOP NOW </button>
        </div>
        <div className="item" 
        style={{
            border: "1px solid red",
            display: "flex",
            justifyContent: "center",
            flexDirection : "column"
          }}
          >
            
        <img src="https://modesens.com/banner/12478/getimg/?img=%2Fbanner%2F20220615-modesens-SummerFashionGuide-364x484.jpg" alt="" />
          <h3>Sale is here</h3>
          <p>Enjoy up to 50% off</p>
          <button> SHOP NOW </button>
        </div>
        <div className="item" 
        style={{
            border: "1px solid red",
            display: "flex",
            justifyContent: "center",
            flexDirection : "column"
          }}
          >
            
        <img src="https://modesens.com/banner/12487/getimg/?img=%2Fbanner%2F20220615Designer-Collab-modesens364x484-F.jpg" alt="" />
          <h3>Sale is here</h3>
          <p>Enjoy up to 50% off</p>
          <button> SHOP NOW </button>
        </div>
      </OwlCarousel>
    </div>
  );
};

export default SpecialOff;
