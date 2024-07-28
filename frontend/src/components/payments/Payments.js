import React, { useState } from 'react';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { BiErrorCircle } from 'react-icons/bi';
import { useNavigate, useParams } from 'react-router-dom';
import './Payments.scss'
import { useDispatch } from 'react-redux';
import { resetCart } from '../../redux/cartSlice';
import { axiosClient } from '../../utils/axiosClient';
import { loadStripe } from '@stripe/stripe-js';
import Cart from '../cart/Cart';

function Payments() {
    const params = useParams();
    const status = params.status;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showCart, setShowCart] = useState(false);

    const infoData = {
        success: {
            message: 'Your order has been placed',
            cta: 'Shop More',
            icon: <BsFillCartCheckFill />,
            navigateTo:'/category'
        },
        failed: {
            message: 'Payment Failed',
            cta: 'Try Again',
            icon: <BiErrorCircle />,
        }
    };

    if(status === 'success') {
        dispatch(resetCart())
    };

    const handleButtonClick = () => {
        if (status === 'failed') {
            setShowCart(true);
        } else{
            navigate(infoData.success.navigateTo);
        }
    };

    const handleCloseCart = () => {
        setShowCart(false);
    };
    
  return (
    <div className='Payments'>
        <div className="icon">{infoData[status].icon}</div>
        <h2 className="message">{infoData[status].message}</h2>
        <button className="btn-primary" onClick={handleButtonClick}>{infoData[status].cta}</button>
        {showCart && <Cart onClose={handleCloseCart} />}
    </div>
  )
}

export default Payments






