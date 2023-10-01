import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import firebaseDB from 'firebase'
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
export default function Website() {
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
         <div   style={{marginTop:"100px"}}className="breadcumb-area">
  <div className="container">
    
    <div className="row" style={{marginTop:"-50px"}}>
      <div className="col-md-22 txtc text-center cca">
        <div className="brpt">
          <h2>Web Design & Development</h2>
        </div>
        <div className="breadcumb-inner">
          
          <ul>
            
            <li><a href="/">Home</a></li>
            <li><i className="icofont-thin-right" /></li>
            <li><span className="current">Web Design & Development</span></li>
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
            <h1>Web Design & Development </h1>
          </div>
          <div className="content">
            <div   className="item-border-radius">
              <img style={{width:"100%",height:"300px",   backgroundsize: "cover"
}}  src="https://gracethemes.com/wp-content/uploads/2018/05/How-Web-Development-Framework-Work-for-Business-Progress.png" alt />
            </div>
            <p>KumarInfotech offers exceptional web design and development services that go beyond expectations. Our team of experts crafts stunning websites that captivate visitors and enhance user experiences. With a keen understanding of the latest design trends and cutting-edge technologies, we create responsive and intuitive interfaces that engage users seamlessly.</p>
            <p>Whether you're looking to establish an online presence, revamp your existing website, or build a dynamic web application, KumarInfotech has the skills and creativity to bring your vision to life. Our commitment to excellence is reflected in every line of code we write and every pixel we place.</p>
            <h5>Key Features</h5>
            <ul>
              <li>High usability</li>
              <li>Improved performance</li>
              <li>Customizable interface</li>
              <li>Crossplatform support</li>
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
  <div className="section">
    <div className="container">
      <div className="row items">
        <header className="col-12">
          <div className="section-heading heading-center">
            <h1>Other Services</h1>
          </div>
        </header>
        <div className="col-12 item">
          <div className="row items">
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
								<div class="col-md-6 col-xl-4 col-12 item">
									<a href="mobiledevelopment" class="iitem item-style iitem-hover">
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
</div>


    </div>
  )
}
