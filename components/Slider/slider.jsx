import React from 'react'

// OwlCarousel
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel"), {
  ssr: false,
});


// OwlCarousel
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function Slider(props) {
  return (
    <div>
      <OwlCarousel 
        className={`owl-theme owl-nav`}
        nav
        margin={props.margin ? props.margin : 40}
        items={props.items} 
        center={true} 
        autoplay={true}
        dots={false}
        autoplayTimeout={props.autoplayTimeout || 2000} 
        autoplayHoverPause={true} 
        loop={true}
        responsive={props.responsive}
      >
        {props.children}
      </OwlCarousel>
    </div>
  )
}
