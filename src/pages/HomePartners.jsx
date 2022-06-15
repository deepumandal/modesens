import React from "react";
import Carousel from "react-bootstrap/Carousel";
import cx from "classnames";
import Partners from "../styles.module/HomePartners.module.css";

const HomePartners = () => {
  return (
    <div>
      <h3 style={{
        fontSize : "24px",
        fontWeight :600,
        letterSpacing :  "1px",
        color : "#1c1c1c"
      }}>HomePartners</h3>
      <br />
      <h4 style={{
        fontSize : "20px",
        fontWeight : 400,
        color : "#6c757d"
        
      }}>
        Compare across our 500+ partner stores to find the products you want at the best price.</h4>
      
      <div className="container">
        <img className={Partners.controlleft} src="https://modesens.com/static/img/20180905overlay_left_arrow_b.svg" alt="" />
        <Carousel>
          <Carousel.Item>
            <div className={Partners.boxs}>
              {/* imges here */}
              <img
                className={cx("d-block w-100", Partners.img)}
                src="https://cdn.modesens.com/banner/20211014-24S-logo.png"
                alt="Second slide"
              />
              <img
                className={cx("d-block w-100", Partners.img)}
                src="https://cdn.modesens.com/banner/20211014-BALENCIAGA-logo.png"
                alt="Second slide"
              />
              <img
                className={cx("d-block w-100", Partners.img)}
                src="https://cdn.modesens.com/banner/20211014-BOTTEGA-VENETA-logo.png"
                alt="Second slide"
              />
              <img
                className={cx("d-block w-100", Partners.img)}
                src="https://cdn.modesens.com/banner/20211014-BURBERRY-logo.png"
                alt="Second slide"
              />
              <img
                className={cx("d-block w-100", Partners.img)}
                src="https://cdn.modesens.com/banner/20211014-FARFETCH-logo.png"
                alt="Second slide"
              />
              <img
                className={cx("d-block w-100", Partners.img)}
                src="https://cdn.modesens.com/banner/20211014-FENDI-logo.png"
                alt="Second slide"
              />
              <img
                className={cx("d-block w-100", Partners.img)}
                src="https://cdn.modesens.com/banner/20211014-FWRD-logo.png"
                alt="Second slide"
              />
              <img
                className={cx("d-block w-100", Partners.img)}
                src="https://cdn.modesens.com/banner/20211014-GIVENCHY-logo.png"
                alt="Second slide"
              />
              <img
                className={cx("d-block w-100", Partners.img)}
                src="https://cdn.modesens.com/banner/20211014-GUCCI-logo.png"
                alt="Second slide"
              />
              <img
                className={cx("d-block w-100", Partners.img)}
                src="https://cdn.modesens.com/banner/20211014-FARFETCH-logo.png"
                alt="Second565e"
              />
              <img
                className={cx("d-block w-100", Partners.img)}
                src="https://cdn.modesens.com/banner/20211014-LOEWE-logo.png"
                alt="Second slide"
              />
              <img
                className={cx("d-block w-100", Partners.img)}
                src="https://cdn.modesens.com/banner/20211014-LUISAVIAROMA-logo.png"
                alt="Second slide"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className={Partners.boxs}>

         
          <img
                className={cx("d-block w-100", Partners.img)}
                src="https://cdn.modesens.com/banner/20211014-MATCHESFASHION-logo.png"
                alt="Second slide"
              />
              <img
                className={cx("d-block w-100", Partners.img)}
                src="https://cdn.modesens.com/banner/20211014-MR-PORTER-logo.png"
                alt="Second slide"
              />
              <img
                className={cx("d-block w-100", Partners.img)}
                src="https://cdn.modesens.com/banner/20211014-NET-A-PORTER-logo.png"
                alt="Second slide"
              />
              <img
                className={cx("d-block w-100", Partners.img)}
                src="https://cdn.modesens.com/banner/20211014-NORDSTROM-logo.png"
                alt="Second slide"
              />
              <img
                className={cx("d-block w-100", Partners.img)}
                src="https://cdn.modesens.com/banner/20211014-PRADA-logo.png"
                alt="Second slide"
              />
              <img
                className={cx("d-block w-100", Partners.img)}
                src="https://cdn.modesens.com/banner/20211014-SAINT-LAURENT-logo.png"
                alt="Second slide"
              />
              <img
                className={cx("d-block w-100", Partners.img)}
                src="https://cdn.modesens.com/banner/20211014-SAKS-FIFTH-AVENUE-logo.png"
                alt="Second slide"
              />
              <img
                className={cx("d-block w-100", Partners.img)}
                src="https://cdn.modesens.com/banner/20211014-SHOPBOP-logo.png"
                alt="Second slide"
              />
              <img
                className={cx("d-block w-100", Partners.img)}
                src="https://cdn.modesens.com/banner/20211014-GUCCI-logo.png"
                alt="Second slide"
              />
              <img
                className={cx("d-block w-100", Partners.img)}
                src="https://cdn.modesens.com/banner/20211014-SSENSE-logo.png"
                alt="5"
              />
              <img
                className={cx("d-block w-100", Partners.img)}
                src="https://cdn.modesens.com/banner/20211014-VALENTINO-logo.png"
                alt="Second slide"
              />
              <img
                className={cx("d-block w-100", Partners.img)}
                src="https://cdn.modesens.com/banner/20211014-VERSACE-logo.png"
                alt="Second slide"
              />
               </div>
          </Carousel.Item>
        </Carousel>
        <img className={Partners.controlright} src="https://modesens.com/static/img/20180905overlay_right_arrow_b.svg" alt="" />
       
      </div>
    </div>
  );
};

export default HomePartners;
