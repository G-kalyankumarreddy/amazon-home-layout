import './index.css'

const PrdouctCard=({productDetails})=>{
    const{title,products}=productDetails
    return(
        <div className='product-card-styling'>
            <h1 className="title-styling">{title}</h1>
            <div className="products-details-styling">
            {products.map(eachProduct=>(
               <div className="individual-product">
                 <img className="product-image" src={eachProduct.image} alt={eachProduct.title}/>
                 <p className="product-name">{eachProduct.name}</p>
               </div>
            ))}
            </div>
           
        </div>
    )
}


export default PrdouctCard