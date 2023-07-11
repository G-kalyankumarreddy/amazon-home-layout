import "./index.css"

import PrdouctCard from "../ProductCard";
import SignInCard from "../SignInCard";

const productsList=[
    {id:1,title:"Revamp your home in style",
    products:[{image:"https://res.cloudinary.com/kalyankumar/image/upload/v1689070129/ecommerce/bedsheets_d1hqsx.png",
             name:"Bedsheets & Curtains"},
             {image:"https://res.cloudinary.com/kalyankumar/image/upload/v1689070128/ecommerce/home_decoration_idmgn6.png",
             name:"Home Decoration"}]},
    {id:2,title:"Appliances for your home | up to 55% off",
    products:[{image:"https://res.cloudinary.com/kalyankumar/image/upload/v1689070128/ecommerce/air_conditioners_gfohje.png",
    name:"Air Conditioners"},
    {image:"https://res.cloudinary.com/kalyankumar/image/upload/v1689070127/ecommerce/refrigators_crez8v.png",
    name:"Refrigirators"}]},
    {id:3,title:"Up to 70% off | Baby essentials & toys",
    products:[{image:"https://res.cloudinary.com/kalyankumar/image/upload/v1689070128/ecommerce/diapors_tvkz6k.png",
    name:"Starting 99 | Daipers, wipes"},
    {image:"https://res.cloudinary.com/kalyankumar/image/upload/v1689070127/ecommerce/toys_svpzdj.png",
    name:"Starting 150 | Baby & toddler toys"}]}
]

const ProductsList=()=>{
    return(
        <ul className="products-details-list-styling">
            {productsList.map(eachProduct=>(
                <li key={eachProduct.id}>
                    <PrdouctCard productDetails={eachProduct}/>
                </li>
            ))}
            <li><SignInCard/></li>
        </ul>
    )
}

export default ProductsList