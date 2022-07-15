import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import '../Component_css/carousel.css'
import Apptext from './Apptext';

const imageSlider = [
    {
        id: 1,
        alt: "slider1",
        image: "img1"
    },
    {
        id: 2,
        alt: "slider2",
        image: "img2"
    },
    {
        id: 3,
        alt: "slider3",
        image: "img3"
    }
];

function AppCarousal() {
    return (
        <>
            <Apptext />
            <Carousel variant='light' id='promo'>
                {imageSlider.map((item, index) => {
                    return (
                        <Carousel.Item interval={3000} key={index}>
                            <img
                                className="d-block w-100"
                                style={{ height: "92.9vh" }}
                                src={require(`../Image/${item.image}.jpg`)}
                                alt={item.alt}
                            />
                        </Carousel.Item>
                    )
                }
                )}
            </Carousel>

        </>




    )
}

export default AppCarousal