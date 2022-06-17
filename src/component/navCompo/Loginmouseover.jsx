import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import style from "./Loginmouseover.module.css";

import {

  useDisclosure
} from '@chakra-ui/react'

const Loginmouseover = (props) => {
  const setLoginmouse = props.props.setLoginmouse;
  console.log(props);


  const { err, isAuth} = useSelector((state)=>state.auth)
const {onClose } = useDisclosure()

  useEffect(() => {
    
  if(isAuth){
    onClose()
  }
   
  }, [isAuth])
  
  

  return (
    <div
      className={style.main}
      onMouseLeave={() => setLoginmouse(false)}
    >
      {
        !isAuth && <div className={style.dynamic}>
        
        <div>
        <img
          style={{
            height: "auto",
            width: "30px",
          }}
          src="https://cdn.modesens.com/static/img/20180905footer_logo.svg"
          alt=""
        />
      </div>     
    
        <div>
          <div>
            <p style={{
                fontSize : "12px",
                lineHeight : "18px",
                color : "#1c1c1c",
                margin :" 2px"
            }}> Earn points</p>{" "}
          </div>
          <div 
          style={{
            fontSize : "12px",
            lineHeight : "18px",
            color : "red",
            margin :" 2px",
            textAlign : "left"
        }}
          >signup to unlock all benefits</div>
        </div>
      </div>
      }
      <div className={style.My}>
        <p>My Likes</p>
        <p>My Alerts</p>
        <p>My Recently Viewed</p>
      </div>

      <hr
        style={{
          marginTop: "5px",
          marginBottom: "5px",
        }}
      />

      <div className={style.My}>
        <p>My Closet</p>
        <p>My Orders</p>
        <p>My Save Searches</p>
        <p>My Loyality</p>
        <p>My Messages</p>
        <p>Invite Friends</p>
        <p>Settings</p>
      </div>

      <hr
        style={{
          marginTop: "5px",
          marginBottom: "5px",
        }}
      />

      <p onClick={props.props.onOpen}>
        {
          isAuth ? "Sign out" : "Log In"
        }
        
        </p>
    </div>
  );
};

export default Loginmouseover;
