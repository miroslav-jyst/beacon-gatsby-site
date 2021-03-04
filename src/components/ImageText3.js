import React from 'react';
import { Link } from 'gatsby';
import { graphql, useStaticQuery} from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import background from '../assets/images/anouncement-bg.svg';
import bellIcon from '../assets/images/bell.svg';
import triangleGreen from '../assets/images/triangle-2.svg';
import triangleWhite from '../assets/images/triangle-4.svg';


export default function ImageText3({id, title, text}) {
    const data = useStaticQuery(graphql`
    query Images3 {
        image: file(relativePath: {eq: "image-3.png"}) {
                id
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <ImageTextContainer id={id}>
            <div className="full-container">
                <img src={bellIcon} className="bell-icon" alt="Icon" />
                <img src={triangleGreen} className="triangle-green" alt="Icon" />
                <img src={triangleWhite} className="triangle-white" alt="Icon" />

                <div className="container">
                    <div className="left">
                        <Img 
                            fluid={data.image.childImageSharp.fluid}
                        />
                    </div>
                    <div className="right">
                        <h2 className="title">{title}</h2>
                        <p>{text}</p>
                        <Link to="" className="button green">Book a Demo</Link>
                    </div>
                </div>
            </div>
        </ImageTextContainer>
    );
}


const ImageTextContainer = styled.section`
    /* background: linear-gradient(180deg, #3C44B1 0%, #362D7D 100%); */
    /* background-image: url('../assets/images/bg-beacon-1.png'); */
    background-image: url(${background});
    position: relative;
    padding: 15rem 0;
    background-size: cover;

    .bell-icon {
        position: absolute;
        top: 100px;
        left: 37%; 

        @media only screen and (max-width: 767px) {
            width: 10rem;
            left: 40%;
            top: 6rem;
        }
    }

    .triangle-white {
        position: absolute;
        top: 1rem;
        left: 45%;
        
        @media only screen and (max-width: 767px) {
            width: 15rem;
            top: 9rem;
            right: 2rem;
            left: auto;
        }
    }

    .triangle-green {
        position: absolute;
        bottom: -10rem;
        right: 5%;
        transform: rotate(90deg);

        @media only screen and (max-width: 767px) {
            width: 15rem;
            bottom: -5rem;
        }
    }

    .container {
        display: flex;
        margin-top: 5rem;
        align-items: center;
        justify-content: space-between;

        @media only screen and (max-width: 1024px) {
            flex-direction: column-reverse;
        }

        @media only screen and (max-width: 767px) {
            margin-top: -2rem;
        }

        h2 {
            color: var(--white);
        }

        p {
            font-size: 2rem;
            line-height: 2.8rem;
            font-weight: 300;
            color: var(--white);

            @media only screen and (max-width: 767px) {
                font-size: 1.6rem;
                line-height: 2rem;
            }  
        }

        .left {
            width: 40%;
            margin-top: 10rem;

            @media only screen and (max-width: 1024px) {
                width: 50%;
                margin-top: 0;
            }

            @media only screen and (max-width: 600px) {
                width: 75%;
            }
        }

        .right {
            width: 62rem;
            margin-top: 10rem;

            @media only screen and (max-width: 1024px) {
                width: 100%;
                margin-bottom: 5rem;
            }
        }
    }
`;