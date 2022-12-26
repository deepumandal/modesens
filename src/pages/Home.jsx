import React from "react";
import Banner from "./Banner";
import HomePartners from "./HomePartners";
import styles from "../styles.module/home.module.css";
import SpecialOff from "./SpecialOff";
import HomeTrending from "./HomeTrending";
import HomeRecentviwe from "./HomeRecentviwe";
import Homecommuniy from "./Homecommuniy";
import Bottom from "./Bottom";
import OwlCarousel from "react-owl-carousel";
import { Heading } from "@chakra-ui/react";

const Home = () => {
  return (
    <div>
      <Banner />
      <br />
      <HomePartners />
      <br />
      <br />
      <br />
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className={styles.lineing}></div>
        </div>

        <div className={styles.centerele}> Special Offer </div>
      </div>
      <br />
      <br />
      <SpecialOff />
      <br />
      <br />
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className={styles.lineing}></div>
        </div>

        <div className={styles.centerele}> Trending Now </div>
      </div>
      <br />
      <br />
      <HomeTrending />
      <br />
      <br />
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className={styles.lineing}></div>
        </div>

        <div className={styles.centerele}> Recently Viewed </div>
      </div>
      <br />
      <br />
      <HomeRecentviwe />
      <br />
      <br />{" "}
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className={styles.lineing}></div>
        </div>

        <div className={styles.centerele}> Community Posts </div>
      </div>
      <br />
      <br />
      <Homecommuniy />
      <br />
      <br />
      <Bottom />
    </div>
  );
};

export default Home;
