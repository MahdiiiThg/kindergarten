import React from 'react'

// components
import PrimaryButton from '../Buttons/PrimaryButton'
import Title from '../Typography/Title'

// OwlCarousel
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel"), {
  ssr: false,
});

export default function CategorySlider(props) {
  const  responsive={
    0:{
        items:2.3
    },
    600:{
        items:2.3
    },

    900:{
        items:3.3
    },
    1000:{
        items:4.3
    },
  }
  return (
    <div 
      className="text-center text-2xl h-full"
      style={{
        background: 'url(/assets/img/dreamy-soft-clouds.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
        {
          props.data && 
          props.data.map((data, index) => {
            return (
              <div key={index}>
                <div className="pb-20">
                  <Title title={props.title} />
                </div>
                <OwlCarousel 
                  className="owl-theme"
                  margin={20}
                  items={1} 
                  center={true} 
                  autoplay={true}
                  autoplayTimeout={2000} 
                  autoplayHoverPause={true} 
                  loop={true}
                  responsive={responsive}
                >
                  {
                    props.data[0].gallery.map((image, index) => {
                      return <img style={{height: '220px'}} key={index} src={image} alt="image"/>
                    })
                  }
                </OwlCarousel>
                <div className="px-16 pt-20">
                  <PrimaryButton
                    color={'purple-300'}
                    bg={'white'}
                    opacity={'bg-opacity-50'}
                    border
                    text={props.text}
                  />
                </div>
              </div>
            )
          })
        }
    </div>
  )
}
