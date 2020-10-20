import React from 'react';
import './header.styles.scss'
import {Link} from 'react-router-dom';
import { ReactComponent as Loggo } from '../../assets/crown.svg'
const Header = () => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Loggo className='logo'></Loggo>
        </Link>
        <div className='options'>
            <Link className='option' to="/shop">Shop</Link>
            <Link className='option' to="/shop">Shop</Link>
            <Link className='option' to="/shop">Shop</Link>
        </div>
    </div>
);

export default Header