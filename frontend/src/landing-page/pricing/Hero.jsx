import React from 'react';

function Hero() {
    return (
        <>
            <div className="container">

                <div className="row p-5 mt-5 text-center border-bottom">
                    <h3 className='mb-3'>Pricing</h3>

                    <p className='text-muted'>
                        Free equity investments and flat
                        <i className="fa-solid fa-indian-rupee-sign"></i>
                        20 intraday and F&O trades
                    </p>
                </div>

                <div className="row text-center mt-5 text-center">

                    <div className="col-4">
                        <img
                            src="Media/Images/pricing0.svg"
                            alt=""
                            className="img-fluid"
                        />

                        <h3>Free equity delivery</h3>

                        <p>
                            All equity delivery investments (NSE, BSE),
                            are absolutely free — ₹ 0 brokerage.
                        </p>
                    </div>

                    <div className="col-4">
                        <img
                            src="Media/Images/intradayTrades.svg"
                            alt=""
                            className="img-fluid"
                        />

                        <h3>Intraday and F&O trades</h3>

                        <p>
                            Flat Rs. 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades.
                        </p>
                    </div>

                    <div className="col-4">
                        <img
                            src="Media/Images/pricing0.svg"
                            alt=""
                            className="img-fluid"
                        />

                        <h3>Free direct MF</h3>

                        <p>
                            All direct mutual fund investments
                            are absolutely free.
                        </p>
                    </div>

                </div>

            </div>
        </>
    );
}

export default Hero;