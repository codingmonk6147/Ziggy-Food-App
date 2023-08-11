import React, { lazy, Suspense,useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { IMG_URL } from "./constant";

import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";

import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import store from "./utils/store";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import UserContext from "./utils/UserContext";
import Cart from "./components/Cart";

const Instamart = lazy(()=> import("./components/Instamart"));
const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Bibhuti",
    email: "bibhutibaishya3@gmail.com",
  });

  return (
    <Provider store={store}>
      <UserContext.Provider
        value={{
          user: user,
          setUser: setUser,
        }}
      >
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path:'/',
    element: <AppLayout/>,
    errorElement: <Error/>,
    children:[
      { path:"/",
      element:(<Body/>),
      },
      {
        path:'/about',
        element:<About/>,
       
      },
      ,
      {
        path:'/restaurant/:restId',
        element:<RestaurantMenu/>,
       
      }  ,
      {
        path:'/instamart',
        element:(
          <Suspense fallback={<div>Loading...</div>} >
            <Instamart/>
          </Suspense>
        ),
       
      },
      ,
      {
        path:'/cart',
        element:(

           <Cart/>

        ),
       
      },
     
     
      
  
    ]
    
  },
 
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
