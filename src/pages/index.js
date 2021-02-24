import React from 'react';
import Banner from '../components/Banner';
import Layout from '../components/Layout';
import ImageText1 from '../components/ImageText1';
import ImageText2 from '../components/ImageText2';
import ImageText3 from '../components/ImageText3';
import WhyUseSection from '../components/WhyUseSection';

import BannerImage from '../assets/images/banner-image.svg';
import LaptopImage from '../assets/images/image-2.png';
import CentralImage from '../assets/images/group-image.png';
import Image3 from '../assets/images/image-3.png';


export default function HomePage() {
  return (
    <>
      <Layout>
        {/* Banner | components/Banner.js  */}
        <Banner 
          image={BannerImage}
          text="Employee wellbeing aimed at improving mental health and anxiety"
        />
        
        {/* Why Use Beacon | components/WhyUseSection.js  */}
        <WhyUseSection 
          id="our-approach"
          title="Why Use Beacon?"
        />

        {/* Left Image - Right Text | components/ImageText1.js */}
        <ImageText1 
          id="how-it-works"
          image={LaptopImage}
          title="How it works?"
          text="Beacon allows you to create tailored employee wellness plans at scale. One simple app that allows you to  create bespoke employee wellbeing programmes for a modern workforce.
          Creating wellness flows help alleviate stressors before they manifest into large problems.
          Tailor scientifically verified articles, videos, content and provide your team with the tools to improve stress and anxiety that exists in the workspace.
          "
        />

        {/* Central Image | components/ImageText2.js  */}
        <ImageText2 
          title="Employee wellness that  leads to organisational change"
          text1="Only 23% of employee feedback results in corporate change. Many HR managers claiming feedback responses are decentralised and difficult to interpret."
          text2="With Beacon you are note alone. Tailored wellbeing on beacon provides your team with cohesion and a real sense of purpose and focus"
          middleImage={CentralImage}
        />

        {/* Image Section 3 | components/ImageText3.js  */}
        <ImageText3 
          id="resources"
          image={Image3}
          title="Seamless communication and personal care"
          text="If feedback is concerning or raises flags Beacon provides an employee wellbeing expert with live chat to alleviate or escalate immediate concerns."
        />
        
      </Layout>
    </>
  );
}
