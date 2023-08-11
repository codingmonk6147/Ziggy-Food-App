import React from "react";
import FoodItem from "./FoodItem";
import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";
const { useSelector } = require("react-redux");

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();

  const handleRemoveItem = (item) => {
    console.log("handleRemoveItem is receiving : " , item);
    dispatch(removeItem(item));
  };
  return (
    <div>
      <h1 className="font-bold text-3xl">Cart items- {cartItems.length}</h1>
      <div className="flex flex-wrap">
        {cartItems.map((item) => (
          <div key={item?.card?.info?.id} className="flex items-center mb-4">
            <FoodItem {...item?.card?.info} />
            <button
              className="bg-red-600 ml-2 px-2 py-1 text-white rounded"
              onClick={() => handleRemoveItem(item)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      {/* <FoodItem {...cartItems[0]?.card?.info}/> */}
    </div>
  );
};

export default Cart;
