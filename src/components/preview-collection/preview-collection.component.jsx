import './preview-collection.styles.scss'
import React from 'react';
import CollectionItem from '../collection-item/collection-item.component.jsx'

const CollectionPreview = ({title, items}) => (
    <div className="collection-preview">
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            
            {
            items.filter(item => item.id<5).map(({id, ...otherItemProps})  => (
            <CollectionItem key={id} {...otherItemProps} >
            </CollectionItem>
            ))
            }
        </div>
    </div>
)

export default CollectionPreview