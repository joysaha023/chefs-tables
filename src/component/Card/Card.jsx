import React from "react";
import './card.css'

const Card = ({item}) => {
    const {recipe_image, recipe_name, short_description, ingredients, preparing_time, calories} = item
  return (
    <div>
      <div>
        <div className="card w-full border-[1px] bg-base-100 ">
          <figure className="p-4 w-[100%] h-[100%]">
            <img className=""
              src={recipe_image}
              alt={recipe_name}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl font-bold">{recipe_name}</h2>
            <p className="text-base font-normal text-[#150B2B99]">{short_description}</p>
            <hr className="my-2"/>
            <div>
                <p className="text-lg font-medium mb-2">Ingredients: {ingredients.length}</p>
                <ul className="pl-4 text-[#150B2B99]">
                    {
                        ingredients.map((list, idx) => (<li className="list-disc text-sm mb-1" key={idx}>{list}</li>) )
                    }
                </ul>
            </div>
            <hr className="my-2"/>
            <div>
                <div>
                    
                </div>
                <div>

                </div>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
