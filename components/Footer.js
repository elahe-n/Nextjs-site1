import React from 'react'
import Image from "next/image";

function Footer() {
  return (
    <footer className='footer'>
      <div>
        <div><b>Email: </b> info@eliweb.me</div> 
        <div><b>Phone Number: </b> 657555555</div>
      </div>
      <small>copyright &copy; 2022. all rights reserved.</small>
      <div className='socail'>
        <a href='https://www.linkedin.com/in/elahe-n-943a2a181/' target='blank'>  
        <Image
          className="socialLogo"
          src="/img/linkedin3.svg"
          alt=""
          width="20"
          height="20"
        />
        </a>
        <a href='https://www.facebook.com/elahe.nourkami'target='blank'>
        <Image
          className="socialLogo"
          src="/img/facebook2.svg"
          alt=""
          width="20"
          height="20"
        />
        </a>      
      </div>
    </footer>
  )
}

export default Footer