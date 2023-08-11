import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const authenticateUser = () => {
  return false;
};

const Title = () => {
  return (
    <img
      className="w-32"
      alt="logo"
      src="https://logos.flamingtext.com/Name-Logos/Ziggy-design-amped-name.png"
    />
  );
};
const Header = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const cartItems = useSelector(store => store.cart.items);
  // console.log(cartItems);

  return (
    <div className="flex flex-row justify-between  bg-purple-400 shadow-lg">
      <Title />
      <div className="nav-items">
        <ul className="flex flex-row justify-center py-10 ">
          <li>
            <Link to="/" className="px-2">Home</Link>
          </li>
          <li>
            <Link to="/about"  className="px-2">About</Link>
          </li>
          <li>
            <Link to="/contact"  className="px-2">Contact Us</Link>
          </li>
          <li>
            <Link to="/Instamart"  className="px-2">Instamart</Link>
          </li>
          <li>
            <Link to="/Cart"  className="px-2">Cart - {cartItems.length}</Link>
          </li>
        
        </ul>
      </div>
      {isLoggedIn ? (
        <button
          onClick={() => {
            setLoggedIn(false);
          }}
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => {
            setLoggedIn(true);
          }}
        >
          Login
        </button>
      )}
      {/* <button>Login</button>
        <button>Logout</button> */}
    </div>
  );
};

export default Header;
