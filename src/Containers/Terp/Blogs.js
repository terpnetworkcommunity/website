import Carousel from "react-multi-carousel";
import React from "react";


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};
const images = [
    {
        url:'https://terpnetwork.medium.com/',
        image:'',
        text:'Wallet Setup Guide'
    },
    {
        url:'',
        image:'',
        text:'TERP Staking Guide'
    },
   
];

const Blogs = ({ deviceType }) => {
    return (
        <section className="stay-updated terp">
            <div className="container">
                <p className="title">Tutorials</p>
                <Carousel
                    ssr
                    partialVisbile
                    deviceType={deviceType}
                    itemClass="image-item"
                    responsive={responsive}
                    autoPlay={false}
                >
                    {images.slice(0, 5).map(image => {
                        return (
                            <>
                            <a href={image.url} rel="noopener noreferrer"
                               target="_blank"
                               key={image.url}
                               className="button">
                                <img
                                    draggable={false}
                                    alt={image.image}
                                    style={{ width: "100%", height: "100%" }}
                                    src={image.image}
                                />
                                <div className={'blog-title'}>
                                    <a href={image.url} target="_blank" rel="noopener noreferrer">{image.text}</a>
                                </div>
                            </a>



                            </>
                        );
                    })}
                </Carousel>
            </div>
        </section>
    );
};

export default Blogs;
