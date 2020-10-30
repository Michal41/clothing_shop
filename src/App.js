import React from 'react';
import { Route, Switch,Redirect, StaticRouter,  } from 'react-router-dom';
import './App.css';
import Homepage from "./pages/homepage/homepage.component.jsx"
import ShopPage from "./pages/shop/shop.component.jsx"
import Header from './components/header-componetnt/header-component.jsx'
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx"
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from 'react-redux';
import {setCurrentUser} from './reudx/user/user.actions';
import {selectCurentUser} from "./reudx/user/user.selector";
import {selectCartItemsCount} from "./reudx/cart/cart-selector";
import {createStructuredSelector} from "reselect";
import CheckoutPage from "./pages/checkout/checkout.component";


class App extends React.Component{

  
  unsubscribeFromAuth = null;

  componentDidMount(){

    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => { 
      if(userAuth){
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot( (snapShot) => {
        
        setCurrentUser({
            id:snapShot.id,
            ...snapShot.data()
        });
      });
    
    }

    setCurrentUser(userAuth);

    });

    
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    return(
    <div>
      <Header></Header>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route exact path='/signin' render={()=>( this.props.currentUser ? (<Redirect to="/"/>) : (<SignInAndSignUpPage/>))}/>
        <Route exact path='/checkout' component={CheckoutPage}/>
      </Switch>
    </div>      
    )
  }
}


const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurentUser,
  cartItemCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});


export default connect(mapStateToProps,mapDispatchToProps)(App);
