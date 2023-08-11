
import { useState,useEffect } from "react";

const useRestaurantMenu = (restId) => {

    const [restaurantMenu, setRestaurantMenu] = useState([]);



    useEffect(() => {
        getRestaurantMenu();
      }, []);

      async function getRestaurantMenu() {
        const data = await fetch(
          "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6126255&lng=77.04108959999999&restaurantId=" + restId
        );
        // console.log("response",data);
        const json = await data.json();
        // console.log(json);
    
        const restaurantData = json?.data?.cards;
    
        const menuItems =
          restaurantData[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
            ?.map((x) => x.card?.card)
            ?.filter(
              (x) =>
                x["@type"] ==
                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
            );
    
        console.log("menuitems", menuItems[0]);
        setRestaurantMenu(menuItems[0]);
      }
    

return restaurantMenu;
}

export default useRestaurantMenu;