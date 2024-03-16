import React from "react";

const Cart = ({carts}) => {
    
  return (
    <div>
      <div className="border-[1px] rounded-2xl">
            <div>
                <h1 className="text-[24px] text-center mt-8 mb-4 font-bold">Want to cook: </h1>
                <hr className="my-2"/>
                <div className="flex justify-evenly  "> 
                    <p className="text-base font-medium text-[#150B2B99]">Name</p>
                    <p  className="text-base font-medium text-[#150B2B99]">Time</p>
                    <p  className="text-base font-medium text-[#150B2B99] lg:mr-8">Calories</p>
                </div>
                <div>
                    {
                        carts.map((item, index) => (
                            <div key={index} className="flex justify-between px-1 lg:px-4">
                                <p>{index + 1}.</p>
                                <h2>{item.recipe_name.slice(0, 16)}</h2>
                                <h3>{item.preparing_time}</h3>
                                <h4>{item.calories.slice(0, 7)}</h4>
                                <button className="btn btn-sm rounded-full bg-[#0BE58A]">Preparing</button>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div>

            </div>
      </div>
    </div>
  );
};

export default Cart;
