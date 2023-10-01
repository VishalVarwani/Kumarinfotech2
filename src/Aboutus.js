import React from 'react'
import './styles.css'
import TopAddress from './App'
import Footer from './components/footer'
import { Link } from 'react-router-dom'

export default function Aboutus() {
  return (
    <>

<div style={{marginTop:"100px"}}className="breadcumb-area">
  <div className="container">
    
    <div className="row" style={{marginTop:"-50px"}}>
      <div className="col-md-22 txtc text-center cca">
        <div className="brpt">
          <h2>About Us</h2>
        </div>
        <div className="breadcumb-inner">
          
          <ul>
            
            <li><a href="/">Home</a></li>
            <li><i className="icofont-thin-right" /></li>
            <li><span className="current">About Us</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
{/* End breadcumb area */}
    <div  className="section">
    <div className="container">
      <div className="row">
        <header className="col-12">
          <div className="section-heading heading-center">
            <div className="section-subheading">industry leader</div>
            <h1>About us</h1>
            <p className="section-desc">We are an acknowledged corporate industry leader.</p>
          </div>
        </header>
        
        <div className="col-12">
      <div className="content">
        <img style={{marginTop:"-90px", width:"100%", height:"400px"}} src='assets\images\internss.png' />
        <h2>Developing High-quality Apps</h2>
        <p>
        Kumarinfotech- "Technology We Deliver" is Indian based company since 2020. It is incorportaed in 20 August 2020 in satna district of Madhya Pradesh. Now this comapny is shifted to Kalyan near mumbai, maharashtra. We are dealing with services like website developement, software development,mobile apps development, digital marketing, BPO and corportate training.
        </p>
        <p>
        Kumarinfotech is one of the company which provide solutions in terms of clients satisfation. We believe in working in fast delivery, efficient result. We have many real estate clients where we are providing run time leads from our digital marketing strategy.  We are top rated digital marketing companies in mumbai as well as IT services provider and corporate training provider. We developed and design attractive responsive best.

        </p>
        <h3>Providing Reliable Software</h3>
        <p>
        We excel in building, integrating, launching, and managing technology across various platforms, collaborating closely with clients to comprehend, engage, and captivate their customers. Our core focus remains on delivering exceptional web design, development, and digital marketing solutions that drive business growth, stimulate innovation, and foster meaningful connections.        </p>
        <h3>Supporting Our Clients</h3>
        <p>At Kumarinfotech, we take pride in crafting attractive, responsive, and user-friendly designs. Our expertise extends to high-end custom website development, CMS integration, application creation, and e-commerce store setups. Our team comprises dedicated professionals who brim with creativity, energy, and passion.</p>
        <p>
        With a strong commitment to client satisfaction, Kumarinfotech stands out as a reliable partner. Our emphasis on quick delivery and effective results underscores our approach. Catering to a broad clientele, including real estate businesses, our digital marketing strategies generate real-time leads. Notably, we hold the distinction of being a top-rated digital marketing agency in Mumbai, alongside providing comprehensive IT services and corporate training.
        </p>
      </div>
    </div>
    
    <section className="section section-bgc">
      <div className="container">
        <div className="row litems">
          <div className="col-12">
            <div className="section-heading heading-center">
              <div className="section-subheading">some reasons</div>
              <h2>Why Choose Us</h2>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 litem">
            <div className="ini">
              <div className="ini-count">01</div>
              <div className="ini-info">
                <h3 className="ini-heading item-heading-large">High Quality Hardware</h3>
                <div className="ini-desc">
                  <p>We use top-notch hardware to develop the most efficient apps for our customers</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 litem">
            <div className="ini">
              <div className="ini-count">02</div>
              <div className="ini-info">
                <h3 className="ini-heading item-heading-large">Dedicated 24/7 Support</h3>
                <div className="ini-desc">
                  <p>You can rely on our 24/7 tech support that will gladly solve any app issue you may have.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 litem">
            <div className="ini">
              <div className="ini-count">03</div>
              <div className="ini-info">
                <h3 className="ini-heading item-heading-large">Dedicated Team Model</h3>
                <div className="ini-desc">
                  <p> Our team works remotely on a project in order to significantly reduce a product's time to market and improve the client's business processes. </p>
                </div>
              </div>
            </div>
          </div>
          
         
        </div>
      </div>
    </section>


      </div>
      
    </div>
    
  </div>


    </>
  
  )
}
