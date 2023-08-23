import React from 'react'
import './MusicItems.css'
import { useState } from 'react';
import CartItems from './CART/CartItems';


export default function MusicItems({ item , addToCart }) {
  const [cart, setCart] = useState([]);
 
    const productsArr = [

        {
        
        title: 'Colors',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        
        },
        
        {
        
        title: 'Black and white Colors',
        
        price: 50,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        
        },
        
        {
        
        title: 'Yellow and Black Colors',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        
        },
        
        {
        
        title: 'Blue Color',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        
        }
        
        ]
    //  const{title,price,imageUrl} =item;
    // const addToCart=(item)=>{
    //  cart.push(item);
    //  console.log(cart);
      
    //  }
        
        
  return (
    <div className='itemContainer'>
   
      {productsArr.map((item)=>(
       <div className='result'>
       <h4>ALBUM</h4>
       <div className='title'>{item.title}</div>
   <img src={item.imageUrl} alt="" srcset="" />
   
   <div className='price'><b>₹{item.price}</b></div>
   <button type="button" class="btn btn-outline-primary" className='button' onClick={()=>addToCart(item)}><b>ADD TO CART</b></button>
   </div>
      ))}
      <CartItems cart={cart}/>
    </div>
  )
}
