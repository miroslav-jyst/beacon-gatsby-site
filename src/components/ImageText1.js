import React from 'react';
import styled from 'styled-components';

import trianglePurple from '../assets/images/triangle-1.svg'


export default function ImageText1({id, image, title, text }) {
    return (
        <ImageTextContainer className="full-container" id={id}>
            <div className="left">
                <img src={image} alt="Main image" />
            </div>
            <div className="right">
                <h2 className="title">{title}</h2>
                <p>{text}</p>
                <img src={trianglePurple} className="icon" alt="Triangle Icon" />
            </div>
        </ImageTextContainer>
    );
}


const ImageTextContainer = styled.section`
   background: linear-gradient(180deg, #EDEDED 0%, #FAFAFA 0.01%, #F4F4F4 100%);
   display: flex;
   padding: 8rem 0;
   margin-top: 15rem;

    @media only screen and (max-width: 1024px) {
        flex-direction: column-reverse;
        padding: 0 2.5rem;
    }

    @media only screen and (max-width: 767px) {
        margin-top: 7rem;
    }

   img {
        width: 100%;
   }

   .icon {
        position: absolute;
        top: -15rem;
        left: 55%;
        width: 24rem;

        @media only screen and (max-width: 767px) {
            width: 15rem;
            left: 0;
            top: -7rem;
            
        }
   }

   p {
       font-size: 2rem;
       line-height: 2.8rem;
       font-weight: 300;
       color: var(--textBlack);
   }
   
   .title {
        margin-top: 5rem;
   }

   .left {
        width: 50%;

        @media only screen and (max-width: 1024px) {
            margin-left: -2.5rem;
        }
   }

   .right {
       position: relative;
       width: 62rem;

        @media only screen and (max-width: 1024px) {
            width: 100%;
        }
   }
`;