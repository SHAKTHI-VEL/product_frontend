
import { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
import ProductItem from './ProductItem'
import axios from 'axios'

function Home() {
  const [products, setproducts] = useState([])
  const navigate=useNavigate()
  const fetchProduct=async()=>{
    const response = await axios.get('https://product-4kdu.onrender.com/product/', {
      headers: {
        'Content-Type': 'application/json',
        "auth-token":localStorage.getItem('token')
      },
    

   });
   
    setproducts(response.data.product)
   
  }

  useEffect(()=>{
    if(localStorage.getItem('token')){

      fetchProduct()
    }
    else{
      navigate("/login")
    }
   
  },[])
  
  return (
   <>
    <Navbar/>
    <div>
        <div className="row my-3">
   <h2>
    Products
   </h2>
   <div className="container">
{products.length===0 && 'No products to display'}
   </div>
   {products.map((product)=>
    {
      return <ProductItem  product={product}/>
    }
    )}
    </div>
    </div>
   </>
  )
}

export default Home