import React from 'react';
import styled from 'styled-components';
import WhyUseCard from '../components/WhyUseCard';

import icon1 from '../assets/images/plant.svg';
import icon2 from '../assets/images/shooting.svg';
import icon3 from '../assets/images/work-team.svg';
import circleGreen from '../assets/images/circle-1.svg';


export default function WhyUseCardSection({ id, title }) {
    return (
        <WhyUseWrapper className="container" id={id}>
            <img src={circleGreen} className="icon" alt="Icon" />
            <h2 className="title">{title}</h2>
            
            <div className="flex">
                <WhyUseCard 
                    icon={icon1}
                    text="The World Changed in 2020, it’s about time employee wellness changed too!"
                />

                <WhyUseCard
                    icon={icon3}
                    text="Beacon provides your team with the correct resources to reduce stress, loneliness and isolation."
                />

                <WhyUseCard 
                    icon={icon2}
                    text="Beacon tailors employee wellbeing improving a team cohesion, productivity and engagement."
                />
            </div>
        </WhyUseWrapper>
    );
}


const WhyUseWrapper = styled.section`
    position: relative;

    h2 {
        text-align: center;
        padding-top: 19rem;

        @media only screen and (max-width: 767px) {
            padding-top: 8rem;
        }
    }
    
    .icon {
        position: absolute;
        left: 4rem;
        top: 5rem;

        @media only screen and (max-width: 767px) {
            width: 15rem;
            top: 2rem;
        }
    }

    .flex {
        display: flex;
        justify-content: center;
        margin-top: 12.5rem;

        @media only screen and (max-width: 767px) {
            flex-direction: column;
            margin-top: 5rem;
        }
    }
`;