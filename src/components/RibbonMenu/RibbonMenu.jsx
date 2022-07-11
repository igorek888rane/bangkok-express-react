import React, {useState} from "react";
import style from "./RibbonMenu.module.css";
import RibbonMenuEl from "./RibbonMenuEl/RibbonMenuEl";
import arrow from "../../assets/angle-icon.svg";


const RibbonMenu = ({categories, setCategories}) => {

    const [positionNav, setPosition] = useState({left: 0, visibleRight: true, visibleLeft: false});


    const activeClass = (category) => {
        let copyArrayCategories = JSON.parse(JSON.stringify(categories));
        copyArrayCategories.forEach((el) => (el.id === category.id ? (el.active = true) : (el.active = false)));
        setCategories(copyArrayCategories);
    };

    let RibbonEl = categories.map((category) => (
        <RibbonMenuEl active={activeClass} category={category} key={category.id}/>
    ));

    const scrollRightNav = () => {
        let copyState = {...positionNav, left: positionNav.left - 265, visibleLeft: true};
        setPosition(copyState);



        if (copyState.left === -530 ) {
            copyState.visibleRight = false;
        }


    };
    const scrollLeftNav = () => {
        let copyState = {...positionNav, left: positionNav.left + 265, visibleRight: true};
        setPosition(copyState);


        if (copyState.left === 0) {
            copyState.visibleLeft = false;
        }

    };


    return (
        <>
            <h2 className={style.section_heading}>Our Menu</h2>
            <div className={style.ribbon}>
                <button
                    className={
                        positionNav.visibleLeft
                            ? `${style.ribbon__arrow} ${style.ribbon__arrow_left} ${style.ribbon__arrow_visible} `
                            : `${style.ribbon__arrow} ${style.ribbon__arrow_left}  `
                    }
                    onClick={scrollLeftNav}
                >
                    <img src={arrow} alt="icon"/>
                </button>
                <nav className={style.ribbon__inner}
                     style={{left: `${positionNav.left}px`}}>
                    {RibbonEl}
                </nav>
                <button
                    className={
                        positionNav.visibleRight
                            ? `${style.ribbon__arrow} ${style.ribbon__arrow_right} ${style.ribbon__arrow_visible} `
                            : `${style.ribbon__arrow} ${style.ribbon__arrow_right}  `
                    }
                    onClick={scrollRightNav}
                >
                    <img src={arrow} alt="icon"/>
                </button>
            </div>
        </>
    );
};

export default RibbonMenu;
