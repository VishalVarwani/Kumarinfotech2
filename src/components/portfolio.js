import React from 'react'
import { Link } from 'react-router-dom'
export default function Portfolio() {
  return (
    <div>
          <div  style={{marginTop:"100px"}} className="breadcumb-area">
  <div className="container">
    
    <div className="row" style={{marginTop:"-50px"}}>
      <div className="col-md-22 txtc text-center cca">
        <div className="brpt">
          <h2>Portfolio</h2>
        </div>
        <div className="breadcumb-inner">
          
          <ul>
            
            <li><Link to="/">Home</ Link></li>
            <li><i className="icofont-thin-right" /></li>
            <li><span className="current">Portfolio</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
<h1 style={{textAlign:"center",}}className="display-9">Our Client Portfolio</h1>

     <div style={{marginTop:"5%", marginLeft:"1%", marginRight:"1%"}} className="card-deck">
     <div  className="card 1">
    <img className="card-img-top" src="assets\images\logo (1).png" alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">XysterDevices</h5>
      <p className="card-text">Designed and developed a cutting-edge website for Xyster Devices to showcase their innovative medical technologies and improve online visibility.</p>
    </div>
  </div>
  <div className="card 1">
    <img className="card-img-top" src="assets\images\pharma.png" alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">Ipsen</h5>
      <p className="card-text">Designed a pharmaceutical website for Ipsen to provide valuable information on their innovative therapies and commitment to improving patients' lives.</p>
    </div>
  </div>
  <div className="card 1">
    <img className="card-img-top" src="assets\images\ditilogo4.png" alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">DITI INSTITUTE</h5>
      <p className="card-text">We developed a modern e-commerce website for Diti Institute to enhance their online presence and boost sales.</p>
    </div>
  </div>
  <div className="card 1">
    <img className="card-img-top" src="assets\images\Screenshot 2023-09-04 123433.png" alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">EraofDesigners</h5>
      <p className="card-text">We designed EraofDesigners's website to improve user experience and increase lead generation.</p>
    </div>
  </div>
  </div>      <div style={{marginTop:"5%", marginLeft:"1%", marginRight:"1%"}} className="card-deck">

  <div className="card 1">
    <img className="card-img-top" src="assets\images\logo.png" alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">Eurotechcare</h5>
      <p className="card-text">Created a dynamic beautiful website for Eurotechcare to establish a strong online brand presence.</p>
    </div>
  </div>
  <div className="card 1">
    <img className="card-img-top" src="assets\images\itbraincomputerlogo.png" alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">itbrainShapers</h5>
      <p className="card-text">Crafted a visually stunning and user-friendly website for itbrainShapers to showcase their services.</p>
    </div>
  </div>


  <div className="card 1">
    <img className="card-img-top" src="assets\images\msworld_institute_education.png" alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">MS World Institute</h5>
      <p className="card-text">Built a comprehensive and user-friendly website for Ms World Institute to provide easy access to course information and resources</p>
    </div>
  </div>
  <div className="card 1">
    <img className="card-img-top" src="assets\images\Screenshot 2023-09-04 123433.png" alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">EraofDesigners</h5>
      <p className="card-text">We designed EraofDesigners's website to improve user experience and increase lead generation.</p>
    </div>
  </div> 
  </div>
  <div style={{marginTop:"5%", marginBottom:"20px",marginLeft:"1%", marginRight:"1%"}} className="card-deck">

  
  <div  className="card ">
    <img className="card-img-top" src="assets\images\vib.png" alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">Vibrant ideas</h5>
      <p className="card-text">Developed a dynamic and engaging website for Vibrant Ideas to showcase their creative services and portfolio.</p>
    </div>
  </div> 
  

  <div className="card ">
    <img className="card-img-top" src="assets\images\logo (2).png" alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">A1 enterprises</h5>
      <p className="card-text">Designed and launched the A1 Enterprises website to offer a seamless online platform for their products and services</p>
    </div>
  </div>
  <div className="card ">
    <img className="card-img-top" src="assets\images\scorp.png" alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">Sc Corp</h5>
      <p className="card-text">Created an immersive Sccorp website to showcase properties, and facilitate seamless property transactions</p>
    </div>
  </div>
  <div className="card ">
    <img className="card-img-top" src="assets\images\LLD_logo.jpg" alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">Laley Digital</h5>
      <p className="card-text">Developed a modern and user-centric website for Laley Digital to showcase their digital marketing services and expertise.</p>
    </div>
  </div>
</div>
    </div>
  )
}
