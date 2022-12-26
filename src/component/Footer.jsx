import {
  GridItem,
  HStack,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import style from "../styles.module/Footer.module.css";
const Footer = () => {
  return (
    <div>
      <div>
        <br />
        <br />
        <hr
          style={{
            border: "1px solid #cccccc",
          }}
        />

        <SimpleGrid


justifyContent={"center"}
maxW={"1400px"}
w={{
  base: "100%",
  md: "100%",
  lg: "1000px",
  xl: "1200px",
  "2xl": "1400px",
}}
margin={"auto"}
gap={4}
p={6}
          columns={{
            base: 2,
            sm: 3,
            md: 5,
          }}
        >
          <GridItem
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <p className={style.footerheading}>CUSTOMER CARE</p>
            <ul className={style.listing}>
              <li>Shopper Protection</li>
              <li>Loyality Program</li>
              <li>Help Center</li>
              <li>Size Guides</li>
              <li>Contact us / Feedback</li>
              <li>Shipping / Returns</li>
            </ul>
          </GridItem>
          <GridItem
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <p className={style.footerheading}>INFORMATION</p>
            <ul className={style.listing}>
              <li>About Us</li>
              <li>Influencer Program</li>
              <li>Partner Stores</li>
              <li>Sitemap</li>
            </ul>
          </GridItem>
          <GridItem
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <p className={style.footerheading}>Legal</p>
            <ul className={style.listing}>
              <li>Terms Of Use</li>
              <li>Disclosure</li>
              <li>Privacy Policy</li>
              <li>Community Guidelines</li>
            </ul>
          </GridItem>
          <GridItem
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <p className={style.footerheading}> CONNECT WITH US</p>
            <ul className={style.listing}>
              <li className={style.specialicon}>
                <img
                  className={style.icon}
                  src="https://modesens.com/static/img/20181127add_app.svg"
                  alt=""
                />
                ModeSens App <br /> for and <br /> Android{" "}
              </li>
              <li className={style.specialicon}>
                <img
                  className={style.icon}
                  src="https://modesens.com/static/img/20181127add_browse.svg"
                  alt=""
                />
                Add to Browser
              </li>
            </ul>
          </GridItem>
          <GridItem
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div className={style.newsletter}>
              <p className={style.NEWSLETTER}>NEWSLETTER SIGN UP</p>
              <input
                type="email"
                placeholder="Email Address"
                className={style.emailbox}
              />

              <br />
              <hr />
              <div className={style.radios}>
                <div className={style.radioicon}>
                  <img
                    src="https://modesens.com/static/img/checked.svg"
                    alt=""
                  />
                  <span>Women's</span>
                </div>
                <div className={style.radioicon}>
                  {" "}
                  <img
                    src="https://modesens.com/static/img/unchecked.svg"
                    alt=""
                  />{" "}
                  <span>Men's</span>
                </div>
              </div>
              <button type="submit" className={style.submitbtn}>
                SUBMIT
              </button>
            </div>
          </GridItem>
        </SimpleGrid>
      </div>
      <hr
        style={{
          border: "1px solid #cccccc",
        }}
      />

      <HStack
        justifyContent={"space-between"}
        maxW={"1400px"}
        w={{
          base: "100%",
          md: "100%",
          lg: "1000px",
          xl: "1200px",
          "2xl": "1400px",
        }}
        margin={"auto"}
        gap={4}
        p={6}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            style={{
              width: "40px",
              height: "auto",
              marginRight: "9px",
            }}
            src="https://cdn.modesens.com/static/img/20180905footer_logo.svg"
            alt=""
          />
          <span>
            {" "}
            &#169;{" "}
            <span
              style={{
                fontSize: "12px",
                fontWeight: 700,
                color: "#1c1c1c",
                cursor: "pointer",
              }}
            >
              2022, Modesens Inc
            </span>{" "}
          </span>
        </div>
        <div
          style={{
            // border: "1px solid red",
            padding: "9px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <img
            className={style.socialmedia}
            src="https://cdn.modesens.com/static/img/20181008footer-pit.svg"
            alt=""
          />
          <img
            className={style.socialmedia}
            src="https://cdn.modesens.com/static/img/20181008footer-tt.svg"
            alt=""
          />
          <img
            className={style.socialmedia1}
            src="https://cdn.modesens.com/static/img/footer-p.svg"
            alt=""
          />
          <img
            className={style.socialmedia1}
            src="https://cdn.modesens.com/static/img/footer-fb.svg"
            alt=""
          />
          <img
            className={style.socialmedia1}
            src="https://cdn.modesens.com/static/img/footer-wb.svg"
            alt=""
          />
          <img
            className={style.socialmedia1}
            src="https://cdn.modesens.com/static/img/footer-wx.svg"
            alt=""
          />
        </div>
      </HStack>
    </div>
  );
};

export default Footer;
