import React, { useEffect, useState } from 'react'

import './nav.css'

function Nav() {


          const [show,setShow]=useState(false)

          useEffect(()=>{
                    window.addEventListener('scroll',()=>{
                              if(window.scrollY>600){
                                        setShow(true);
                              }else{
                                        setShow(false);
                              }
                    })
          })
          console.log(show);




  return (
    <div className={`${show && 'nav-black'} nav`}>
          <img  width={'150px'} src="https://pngshare.com/wp-content/uploads/2021/06/Netflix-Logo-Transparent-PNG-4-1024x317.png" alt="" />
    </div>
  )
}

export default Nav