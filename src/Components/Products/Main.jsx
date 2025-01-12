import React from 'react';
import SmallCaseLogo from '../../Assets/smallcaseLogo.png'
import StreakLogo from '../../Assets/streakLogo.png'
import SensiBullLogo from '../../Assets/sensibullLogo.svg'
import ZerodhaFundhouse from '../../Assets/zerodhaFundhouse.png'
import GoldenPiLogo from '../../Assets/goldenpiLogo.png'
import DittoLogo from '../../Assets/dittoLogo.png'



function Main() {
    return (
        <div className="container mt-5">
            <div className="row text-center">
                <h1>The Zerodha Main</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
                <div className="col-4 p-3 mt-3 ">
                    <img src={SmallCaseLogo} />
                    <p className='text-small text-muted'>Our asset management venture
                        that is creating simple and transparent index
                        funds to help you save for your goals.</p>
                </div>
                <div className="col-4 p-3 mt-3">
                    <img src={StreakLogo} style={{ width: "50%" }} />
                    <p className='text-small text-muted'>Systematic trading platform
                        that allows you to create and backtest
                        strategies without coding.</p>
                </div>
                <div className="col-4 p-3 mt-3">
                    <img src={SensiBullLogo} />
                    <p className='text-small text-muted'>Our asset management venture
                        that is creating simple and transparent index
                        funds to help you save for your goals.</p>
                </div>
                <div className="col-4 p-3 mt-3">
                    <img src={ZerodhaFundhouse}/>
                    <p className='text-small text-muted'>Our asset management venture
                        that is creating simple and transparent index
                        funds to help you save for your goals.</p>
                </div>
                <div className="col-4 p-3 mt-3">
                    <img src={GoldenPiLogo}/>
                    <p className='text-small text-muted'>Thematic investing platform
                        that helps you invest in diversified
                        baskets of stocks on ETFs.</p>
                </div>
                <div className="col-4 p-3 mt-3">
                    <img src={DittoLogo}le={{ width: "40%" }} />
                    <p className='text-small text-muted'>Our asset management venture
                        that is creating simple and transparent index
                        funds to help you save for your goals.</p>
                </div>
                <button className='p-2 btn btn-primary fs-5 mb-5' style={{ width: "20%", margin: "0 auto" }}>Sign up Now</button>
            </div>
        </div>
    );
}

export default Main;