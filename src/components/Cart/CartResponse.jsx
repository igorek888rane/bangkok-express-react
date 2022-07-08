import React from 'react';
import style from './../Modal/Modal.module.css'
import styleBtn from './Cart.module.css'

const CartResponse = ({setActive}) => {
    return (
        <div>
            <div className={style.modal__body_inner}>
                <p>
                    Order successful! Your order is being cooked :) <br/>
                    We’ll notify you about delivery time shortly.<br/>
                    <img src="https://bangkok-express.herokuapp.com/assets/delivery.gif" alt=''/>
                </p>
            </div>
            <div className={style.modal__buttons}>
                <button type="button"
                        className={styleBtn.button}
                        onClick={() => {
                            document.body.className = ''
                            setActive(false)
                        }}>
                    BACK TO HOMEPAGE
                </button>
            </div>
        </div>
    );
};

export default CartResponse;


