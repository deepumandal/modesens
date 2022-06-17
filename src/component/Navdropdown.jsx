import React, { useEffect, useState } from "react";
import utility from "../styles.module/utility.module.css";
import style from "../styles.module/Navbar.module.css";
import cx from "classnames";
import { useSelector } from "react-redux";

const Navdropdown = (props) => {
 
  const [display, setDisplay] = useState(false)





  return display ? (
    <div></div>
  ) : (
    <div className={utility.containerfulid} style={{zIndex:10}}>
      <div className={utility.container}>
        <div
          className={cx(style.dropdown, utility.cursurhover)}
         
        >
    
         {/* {navdata.subcateg.map((e)=>{
          return <p key={e.id}> {e.name} </p>
         })} */}
        </div>
      </div>
    </div>
  );
};

export default Navdropdown;
