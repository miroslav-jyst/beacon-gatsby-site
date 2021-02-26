import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Logo from '../assets/images/beacon-logo-1.svg';
import BurgerIcon from '../assets/images/burger.svg';
import scrollTo from 'gatsby-plugin-smoothscroll';

export default function Nav() {
    const [isActive, setActive] = useState(false);
     
    const ToggleClass = () => {
        setActive(!isActive); 
        document.querySelector('body').classList.toggle('scroll-disabled');
    };
    
    const scrollAction = (id) =>{
        scrollTo(id);
        setActive(false)
    }

    return (
        <Header>
            <div className="full-container">
                <div className="logo">
                    <Link to="/"> <img src={Logo} alt="Logo"/></Link>
                </div>
                
                <nav className={isActive ? "active" : ""}>
                    <a onClick={() => scrollAction('#how-it-works')}> Our approach </a> 
                    <a onClick={() => scrollAction('#how-it-works')}> How it works </a> 
                    <a onClick={() => scrollAction('#resources')}> Resources </a> 
                    <a className="button purple"> Book a Demo </a> 
                </nav>

                <a onClick={ToggleClass}> <img src={BurgerIcon} className="burger-icon" alt="Logo"/></a>
            </div>
        </Header>
    )
}


const Header = styled.section`
    position: absolute;
    left: 10rem;
    top: 5rem;
    width: calc(100% - 20rem);

    @media only screen and (max-width: 1024px) {
        left: 0;
        top: 2.5rem;
        width: 100%;
    }

    .full-container {
        display: flex;
        justify-content: space-between;

        .logo {
            width: 22rem;

            @media only screen and (max-width: 767px) {
                width: 15rem;
            }
        }

        nav {
            width: 80%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            flex: 1;
            transition: all ease-in-out 0.3s;
            
            @media only screen and (max-width: 1024px) {
                position: fixed;
                background-color: #fff;
                transform: translateX(100%);
                flex-direction: column;
                width: calc(100% - 5rem);
                height: calc(100% - 7rem);
                z-index: 100;
                justify-content: center;
                z-index: 10000;
                left: 0;
                top: 8.5rem;
                padding: 2.5rem;
                overflow-y: scroll;
            }
            
            &.active {
                @media only screen and (max-width: 1024px) {
                    transform: translateX(0%);
                }
            }

            a {
                color: var(--white);
                cursor: pointer;
                
                @media only screen and (max-width: 1024px) {
                    color: var(--purple);

                }

                &:not(:last-child) {
                    margin-right: 4rem;

                    @media only screen and (max-width: 1024px) {
                        margin-right: 0;
                        font-size: 2rem;
                        margin-bottom: 2.5rem;
                    }
                }

                &:first-child {
                    @media only screen and (max-width: 1024px) {
                        margin-top: -5.5rem;
                    }
                }


                &.button {
                    @media only screen and (max-width: 1024px) {
                        color: #ffffff;
                    }
                }
            }
            

            &.active {
                @media only screen and (max-width: 1024px) {
                    transform: translateX(0);
                }
            }
        }

        .burger-icon {
            position: absolute;
            top: 1rem;
            right: 2rem;
            cursor: pointer;
            
            @media only screen and (min-width: 1024px) {
                display: none;
            }
        }
    }
`;