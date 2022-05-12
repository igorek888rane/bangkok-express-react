import React, { useState } from "react";
import style from "./Slider.module.css";
import SliderEl from "./SliderEl/SliderEL";

const Slider = (props) => {
  let [sliderState, setSlider] = useState({
    sliders: [
      {
        name: "Penang shrimp",
        price: 16,
        image: "https://course-jsbasic.javascript.ru/assets/carousel/penang_shrimp.png",
        id: "penang-shrimp",
      },
      {
        name: "Chicken cashew",
        price: 14,
        image: "https://course-jsbasic.javascript.ru/assets/carousel/chicken_cashew.png",
        id: "chicken-cashew",
      },
      {
        name: "Red curry veggies",
        price: 12.5,
        image: "https://course-jsbasic.javascript.ru/assets/carousel/red_curry_vega.png",
        id: "red-curry-veggies",
      },
      {
        name: "Chicken springrolls",
        price: 6.5,
        image: "https://course-jsbasic.javascript.ru/assets/carousel/chicken_loempias.png",
        id: "chicken-springrolls",
      },
    ],
    transform: 0,
    leftArrow: "none",
    rightArrow: "",
    currentIndex: 0,
  });
  let sliderEl = sliderState.sliders.map((slide) => <SliderEl slide={slide} key={slide.id} />);

  let nextSlide = () => {
    let stateNext = {
      ...sliderState,
      transform: sliderState.transform + 988,
      leftArrow: "",
      currentIndex: sliderState.currentIndex + 1,
    };
    setSlider(stateNext);
    if (stateNext.currentIndex === stateNext.sliders.length - 1) {
      stateNext.rightArrow = "none";
    }
  };
  let prevSlide = () => {
    let statePrev = {
      ...sliderState,
      transform: sliderState.transform - 988,
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
          style={{ display: sliderState.rightArrow }}
        >
          <img src="https://course-jsbasic.javascript.ru/assets/icons/angle-icon.svg" alt="icon" />
        </div>
        <div
          className={`${style.carousel__arrow}  ${style.carousel__arrow_left}`}
          onClick={prevSlide}
          style={{ display: sliderState.leftArrow }}
        >
          <img src="https://course-jsbasic.javascript.ru/assets/icons/angle-left-icon.svg" alt="icon" />
        </div>

        <div className={style.carousel__inner} style={{ transform: `translateX(-${sliderState.transform}px)` }}>
          {sliderEl}
        </div>
      </div>
    </div>
  );
};

export default Slider;
