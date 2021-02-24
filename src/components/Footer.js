import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import darkLogo from '../assets/images/black-logo.svg';
import facebookIcon from '../assets/images/facebook.svg';
import linkedinIcon from '../assets/images/linkedin.svg';
import twitterIcon from '../assets/images/twitter.svg';
import instagramIcon from '../assets/images/instagram.svg';

export default function Footer() {
    return (
    <FooterElement>
        <div className="container">
            <div className="column">
            <Link to="/"><img style={{width: "197px", height: "39px"}} src={darkLogo} alt="Icon" /></Link>
                
                <ul className="social-networks">
                    <li>
                        <Link to=""><img src={facebookIcon} style={{width: "31px", height: "32px"}} className="icon" alt="Icon" /></Link>
                    </li>
                    <li>
                        <Link to=""><img src={twitterIcon} style={{width: "31px", height: "32px"}} className="icon" alt="Icon" /></Link>
                    </li>
                    <li>
                        <Link to=""><img src={linkedinIcon} style={{width: "31px", height: "32px"}} className="icon" alt="Icon" /></Link>
                    </li>
                    <li>
                        <Link to=""><img src={instagramIcon} style={{width: "31px", height: "32px"}} className="icon" alt="Icon" /></Link>
                    </li>
                </ul>
            </div>
            <div className="column">
                <h3>Pages</h3>
                <ul>
                    <li><Link to="">Our approach</Link></li>
                    <li><Link to="">How it works</Link></li>
                    <li><Link to="">Resources</Link></li>
                </ul>
            </div>
            <div className="column">
                <h3>Company</h3>
                <ul>
                    <li><Link to="">Our story</Link></li>
                    <li><Link to="">Clients</Link></li>
                    <li><Link to="">Contact us</Link></li>
                </ul>
            </div>
            <div className="column">
                <h3>Sign up to out newsletter!</h3>
                <form action="">
                    <input type="email" placeholder="Enter your email" id="fname" className="email-input" name="email"/>
                    <input type="submit" className="submit-button" value="Subscribe"/>
                </form>
            </div>
        </div>
    </FooterElement>
);
}


const FooterElement = styled.footer`
    background: linear-gradient(180deg, #EDEDED 0%, #FAFAFA 0.01%, #F4F4F4 100%);

    .container {
        display: flex;
        flex-wrap: wrap;
        padding: 10rem 2.5rem;
        justify-content: space-between;
        
        @media only screen and (max-width: 767px) {
            flex-direction: column;
            padding: 5rem 2.5rem 1rem 2.5rem;
        }

        .column {
            @media only screen and (max-width: 1024px) {
                width: 50%;
                margin-bottom: 4rem;
            }

            @media only screen and (max-width: 767px) {
                width: 100%;
            }
        }

        ul {
            padding-left: 0;
            list-style: none;
            margin-top: 3rem;
            margin-bottom: 0;

            @media only screen and (max-width: 767px) {
                margin-top: 1rem;
            }

            li {
                
                &:not(:last-child) {
                    margin-bottom: 1.5rem;

                    @media only screen and (max-width: 767px) {
                        margin-bottom: 0.75rem;
                    }
                }

                a {
                    font-size: 1.8rem;
                    color: #838383;
                
                    @media only screen and (max-width: 767px) {
                        font-size: 1.6rem;
                    }
                }
            }
        }

        form {
            margin-top: 3rem;
            
            @media only screen and (max-width: 1024px) {
                overflow: hidden;
            }

            @media only screen and (max-width: 767px) {
                margin-top: 2rem;
            }

            .email-input {
                height: 4.9rem;
                border: 0;
                width: 30rem;
                padding: 0 1.5rem;
                border-top-left-radius: 1rem;
                border-bottom-left-radius: 1rem;
                box-shadow: -5px 3px 8px rgba(0, 0, 0, 0.15);

                @media only screen and (max-width: 1024px) {
                    border-top-right-radius: 1rem;
                    border-bottom-right-radius: 0;
                    border-bottom-left-radius: 0;
                    width: 100%;
                }

                &:focus {
                    outline: none;
                }
            }

            .submit-button {
                background-color: #8C6DF7;
                color: #fff;
                font-size: 1.8rem;
                line-height: 2.5rem;
                outline: none;
                border: 0;
                height: 5rem;
                padding: 0 2.5rem;
                font-weight: 600;
                border-top-right-radius: 1rem;
                border-bottom-right-radius: 1rem;
                box-shadow: 5px 3px 8px rgba(0, 0, 0, 0.15);

                @media only screen and (max-width: 1024px) {
                    border-bottom-left-radius: 1rem;
                    border-top-right-radius: 0;
                    width: 100%;
                }
            }
        }

        .social-networks {
            display: flex;
            list-style: none;
            padding-left: 0;
            padding-top: 2rem;
            margin-top: 1rem;

            li:not(:last-child) {
                margin-right: 1.5rem;
            }
        }

        h3 {
            font-size: 2rem;
            color: var(--titleBlack);
        }
    }
`;