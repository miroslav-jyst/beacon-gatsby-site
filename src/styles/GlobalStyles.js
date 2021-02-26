import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --titleBlack: #2F2E41;
    --textBlack: #2E2E2E;
    --black555: #555;
    --purple: #4925F7;
    --white: #fff;
    --green: #29DE92;
  }
  
  html {
    font-size: 10px;
  }
  
  body {
    font-size: 1.6rem;

    &.scroll-disabled {
      overflow-y: hidden;
    }
  }
  
  a {
    text-decoration: none;
  }
  
  .container {
    max-width: 125rem;
    padding: 0 2.5rem;
    margin: auto;
  }
  
  .full-container {
    max-width: 100%;

    @media only screen and (max-width: 1024px) {
        padding: 0 2.5rem;
    }
  }

  .button {
      color: var(--white);
      font-weight:700;
      font-size: 2.2rem;
      display: inline-block;
      padding: 1rem 3.5rem;
      border-radius: 3rem;
      box-shadow: 0 .8rem 2rem rgba(0, 0, 0, 0.25);

      @media only screen and (max-width: 767px) {
        font-size: 1.6rem;
        font-weight: 600;
      }

    &.green{
        background-color: var(--green);
    }

    &.purple{
        background: linear-gradient(328.45deg, #4925F7 19.79%, #8C6DF7 88.86%);
    }

    }
    &:hover {
    }
  }

  .title {
    font-size: 5rem;
    line-height: 6.5rem;
    font-weight: 600;
    max-width: 80rem;
    margin: auto;
    position: relative;
    color: var(--titleBlack);

    @media only screen and (max-width: 1024px) {
      font-size: 4rem;
      line-height: 5rem;
      max-width: none;
    }

    @media only screen and (max-width: 767px) {
      font-size: 2.2rem;
      line-height: 3rem;
    }
  }

  img {
    max-width: 100%;
  }
`;

export default GlobalStyles;
