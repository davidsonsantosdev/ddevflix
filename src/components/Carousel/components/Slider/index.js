import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';
import arrow from '../../../../assets/img/arrow.svg';


const Container = styled.ul`
  padding: 0;
  margin: 0;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: 0;
    width: 95px;
    height: 197px;
    border-radius: 5px;
    background-color: var( --white);
    background: url(${arrow});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position:left center;
    transform: initial;
    opacity: 0.3;
    &:before {
      font-size: 0px;
    }
    transition: opacity .3s;
    &:hover{
      opacity: 0.9;

    }
    @media (max-width: 800px){
      visibility: hidden;
    }
  }

  .slick-prev {
    left: 0;
    transform: scaleX(-1);
    
  }
  .slick-next {
    right: 0;
  }
`;

export const SliderItem = styled.li`
  margin-right: 16px;
  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }
`;


const Slider = ({ children }) => (
  <Container>
    <SlickSlider {...{
      dots: false,
      infinite: true,
      swipeToSlide: true,
      speed: 300,
      slidesToScroll: 1,
      slidesToShow: 1,
      centerMode: false,
      variableWidth: true,
      adaptiveHeight: true,
    }}
    >
      {children}
    </SlickSlider>
  </Container>
);

export default Slider; 