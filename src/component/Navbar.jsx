import React, { useEffect } from "react";
import utility from "../styles.module/utility.module.css";
import style from "../styles.module/Navbar.module.css";
import cx from "classnames";
import { useDispatch , useSelector } from "react-redux";
import { getnavdataapi } from "../store/Navbar/nav.action";

const Navbar = () => {
  // let Navbar = [
  //   "WOMEN",
  //   "MEN",
  //   "BEAUTY",
  //   "KIDS",
  //   "HOME",
  //   "OFFERS",
  //   "DESINERS",
  //   "COMMUNITY",
  //   "WHY MODESENS",
  // ];
// navbar api fetch here
const dispatch = useDispatch()
const {loading,error, navdata : data} = useSelector((state)=> state.navbar)
  useEffect(() => {
    dispatch(
      getnavdataapi()
    )
  }, [])
  


  
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
                {data.map((Categ, index) => (  // console.log(Categ.sub.categoryname)
                  <div key={index} className={cx(style.subcateg, utility.cursurhover) }>
                    {" "}
                    {Categ.sub.categoryname}{" "}
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
