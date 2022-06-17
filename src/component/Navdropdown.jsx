import React, { useEffect, useState } from "react";
import utility from "../styles.module/utility.module.css";
import style from "../styles.module/Navbar.module.css";
import cx from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { getnavdataapi } from "../store/Navbar/nav.action";

const Navdropdown = ({display, setDisplay ,name}) => {
 const {navdata} = useSelector((state)=>state.navbar)
 const dispatch = useDispatch()
 const [mapData, setmapData] = useState([])

//  filteritem

function findTheItem (i){
  if(i.categoryname == name){
    setmapData(null)
    setmapData(i.subcateg)
  }
}

useEffect(() => {
  dispatch(getnavdataapi())
 const items = navdata.find(findTheItem)
}, [name,mapData])


  return !display ? (<div></div>
  ) : 
  (
    <div className={utility.containerfulid} style={{zIndex:10}}>
      <div className={utility.container} >
        <div
          className={cx(style.dropdown, utility.cursurhover)}
          onMouseLeave={()=>setDisplay(false)} 
        >
          <ul className={style.subtparent} >
      {mapData.map(e=>{
        return <li key={e.id} name={e.name} > {e.name} </li>
      })}
      </ul>
        </div>
      </div>
    </div>
  );
};

export default Navdropdown;
