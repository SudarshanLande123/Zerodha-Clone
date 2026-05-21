import React from "react";
function Team() {
  return (
    <div className="container">
      <div className="row border-top mb-4">
        <h1 className="text-center pt-5 pb-5 fs-2">People</h1>
      </div>

      <div className="row mt-5 text-muted fs-5">
        <div className="col-6 p-5 text-center">
          <img src="Media\Images\nithinKamath.jpg" alt="team image" style={{borderRadius:"100%", width:"55%"}} />
          <h4 className="text-muted mt-5">Nithin Kamath</h4>
          <p className="text-muted">Founder,CEO</p>
        </div>
        <div className="col-6 p-5" style={{lineHeight:"1.8em"}}>
          <p className="text-muted">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.</p><p> He
            is a member of the SEBI Secondary Market Advisory Committee (SMAC)
            and the Market Data Advisory (MDAC).<p/> <p>Playing basketball is his zen.</p>
            <p>Connect on &nbsp; &nbsp;   <a href="/" style={{textDecoration:"none"}}>Homepage</a> / <a href="" style={{textDecoration:"none"}}>TradingQnA</a> / <a href="" style={{textDecoration:"none"}}>Twitter</a></p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
