import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import firebaseDB from 'firebase'
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
export default function SEO() {
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
          <h2>SEO/SEM</h2>
        </div>
        <div className="breadcumb-inner">
          
          <ul>
            
            <li><a href="/">Home</a></li>
            <li><i className="icofont-thin-right" /></li>
            <li><span className="current">SEO/SEM</span></li>
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
            <h1>SEO/SEM</h1>
          </div>
          <div className="content">
            <div   className="item-border-radius">
              <img style={{width:"100%",height:"300px",   backgroundsize: "cover"
}}  src="https://www.briscoweb.com/wp-content/uploads/2015/05/SEO-SEM1.jpg" alt />
            </div>
<p>
Drive your online success with KumarInfotech's comprehensive SEO/SEM services. Our expert team employs cutting-edge strategies to optimize your digital presence, boost search engine visibility, and enhance your online reach. Whether you're aiming to climb search rankings, increase website traffic, or maximize conversions, we have the expertise to deliver results that matter.    </p>           
     <p>Embrace an era of digital triumph with KumarInfotech. Your distinct business goals and industry nuances are at the heart of our strategies. Equipped with innovation and driven by results, we're your partners in navigating the ever-evolving digital realm, steering your enterprise towards unprecedented achievements.</p>
     <h3> <strong>Why Choose KumarInfotech for SEO/SEM?</strong></h3>
     <ul>
  <li>Holistic Search Strategies: We create integrated SEO/SEM strategies that cover both organic and paid search, ensuring a well-rounded approach that maximizes your online impact.</li>
  <li>Data-Driven Insights: Our approach is rooted in data analysis. We delve deep into user behavior, search trends, and competitor analysis to refine strategies and achieve optimal results.</li>
  <li>Customized Solutions: Your business is unique, and your SEO/SEM strategy should reflect that. We tailor our services to your specific goals, industry, and target audience.</li>
  <li>On-Page and Off-Page Optimization: We optimize every aspect of your online presence, from keyword-rich content and meta tags to link building and authoritative backlinks.</li>
  <li>PPC Expertise: Our SEM specialists craft high-performing pay-per-click campaigns that drive targeted traffic, increase click-through rates, and deliver measurable ROI.</li>
  <li>Local SEO Domination: Boost your local presence and attract nearby customers with our localized SEO strategies. We optimize your business for local search results and Google My Business.</li>
  <li>Conversion-Centric Approach: Our focus is not just on traffic but on converting visitors into customers. We optimize user experiences, landing pages, and calls-to-action for maximum conversions.</li>
</ul>

           
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
