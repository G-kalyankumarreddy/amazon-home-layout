import { AiOutlineMenu,AiOutlineSearch,AiOutlineShoppingCart} from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";

import './index.css'

const ribbonOptions=["Amazon miniTV","Sell","Best Sellers", "Today's Deals","Mobiles","New Releases",
                      "Customer Service","Prime","Electronics","Home & Kitchen","Gift Ideas"]

const Header=()=>{
    
    // to display select address in medium and large devices
    const toSelectAddressAndLocation=()=>{
        return(
            <div className="location-container">
                <HiOutlineLocationMarker color="white" fontSize={"20px"}/>
                <div>
                    <p className="hello-msg">Hello</p>
                    <p className="address">Select your address</p>
                </div>
            </div>
        )
    }

    // to display country, account and return orders options 
    const toDisplay=()=>{
        return(
            <div className="flag-and-account-details-container">
               <div className="flag-and-language-container">
                <img src="https://res.cloudinary.com/kalyankumar/image/upload/v1689041050/icons8-india-flag-48_faz52s.png"
                 alt="flag-icon" className="flag-icon"/>
                <p className="language">EN</p>
               </div>
               
                <div className="description-container">
                    <p className="subtitle">Hello, sign in</p>
                    <p className="title">Account & Lists</p>
               </div>
               <div className="description-container">
                    <p className="subtitle">Returns</p>
                    <p className="title">& Orders</p>
               </div>
               
            </div>
        )
    }

    const toDisplaySearchBar=(classNameProps)=>{
        return(
            <div className={`${classNameProps}`}>
                <div className="category-selector-container"> <p className="category-selector">All</p> </div>
                <input placeholder="Search Amazon.in" className="search-input"/>
                <div className="search-icon-container">
                    <AiOutlineSearch/>
                </div>
            </div>
        )
    }
    
    // to display ribbon for medium and larger devices
    const toDisplayHeaderRibbon=()=>{
        return(
            <div className="header-ribbon-container">
                <div className="ribbon-menu-icon-container">
                    <AiOutlineMenu color="white" fontSize={"20px"} fontWeight={"900"}/>
                    <p className="ribbon-menu-all-option">All</p>
                </div>
                {ribbonOptions.map((eachOption)=>(
                    <p className="ribbon-options">{eachOption}</p>
                ))}
            </div>
        )
    }

    //to display shopby  ribbon 
    const toDisplayShopByRibbon=()=>{
        return(
            <div className="shop-by-container">
                <span>Shop By</span>
                <div className="shop-by-options-container">
                    <p className="shop-by-options">Category</p>
                    <p className="shop-by-options">Wish List</p>
                    <p className="shop-by-options">Deals</p>
                    <p className="shop-by-options">Sell</p>
                </div>
            </div>
        )
    }

    return(
       <>
        <header className="header">
           <div className="left-nav-container">
           <div className="menu-icon-container">
           <AiOutlineMenu fontSize={"26px"} color="white"/>
           </div>
           <div className="logo-container">
            <img src="https://cdn.freebiesupply.com/images/large/2x/amazon-logo-white.png" 
            className="amazon-logo"
            alt="amazon"/>
            <span className="logo-text">.in</span>
           </div>
           </div>
           {toSelectAddressAndLocation()}
           {toDisplaySearchBar("search-container")}
           {toDisplay()}
           <div className="right-nav-container">
           <div className="profile-container">
            <p className="profile-name">Sign in </p>
            <FaRegUser fontSize={"20px"} color="white"/>
           </div>
           <AiOutlineShoppingCart color="white" fontSize={"25px"}/>
           </div>
        </header>
        {/* for above medium devices */}
        <div className="small-devices-search-container">{toDisplaySearchBar("smaller-devices-search-bar")}</div>
        {toDisplayShopByRibbon()}
        {toDisplayHeaderRibbon()}
       </>
    )
}

export default Header