import React from 'react';
import styled from 'styled-components';


export default function WhyUseCard({ icon, text }) {
    return (
        <WhyUseCardWrapper>
            <img src={icon} alt="Icon" />
            <p>{text}</p>
        </WhyUseCardWrapper>
    );
}


const WhyUseCardWrapper = styled.section`
    text-align: center;
    flex: 1;
    margin: 0 2rem;
    padding: 3.5rem;
    border-radius: .8rem;
    box-shadow: 0 .8rem 2rem rgba(0, 0, 0, 0.25);

    @media only screen and (max-width: 767px) {
        margin-bottom: 1.5rem;
    }

   img {
        width: auto;
        height: 9.5rem;
    
        @media only screen and (max-width: 767px) {
            height: 6rem;
        }
   }

   p {
       margin-bottom: 0;
       font-size: 1.9rem;
       line-height: 2.4rem;
       font-weight: 300;
       color: var(--black555);

        @media only screen and (max-width: 767px) {
            font-size: 1.6rem;
            line-height: 2rem;
        }
   }
`;