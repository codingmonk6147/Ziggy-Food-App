import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_URL } from "../constant";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  // const params = useParams();
  // const {id} = params;
  const { restId } = useParams();

  const restaurant = useRestaurant(restId);
  const restaurantMenu = useRestaurantMenu(restId);


//   useEffect(() => {
//     getRestaurantMenu();
//   }, []);
  const dispatch = useDispatch();

const addFoodItem = (item) => {
  dispatch(addItem(item));
}

  return !restaurant?<Shimmer/>:(
    <>
      <div className="flex flex-col flex-wrap">
        <h1>{"Resturant id  : " + restId}</h1>
        <h1>Details</h1>
        <h2>{restaurant.name}</h2>
        <img  className="w-64"src={IMG_URL + restaurant.cloudinaryImageId}/>
        <h2>{restaurant.area}</h2>
        <h2>{restaurant.city}</h2>
        <h2>{restaurant.avgRating}</h2>
        <h2>{restaurant.costForTwoMsg}</h2>
      </div>
      <div className="flex flex-col flex-wrap">
        <h1>Recommended Items </h1>
                        <ul>
                          {
                            restaurantMenu?.itemCards?.map((item)=>{
                              return  <li key={item?.card?.info?.id}>{item?.card?.info?.name}- <button className="p-1 m-2 bg-green-300" onClick={() => addFoodItem(item)}>Add</button></li>
                            })
                          }
                        </ul>
      </div>
    </>
  );
};

export default RestaurantMenu;
