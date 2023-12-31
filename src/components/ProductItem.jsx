
function ProductItem(props) {
    const {product}=props
    return (
        <div className="col-md-3">
           <div className="card my-3" >
      <div className="card-body">
        <h5 className="card-title">ProductID:-{product.productId}</h5>
        <p className="card-text">Name:-{product.name}</p>
        <p className="card-text">Price:-₹{product.price}</p>
        <p className="card-text">Featured:-{String(product.featured)}</p>
        <p className="card-text">Rating:-{product.rating.$numberDecimal}</p>
        <p className="card-text">Company:-{product.company}</p>
    

       
      </div>
    </div>
        </div>
      )
}

export default ProductItem