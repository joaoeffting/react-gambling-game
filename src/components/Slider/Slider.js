import React from 'react';
import SliderComponent from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

let sliderSettings = {
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    draggable: false
};

export const Slider = ({ children }) => {
    return (
        <SliderComponent {...sliderSettings}>
            {children}
        </SliderComponent>
    )
}