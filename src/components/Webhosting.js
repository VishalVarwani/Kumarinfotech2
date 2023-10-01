import React from 'react'
import "../css/webhosting.css"
import { Link } from 'react-router-dom'
export default function Webhosting() {
  return (
    <div>
        <div  style={{marginTop:"100px"}} className="breadcumb-area">
  <div className="container">
    
    <div className="row" style={{marginTop:"-50px"}}>
      <div className="col-md-22 txtc text-center cca">
        <div className="brpt">
          <h2>Web Hosting</h2>
        </div>
        <div className="breadcumb-inner">
          
          <ul>
            
            <li><Link to="/">Home</Link></li>
            <li><i className="icofont-thin-right" /></li>
            <li><span className="current">Web Hosting</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
     {/*Hosting Section Private*/}
<section className="hosting-section pt-120 pb-120">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6 wow fadeInDown">
        <div className="hosting-thumb">
          <img src="assets/images/host-big.png" alt="host-img" />
          <div className="small-host">
            <img src="assets/images/host-small.png" alt="s-img" />
          </div>
        </div>
      </div>
      <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.4s">
        <div className="hosting-content">
          <div className="section-header">
            <h1 className="section-title">
              We Provide Hosting Packages
            </h1>
            <p style={{color: "black"}}>
              Whether you are looking for a personal website hosting plan or a business website hosting plan,
              Hosting is the perfect solution for you. Our powerful website hosting services will not only
              help you achieve your overall website goals, but will also provide you with the confidence you
              need in knowing that you are partnered with a reliable and secure website hosting platform.
            </p>
            <Link to="/contacts" className="cmn--btn">
              <span>
                Contact Us
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/*Hosting Section Private*/}
{/*Customer Security Section Private*/}
<section  style={{backgroundColor: "rgb(64, 42, 107)"}} className="customer-section customer-section-two c-s-space security-thumb-bg-add pt-120 pb-120">
  <div className="container">
    <div className="row g-4 align-items-center">
      <div className="col-xl-6 col-lg-6 wow fadeInLeft">
        <div className="security-thumb">
          <img  style={{justifyContent:"left"}}src="assets\images\domain.png" alt="s-img" />
        </div>
      </div>
      <div className="col-xl-6 wow fadeInUp">
        <div className="customer-content">
         
          <div className="section-header">
            <h1 className="section-title">
              Website Security
              On Every Step
            </h1>
            <p>
              Your Success is Our Goal.Customer service is paramount, which is why we offer a dedicated
              customer service agent to every customer. Your own personal consultant will take the time to get
              to know you and your business.
            </p>
            <div className="security-wrapper">
              <div className="row g-4">
                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="choose-item">
                    <div className="choose-inner">
                      <div className="choose-thumb">
                        <img src="assets/images/h4.png" alt="i-img" />
                      </div>
                      <h4 style={{color:"white"}} className="title">
                        Buy A Domain
                      </h4>
                      <p >
                        We stop DNS attacks with extreme
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="choose-item">
                    <div className="choose-inner">
                      <div className="choose-thumb">
                        <img src="assets/images/h2.png" alt="i-img" />
                      </div>
                      <h4 style={{color:"white"}}className="title">
                        Network Security
                      </h4>
                      <p >
                        safe and secure with our best of breed
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="choose-item">
                    <div className="choose-inner">
                      <div className="choose-thumb">
                        <img src="assets/images/h3.png" alt="i-img" />
                      </div>
                      <h4 style={{color:"white"}}className="title">
                        Account Isolation
                      </h4>
                      <p >
                        your account is completely Secure with us
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/*Customer Security Section Private*/}
{/*Hosting Section Private*/}
<section className="host-section pt-120 pb-120">
 
  <div className="container wow bounceInUp" data-wow-duration="1.2s">
    <div className="row g-4 align-items-center">
      <div className="host-wrapper">
        <div className="section-header section-center">
          <h1 className="section-title">
            Sign up for web hosting today!
          </h1>
          <p style={{color: "black"}}>
            We’re confident you’ll be 100% satisfied or your money back.
          </p>
         
          <div className="btn-wrapper d-flex align-items-center justify-content-center">
           
            <Link to="/contacts" className="cmn--btn">
              <span>Contact us</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



    </div>
    
  )
}
