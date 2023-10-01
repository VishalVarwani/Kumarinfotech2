import React from 'react'
import "./stylee.css"
import {Link} from 'react-router-dom'
export default function Ecommerce() {
  const brands = [
    { logoUrl: 'http://logos-download.com/wp-content/uploads/2016/09/Flipkart_logo.png' },
    { logoUrl: 'https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png' },
    { logoUrl: 'https://purepng.com/public/uploads/large/purepng.com-ebay-logologobrand-logoiconslogos-251519938326w1a5t.png' },
    { logoUrl: 'https://1000marcas.net/wp-content/uploads/2020/02/Walmart-logo-5.png' },
    { logoUrl: 'http://logos-download.com/wp-content/uploads/2016/09/Myntra_logo.png' },


    // Add more brands and their logo URLs
  ];
  
  return (
    <div>
        <div  style={{marginTop:"100px"}} className="breadcumb-area">
  <div className="container">
    
    <div className="row" style={{marginTop:"-50px"}}>
      <div className="col-md-22 txtc text-center cca">
        <div className="brpt">
          <h2>E-commerce</h2>
        </div>
        <div className="breadcumb-inner">
          
          <ul>
            
            <li><Link to="/">Home</ Link></li>
            <li><i className="icofont-thin-right" /></li>
            <li><span className="current">E-Commerce</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
      {/* About Start */}
<div style={{visibility: "visible"}} className="py-5">
  <div className="">
    <div className="row g-5" style={{marginLeft:"59px", marginRight:"59px"}} >
      <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
        <div style={{visibility: "visible", minHeight:"400"}} className="position-relative overflow-hidden h-100">
          <img className="position-absolute w-100 h-100 pt-5 pe-5" src="https://digitalmediathoughts.com/wp-content/uploads/2018/12/2c8204e52f9d637c7f7910c03e1e36fb.jpeg" alt style={{objectFit: 'cover'}} />
        </div>
      </div>
      <div style={{visibility: "visible", backgroundColor:"" }} className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
        <div className="h-100">
          <div style={{backgroundColor: "red"}}className="d-inline-block rounded-pill  text-white py-1 px-3 mb-3">E-commerce Listing Service</div>
          <h1 className="display-6 mb-5">Welcome To Kumarinfotech- Digital Marketing Agency and Website Development Service Provider</h1>
          
          <p className="mb-5">Kumarinfotech is a group of self-motivated & passionate teams. With our expertise and experience we guide each and every client to promote & advertise their sell products online which will help to generate more sell. We do product listing in many more platform ecommerce site. We are best team to provide <b>product listing service</b> in mumbai. We are providing data feed management service for all ecommerce platform. We are uploading data as per SEO content that makes product to show in front of customers and its generate more and more sales for our clients.

</p>
<p className="mb-5">Kumarinfotech save Ecommerce retailer time and grow more sales by feeding data in many ecommerce platforms. We are doing lisitng for global as well as India country. We do listing in Amazon, Ebay, walmart, flipkart, and many more platform.


</p>
        
          <Link style={{backgroundColor: "#402971"}} className="witr_btn " to="/contacts">
            Contact Us
            <div className="bg-red text-primary rounded-circle ms-2">
            </div>
          </Link>
        </div>
      </div>
    </div>
  </div>
  <h2 style={{textAlign:"center", marginTop:"70px", fontFamily: "Arial, sans-serif",
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
    textTransform: "uppercase",
    letterSpacing: "1px", lineHeight: "1.4",
}}>ECommerce Listing Service & Cataloging Services To The Following Portals
</h2>
  <div style={{boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px", backgroundColor: "#f9f9f9",
    padding: "20px", fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
    textTransform: "uppercase",
    letterSpacing: "1px", lineHeight: "1.4",
    marginBottom: "40px",}} className="brand-logos">
    
      {brands.map((brand, index) => (
        <div key={index} className="brand-logo">
          <img src={brand.logoUrl} alt={brand.name} />
        </div>
      ))}
    </div>
</div>
{/* About End */}
    </div>
  )
}
