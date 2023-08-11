

import { IMG_URL } from "../constant";



const FoodItem = ({name,description,price,imageId}) => {

  
    return(
        <div className="w-52 p-2 m-2 shadow-lg">
             <img
          src={
            IMG_URL +
           imageId
          }
        />
            <h2  className="font-bold text-xl">
                {name}
            </h2>
            <p><span className="font-bold"> Description :</span> {description}</p>
            <h4><span className="font-bold">Price :</span>  {price/100}</h4>
       
        </div>
    );
};

export default FoodItem;