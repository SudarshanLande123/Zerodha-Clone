import React from 'react';
function Hero() {
    return ( 
        <>
            <div className='container mt-5'>
                <div className="row text-center ">
                    <h1 className='fs-1 pb-3'>Technology</h1>
                    <h2 className='fs-3 pb-3 text-muted'>Sleek, modern and intutive trading platforms</h2>
                    <p>Check out our <a href="" className='fw-semibold' style={{textDecoration:"none"}}>investment offerings<i class="fa-solid fa-right-long"></i></a></p>
                </div>
            </div>
        </>
     );
}

export default Hero;