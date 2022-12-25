import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Vender = () => {
  return (
    <div className="container-fluid wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5 mb-5">
            <div className="bg-white">
            <Carousel>
               <Carousel.Item>
                <div className="owl-carousel vendor-carousel">
                    <img src="src/assets/img/vendor-1.jpg" alt=""/>
                    <img src="src/assets/img/vendor-2.jpg" alt=""/>
                    <img src="src/assets/img/vendor-3.jpg" alt=""/>
                    <img src="src/assets/img/vendor-4.jpg" alt=""/>
                    <img src="src/assets/img/vendor-5.jpg" alt=""/>
                    <img src="src/assets/img/vendor-6.jpg" alt=""/>
                    <img src="src/assets/img/vendor-7.jpg" alt=""/>
                    <img src="src/assets/img/vendor-8.jpg" alt=""/>
                    <img src="src/assets/img/vendor-9.jpg" alt=""/>
                </div>
                </Carousel.Item>
            </Carousel>
            </div>
        </div>
    </div>
  )
}

export default Vender;