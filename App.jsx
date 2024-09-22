import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const data = [
  {
    "type": "Mens",
    "productName": "Classic White T-Shirt",
    "price": 19.99
  },
  {
    "type": "Mens",
    "productName": "Slim Fit Jeans",
    "price": 49.99
  },
  {
    "type": "Womens",
    "productName": "Floral Maxi Dress",
    "price": 59.99
  },
  {
    "type": "Womens",
    "productName": "High-Waisted Shorts",
    "price": 34.99
  },
  {
    "type": "Child",
    "productName": "Kids Graphic T-Shirt",
    "price": 14.99
  },
  {
    "type": "Child",
    "productName": "Toddler Overalls",
    "price": 29.99
  },
  {
    "type": "Footwear",
    "productName": "Running Sneakers",
    "price": 89.99
  },
  {
    "type": "Footwear",
    "productName": "Leather Boots",
    "price": 129.99
  },
  {
    "type": "Womens",
    "productName": "Casual Blouse",
    "price": 39.99
  },
  {
    "type": "Mens",
    "productName": "Leather Jacket",
    "price": 129.99
  },
  {
    "type": "Child",
    "productName": "Baby Bodysuit",
    "price": 12.99
  },
  {
    "type": "Footwear",
    "productName": "Flip Flops",
    "price": 19.99
  }
]
function App() {
  const [activeTab, setActiveTab] = useState("All")
  const uniqueCategory= [... new Set(data.map((d)=>d.type))]
  return (
    <>
    <div style={{display:"flex"}}>
    <div><button onClick={()=>{setActiveTab("All")}}>All</button></div>
    {uniqueCategory.map((productType)=>(<div><button onClick={()=>{setActiveTab(productType)}}>{productType}</button></div>))}
    </div>
{
  data.filter((product)=>{
    if(activeTab=="All"){
      return product;
    }
    else if(product.type===activeTab){
      return product;
    }}).map((prod)=>(<div className='product'>
      <h3>{prod.productName}</h3>
      <h3>{prod.price}</h3>
      <h3>{prod.type}</h3>
    </div>))
    
}

    </>
  )
}

export default App
