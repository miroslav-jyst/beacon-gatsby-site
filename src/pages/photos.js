import React from 'react';
import { graphql, useStaticQuery} from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';


import LaptopImage from '../assets/images/image-2.png';


export default function HomePage() {
    const data = useStaticQuery(graphql`
        query Images {
           image: file(relativePath: {eq: "image-2.png"}) {
                id
                childImageSharp {
                    fixed (width: 200) {
                        ...GatsbyImageSharpFixed
                    }
                    
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)


    return (
        <section>
            <img src={LaptopImage} alt="Main image" />

            <Img 
                fixed={data.image.childImageSharp.fixed}
            />

            <Img 
                fluid={data.image.childImageSharp.fluid}
            />
        </section>
    );
  }
  