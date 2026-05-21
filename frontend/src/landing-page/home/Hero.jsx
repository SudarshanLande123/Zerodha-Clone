import React from 'react';
// import {Link} from "react-router-dom";
function Hero() {
    return ( 
        <div className='container p-5'>
            <div className='row text-center'>
                <img src="Media/Images/homeHero.png" alt="hero image" className='m-5'/>
                <h1 className='mt-5'>Invest in Everything</h1>
                <p>Online Platform to Invest in Stocks, derivatives, mutual funds.</p>
                {/* <Link  to="signup" className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%", margin:"0 auto"}}>Signup Now</Link> */}
                <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%", margin:"0 auto",color:"white"}}> <a href="/signup" style={{color:"white", textDecoration:"none"}}>Sign up</a></button>
            </div>
            
            
        </div>
     );
}

export default Hero;