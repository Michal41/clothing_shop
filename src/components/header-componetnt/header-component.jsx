import React from 'react';
import './header.styles.scss'
import {Link} from 'react-router-dom';
import { ReactComponent as Loggo } from '../../assets/crown.svg';
import { auth } from "../../firebase/firebase.utils";
import CardIcon from "../car-icon/cart-icon.component"
import { connect } from "react-redux";
import CartDropdown from "../ cart/cart-dropdown/cart-dropdown.component";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../reudx/user/user.selector"
import { selectCurentUser } from "../../reudx/user/user.selector"

const Header = ({currentUser,hidden}) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Loggo className='logo'></Loggo>
        </Link>
        <div className='options'>
            <Link className='option' to="/shop">Shop</Link>
            <Link className='option' to="/shop">Shop</Link>
            {
                currentUser? (
                    <div className="option" onClick={() => {auth.signOut()} }> Sign Out </div>
                ):(
                    <Link className='option' to="/signin">Sign in</Link>
                )
            }
           <CardIcon/>          
        </div>
        {hidden ? null : (<CartDropdown/>) } 
    </div>
);




const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);