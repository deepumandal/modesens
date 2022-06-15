import React, { useEffect, useState } from "react";
import utility from "../styles.module/utility.module.css";
import style from "../styles.module/Navbar.module.css";
import cx from "classnames";
import { useSelector } from "react-redux";

const Navdropdown = (props) => {
  const [data, setData] = useState("");

  let selected = props.props;
  const [dispaly, setDispaly] = useState(false);

  //   handleleave
  const handleleave = (e) => {
    // console.log(e.type)
    setDispaly(true);
  };
  useEffect(() => {
    setData(selected.categoryname);
    setDispaly(!props.disi);
  }, [props]);


//  useselector data comes here
//  filtering part here
const {navdata}= useSelector((state)=>state.navbar)
console.log(navdata);


  return dispaly ? (
    <div></div>
  ) : (
    <div className={utility.containerfulid} style={{zIndex:10}}>
      <div className={utility.container}>
        <div
          className={cx(style.dropdown, utility.cursurhover)}
          onMouseLeave={handleleave}
        >
          {/* use bootstrap utilities */}
          {data}
        </div>
      </div>
    </div>
  );
};

export default Navdropdown;
