import { useState,useEffect } from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'

function AddProduct() {

    

    const navigate=useNavigate()

    useEffect(()=>{
        if(!localStorage.getItem('token')){
    
            navigate("/login")
        }
        
       
      },[])

    const [product, setproduct] = useState({productId:"",name:"",price:"",featured:"false",rating:"",company:""})

    const handleClick = async(e)=>{
        e.preventDefault();
        const response = await fetch("https://product-4kdu.onrender.com/product/add", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token":localStorage.getItem('token')
            },
            body: JSON.stringify(product)
        });
        const json = await response.json()
        
        if(json.success){
            navigate('/')
        }else{
            alert('Check all Details properly')
        }
    }


    const onChange = (e)=>{
        setproduct({...product, [e.target.name]: e.target.value})
    }


  return (
    <div>
        <Navbar/>
        <div className="container my-3">
            <h2>Add a Product</h2>
        <form className="my-3"> 
                <div className="mb-3">
                    <label htmlFor="productId" className="form-label">productId</label>
                    <input type="text" className="form-control" id="productId" name="productId" onChange={onChange}  required />
                </div>
                <div className="mb-3">
                    <label htmlFor="Name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" onChange={onChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="Price" className="form-label">Price</label>
                    <input type="number" className="form-control" id="price" name="price"  onChange={onChange} placeholder='Do not add commas between' required />
                </div>
               
                <div className="mb-3">
                    <label htmlFor="Featured" className="form-label">Featured</label>
                    <input type="featured" className="form-control" id="featured" name="featured" onChange={onChange} placeholder='true or false' required />
                </div>
                <div className="mb-3">
                    <label htmlFor="Rating" className="form-label">Rating</label>
                    <input type="number" className="form-control" id="rating" name="rating"  onChange={onChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="Company" className="form-label">Company</label>
                    <input type="text" className="form-control" id="company" name="company"onChange={onChange}   required />
                </div>

                <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Product</button>
            </form>
    </div>

    </div>
  )
}

export default AddProduct