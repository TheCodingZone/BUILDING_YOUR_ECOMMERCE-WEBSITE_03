import React from 'react'
import './CartItems.css'

export default function CartItems({ cart }) {
    
  return (
    <div >
     <h2 className='heading'>ADDED ITEMS</h2>
     <div className='CartContainer'>
     {
     cart.map((item) => (
    
    
      
    <div key={item.title} className='container'>
       
    <span className='title'>{item.title}</span>
    <br />
   
   
      <img src={item.imageUrl} alt={item.title} className='img'/>
      <span className='price'>Price:-{item.price}</span>
      <button>-</button>
    <span className='quantity'>Quantity:-{item.quantity}</span>
      <button>+</button>
    
  </div>
   ))}
   <div className="second">
   <div>Total Amount:-Rs</div>
  <button className='btn btn-danger'>CONFIRM ORDER</button>
   </div>
  
     </div>
    
  </div>
  )
}