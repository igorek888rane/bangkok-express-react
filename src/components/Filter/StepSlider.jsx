import React from 'react';
import style from "./Filter.module.css";
import {useRef, useState} from "react";
import {computePosition} from "../../utils/computePosition";

const StepSlider = ({steps,value,setValue}) => {


    const segment = steps.length - 1
    const defaultLeft = ((value / segment) * 100)
    const defaultWidth = ((value / segment) * 100)


    const [left, setLeft] = useState(defaultLeft)
    const [width, setWidth] = useState(defaultWidth)
    const [dragging, setDragging] = useState('grab')


    const sliderRef = useRef(0)

    const sliderClick = (e) => {
        setValue(computePosition(e, sliderRef, segment).valueRound)
        setWidth(computePosition(e, sliderRef, segment).valuePercents)
        setLeft(computePosition(e, sliderRef, segment).valuePercents)
    }

    const moveUp =()=>{
        document.onpointermove = (e) => {
            e.preventDefault()
            setValue(computePosition(e, sliderRef, segment).valueRound)
            setWidth(computePosition(e, sliderRef, segment).reletivePercents)
            setLeft(computePosition(e, sliderRef, segment).reletivePercents)
        }
        document.onpointerup = (e) => {
            document.onpointerup = null;
            document.onpointermove = null;
            setDragging('grab')
            setValue(computePosition(e, sliderRef, segment).valueRound)
            setWidth(computePosition(e, sliderRef, segment).valuePercents)
            setLeft(computePosition(e, sliderRef, segment).valuePercents)
        }
    }

    const pointerDown = (e) => {
        e.preventDefault()
        setDragging('grabbing')
        moveUp()
    }

    return (
        <div className={style.slider} ref={sliderRef} onClick={(e) => sliderClick(e)}>
            <div className={style.slider__thumb}
                 style={{left: `${left}%`, cursor: `${dragging} `}}
                 onDragStart={()=>false}
                 onPointerDown={pointerDown}>
                <span className={style.slider__value}>{value}</span>
            </div>

            <div className={style.slider__progress} style={{width: `${width}%`}}></div>

            <div className={style.slider__steps}>
                {steps.map(el => <span key={el}></span>)}
            </div>
        </div>
    );
};

export default StepSlider;