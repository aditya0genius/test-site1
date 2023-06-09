import React from 'react'
import {Link} from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
  duration:2000
});

const Landingscreen = () => {
  return (
    <>
    
    <div className='landing'>
      
      <img src="https://storage.googleapis.com/my-venue/banner%20images/party_banner.jpg" alt='Banner-Element' />
        <div className="banner col-md-12 text-center">
        
      
        
        <h2 data-aos='zoom-in' style={{color:'white',fontSize:'100px'}}>My Venue</h2>
        <h1 data-aos='zoom-out' style={{color:'white'}}>"Your Personal Party Planner!"</h1>
        

        <Link to='/services'>
            <button className='btn landingbtn' style={{color:'black'}}>Plan My Party</button>
        </Link>
        </div>
    </div></>
    
  );
}

export default Landingscreen;