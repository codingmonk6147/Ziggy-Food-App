import { resturantList } from "../constant";
import ResturantCard from "./RestrurantCard";

import { useEffect, useState } from "react";

import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function filterData(searchTxt, resturants) {
  console.log(resturants);

  //   const filteredData = resturants.filter((resturant) => {
  //     return resturant.info.name.includes(searchTxt);
  //   });

  // Proper multiple search working code -- no need for resturants
  const filteredData = resturantList.filter((resturant) => {
    return resturant.info?.name
      .toLowerCase()
      ?.includes(searchTxt.toLowerCase());
  });

  return filteredData;
}

const Body = () => {
  //   let searchTxt = "Burger";
  const [allRestaurants, setAllRestuarants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");

  useEffect(() => {
    // console.log("useEfect");

    // Best for API calls
    getRestaurantsData();
  }, []);
  //   console.log("render");

  async function getRestaurantsData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8438478&lng=77.6347342&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    console.log("jsonData",jsonData);
    setAllRestuarants(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurants(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }
  console.log("filtered resto",filteredRestaurants);
  // if(filteredRestaurants?.length===0) return <h1>No Resturant Found!!!</h1>;
  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container p-5 bg-purple-300 my-5 flex flex-row justify-center mx-2 ">
        <input
          type="text"
          className="search-input rounded-md py-1"
          placeholder="Search"
          value={searchTxt}
          onChange={(e) => {
            setSearchTxt(e.target.value);
          }}
        />
        <button
          className="search-btn bg-purple-800 text-white mx-2 p-2 rounded-md "
          onClick={() => {
            const data = filterData(searchTxt, allRestaurants);
            // console.log(data);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="flex flex-wrap">
        {filteredRestaurants?.map((resturant) => {
          return (
            <Link to={"/restaurant/" + resturant.info?.id}   key={resturant.info?.id}>
              <ResturantCard
                {...resturant.info}
            
              ></ResturantCard>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
