import React from "react";
import style from "./Filter.module.css";
import StepSlider from "./StepSlider";

const Filter = ({checkbox, setCheckbox, value, setValue}) => {

    return (
        <div className={style.filters}>
            <div className={style.filters__inner}>
                <div className={style.filters__group}>
                    <label className={style.filters__label}>Max spiciness</label>
                    <div className={style.filters__slider}>
                            <StepSlider steps={[0, 1, 2, 3, 4]} value={value} setValue={setValue}/>
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


