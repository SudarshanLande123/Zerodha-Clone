import React from 'react';
function Education() {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className="col-6">
                    <img src="Media\Images\education.svg" alt="education" style={{width:"75%"}} />
                </div>
                <div className="col-6">
                    
                        
                            <h1 clasName="fs-2 pb-2">Free and open market education</h1>
                            <p>Varsity, the largest online stock market education book in the world
                            covering everything from the basics to advanced trading</p>
                            <a href="" style={{textDecoration:"none"}}>
                            Varsity <i class="fas fa-long-arrow-right"></i>
                            </a>
                            <p className='pt-5'>
                                TradingQ&A, the most active trading and investment community in
                                India for all your market related queries.
                            </p>

                            <a href="" style={{textDecoration:"none"}}>
                            TradingQ&A <i class="fas fa-long-arrow-right"></i>
                            </a>
                        
                    
                </div>
                
            </div>
        </div>
     );
}

export default Education;