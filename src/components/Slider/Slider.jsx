import React, {useRef, useState} from "react";
import style from "./Slider.module.css";
import SliderEl from "./SliderEl/SliderEL";
import arrow from './../../assets/angle-icon.svg'
import arrowLeft from './../../assets/angle-left-icon.svg'
const Slider = ({products}) => {

    const [sliderState, setSlider] = useState({
        transform: 0,
        leftArrow: "none",
        rightArrow: "",
        currentIndex: 0,
    });


    const productsSlider = products.filter(product => product.imageForSlider);
    const carouselRef = useRef(0)
    const carouselMove = carouselRef.current.offsetWidth


    const sliderEl = productsSlider.map((slide) => <SliderEl slide={slide} key={slide.id}/>);

    const nextSlide = () => {
        let stateNext = {
            ...sliderState,
            transform: sliderState.transform + carouselMove,
            leftArrow: "",
            currentIndex: sliderState.currentIndex + 1,
        };
        setSlider(stateNext);
        if (stateNext.currentIndex === productsSlider.length - 1) {
            stateNext.rightArrow = "none";
        }
    };
    const prevSlide = () => {
        let statePrev = {
            ...sliderState,
            transform: sliderState.transform - carouselMove,
            rightArrow: "",
            currentIndex: sliderState.currentIndex - 1,
        };
        setSlider(statePrev);
        if (statePrev.currentIndex === 0) {
            statePrev.leftArrow = "none";
        }
    };


    return (
        <div className={style.container}>
            <div className={style.carousel}>
                <div
                    className={`${style.carousel__arrow}  ${style.carousel__arrow_right}`}
                    onClick={nextSlide}
                    style={{display: sliderState.rightArrow}}
                >
                    <img src={arrow} alt="icon"/>
                </div>
                <div
                    className={`${style.carousel__arrow}  ${style.carousel__arrow_left}`}
                    onClick={prevSlide}
                    style={{display: sliderState.leftArrow}}
                >
                    <img src={arrowLeft} alt="icon"/>
                </div>

                <div ref={carouselRef} className={style.carousel__inner}
                     style={{transform: `translateX(-${sliderState.transform}px)`}}>
                    {sliderEl}
                </div>
            </div>
        </div>
    );
};

export default Slider;
