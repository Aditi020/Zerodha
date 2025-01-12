import React from 'react';
import Home from '../../Assets/homeHero.png';
const SignupPage = () => {
    return (
        <div
            role="main"
            aria-label="Landing Page Container"
            style={{
                fontFamily: 'Arial, sans-serif',
                padding: '40px 20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
            }}
        >
            <div
                className="Container"
                style={{
                    width: '100%',
                    maxWidth: '1200px',
                }}
            >
                <div
                    role="row"
                    aria-label="Row"
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: '20px',
                        flexWrap: 'wrap',
                    }}
                >
                    {/* Left Content (Image) */}
                    <div
                        role="region"
                        aria-label="Left Content"
                        style={{
                            flex: 1,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <img
                            src={Home}
                            alt="Zerodha's signup landing page"
                            role="img"
                            aria-label="Mobile Landing Page Image"
                            style={{ width: '100%' }}
                        />
                    </div>

                    {/* Right Content (Signup Form) */}
                    <div
                        role="region"
                        aria-label="Signup Form"
                        style={{
                            flex: '0 0 35%',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <div
                            role="region"
                            aria-label="Phone Number Container"
                            style={{
                                width: '100%',
                                padding: '30px',
                                border: '1px solid #e0e0e0',
                                borderRadius: '8px',
                                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                                backgroundColor: '#fff',
                            }}
                        >
                            {/* Signup Heading */}
                            <h1
                                aria-label="Signup now"
                                style={{
                                    fontSize: '24px',
                                    fontWeight: 'bold',
                                    color: '#333',
                                    marginBottom: '10px',
                                }}
                            >
                                Signup now
                            </h1>
                            <span
                                style={{
                                    fontSize: '14px',
                                    color: '#757575',
                                    marginBottom: '20px',
                                }}
                            >
                                Or track your existing application.
                            </span>

                            {/* Signup Form */}
                            <form
                                aria-label="Signup form"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                            >
                                <div
                                    style={{
                                        position: 'relative',
                                        marginBottom: '20px',
                                    }}
                                >
                                    <label
                                        style={{
                                            fontSize: '14px',
                                            color: '#333',
                                        }}
                                    >
                                        Mobile number
                                    </label>
                                    <input
                                        type="number"
                                        placeholder=""
                                        aria-label="Enter your mobile number"
                                        style={{
                                            width: '100%',
                                            padding: '10px',
                                            fontSize: '16px',
                                            border: '1px solid #e0e0e0',
                                            borderRadius: '4px',
                                        }}
                                        maxLength="10"
                                        autoFocus
                                    />
                                </div>
                                <p
                                    style={{
                                        marginTop: '10px',
                                        color: '#757575',
                                        fontSize: '12px',
                                    }}
                                >
                                    You will receive an OTP on your number
                                </p>
                                <button
                                    type="submit"
                                    style={{
                                        backgroundColor: '#0062cc',
                                        color: '#fff',
                                        border: 'none',
                                        padding: '12px',
                                        width: '100%',
                                        fontSize: '16px',
                                        borderRadius: '4px',
                                        cursor: 'pointer',
                                        marginTop: '20px',
                                        textAlign: 'center',
                                    }}
                                >
                                    Continue
                                </button>

                                {/* Alternate Option */}
                                <p
                                    style={{
                                        fontSize: '12px',
                                        marginTop: '10px',
                                        textAlign: 'center',
                                    }}
                                >
                                    <a
                                        href="#"
                                        target="_blank"
                                        rel="noopener"
                                        style={{
                                            color: '#0062cc',
                                            textDecoration: 'none',
                                        }}
                                    >
                                        Want to open an NRI account?
                                    </a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Disclaimer */}
                <p
                    style={{
                        fontSize: '12px',
                        color: '#757575',
                        textAlign: 'center',
                        marginTop: '30px',
                    }}
                >
                    I authorise Zerodha to contact me even if my number is registered on DND. I authorise Zerodha to fetch my KYC information from the C-KYC registry with my PAN.
                    Please visit{' '}
                    <a
                        target="_blank"
                        href="#"
                        style={{
                            color: '#0062cc',
                            textDecoration: 'none',
                        }}
                    >
                        this article
                    </a>{' '}
                    to know more.
                    <br />
                    By submitting your contact details, you authorize Zerodha to contact you even if you are registered on DND &amp; conduct online KYC for trading &amp; demat account opening as per KRA regulations and PMLA guidelines.
                    <br />
                    If you are looking to open a HUF, Corporate, Partnership, or NRI account, you have to use the
                    <a
                        target="_blank"
                        href="#"
                        style={{
                            color: '#0062cc',
                            textDecoration: 'none',
                        }}
                    >
                        offline forms.
                    </a>{' '}
                    For help,{' '}
                    <a
                        target="_blank"
                        href="#"
                        style={{
                            color: '#0062cc',
                            textDecoration: 'none',
                        }}
                    >
                        click here.
                    </a>
                </p>
            </div>
        </div>
    );
};

export default SignupPage;
