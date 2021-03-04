import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery} from 'gatsby';
import Img from 'gatsby-image';

import triangleGreen from '../assets/images/triangle-2.svg';
import circlePurple from '../assets/images/circle-2.svg';


export default function ImageText2({title, text1, text2 }) {
    const data = useStaticQuery(graphql`
    query Images2 {
        image: file(relativePath: {eq: "group-image2.png"}) {
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
        <ImageTextContainer>
            <div className="full-container">
                <h2 className="title">{title}</h2>
                <img src={triangleGreen} className="icon" alt="Icon" />

                <div className="container">
                    <div className="flex">
                        <div className="left">
                            <p>{text1}</p>
                        </div>
                        <div className="middle">   
                            <Img 
                                fluid={data.image.childImageSharp.fluid}
                            />
                        </div>
                        <div className="right">
                            <p>{text2}</p>
                        </div>
                    </div>

                    <img src={circlePurple} className="purple-icon" alt="Circle Icon" />
                </div>
            </div>
        </ImageTextContainer>
    );
}


const ImageTextContainer = styled.section`
    position: relative;
    margin-top: 8rem;

    @media only screen and (max-width: 767px) {
        margin-top: 0rem;
    }

    h2 {
        text-align: center;
        padding-top: 9rem;

        @media only screen and (max-width: 767px) {
            padding-top: 7rem;
        }
    }

    .icon {
        position: absolute;
        left: 60%;
        top: 0;
        z-index: -1;

        @media only screen and (max-width: 767px) {
            width: 15rem;
            top: -6rem;
            z-index: 1;
            left: auto;
            right: 5rem;
        }
    }

    .flex {
        display: flex;
        margin-top: 8rem;
        justify-content: center;
        
        @media only screen and (max-width: 767px) {
            flex-direction: column;
            margin-top: 3rem;
        }

        .left {
            width: 27.5%;
            margin-right: -9rem;
       
            @media only screen and (max-width: 767px) {
                width: 100%;
                margin-right: 0;
            }
        }

        .middle {
            width: 45%;
            z-index: -1;

            @media only screen and (max-width: 767px) {
                width: 100%;
            }
        }

        .right {
            width: 27.5%;
            display: flex;
            align-items: flex-end;
            margin-left: -9rem;

            @media only screen and (max-width: 767px) {
                width: 100%;
                margin-left: 0;
            }
        }

        p {
            font-size: 1.7rem;
            line-height: 2.4rem;
            font-weight: 300;
            padding: 1.5rem 2rem;
            color: var(--black555);
            background-color: rgba(0, 0, 0, 0.03);
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 1rem;

            @media only screen and (max-width: 767px) {
                font-size: 1.6rem;
                line-height: 2rem;
            }  
        }
    }

    .purple-icon {
        margin-top: -3rem;

        @media only screen and (max-width: 767px) {
            width: 15rem;
            margin: 0;
            display: none;
        }
    }
`;