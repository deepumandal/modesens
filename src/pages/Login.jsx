import React,{useState} from 'react'
import './login.css'
import {useDispatch} from 'react-redux'
import { SignupApi } from '../auth/auth.actios'

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,Button
} from '@chakra-ui/react'

 


const Login = () => {


  const { isOpen, onOpen, onClose } = useDisclosure()



  const [toogle, settoogle] = useState(false);
  const [logindata, setlogindata] = useState({});
  const dispatch=useDispatch();
  let handleToogle=()=>
  {
    settoogle(toogle? false:true);
  }
  const handlechange=(e)=>
  {
     const {name,value}=e.target;
     setlogindata({
      ...logindata,[name]:value
     })
  }
  
  const handleSignup=(e)=>
  {
    e.preventDefault();
    dispatch(SignupApi(logindata));

  }
  const handleLogin=(e)=>
  {
    e.preventDefault();
    
  }
  return (
    <div>

<Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}  >
        <ModalOverlay />
        <ModalContent maxW="1000px" maxHeight='2000px' textAlign={'center'} >
          <ModalCloseButton />
          <ModalBody >
          <div className='outer-div'>
            <div className='innerone-div' >
                <div className='index-login' >
                <img style={{width:'100%', height:'50px'}} src="https://cdn.modesens.com/static/img/20220413whitelogo-assistant-en.svg" alt="" />
                <p style={{fontSize:"15px"}}><i style={{marginRight:'20px'}} class="fa-solid fa-bag-shopping"></i>COMPARE ACROSS 500+ STORES </p>
                <p style={{fontSize:"15px"}}><i style={{marginRight:'20px'}} class="fa-solid fa-bell" ></i>GET ALERTS ON YOUR ITEMS</p>
                <p style={{fontSize:"15px"}}><i style={{marginRight:'20px'}} class="fa-solid fa-clipboard"></i>SAVE YOUR SEARCHS</p>
                <p style={{fontSize:"15px"}}><i style={{marginRight:'20px'}} class="fa-solid fa-heart"></i>MANAGE YOUR SHOPPONG LIST</p>
                <p style={{fontSize:"15px"}}><i style={{marginRight:'20px'}} class="fa-solid fa-trophy"></i>EARN POINTS</p>
                </div>
            </div>
            <div className='innertwo-div'>
           
                <div className='base-div'>
                  {/* ----------------------------------------------------------------------------- */}
                  <div>
                   { toogle?
                    <div >
                      <div style={{width:'70%',margin:'auto',marginTop:'40px'}}>
                      <p style={{fontSize:'20px'}}>Login into your account</p>
                      <p style={{fontSize:'14px'}}>Compare across 500+ stores to find the best price.</p>
                      </div>
                    <form action="" onSubmit={handleLogin}>
                      <div className='input-part'>
                        <input type="email" placeholder='Email' name='email' onChange={handlechange} />
                        <input type="password" placeholder='Password' name='password' onChange={handlechange}  />
                        <p style={{fontSize:'12px',color:'gray'}}>Forgot Password?</p>
                        <input type="submit" value='LOG IN' style={{backgroundColor:'black',color:'white',fontSize:'15px'}} />
                      </div>
                
                      <div style={{marginTop:'20px',fontSize:'13px',color:'gray'}}>
                      <div style={{float:'left',width:' 44%'}}><hr/></div>
                      <div style={{float:'right',width:' 44%'}}><hr/></div>
                      or
                      </div>
                    </form>
                    </div>

:


                    <div>
                    <div style={{width:'65%',margin:'auto'}}> 
                  <p style={{fontSize:'20px'}}>Create an Account</p>
                  <p style={{fontSize:'14px'}}>Compare across 500+ stores to find the best price.</p>
                  </div>
                <form action="" onSubmit={handleSignup}>
                <div className='input-part'>
                        <input type="email" placeholder='Email' name='email' onChange={handlechange} />
                        <input type="password" placeholder='Password' name='password' onChange={handlechange}/>
                        <div style={{display:'flex'}}>
                        <input type="checkbox" style={{width:'15px',heigth:'15px'}} className='checkbox' name='check'/>
                        <label htmlFor="check">
                        <p style={{fontSize:'12px',marginTop:'12px',marginLeft:'15px'}}>Subscribe to personalized sale updates and offers</p>
                        </label>
                      
                        </div>
                        <input type="submit" value='SignUp' style={{backgroundColor:'black',color:'white'}} />
                </div>
                
                <div style={{marginTop:'20px',fontSize:'13px',color:'gray'}}>
                <div style={{float:'left',width:' 44%'}}><hr/></div>
               <div style={{float:'right',width:' 44%'}}><hr/></div>
               or
                </div>
                </form>
                    </div>}
                  </div>
                  {/* ------------------------------------------------------------------------------ */}
                <div style={{display:"flex",flexDirection:'clounm', justifyContent:'space-around',marginTop:'20px'}}>
                <div><img src="https://modesens.com/static/img/login-icon/20210617google.svg" alt="" /></div>
                <div><img src="https://modesens.com/static/img/login-icon/20210617facebook.svg" alt="" /></div>
                <div><img src="https://modesens.com/static/img/login-icon/20210617apple.svg" alt="" /></div>
                <div><img src="https://modesens.com/static/img/login-icon/20210617wechat.svg" alt="" /></div>
                </div>
                <div onClick={handleToogle}>
                  {toogle?<p className='atag'>Don't have an account? Please sign up.</p>:<p className='atag' >Already have an account? Please sign in.</p>}
                </div>
                
                <div style={{marginTop:'40px',fontSize:'15px',color:'grey'}}>
                  <p>By creating an account, I agree to the <a style={{color:'grey'}} href="">Terms of Use</a> and the <a style={{color:'grey'}} href="">Privacy Policy.</a></p>
                </div> 
                </div>
            </div>
        </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default Login