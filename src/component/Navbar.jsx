import React from "react";
import utility from "../styles.module/utility.module.css";
import style from "../styles.module/Navbar.module.css";
import cx from "classnames";

const Navbar = () => {
  let Navbar = [
    "WOMEN",
    "MEN",
    "BEAUTY",
    "KIDS",
    "HOME",
    "OFFERS",
    "DESINERS",
    "COMMUNITY",
    "WHY MODESENS",
  ];
  return (
    <div>
      {/* <div ><NavTopbar /></div> */}
      <div className={utility.containerfulid}>
        <div className={cx(utility.container)}>
          <div className={style.navbar}>
            <div id={style.leftdiv}>
              <img className={utility.cursurhover}
                id={style.logo}
                src="https://cdn.modesens.com/static/img/20190228newlogo-black.svg"
                alt=""
              />

              <div className={cx(utility.flex)}>
                {Navbar.map((subcateg, index) => (
                  <div key={index} className={cx(style.subcateg, utility.cursurhover) }>
                    {" "}
                    {subcateg}{" "}
                  </div>
                ))}
              </div>
            </div>

            {/* login userid countary starts here */}
            <div id={style.rightdiv}>
              flag

              {/* having a seperate component here */}

              <img
               className={cx(style.subcateg, utility.cursurhover) }
                src="https://cdn.modesens.com/static/img/20200612shopping_bag2.svg"
                alt=""
              />
              <img
               className={cx(style.subcateg, utility.cursurhover) }
                src="https://cdn.modesens.com/static/img/20200612account_b2.svg"
                alt=""
              />
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "2px",
                }}
                className={utility.cursurhover}              >
                <img
                  src="https://cdn.modesens.com/static/img/20200612search_img1.svg"
                  alt=""
                />

                <span style={{ marginLeft: "5px" }}> SEARCH</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
