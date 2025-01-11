import React from 'react'
import HeroProd from './HeroProd'
import Left from './Left'
import Right from './Right'
import Main from './Main'

function ProductPage() {
    return (
        <div>
            <HeroProd />
            <Left
                id="1"
                imageURL="Assets/kite.png"
                productName="Kite"
                productDesription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
                tryDemo=""
                learnMore=""
                googlePlay=""
                appStore=""
            />
            <Right
                id="1"
                imageURL="Assets/console.png"
                productName="Console"
                productDesription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
                learnMore=""
            />

            <Left
                id="2"
                imageURL="Assets/coin.png"
                productName="Coin"
                productDesription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
                tryDemo=""
                learnMore=""
                googlePlay=""
                appStore=""
            />

            <Right
                id="2"
                imageURL="Assets/kiteconnect.png"
                productName="Kite Connect API"
                productDesription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
                learnMore=""
            />
            <Left
                imageURL="Assets/varsity.png"
                productName="Varsity mobile"
                productDesription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
                tryDemo=""
                learnMore=""
                googlePlay=""
                appStore=""
            />
            <p className="text-center mt-5 mb-5 fs-5 fw-semibold">
                Want to know more about our technology stack? Check out the <span style={{ color: "blue" }}>Zerodha.tech{" "}</span>
                blog.
                <br />
                <br />
                <br />
            </p>
            <Main />
        </div>
    )
}

export default ProductPage
