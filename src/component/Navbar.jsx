import React, { useEffect, useState } from "react";
import utility from "../styles.module/utility.module.css";
import style from "../styles.module/Navbar.module.css";
import cx from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { getnavdataapi } from "../store/Navbar/nav.action";
import Navdropdown from "./Navdropdown";
import { Link, useNavigate } from "react-router-dom";

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
const navigate = useNavigate()

  // navbar api fetch here
  const dispatch = useDispatch();
  const {
    loading,
    error,
    navdata: data,
  } = useSelector((state) => state.navbar);
  useEffect(() => {
    dispatch(getnavdataapi());
  }, []);

  // mousehover event on subcategory
  const [selected, setselected] = useState([]);

  const someonehoverme = (e) => {
    const name = e.target.innerHTML;
    const item = data.find(isfind);

    function isfind(i) {
      if (i.categoryname === name.trim()) {
        setselected(i);
        // console.log(i)
      }

      // console.log(selected)
    }
  };
  // ends here

  return (
    <div>
      {/* <div ><NavTopbar /></div> */}
      <div className={utility.containerfulid}>
        <div className={cx(utility.container)}>
          <div className={style.navbar}>
            <div id={style.leftdiv}>
              
              <img
                className={utility.cursurhover}
                id={style.logo}
                src="https://cdn.modesens.com/static/img/20190228newlogo-black.svg"
                alt=""  
                onClick={()=> navigate('/')}
                />
                

              <div className={cx(utility.flex)}>
                {/* {data.map(
                  (
                    Categ,
                    index // console.log(Categ.sub.categoryname)
                  ) => (
                    <div
                      key={index}
                      name={Categ.categoryname}
                      className={cx(style.subcateg, utility.cursurhover)}
                      onMouseOver={someonehoverme}
                    >
                      {" "}
                      {Categ.categoryname}{" "}
                    </div>
                  )
                )} */}

                <div
                  onMouseOver={someonehoverme}
                  name={"WOMEN"}
                  className={cx(style.subcateg, utility.cursurhover)}
                >
                  WOMEN
                </div>
                <div
                  onMouseOver={someonehoverme}
                  name={"MEN"}
                  className={cx(style.subcateg, utility.cursurhover)}
                >
                  <Link to='/shop-men-clothing'>
                  MEN
                  </Link>
                </div>
                <div
                  onMouseOver={someonehoverme}
                  name={"BEAUTY"}
                  className={cx(style.subcateg, utility.cursurhover)}
                >
                  BEAUTY
                </div>
                <div
                  onMouseOver={someonehoverme}
                  name={"KIDS"}
                  className={cx(style.subcateg, utility.cursurhover)}
                >
                  KIDS
                </div>
                <div
                  onMouseOver={someonehoverme}
                  name={"HOME"}
                  className={cx(style.subcateg, utility.cursurhover)}
                >
                  HOME
                </div>
                <div
                  onMouseOver={someonehoverme}
                  name={"OFFERS"}
                  className={cx(style.subcateg, utility.cursurhover)}
                >
                  <Link to='/offers'>
                  OFFERS
                  </Link>
                </div>
                <div
                  onMouseOver={someonehoverme}
                  name={"DESIGNERS"}
                  className={cx(style.subcateg, utility.cursurhover)}
                >
                  DESIGNERS
                </div>
                <div
                  onMouseOver={someonehoverme}
                  name={"COMMUNITY"}
                  className={cx(style.subcateg, utility.cursurhover)}
                >
                  <Link to="/community">
                  COMMUNITY
                  </Link>
                </div>
                <div
                  onMouseOver={someonehoverme}
                  name={"WHY"}
                  className={cx(style.subcateg, utility.cursurhover)}
                >
                  WHY MODESENS
                </div>
              </div>
            </div>

            {/* login userid countary starts here */}
            <div id={style.rightdiv}>
              flag
              {/* having a seperate component here */}
              <img
                className={cx(style.rightsubcateg, utility.cursurhover)}
                src="https://cdn.modesens.com/static/img/20200612shopping_bag2.svg"
                alt=""
              />
              <img
                className={cx(style.rightsubcateg, utility.cursurhover)}
                src="https://cdn.modesens.com/static/img/20200612account_b2.svg"
                alt=""
              />
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "2px",
                }}
                className={utility.cursurhover}
              >
                <img
                  src="https://cdn.modesens.com/static/img/20200612search_img1.svg"
                  alt=""
                />

                <span
                  style={{
                    marginLeft: "5px",
                    fontWeight: 500,
                    letterSpacing: 0.2,
                  }}
                >
                  {" "}
                  SEARCH
                </span>
              </span>
            </div>
          </div>

          <Navdropdown props={selected} disi={true} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
