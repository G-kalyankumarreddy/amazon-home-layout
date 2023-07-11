import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const carousalImages=[
    {name:"under 599",image:"https://res.cloudinary.com/kalyankumar/image/upload/v1689082246/ecommerce/carousal/car3_ucreqy.png"},
    {name:"join prime",image:"https://res.cloudinary.com/kalyankumar/image/upload/v1689082245/ecommerce/carousal/car5_pr0asz.png"},
    {name:"prime day launches",image:"https://res.cloudinary.com/kalyankumar/image/upload/v1689082244/ecommerce/carousal/car4_znorl2.png"},
    {name:"blockbuster hits",image:"https://res.cloudinary.com/kalyankumar/image/upload/v1689082244/ecommerce/carousal/car1_fbzctd.png"},
    {name:"starting at 99",image:"https://res.cloudinary.com/kalyankumar/image/upload/v1689082243/ecommerce/carousal/car2_lxgopk.png"},
]
    



const CarouselRes=()=>{
    return(
        <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={1000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024
            },
            items: 1,
            partialVisibilityGutter: 40
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0
            },
            items: 1,
            partialVisibilityGutter: 30
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464
            },
            items: 1,
            partialVisibilityGutter: 30
          }
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
       	{carousalImages.map(eachImage=>(
        <img src={eachImage.image} alt={eachImage.name} className="image"/>
       ))}
      </Carousel>
    )
}

export default CarouselRes 