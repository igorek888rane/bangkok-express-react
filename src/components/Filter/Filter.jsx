import React, {useRef, useState} from "react";
import style from "./Filter.module.css";
import {computePosition} from "../../utils/computePosition";

const Filter = ({checkbox, setCheckbox, value, setValue, steps}) => {

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
        <div className={style.filters}>
            <div className={style.filters__inner}>
                <div className={style.filters__group}>
                    <label className={style.filters__label}>Max spiciness</label>
                    <div className={style.filters__slider}>
                        <div className={style.container}>
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
                        </div>
                    </div>
                </div>
                <div className={style.filters__group}>
                    <div className={style.filters__checkbox}>
                        <input className={style.styled_checkbox} id="nuts-checkbox" type="checkbox"
                               value={checkbox.nuts}
                               onChange={(e) => setCheckbox({...checkbox, nuts: e.target.checked})}/>
                        <label htmlFor="nuts-checkbox">
                            <span className={style.filters__label}>No nuts</span>
                        </label>
                    </div>
                </div>
                <div className={style.filters__group}>
                    <div className={style.filters__checkbox}>
                        <input className={style.styled_checkbox} id="vegeterian-checkbox" type="checkbox"
                               value={checkbox.vegeterian}
                               onChange={(e) => setCheckbox({...checkbox, vegeterian: e.target.checked})}/>
                        <label htmlFor="vegeterian-checkbox">
                            <span className={style.filters__label}>Vegeterian only</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Filter;


// <span className={style.slider__step_active}></span>