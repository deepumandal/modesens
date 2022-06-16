import React from "react";
import Banner from "./Banner";
import HomePartners from "./HomePartners";

import styles from "../styles.module/home.module.css";
import SpecialOff from "./SpecialOff";
import HomeTrending from "./HomeTrending";
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

      <div className={styles.centerele}> Special Offers </div>
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
      {/* <HomeTrending /> */}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Home;
