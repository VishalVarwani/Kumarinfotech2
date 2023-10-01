import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import firebaseDB from 'firebase'
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
export default function Callcenter() {
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
          <h2>Call Center</h2>
        </div>
        <div className="breadcumb-inner">
          
          <ul>
            
            <li><a href="/">Home</a></li>
            <li><i className="icofont-thin-right" /></li>
            <li><span className="current">Call Center</span></li>
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
            <h1>Call Center Services</h1>
          </div>
          <div className="content">
            <div   className="item-border-radius">
              <img style={{width:"100%",height:"300px",   backgroundsize: "cover"
}}  src="https://www.pngall.com/wp-content/uploads/5/Digital-Marketing-PNG-File-Download-Free.png" alt />
            </div>
<p>
Elevate your customer interactions and streamline operations with KumarInfotech's comprehensive Call Center Solutions. Our expertise is centered around creating tailored strategies that enhance customer engagement, optimize processes, and drive your business towards unparalleled success. With a team of dedicated professionals, we are committed to transforming your call center into a hub of efficiency and excellence in today's dynamic business landscape.
    </p>           
     <p>Embrace an era of digital triumph with KumarInfotech. Your distinct business goals and industry nuances are at the heart of our strategies. Equipped with innovation and driven by results, we're your partners in navigating the ever-evolving digital realm, steering your enterprise towards unprecedented achievements.</p>
     <h3> Inbound Call Center Services:</h3>
     <ol>
              <li >Customer Support: Deliver exceptional customer experiences with our skilled agents who are trained to handle inquiries, provide assistance, and resolve issues promptly and courteously.</li>
              <li>Helpdesk Support: Provide technical assistance and troubleshooting to your customers, ensuring they receive timely and effective solutions to their challenges.</li>
              <li>24/7 Availability: Enhance customer satisfaction by offering round-the-clock support, ensuring that your customers can reach out for assistance at any time.</li>
            </ol>
            <h3> Outbound Call Center Services:</h3>
     <ol>
              <li >Telemarketing and Sales: Boost your sales and expand your customer base with our skilled telemarketing agents who excel in lead generation, appointment setting, and product/service promotion.</li>
              <li>Outreach Campaigns: Execute targeted outreach campaigns, such as product launches, event promotions, and special offers, to maximize engagement and drive results.</li>
              <li>24/7 Availability: Enhance customer satisfaction by offering round-the-clock support, ensuring that your customers can reach out for assistance at any time.</li>
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
									<a href="/mobiledevelopment" class="iitem item-style iitem-hover">
										<div class="iitem-icon">
											<i class="material-icons material-icons-outlined md-48">phone_android</i>
										</div>
										<div class="iitem-icon-bg">
											<i class="material-icons material-icons-outlined">phone_android</i>
										</div>
										<h2 class="iitem-heading item-heading-large">Mobile Development</h2>
										<div class="iitem-desc">Mobile Apps is the trends of our generation. Kumarinfotech is the best solutions to developed any kinds of mobile apps and software.</div>
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
