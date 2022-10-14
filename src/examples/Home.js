import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const Home = () => {

  const [openLoginModal, setLoginModal] = useState(false);
  const [openRegisterModal, setRegisterModal] = useState(false);

  return ( 
    <>
      <div className="container">
        <div className="banner-text">
          <h1>WELCOME TO THE CLYDE CHILDRENS HOSPITAL</h1>
          <p>LOGIN OR REGISTER TO ENTER THE HOSPITAL PORTAL</p>
        </div>
        <div className="btns">
          <button className="btn login-btn" onClick={() => {setLoginModal(true)}}>Login</button>
          <button className="btn signup-btn" onClick={() => {setRegisterModal(true)}}>Register</button>
        </div>
        {/* Signup container */}
        {/* Register container */}

        {/* Login container */}
        {openLoginModal && <Login/>}
        {openRegisterModal && <Register/>}
        </div>
    </>
   );
}
 
export default Home;