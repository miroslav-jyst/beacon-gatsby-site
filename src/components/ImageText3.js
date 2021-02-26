import React from 'react';
import { Link } from 'gatsby';
import { graphql, useStaticQuery} from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

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
    background: linear-gradient(180deg, #3C44B1 0%, #362D7D 100%);
    position: relative;
    padding: 5rem 0;

    .bell-icon {
        position: absolute;
        top: 0;
        left: 37%; 

        @media only screen and (max-width: 767px) {
            width: 10rem;
            left: 40%;
            top: -2rem;
        }
    }

    .triangle-white {
        position: absolute;
        top: -7rem;
        left: 42%;
        
        @media only screen and (max-width: 767px) {
            width: 15rem;
            top: -2rem;
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
        }

        .left {
            width: 30%;

            @media only screen and (max-width: 1024px) {
                width: 50%;
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