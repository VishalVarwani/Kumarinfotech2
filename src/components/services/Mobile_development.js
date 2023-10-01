import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import firebaseDB from 'firebase'
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
export default function MobileDev() {
    const [state, setState] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    
      const { name, email, subject, message } = state;
      const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !email || !subject || !message) {
          toast.error("Please provide value in each input field");
        } else {
          await addDoc(collection(db,"name,email,subject,message"),{
                    name: name,
                    email:email,
                    subject: subject,
                    message:message
    
          })
          // setState({ name: "", email: "", subject: "", message: "" });
          toast.success("Form Submitted Successfully");
        }
      };
    
      const handleInputChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value });
      };
  return (
    
    <div>
        <div  style={{marginTop:"100px"}} className="breadcumb-area">
  <div className="container">
    
    <div className="row" style={{marginTop:"-50px"}}>
      <div className="col-md-22 txtc text-center cca">
        <div className="brpt">
          <h2>Mobile Development</h2>
        </div>
        <div className="breadcumb-inner">
          
          <ul>
            
            <li><a href="/">Home</a></li>
            <li><i className="icofont-thin-right" /></li>
            <li><span className="current">Mobile Development</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
                <ToastContainer position="top-center" />

<div>
  <article className="section">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="section-heading heading-center section-heading-animate">
            <h1>Mobile Development</h1>
          </div>
          <div className="content">
            <div   className="item-border-radius">
              <img style={{width:"100%",height:"300px",   backgroundsize: "cover"
}}  src="https://www.loginworks.com/wp-content/uploads/2017/12/mobile-app-development.jpg" alt />
            </div>
<p>
Embark on a journey of innovation and user-centricity with KumarInfotech's Mobile Development Services. Our expertise in mobile app development spans across platforms, creating dynamic and engaging experiences that captivate users and drive business growth. Whether you're an ambitious startup, a forward-thinking enterprise, or an entrepreneur with a game-changing idea, we're here to bring your mobile app vision to life.    </p>           
     <p>Embrace an era of digital triumph with KumarInfotech. Your distinct business goals and industry nuances are at the heart of our strategies. Equipped with innovation and driven by results, we're your partners in navigating the ever-evolving digital realm, steering your enterprise towards unprecedented achievements.</p>
     <h3> <strong>Why Choose KumarInfotech for Mobile Development?</strong></h3>

     <ul>
              <li >Cross-Platform Excellence: Reach a wider audience by harnessing the power of cross-platform development. Our skilled developers create apps that seamlessly run on both iOS and Android devices, ensuring consistent functionality and user experiences across platforms.</li>
                <li>User-Centric Design: We believe in placing the user at the heart of every design decision. Our UI/UX experts craft intuitive and visually appealing interfaces that elevate user engagement, resulting in higher retention rates and user satisfaction.</li>
           <li>Robust Testing and Quality Assurance: Our rigorous testing and QA procedures ensure that your app is free from glitches, bugs, and performance issues. We strive for excellence and deliver apps that function flawlessly.</li>
              <li>Timely Delivery: We understand the importance of deadlines. Our project management ensures that your app is developed, tested, and deployed within the specified timeframe, without compromising on quality.</li>
              <li>Customized Solutions: Your app should reflect your unique brand and goals. Our development process is tailored to your specific needs, ensuring that the final product aligns perfectly with your vision and requirements.</li>
            </ul>
            <h3>Our Mobile Development Offerings:

</h3>
     <ol>
     <li>Native App Development: Leverage platform-specific capabilities to create apps that harness the full potential of each platform's features.</li>
  <li>Hybrid App Development: Achieve efficiency and cost-effectiveness with apps that seamlessly run across multiple platforms.</li>
  <li>UI/UX Design: Craft visually stunning and user-friendly interfaces that create a lasting impression and enhance user engagement.</li>
  <li>E-commerce Apps: Develop mobile shopping experiences that drive sales and foster customer loyalty through compelling features.</li>
  <li>Enterprise Solutions: Streamline operations and enhance productivity with tailor-made mobile apps designed to meet the specific needs of your business.</li>
  <li>App Maintenance and Support: Receive ongoing support and updates beyond the app's launch, ensuring optimal performance and user satisfaction.</li>
            </ol>
           
          </div>
        </div>
      </div>
    </div>
  </article>
  <section className="section section-bgc">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="section-heading heading-center section-heading-animate">
            <div className="section-subheading">Want to Know More About It?</div>
            <h2>Get A Quote</h2>
          </div>
           <form
                      id="contactForm"
                      className="contactForm"
                      onSubmit={handleSubmit}
                    >
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="name"
                              placeholder="Name"
                              onChange={handleInputChange}
                              value={name}
                              style={{ color: 'black' ,backgroundColor: 'white'}} // Set text color to black

                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              placeholder="Email"
                              onChange={handleInputChange}
                              value={email}
                              
                            />
                          </div>
                        </div>
                       
                        
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="submit"
                              value="Send Message"
                              className="btn btn-primary"
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  
        </div>
      </div>
    </div>
  </section>
  <div class="section">
				<div class="container">
					<div class="row items">
						<header class="col-12">
							<div class="section-heading heading-center">
								<h1>Other Services</h1>
							</div>
						</header>
						<div class="col-12 item">
							<div class="row items">
              <div class="col-md-6 col-xl-4 col-12 item">
									<a href="/callcenter" class="iitem item-style iitem-hover">
										<div class="iitem-icon">
											<i class="material-icons material-icons-outlined md-48">support_agent</i>
										</div>
										<div class="iitem-icon-bg">
											<i class="material-icons material-icons-outlined">support_agent</i>
										</div>
										<h2 class="iitem-heading item-heading-large">Call Center Solutions</h2>
										<div class="iitem-desc">Take advantage of the experiential-learning  built into many programs.</div>
									</a>
								</div>
								<div class="col-md-6 col-xl-4 col-12 item">
									<a href="/webhosting" class="iitem item-style iitem-hover">
										<div class="iitem-icon">
											<i class="material-icons material-icons-outlined md-48">cloud_done</i>
										</div>
										<div class="iitem-icon-bg">
											<i class="material-icons material-icons-outlined">cloud_done</i>
										</div>
										<h2 class="iitem-heading item-heading-large">Web Hosting</h2>
										<div class="iitem-desc">We provide hosting to the clients in very low rate as compare to others. We keep your data safely for the long time with huge privacy.</div>
									</a>
								</div>
								<div class="col-md-6 col-xl-4 col-12 item">
									<a href="/website" class="iitem item-style iitem-hover">
										<div class="iitem-icon">
											<i class="material-icons material-icons-outlined md-48">Website Development</i>
										</div>
										<div class="iitem-icon-bg">
											<i class="material-icons material-icons-outlined">Website Development</i>
										</div>
										<h2 class="iitem-heading item-heading-large">Web Design & Development
</h2>
										<div class="iitem-desc">We provide web design and development services in mumbai and all over india. Web design is a way where we can show the different product in stylish way and advertise it to our target audience.</div>
									</a>
								</div>
                <div class="col-md-6 col-xl-4 col-12 item">
									<a href="/digital" class="iitem item-style iitem-hover">
										<div class="iitem-icon">
											<i class="material-icons material-icons-outlined md-48">corporate_fare</i>
										</div>
										<div class="iitem-icon-bg">
											<i class="material-icons material-icons-outlined">corporate_fare</i>
										</div>
										<h2 class="iitem-heading item-heading-large">Digital Marketing Services
</h2>
										<div class="iitem-desc">Social media marketing is the use of social media platforms to connect with your audience to build your brand, increase sales, and drive website traffic with aim at providing result orientated to the clients</div>
									</a>
								</div>
								<div class="col-md-6 col-xl-4 col-12 item">
									<a href="/seosem" class="iitem item-style iitem-hover">
										<div class="iitem-icon">
											<i class="material-icons material-icons-outlined md-48">search</i>
										</div>
										<div class="iitem-icon-bg">
											<i class="material-icons material-icons-outlined">search</i>
										</div>
										<h2 class="iitem-heading item-heading-large">SEO/SEM
</h2>
										<div class="iitem-desc">Search Enging Optimization(SEO) is a way of making your website. Kumarinfotech do SEO & SMO for the business which result come to grow business and get rank in the search engine</div>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

	

{/* {end service section} */}
      </div>
    </div>
  


  )
}
