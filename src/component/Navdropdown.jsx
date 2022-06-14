import React, { useEffect, useState } from "react";
import utility from "../styles.module/utility.module.css";
import style from "../styles.module/Navbar.module.css";
import cx from "classnames";

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

  return dispaly ? (
    <div></div>
  ) : (
    <div className={utility.containerfulid}>
      <div className={utility.container}>
        <div
          className={cx(style.dropdown, utility.cursurhover)}
          onMouseLeave={handleleave}
        >
          {data}
        </div>
      </div>
    </div>
  );
};

export default Navdropdown;
