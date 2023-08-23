import React from 'react'
import './Home.css'
export default function Home({setHome}) {
  return (
    <div>

    <div className='homeContainer'>
      <h1 className='heading'>THE GENERICS</h1>
      <h4 className='secondHeading'>GET OUR LATEST ALBUM</h4>
      <div className='logoContainer'>
      <i class="fa-solid fa-play" ></i>
      </div>
    </div>
<div>
  <h4 className='heading1'>OUR TOURS</h4>
  
 

<table class="table">
  <thead class="thead-light">
    <tr>
      <th scope="col">Date</th>
      <th scope="col">Country</th>
      <th scope="col">Venue</th>
      <th scope="col">Buy Ticket</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">JUL 16</th>
      <td>DETROIT, MI</td>
      <td>DTE ENERGY MUSIC THEATRE</td>
      <button className='btn btn-primary'>BUY TICKET</button>
    </tr>
    <tr>
      <th scope="row">JUL 19</th>
      <td>TORONTO,ON</td>
      <td>BUDWEISER STAGE</td>
      <button className='btn btn-primary'>BUY TICKET</button>
    </tr>
    <tr>
      <th scope="row">JUL 22</th>
      <td>BRISTOW, VA</td>
      <td>JIGGY LUBE LIVE</td>
      <button className='btn btn-primary'>BUY TICKET</button>
    </tr>
    <tr>
      <th scope="row">JUL 29</th>
      <td>PHOENIX, AZ</td>
      <td>AK-CHIN PAVILION</td>
      <button className='btn btn-primary'>BUY TICKET</button>
    </tr>
    <tr>
      <th scope="row">AUG 2</th>
      <td>LAS VEGAS, NV</td>
      <td>T-MOBILE ARENA</td>
      <button className='btn btn-primary'>BUY TICKET</button>
    </tr>
    <tr>
      <th scope="row">AUG 7</th>
      <td>CONCORD, CA</td>
      <td>CONCORD PAVILION</td>
      <button className='btn btn-primary'>BUY TICKET</button>
    </tr>
  </tbody>
</table>
</div>
      
     
    </div>
  )
}
