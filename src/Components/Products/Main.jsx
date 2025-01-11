import React from 'react'

function Main() {
    return (
        <div className="container mt-5">
            <div className="row text-center">
                <h1>The Zerodha Main</h1>
                <p>
                    Extend your trading and investment experience even further with our
                    partner platforms
                </p>

                <div className="col-4 p-3 mt-5">
                    <img src="Assets/smallcaseLogo.png" alt="logo" />
                    <p className="text-small text-muted">Thematic investment platform</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="Assets/streakLogo.png" style={{ width: "50%" }} alt="logo" />
                    <p className="text-small text-muted">Algo & strategy platform</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="Assets/sensibullLogo.svg" style={{ width: "50%", paddingTop: "25px" }} alt="logo" />
                    <p className="text-small text-muted">Options trading platform</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="Assets/zerodhaFundhouse.png" style={{ width: "50%" }} alt="logo" />
                    <p className="text-small text-muted">Asset management</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="Assets/goldenpiLogo.png" alt="logo" />
                    <p className="text-small text-muted">Bonds trading platform</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="Assets/dittoLogo.png" style={{ width: "35%" }} alt="logo" />
                    <p className="text-small text-muted">Insurance</p>
                </div>
                <button
                    className="p-2 btn btn-primary fs-5 mb-5"
                    style={{ width: "20%", margin: "0 auto" }}
                >
                    Signup Now
                </button>
            </div>
        </div>
    )
}

export default Main
