import React from "react";
import { CiStopwatch } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";
import './card.css'

const Card = ({item, handleCookClick}) => {
    const {recipe_image, recipe_name, short_description, ingredients, preparing_time, calories} = item
  return (
    <div>
      <div>
        <div className="card w-full border-[1px] bg-base-100 ">
          <figure className="p-4 w-[100%]  h-[100%]">
            <img className="rounded-2xl"
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
            <div className="flex justify-start mb-6 gap-4">
                <div className="flex items-center gap-1">
                <CiStopwatch />
                <p className="text-sm">{preparing_time} minutes</p>
                </div>
                <div className="flex items-center gap-1">
                <AiOutlineFire />
                <p className="text-sm">{calories} calories</p>
                </div>
            </div>
            <div className="card-actions justify-start">
              <button onClick={() => handleCookClick(item)} className="btn btn-md rounded-full bg-[#0BE58A]">Want to Cook</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
