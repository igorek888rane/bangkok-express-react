import React from 'react';
import style from './Cart.module.css'
import {useFormik} from "formik";
const Cart = () => {

    const formik = useFormik({
        initialValues :{
            name:'Igor Tsuker',
            email:'Igor@gmail.com',
            tel:'+79057777777',
            address:'Pyatigorsk',

        },
        onSubmit :values => {
            console.log(values)
        }
    })

    return (
        <>
        <div className={style.cart_product}>
            <div className={style.cart_product__img}>
                <img src="" alt="product"/>
            </div>
            <div className={style.cart_product__info}>
                <div className={style.cart_product__title}></div>
                <div className={style.cart_product__price_wrap}>
                    <div className={style.cart_counter}>
                        <button type="button" className={`${style.cart_counter__button}`}>
                            <img src="https://course-jsbasic.javascript.ru/assets/icons/square-minus-icon.svg" alt="minus"/>
                        </button>
                        <span className={style.cart_counter__count}></span>
                        <button type="button" className={`${style.cart_counter__button}`}>
                            <img src="https://course-jsbasic.javascript.ru/assets/icons/square-plus-icon.svg" alt="plus"/>
                        </button>
                    </div>
                    <div className={style.cart_product__price}></div>
                </div>
            </div>
        </div>
        <form onSubmit={formik.handleSubmit} className={style.cart_form}>
            <h5 className={style.cart_form__title}>Delivery</h5>
            <div className={`${style.cart_form__group} ${style.cart_form__group_row}`}>
                <input name="name" type="text" className={style.cart_form__input}
                       placeholder="Name" required
                       value={formik.values.name}
                       onChange={formik.handleChange}/>
                <input name="email" type="email" className={style.cart_form__input}
                       placeholder="Email"
                       required
                       value={formik.values.email}
                       onChange={formik.handleChange}/>
                <input name="tel" type="tel" className={style.cart_form__input}
                       placeholder="Phone"
                       required
                       value={formik.values.tel}
                       onChange={formik.handleChange}/>
            </div>
            <div className={style.cart_form__group}>
                <input name="address" type="text" className={style.cart_form__input}
                       placeholder="Address"
                       required
                       value={formik.values.address}
                       onChange={formik.handleChange}/>
            </div>
            <div className={style.cart_buttons}>
                <div className={`${style.cart_buttons__button} ${style.btn_group}`}>
                    <div className={style.cart_buttons__info}>
                        <span className={style.cart_buttons__info_text}>total</span>
                        <span className={style.cart_buttons__info_price}></span>
                    </div>
                    <button type="submit" className={`${style.cart_buttons__button} ${style.btn_group__button} ${style.button}`}>
                        order
                    </button>
                </div>
            </div>
        </form>
        </>
    );
};

export default Cart;