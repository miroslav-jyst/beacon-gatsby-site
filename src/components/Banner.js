import React from 'react';
import { Link } from 'gatsby';
import { graphql, useStaticQuery} from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import trianglePurple from '../assets/images/triangle-1.svg';


export default function Banner({ text }) {
    const data = useStaticQuery(graphql`
        query bannerImages {
           image: file(relativePath: {eq: "banner-image.png"}) {
                id
                childImageSharp {
                    fluid (maxWidth: 530) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <BannerContainer>
            <div className="container">
                <div className="left">
                    <h1>{text}</h1>
                    <Link to="" className="button green">Book a Demo</Link>
                    <img src={trianglePurple} className="icon1" alt="Triangle Icon" />
                </div>
                <div className="right">
                    <Img 
                        fluid={data.image.childImageSharp.fluid}
                    />
                </div>
            </div>
        </BannerContainer>
    );
}


const BannerContainer = styled.section`
    padding-top: 15rem;
    padding-bottom: 8rem;
    background: linear-gradient(180deg, #3C44B1 0%, #362D7D 100%);

    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;

        @media only screen and (max-width: 1024px) {
            flex-direction: column-reverse;
        }

        h1 {
            color: var(--white);
            font-size: 6rem;
            line-height: 7rem;
            font-weight: 600;
            z-index: 100;
            position: relative;

            @media only screen and (max-width: 1024px) {
                font-size: 4rem;
                line-height: 5rem
            }
            
            @media only screen and (max-width: 767px) {
                font-size: 3rem;
                line-height: 4rem;
            }
        }

        .button {
            margin-top: 2.5rem;
        
            @media only screen and (max-width: 767px) {
                margin-left: 0;
            }
        }

        .left {
            width: 55%;
            position: relative;

            @media only screen and (max-width: 1024px) {
                width: 100%;
                text-align: center;
            }

            .icon1 {
                position: absolute;
                top: -12rem;
                right: -12rem;
                z-index: 0;
           
                @media only screen and (max-width: 1024px) {
                    right: 0;
                }

                @media only screen and (max-width: 767px) {
                    display: none;
                }
            }
        }

        .right {
            width: 45%;
            margin-left: 5rem;

            @media only screen and (max-width: 1024px) {
                width: 100%;
                text-align: center;
                margin-left: 0;
            }
        }
   }
`;