
function Banner() {
  return (
    <div className="container-fluid"> 
    <div className="container" style={{zIndex:10}} >
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="true"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
            style={{width:"100%",zIndex:0}}
              src="https://modesens.com/banner/12451/getimg/?img=%2Fbanner%2F20220613-modesens-MSaintLaurent-1140x400-M.jpg"
              className="d-block w-100"
              alt="..."
            />
            <span style={{
                
                zIndex :1,
              background : "#1c2437",
              color:"white",fontSize:"12px",
              padding:"1px 3px 1px 3px",
              borderRadius: "10px",
              letterSpacing: "0.5px",
              width : "20px",
              position: "relative" ,
              top:"-35px",
              right: "-435px"
            }}>1/5</span>
          </div>
          <div className="carousel-item">
            <img
              src="https://modesens.com/banner/12475/getimg/?img=%2Fbanner%2F20220615-modesens-SSENSE-1140x400-EN.jpg"
              className="d-block w-100"
              alt="..."
            />
            <span style={{
                
                zIndex :1,
              background : "#1c2437",
              color:"white",fontSize:"12px",
              padding:"1px 3px 1px 3px",
              borderRadius: "10px",
              letterSpacing: "0.5px",
              width : "20px",
              position: "relative" ,
              top:"-35px",
              right: "-435px"
            }}>2/5</span>
          </div>
          <div className="carousel-item">
            <img
              src="https://modesens.com/banner/12463/getimg/?img=%2Fbanner%2F20220614-modesens-salesneakers-1140x400-M.jpg"
              className="d-block w-100"
              alt="..."
            />
            <span style={{
                
                zIndex :1,
              background : "#1c2437",
              color:"white",fontSize:"12px",
              padding:"1px 3px 1px 3px",
              borderRadius: "10px",
              letterSpacing: "0.5px",
              width : "20px",
              position: "relative" ,
              top:"-35px",
              right: "-435px"
            }}>3/5</span>
          </div>
          <div className="carousel-item">
            <img
              src="https://modesens.com/banner/12457/getimg/?img=%2Fbanner%2F20220614-modesens-Monnalisa-1140x400-EN.jpg"
              className="d-block w-100"
              alt="..."
            />
            <span style={{
                
                zIndex :1,
              background : "#1c2437",
              color:"white",fontSize:"12px",
              padding:"1px 3px 1px 3px",
              borderRadius: "10px",
              letterSpacing: "0.5px",
              width : "20px",
              position: "relative" ,
              top:"-35px",
              right: "-435px"
            }}>4/5</span>
          </div>
          <div className="carousel-item">
            <img
              src="https://modesens.com/banner/11844/getimg/?img=%2Fbanner%2F20220516-modesens-SS22-SALE-1140x400-EN.jpg"
              className="d-block w-100"
              alt="..."
            />
            <span style={{
                
                zIndex :1,
              background : "#1c2437",
              color:"white",fontSize:"12px",
              padding:"1px 3px 1px 3px",
              borderRadius: "10px",
              letterSpacing: "0.5px",
              width : "20px",
              position: "relative" ,
              top:"-35px",
              right: "-435px"
            }}>5/5</span>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          
            <img style={{
                width:"35px",
                marginLeft:"-166px",
                position:"relative"
            }} src="https://modesens.com/static/img/20180905overlay_left_arrow_b.svg" alt="" />
          
          <span className="visually-hidden"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <img style={{
            width:"35px",
            marginRight:"-166px"
          }} src="https://modesens.com/static/img/20180905overlay_right_arrow_b.svg" alt="" />
          
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>
    </div>

    // <Carousel>
    //   <Carousel.Item interval={500}>
    //     <img
    //       className="d-block w-100"
    //       src="https://modesens.com/banner/12451/getimg/?img=%2Fbanner%2F20220613-modesens-MSaintLaurent-1140x400-M.jpg"
    //       alt="First slide"
    //     />

    //   </Carousel.Item>
    //   <Carousel.Item interval={500}>
    //     <img
    //       className="d-block w-100"
    //       src="https://modesens.com/banner/12475/getimg/?img=%2Fbanner%2F20220615-modesens-SSENSE-1140x400-EN.jpg"
    //       alt="Second slide"
    //     />

    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src="https://modesens.com/banner/12463/getimg/?img=%2Fbanner%2F20220614-modesens-salesneakers-1140x400-M.jpg"
    //       alt="Third slide"
    //     />

    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src="https://modesens.com/banner/12457/getimg/?img=%2Fbanner%2F20220614-modesens-Monnalisa-1140x400-EN.jpg"
    //       alt="Third slide"
    //     />

    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src="https://modesens.com/banner/11844/getimg/?img=%2Fbanner%2F20220516-modesens-SS22-SALE-1140x400-EN.jpg"
    //       alt="Third slide"
    //     />

    //   </Carousel.Item>
    // </Carousel>
  );
}

export default Banner;
