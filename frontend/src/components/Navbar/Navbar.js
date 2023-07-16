import "./Navbar.css";
import { IoIosSearch } from "react-icons//io";
import { IoPersonCircleOutline } from "react-icons/io5";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { AiOutlineMenu } from "react-icons/ai";
import LogoIcon from "../../assets/Images/logo.svg";
import Header from "./Header";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-menu">
        <Header />
      </div>

      {/* <div className="navbar-menu">
        <AiOutlineMenu className="navabr-icon" />
   
      </div> */}
      <div className="navbar-logo">
        {/* <span>Coffee Website</span> */}
        <img src={LogoIcon} alt="" />
      </div>
      <div className="navbar-rightSide">
        <IoIosSearch className="navabr-icon" />
        <IoPersonCircleOutline className="navabr-icon" />
        <div className="cartIcon-container">
          <PiShoppingCartSimpleBold className="cartIcon" />
        </div>
      </div>
    </div>
  );
}
