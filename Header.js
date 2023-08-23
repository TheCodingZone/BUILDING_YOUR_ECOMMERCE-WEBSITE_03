import React from 'react'
import './Header.css'
import Cart from './Cart'

export default function Header({setHome,setShow , count }) {
  return (
    <div className='header'>
      <span className='title'><b>THE GENERICS</b></span>
      

        <button  className='home' onClick={()=>{
 setHome(true) ;
 
        }
         } ><b>Home</b></button>
        <a href=''className='section'><b>About</b></a>
        <a href=''className='section'><b>Services</b></a>
       
     
      <Cart setShow={setShow} count={count}/>
    </div>
  )
}