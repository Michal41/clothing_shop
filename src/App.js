import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from "./pages/homepage/homepage.component.jsx"
import ShopPage from "./pages/shop/shop.component.jsx"
import Header from './components/header-componetnt/header-component.jsx'
const HatsPage = () => (
  <div>
    HatsPagess
  </div>
)
function App() {
  return (
    <div>
      <Header></Header>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
