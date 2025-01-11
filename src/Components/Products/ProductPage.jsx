import React from 'react';
import Hero from './Hero';
import Left from "./Left"
import Right from './Right'
import Main from './Main'

function ProductPage() {
    return (
        <>
            <Hero />
            <Left imagURL="/src/Assets/kite.png" productName="Kite" productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." tryDemo="" learnMore="" googlePlay="" appStore=""
            />
            <Right imagURL="/src/Assets/console.png" productName="Console" productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." learnMore="" />


            <Left imagURL="/src/Assets/coin.png" productName="Coin" productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." tryDemo="" learnMore="" googlePlay="" appStore=""
            />
            <Right imagURL="/src/Assets/kiteconnect.png" productName="Kite Connect API" productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." learnMore="" />

            <Left imagURL="/src/Assets/varsity.png" productName="Varsity mobile" productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." tryDemo="" learnMore="" googlePlay="" appStore=""
            />
            <div className='mt-5 text-center'>
                <p>Want to know more about our technology stack? Check out the <a href='' style={{ textDecoration: "none" }}>Zerodha.tech </a> blog.</p>
            </div>
            <Main />
        </>
    );
}

export default ProductPage;