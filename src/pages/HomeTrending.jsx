import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const HomeTrending = () => {
  return (
    <div>
        <OwlCarousel
        className="owl-theme"
        items = "3"
        autoplay
        nav
        loop
        >
            <div className='item'> 
                no 1 
            </div>
            <div className='item'> 
                no 2 
            </div>
            <div className='item'> 
                no 3 
            </div>
            <div className='item'> 
                no 4 
            </div>
        </OwlCarousel>
    </div>
  )
}

export default HomeTrending