import React from 'react';
import './shop.date.js'
import './shop.styles.scss'
import SHOP_DATA from './shop.date.js';
import CollectionPreveiw from "../../components/preview-collection/preview-collection.component.jsx"
class ShopPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            collections: SHOP_DATA
        };

    }

    render(){
        const { collections } = this.state;
        return(
            <div className='shop-page'>
                {
                    collections.map( ({id, ...otherProps}) => 
                    (
                        <CollectionPreveiw key={id} {...otherProps} />
                    ))
                }
            </div>
        )
    }
}

export default ShopPage;