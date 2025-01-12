import React from 'react';
import Hero from './Hero';
import Left from "./Left"
import Right from './Right'
import Main from './Main'
import Kite from '../../Assets/kite.png'
import Console from '../../Assets/console.png'
import Coin from '../../Assets/coin.png'
import KiteConnect from '../../Assets/kiteconnect.png'
import Varsity from '../../Assets/varsity.png'
function ProductPage() {
    return (
        <>
            <Hero />
            <Left imagURL={Kite} productName="Kite" productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." tryDemo="" learnMore="" googlePlay="" appStore=""
            />
            <Right imagURL={Console} productName="Console" productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." learnMore="" />


            <Left imagURL={Coin} productName="Coin" productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." tryDemo="" learnMore="" googlePlay="" appStore=""
            />
            <Right imagURL={KiteConnect} productName="Kite Connect API" productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." learnMore="" />

            <Left imagURL={Varsity} productName="Varsity mobile" productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." tryDemo="" learnMore="" googlePlay="" appStore=""
            />
            <div className='mt-5 text-center'>
                <p>Want to know more about our technology stack? Check out the <a href='' style={{ textDecoration: "none" }}>Zerodha.tech </a> blog.</p>
            </div>
            <Main />
        </>
    );
}

export default ProductPage;