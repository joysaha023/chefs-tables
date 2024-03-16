import React from "react";

const Cart = ({carts, handlePreparingBtn, preparing, totalTime, totalCal}) => {
    
  return (
    <div>
      <div className="border-[1px] rounded-2xl">
            <div>
                <h1 className="text-[24px] text-center mt-8 mb-4 font-bold">Want to cook: {carts.length}</h1>
                <hr className="my-2"/>
                <div className="flex justify-evenly  "> 
                    <p className="text-base font-medium text-[#150B2B99]">Name</p>
                    <p  className="text-base font-medium text-[#150B2B99]">Time</p>
                    <p  className="text-base font-medium text-[#150B2B99] lg:mr-8">Calories</p>
                </div>
                <div>
                    {
                        carts.map((item, index) => (
                            <div key={index} className="flex justify-between px-1 text-[#150B2B99] bg-[#28282808] fira-font pb-2 pt-4 lg:px-4">
                                <p>{index + 1}.</p>
                                <h2>{item.recipe_name.slice(0, 16)}</h2>
                                <h3>{item.preparing_time} min</h3>
                                <h4>{item.calories} cal</h4>
                                <button onClick={() => handlePreparingBtn(item)} className="btn btn-sm rounded-full bg-[#0BE58A]">Preparing</button>
                            </div>
                        ))
                    }
                </div>
                <h1 className="text-[24px] text-center mt-6 mb-4 font-bold">Currently cooking:{preparing.length} </h1>
                <hr className="my-2"/>
                <div className="flex justify-evenly  "> 
                    <p className="text-base font-medium text-[#150B2B99]">Name</p>
                    <p  className="text-base font-medium text-[#150B2B99] ml-8">Time</p>
                    <p  className="text-base font-medium text-[#150B2B99] ">Calories</p>
                </div>
                <div>
                     {
                        preparing.map((list, idx) => (
                            <div key={idx} className="flex justify-start gap-6 px-1 text-[#150B2B99] bg-[#28282808] fira-font pb-2 pt-4 lg:px-8">
                                <p>{idx + 1}.</p>
                                <h2>{list.recipe_name.slice(0, 16)}</h2>
                                <h3 className="lg:mr-8">{list.preparing_time} min</h3>
                                <h4>{list.calories} cal</h4>
                               
                            </div>
                        ))
                     }
                </div>
                <hr className="my-2"/>
                <div className="flex justify-end pr-10 gap-4">
                    <p className="font-medium text-center text-base text-[#282828CC]">Total Time = <br/> {totalTime} min </p>
                    <p className="font-medium text-center text-base text-[#282828CC]">Total Calories = <br /> {totalCal} cal </p>
                </div>
            </div>
            <div>

            </div>
      </div>
    </div>
  );
};

export default Cart;
