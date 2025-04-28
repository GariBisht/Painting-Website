//import React from 'react'
import React, { useState, useEffect, useRef } from 'react'
import Confetti from "react-confetti";
//  <canvas width="1050" height="117" style="z-index: 2; position: absolute; pointer-events: none; inset: 0px;"/>
//import "./App.css";

//use of use effect and useRef
function Header() {

  const inputRef = useRef(null) // create a valriable by calling useRef

  useEffect(() => {  // Focus the input element
    setTimeout(() => {

      inputRef.current.focus() //access the input element
    }, 10000);
  }, [])

  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const [show, setShow] = useState(false);
  const confettiRef = useRef(null);

  useEffect(() => {
    setHeight(confettiRef.current.clientHeight);
    setWidth(confettiRef.current.clientWidth);
  }, [])

  const handleShow = toggle => {
    setShow(toggle);
  }

  return (
    <div>
      <header class="header">
        {/* <canvas width="1050" height="117" style="z-index: 2; position: absolute; pointer-events: none; inset: 0px;"></canvas>  */}
        <a href="#" class="logo">
          <img src="images/Logo.png" alt="Paint With Me" />
        </a>
        <div style={{width:'30%'}}>

        <Confetti
        style={{position:'unset'}}
  recycle ={show}
  numberOfPieces={300}
  width = {900}
  height ={110}
  />
        </div>

        <nav class="navbar">
          <div className="App" >
            <div onMouseEnter={() => handleShow(true)}
              onMouseLeave={() => handleShow(false)}
              className="confetti-wrap"

              ref={confettiRef}>


              <a href="#home">Home</a>
              <a href="#designs">New Designs</a>
              <a href="#home">Brushes</a>
              {/* <a href="#team">Team</a> */}
              <a href="#blogs">Blogs</a>
              <a href="#contact">Contact</a>

            </div>







            {/*<Confetti
  recycle ={show}
  numberOfPieces={200}
  width = {width}
  height ={height}
  />
</div>
</div> 
</nav> */}

            {/*<div class="icons">
    <div class="fas fa-search" id="search-btn"></div>
    <div class="fas fa-bars" id="menu-btn"></div>
</div> */}

            {/*<div class="box-container"> 
            <div class="search-form">
              <div class="icons">
                <div class="fas fa-search" id="search-btn"></div>
<div class="fas fa-bars" id="menu-btn"></div> */}








                {/*<input type="search" id="search-box" placeholder="search here..."/>
*/}

                <div style={{ padding: '10px' }}>
                <div class="search-form">
              <div class="icons">
                <div class="fas fa-search" id="search-btn"></div>
                <div class="fas fa-bars" id="menu-btn"></div>


                  <input className={'form-control'} ref={inputRef} type='text' />
                  {/*<h3>Search</h3> */}
                  {console.log(inputRef)}
                </div>
              </div>
              {/*<Confetti
  recycle ={show}
  numberOfPieces={200}
  width = {width}
  height ={height}
/> */}
            </div>
          </div>
        </nav>


      </header>
    </div>
  )
}

export default Header
