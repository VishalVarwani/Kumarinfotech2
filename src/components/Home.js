import React, { useState, useEffect } from 'react';
import '../testimonial.css'; // Create this CSS file for styling
import "../slider.css"
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import arrow icons
import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import {

  faFacebookF,
  faTwitter,
  faInstagram,
  faGooglePlusG,
  faDribbble,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import {faEnvelope,
  faPhoneAlt} from '@fortawesome/free-solid-svg-icons';
  import "../css/customer.css"
import Faqs from './Faqs';

  const faqsList = [
    {
      id: 0,
      questionText: 'What is Kumarinfotech',
      answerText:
        'Kumarinfotech is a leading and fastest growing IT comapnies in India with best solution provider in multiple online working areas.',
    },
    {
      id: 1,
      questionText: 'Will I own the rights of my website?',
      answerText:
        'Being our client, you get complete rights to everything that our team builds for you. We believe in having credible associations with our clients and the step in the direction is to respect the right of ownership and project confidentiality.',
    },
    {
      id: 2,
      questionText:
        'Can you help me in updating my existing website"?',
      answerText:
        'Yes, it is possible for us. But, we have some policies regarding while we provide such sort of services. Since the code of your website would be created and managed by different programmers, we may need to adopt some segments from scratch. Before we get into the real project discussions, you will be provided with a piece of detailed information about the same.',
    },
    {
      id: 3,
      questionText: 'How would you help tech-illiterate clients effectively?',
      answerText:
      'If you have a clear vision for your project, we can be a great pair. We are well-versed in transforming your ideas into reality using our expertise in different technologies. ',
    },
  ]
  const testimonialData = [
    {
      id: 1,
      name: 'John Doe',
      text: '"KumarInfotech has been an outstanding partner for our organization. Their commitment to excellence and innovative IT solutions have significantly improved our operations. We highly recommend their services!"      ',
    },
    {
      id: 2,
      name: 'Savee',
      text: '"Working with KumarInfotech has been a game-changer for our business. Their teams technical expertise and proactive approach have helped us navigate complex IT challenges with ease. We couldnt be happier with the results."',
    },
   
    {
      id: 3,
      name: 'vishal',
      text: '"We have been relying on KumarInfotech for our IT needs for years and they have never disappointed. Their tailored solutions and responsive support have been critical to our success. We are grateful for their partnership."',
    },
    // Add more testimonial objects here
  ];
const TopAddress = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);


  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonialData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + testimonialData.length) % testimonialData.length);
  };

  const handleQuestionClick = (index) => {
    setActiveQuestion(index === activeQuestion ? null : index);
  };

  

  
const whatsappLink = 'https://api.whatsapp.com/send?phone=+917725064078&text=Hi%20I%20need%20to%20know%20about%20your%20project';
  const phoneNumber = '+917725064078';

  const circleButtonStyle = {
    position: 'fixed',
    width: '60px',
    height: '60px',
    bottom: '140px',
    right: '25px',
    color: '#131046',
    backgroundColor: 'green',
    borderRadius: '50%', // Set the border radius to 50% for a circular shape
    textAlign: 'center',
    fontSize: '30px',
    zIndex: '9999999999',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const iconStyle = {
    marginTop: '2px', // Adjust the margin-top to center the icon inside the circle
  };
  return (
       <div >
           <Link to={whatsappLink} style={circleButtonStyle} target="_blank">
        <FaWhatsapp style={iconStyle} />
        </Link>      <Link to={`tel:${phoneNumber}`} style={{ ...circleButtonStyle, bottom: '60px'} }>
        <FaPhone  style={iconStyle}/>
        </Link>      
 
    <div style={{backgroundColor:"white", marginTop:"100px"}}>
    <div className="witr_swiper_area h2_swiper">
   
        {/* 1 single slider */}
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
    <li data-target="#carouselExampleIndicators" data-slide-to={1} />
    <li data-target="#carouselExampleIndicators" data-slide-to={2} />
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <section className="swiper-slide d1 t1 m1 witr_swiper_height" style={{height: "500px", marginTop:"3%"}}>
      <img className="d-block w-100 imgsrc" src="assets\images\slider1.jpeg" alt="First slide" />

      
                <div className="witr_btn_style">
                  <div className="witr_btn_sinner">
                  </div>
                </div>
       
              </section>
    </div>
    <div className="carousel-item">
      <section className="swiper-slide d1 t1 m1 witr_swiper_height" style={{height: "500px",marginTop:"3%"}}>
      <img className="d-block w-100 imgsrc" src="assets\images\slider2.jpeg" alt="Second slide" />


    
<div className="slider_btn">
                <div className="witr_btn_style">
                  <div className="witr_btn_sinner">
                  </div>
                </div>
              </div>

</section>
    </div>
    <div className="carousel-item">
      <section className="swiper-slide d1 t1 m1 witr_swiper_height" style={{height: "500px", marginTop:"3%"}}>
      <img className="d-block w-100 imgsrc" src="assets\images\slider3.jpeg" alt="Third slide" />


<div className="slider_btn">
                <div className="witr_btn_style">
                  <div className="witr_btn_sinner">
                  </div>
                </div>
              </div>

</section>
    </div>
  </div>
 </div>

       

 {/* About Start */}
<div style={{visibility: "visible"}} className="py-5">
  <div className="">
    <div className="row g-5" style={{marginLeft:"59px", marginRight:"59px"}} >
      <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
        <div style={{visibility: "visible", minHeight:"400"}} className="position-relative overflow-hidden h-100">
          <img className="position-absolute pt-5 pe-5" src="assets\images\websitedevelopment_company_in_mumbai.jpeg" alt style={{objectFit: 'cover'}} />
        </div>
      </div>
      <div style={{visibility: "visible", backgroundColor:"" }} className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
        <div className="h-100">
          <h1 className="display-6 mb-5">Welcome To Kumarinfotech- Website Development Service Provider</h1>
          
          <p className="mb-5">Kumarinfotech is a leading and fastest growing IT comapnies in India with best solution provider in multiple online working areas. We are <b>best digital marketing agency in mumbai</b> with providing quality leads to every business. We provide various Services like smm, SEO, SEM, Google Adwords, developement and maintainance of website, software, mobile application, ecommerce development which makes the client business more easy and profitable and also to keep the track record in one hand. 
We focus on creating the business brand promotion and leads of any business. We Creating an impact on the brands marketing and products. We help of all our clients to get the best promotion which will help him to reach the goal. We have Mumbai, Delhi, Noida, USA, UK, dubai based clients. Our clients are from 2020 year and till now we are working with them.
</p>
          <Link style={{backgroundColor: "#402971"}} className="witr_btn" to="/about">
            View More
            <div className="bg-red text-primary rounded-circle ms-2">
            </div>
            </Link>	         
                  </div>
      </div>
    </div>
  </div>
</div>
{/* About End */}
{/* Start Overview Section */}
<section className="overview-section section-padding">
  <div className="">
    <div className="row align-items-center" style={{marginLeft:"59px", marginRight:"59px", marginTop: "-120px"}}>
      <div className="col-lg-6">
        <div className="overview-content">
          <h2>Technologies we offer</h2>
<p> We work on below technology for providing the best solution in development and digital marketing.</p>
          <ul className="features-list">
            <li> <span className="active">React Js</span></li>
            <li> <span>Dot net</span></li>
            <li> <span>PHP & Laravel</span></li>
            <li> <span>Shopify Development</span></li>
            <li> <span>Wordpress Development</span></li>
            <li> <span>Java</span></li>
            <li> <span>Digital Marketing</span></li>
            <li> <span>Cloud Computing</span></li>


          </ul>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="overview-image-2">
          <img src="https://icon-library.com/images/working-icon/working-icon-29.jpg" alt="image" />
        </div>
      </div>
    </div>
  </div>
</section>
{/* End Overview Section */}

{/* Start Hire Section */}
<section className="hire-section">
  <div className="container">
    <div className="row" >
      <div className="col-lg-8 offset-lg-2 col-md-12">
        <div className="hire-content">
          <h2>Have a project in mind?</h2>
          <p>Kumarinfotech is ready to shape your ideas into tangible business results</p>
          <div className="hire-btn">
            <Link className="default-btn-one" to="/contacts">Let's get started<span />   </Link>	
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* End Hire Section */}
{/* {start service section} */}
<div style={{backgroundColor:"#F5F5F5", marginTop:"3%"}} class="section">
				<div class="">
					<div class="row items" style={{marginLeft:"59px", marginRight:"59px"}}>
						<header class="col-12">
							<div class="section-heading heading-center">
								<h1>Our Services</h1>
							</div>
						</header>
						<div class="col-12 item">
							<div class="row items">
              <div class="col-md-6 col-xl-4 col-12 item">
									<Link to="/website" class="iitem item-style iitem-hover">
										<div class="iitem-icon">
											<i class="material-icons material-icons-outlined md-48">Website Development</i>
										</div>
										<div class="iitem-icon-bg">
											<i class="material-icons material-icons-outlined">Website Development</i>
										</div>
										<h2 class="iitem-heading item-heading-large">Web Design & Development
</h2>
										<div class="iitem-desc">We provide web design and development services in mumbai and all over india. Web design is a way where we can show the different product in stylish way and advertise it to our target audience.</div>
                    </Link>		</div>
                    <div class="col-md-6 col-xl-4 col-12 item">
									<Link to="/mobiledevelopment" class="iitem item-style iitem-hover">
										<div class="iitem-icon">
											<i class="material-icons material-icons-outlined md-48">phone_android</i>
										</div>
										<div class="iitem-icon-bg">
											<i class="material-icons material-icons-outlined">phone_android</i>
										</div>
										<h2 class="iitem-heading item-heading-large">Mobile Development</h2>
										<div class="iitem-desc">Mobile Apps is the trends of our generation. Kumarinfotech is the best solutions to developed any kinds of mobile apps and software.</div>
                    </Link>									</div>
								<div class="col-md-6 col-xl-4 col-12 item">
									<Link to="/digital" class="iitem item-style iitem-hover">
										<div class="iitem-icon">
											<i class="material-icons material-icons-outlined md-48">corporate_fare</i>
										</div>
										<div class="iitem-icon-bg">
											<i class="material-icons material-icons-outlined">corporate_fare</i>
										</div>
										<h2 class="iitem-heading item-heading-large">Digital Marketing Services
</h2>
										<div class="iitem-desc">Social media marketing is the use of social media platforms to connect with your audience to build your brand, increase sales, and drive website traffic with aim at providing result orientated to the clients</div>
                    </Link>								</div>
                    <div class="col-md-6 col-xl-4 col-12 item">
									<Link to="/seosem" class="iitem item-style iitem-hover">
										<div class="iitem-icon">
											<i class="material-icons material-icons-outlined md-48">search</i>
										</div>
										<div class="iitem-icon-bg">
											<i class="material-icons material-icons-outlined">search</i>
										</div>
										<h2 class="iitem-heading item-heading-large">SEO/SEM
</h2>
										<div class="iitem-desc">Search Enging Optimization(SEO) is a way of making your website. Kumarinfotech do SEO & SMO for the business which result come to grow business and get rank in the search engine</div>
                    </Link>									</div>
								{/* <div class="col-md-6 col-xl-4 col-12 item">
									<Link to="/callcenter" class="iitem item-style iitem-hover">
										<div class="iitem-icon">
											<i class="material-icons material-icons-outlined md-48">support_agent</i>
										</div>
										<div class="iitem-icon-bg">
											<i class="material-icons material-icons-outlined">support_agent</i>
										</div>
										<h2 class="iitem-heading item-heading-large">Call Center Solutions</h2>
										<div class="iitem-desc">Take advantage of the experiential-learning  built into many programs.</div>
                    </Link>								</div> */}
								<div class="col-md-6 col-xl-4 col-12 item">
									<Link to="/webhosting" class="iitem item-style iitem-hover">
										<div class="iitem-icon">
											<i class="material-icons material-icons-outlined md-48">cloud_done</i>
										</div>
										<div class="iitem-icon-bg">
											<i class="material-icons material-icons-outlined">cloud_done</i>
										</div>
										<h2 class="iitem-heading item-heading-large">Web Hosting</h2>
										<div class="iitem-desc">We provide hosting to the clients in very low rate as compare to others. We keep your data safely for the long time with huge privacy.</div>
                    </Link>								</div>
                    <div class="col-md-6 col-xl-4 col-12 item">
									<Link to="/webhosting" class="iitem item-style iitem-hover">
										<div class="iitem-icon">
											<i class="material-icons material-icons-outlined md-48">listing</i>
										</div>
										<div class="iitem-icon-bg">
											<i class="material-icons material-icons-outlined">listing</i>
										</div>
										<h2 class="iitem-heading item-heading-large">E-commerce</h2>
										<div class="iitem-desc">We provide E-commerce Listing to the clients in very low rate as compare to others. We keep your data safely for the long time with huge privacy.</div>
                    </Link>								</div>
							
							
							
							</div>
						</div>
					</div>
				</div>
			</div>

	

{/* {end service section} */}

 {/* Start Training Section */}
 {/* <section className="services-section pt-70 pb-100">
  <div className="">
    <div className="row" style={{marginLeft:"59px", marginRight:"59px"}}>
    <header class="col-12">
							<div class="section-heading heading-center">
								<h1>Courses We Offer</h1>
							</div>
						</header>
            <div className="col-lg-4 col-md-6">
        <div style={{width: "100%",
  height: "300px" }} className="single-services-item">
          <div className="services-icon">
            <i className="pe-7s-tools" />
          </div>
          <h3>MERN</h3>
          <p>Join our comprehensive MERN Stack Development course and learn how to build full-stack web applications using MongoDB, Express.js, React, and Node.js.</p>
          <div className="services-btn-link">
            <Link to="/contacts" className="services-link">Enroll now  </Link>	
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="single-services-item">
          <div className="services-icon">
            <i className="pe-7s-display1" />
          </div>
          <h3>Web Development</h3>
          <p>Embark on a journey into the world of web development with our comprehensive course.</p>
          <div className="services-btn-link">
            <Link to="/contacts" className="services-link">Enroll now  </Link>	
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="single-services-item">
          <div className="services-icon">
            <i className="pe-7s-display1" />
          </div>
          <h3>Software Development Course</h3>
    <p>Unlock the world of software development through our comprehensive course.</p>
          <div className="services-btn-link">
            <Link to="/contacts" className="services-link">Enroll now  </Link>	
          </div>
        </div>
      </div>

<Link style={{backgroundColor: "#402971", marginTop:"2%"}} className="witr_btn " to="/training">
            Read More  </Link>	
   
    </div>
  </div>
</section> */}
{/* End Services Section */}

<div style={{ position: "relative",
	zindex: "1",
	backgroundposition: "center",
	backgroundsize: "cover",
	backgroundrepeat:" no-repeat",
	backgroundattachment: "fixed",
	textalign: "center",
	padding: "70px 0", backgroundimage: "url(https://www.providesupport.com/blog/wp-content/uploads/2017/04/Keeping-customers-happy.jpg)"
}}>

    {/* Client review */}
    <section style={{marginTop:""}}  className="">
    <div className="background-image"></div>
      <div className="">
        <div className="row" >
          <header className="col-12">
            <div className="section-heading heading-center">
              <div className="section-subheading">Reviews from our clients</div>
              <h2>What People Say</h2>
            </div>
          </header>
          <div>
          <section className="section-lg bg-image context-dark text-center" style={{backgroundImage: 'url(https://st3.depositphotos.com/4218696/32281/i/450/depositphotos_322819854-stock-photo-woman-hand-giving-five-star.jpg)', backgroundRepeat:"no-repeat", backgroundSize:"cover" }}>
  <div className="">
    {/* Owl Carousel*/}
   

<Carousel
showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6000}
      >
        <div>
               <div className="myCarousel">
            <h3>Vishal</h3>
            <p>
            "KumarInfotech has been an outstanding partner for our organization. Their commitment to excellence and innovative IT solutions have significantly improved our operations. We highly recommend their services!"            </p>
          </div>
        </div>

        <div>
                <div className="myCarousel">
            <h3>Rajesh</h3>
            <p>
            "We have been relying on KumarInfotech for our IT needs for years and they have never disappointed. Their tailored solutions and responsive support have been critical to our success. We are grateful for their partnership."
            </p>
          </div>
        </div>

        <div>
        <div className="myCarousel">
            <h3>Sakshi</h3>
            <p>
            "Working with KumarInfotech has been a game-changer for our business. Their teams technical expertise and proactive approach have helped us navigate complex IT challenges with ease. We couldnt be happier with the results." 
            </p>
          </div>
        </div>
      </Carousel>
    </div></section>
     </div>
     </div>
     </div>
     </section>
     </div>
     </div> {/* faq start */}
 
    
    <Faqs faqsList={faqsList}/>


            
            </div>
       
                       
 

   
            </div>


  );
};

export default TopAddress;