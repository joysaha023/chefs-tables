import React from 'react';
import Card from '../Card/Card';

const Cards = ({cards, handleCookClick}) => {
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           {
            cards.map((item)=> (<Card key={item.recipe_id} handleCookClick={handleCookClick} item={item}></Card>))
           }
            
        </div>
    );
};

export default Cards;