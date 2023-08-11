import { IMG_URL } from "../constant";

const ResturantCard = ({name,cuisines,avgRating,cloudinaryImageId}) => {


  
  
    return (
      <div className="w-52 p-2 m-2 shadow-lg">
        <img
          src={
            IMG_URL +
            cloudinaryImageId
          }
        />
        <h2 className="font-bold text-xl">{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{avgRating} stars</h4>
      </div>
    );
  };

  export default ResturantCard;