import React from 'react';

function Brokerage() {
    return (
        <>
            <div className="container mt-5 border-top">

                <div className="row mt-5 py-5">

                    <div className="col-lg-8 col-md-12 mb-4 text-center">

                        <h3 className='mb-5'>
                            <a href="" style={{ textDecoration: "none" }}>
                            Brokerage calculator
                            </a>
                        </h3>

                        <ul
                            className="text-muted"
                            style={{ lineHeight: "2.5em" }}
                        >
                            <li>
                                Call & Trade and RMS auto-squareoff:
                                Additional charges of ₹50 + GST per order.
                            </li>

                            <li>
                                Digital contract notes will be sent via e-mail.
                            </li>

                            <li>
                                Physical copies of contract notes, if required,
                                shall be charged ₹20 per contract note.
                                Courier charges apply.
                            </li>

                            <li>
                                For NRI account (non-PIS), 0.5% or ₹100
                                per executed order for equity
                                (whichever is lower).
                            </li>

                            <li>
                                For NRI account (PIS), 0.5% or ₹200
                                per executed order for equity
                                (whichever is lower).
                            </li>

                            <li>
                                If the account is in debit balance,
                                any order placed will be charged ₹40
                                per executed order instead of ₹20
                                per executed order.
                            </li>
                        </ul>

                    </div>

                    <div className="col-lg-4 col-md-12 text-lg-start text-center">

                        <h3 className='mb-5'>
                            <a href="" style={{ textDecoration: "none"}}>
                                <h3 className='text-center'>List of charges</h3>
                                
                            </a>
                        </h3>

                        <p className="text-muted">
                            View all brokerage, taxes, and statutory charges
                            for equity, F&O, currency, and commodity trading.
                        </p>

                    </div>

                </div>

            </div>
        </>
    );
}

export default Brokerage;