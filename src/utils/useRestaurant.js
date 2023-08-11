
import { useState,useEffect } from "react";

const useRestaurant = (restId) => {

    const [restaurant, setRestaurant] = useState({});



    useEffect(() => {
        getRestaurantInfo();
      }, []);

    async function getRestaurantInfo() {
        const data = await fetch(
          "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6126255&lng=77.04108959999999&restaurantId=" + restId
        );
        // console.log("response",data);
        const json = await data.json();
        // console.log(json);
    
        const restaurantData = json?.data?.cards;
    
   
        setRestaurant(restaurantData[0]?.card?.card?.info);

}

return restaurant;
}

export default useRestaurant;