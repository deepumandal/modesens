import React from "react";
import { Link } from "react-router-dom";
import style from "../styles.module/Bottom.module.css";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  ModalCloseButton,
  Button,
 
} from '@chakra-ui/react'

const Bottom = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div
      style={{
        backgroundColor: "#f8f7f6",
        width: "1128px",
        margin: "auto",
        height: "800px",
        padding: "30px",
      }}
    >
{/*  update were pending here */}

      <div className={style.parent}>
        <div className={style.childwala}>
          <h1 className={style.h1s}>Download the</h1>
          <h1 className={style.h1s}> ModeSens App</h1>
          <strong className={style.strongs}> A seamless experience that takes your style </strong>
          <strong className={style.strongs}> to the next level</strong>
          <br />
        

          <button className={style.buttons} onClick={onOpen} > DOWNLOAD NOW</button>
          <img
          style={{
            maxWidth: "38%"
          }}
          src="https://cdn.modesens.com/static/img/20220420AppDownloaden.png" alt="" />

{/* model */}

<Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>         
          <ModalCloseButton />
          <ModalBody>
           <div style={{
            // border : "1px solid red",
            display: "flex",
            flexDirection : "column",
            alignItems : "center",
           
           

           }} >
           <div>
              <h1 style={{
                fontFamily: "Suisse Intl",
                fontSize : '24px',
                fontWeight : 800,
                color : "#0000000",
                lineHeight : "36px",
                
              }} >Download The ModeSens App</h1>
              <h3 
              style={{
                fontFamily: "Suisse Intl",
                fontSize : '16px',
                fontWeight : 800,
                color : "#1c1c1c",
                lineHeight : "24px",
                textAlign : "center"
                
              }}
              >Try Silver Premium For 3 Months</h3>
            </div>


            <div style={{
              display  : "flex",
              margin : "40px",
              justifyContent : "space-between"
            }} >
              <img  style={{
                width : "50%",
                height : "auto",
                margin : "5px"
              }}  src="https://cdn.modesens.com/static/img/20190103ios_QR_code.png" alt="" />
              <img  style={{
                width : "50%",
                height : "auto",
                margin : "5px"
              }} src="https://cdn.modesens.com/static/img/20181229android_QR_code_global.png" alt="" />
            </div>
<div style={{
   display  : "flex",
   
   justifyContent : "space-between"
}}>
  <button
  onClick={()=> window.location.href='https://apps.apple.com/app/id976201094'}
  style={{
    margin :"10px",
    backgroundColor : "#c00000",
    padding : "2px 15px",
    width: "150px",
    color : "white",
    borderRadius : "20px",
    cursor : "pointer"
  }} >IOS APP</button>
  <button
  onClick={()=> window.location.href ='https://play.google.com/store/apps/details?id=com.modesens.androidapp'}
  style={{
    margin :"10px",
    backgroundColor : "#c00000",
    padding : "2px 15px",
    width: "150px",
    color : "white",
    borderRadius : "20px",
    cursor : "pointer"
  }} >ANDROID APP</button>
</div>
           </div>



          </ModalBody>




          <ModalFooter>
           
          
          </ModalFooter>
        </ModalContent>
      </Modal>

{/* model */}




        </div>
        <div className={style.childwala}>
          <h1 className={style.h1s}>Install the ModeSens</h1>
          <h1 className={style.h1s}>Browser Extension</h1>
          <strong className={style.strongs}> Get timely, accurate information </strong>
          <strong className={style.strongs}> every timely, you browse. </strong>
          <br />
          <a target='_blank' href='https://chrome.google.com/webstore/detail/modesens-shopping-assista/cmfmhegpbogfmojekmidappigcfbgbcb/'>
          <button className={style.buttons}  > INSTALL NOW</button>
          </a>
          <img 
           style={{
            maxWidth: "74%"
          }} src="https://cdn.modesens.com/static/img/20211109downloadright.png" alt="" />

        </div>
      </div>
    </div>
  );
};

export default Bottom;
