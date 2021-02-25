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
                    fixed (width: 400) {
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
            <Img 
                fixed={data.image.childImageSharp.fixed}
            />

            <Img 
                fluid={data.image.childImageSharp.fluid}
            />
        </section>
    );
  }
  