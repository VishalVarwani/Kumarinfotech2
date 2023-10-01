import React,  { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import firebaseDB from 'firebase'
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import {faEnvelope,
  faPhoneAlt} from '@fortawesome/free-solid-svg-icons';
import Aboutus from '../Aboutus';
import {Link} from 'react-router-dom'
import TopAddress from './Home';
import "../popup.css"
import '../App'
import "../css/header.css"
import {

  faFacebookF,
  faTwitter,
  faInstagram,
  faGooglePlusG,
  faDribbble,
  faYoutube,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

export default function Header() {
  const [clicked, setClicked] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const handleclick = () => {
    setClicked(!clicked);
  };

  const [state, setState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { name, email, subject, message } = state;
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email) {
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
  // end form
  return (

    <div style={{
     backgroundColor:"white" 
    }} className="em40_header_area_main fixed-top">
    <div style={{backgroundColor: "#402a6b"}} className="softd-header-top">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-lg-9 col-xl-9 col-md-9 col-sm-12">
            <div className="top-address">
              <p >
                <span style={{color:"white"}}>
                  <FontAwesomeIcon icon={faEnvelope} /> info@kumarinfotech.net
                </span>
                
                <Link style={{color:"white"}}to="#">
                  <FontAwesomeIcon icon={faPhoneAlt} /> +917725064078
                  </Link>
              </p>
            </div>
          </div>
          <div className="col-xs-12 col-lg-3 col-xl-3 col-md-3 col-sm-12">
            <div className="top-right-menu">
              <ul className="social-icons text-right text_m_center">
                <li>
                  <Link to="https://www.facebook.com/kumarinfotech20">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </Link>
                </li>
                <li>
                  <Link to="https://www.twitter.com/kumarinfotech20 ">
                    <FontAwesomeIcon icon={faTwitter} />
                  </Link>
                </li>
                <li>
                  <Link to="https://www.instagram.com/kumarinfotech20">
                    <FontAwesomeIcon icon={faInstagram} />
                    </Link>
                </li>
                <li>
                  <Link to="https://www.youtube.com/kumarinfotech20">
                    <FontAwesomeIcon icon={faYoutube} />
                    </Link>
                </li>
                <li>
                  <Link to="https://kumarinfotech.net">
                    <FontAwesomeIcon icon={faLinkedin} />
                    </Link>
                </li>
              </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{backgroundColor:"", paddingRight:"100px", paddingLeft:"10px"}} class="  ">    
            <div class="">
                  <div class="row logo-left">
                     
          <div className="">
            <div className="">
              <nav className="">
              <div className="col-md-3 col-sm-3 col-xs-4">
            <div className="logo">
              <Link to="/" className="main_sticky_main_l" title="Kumarinfotech">
                <img style={{ width: "300px" }} src="https://media.licdn.com/dms/image/C5603AQEy8iD7SkjIuA/profile-displayphoto-shrink_800_800/0/1638294603074?e=2147483647&v=beta&t=_1FQUV5_BnRbiFj7pwME36uth3pVHhsV_bXOKaRK0OA" alt="Kumarinfotech" />
              </Link>
            </div>
          </div>

                <ul style={{color:"black"}}id="navbar" className={clicked ? "active" : ""}>
                  <li  className="">
                  <Link style={{color:"black"}} className="active" to="/">Home</Link>
                  
                  </li>
                  <li className="">
                    <Link style={{color:"black"}} to="/about">About Us</Link>
                  </li>

                  <li className="dropdown">
                    <Link style={{color:"black"}}  to="">Services</Link>
                    <ul className="sub-menu">
                      <li><Link to="/digital">Digital Marketing Services</Link></li>
                      <li><Link to="/callcenter">Call Center Solutions</Link></li>
                      <li><Link to="/website">Web Design & Development</Link></li>
                      <li><Link to="/mobiledevelopment">Mobile Development</Link></li>
                      <li><Link to="/seosem">SEO/SEM</Link></li>
                    </ul>
                  </li>
                  <li className="menu">
                    <Link style={{color:"black"}} to="/training">Training</Link>
                   
                  </li>
                  <li className="menu">
                    <Link style={{color:"black"}} to="/webhosting">Web-Hosting</Link>
                   
                  </li>
                  <li className="menu">
                    <Link style={{color:"black"}} to="/ecommerce">E-Commerce</Link>
                   
                  </li>
                  <li className="menu">
                    <Link style={{color:"black"}} to="/portfolio">Portfolio</Link>
                   
                  </li>
                  <li className="menu">
                    <Link style={{color:"black"}}  to="/contacts">Contact Us</Link>
                   
                  </li>
                
                </ul>
                <div id='mobile' onClick={handleclick}>
            <i id="bar" className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
          </div>

          <div className="popup-container">
      {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <h2>Get A Quote</h2>
            <form style={{transition: "all 0.5s ease"}} id="contactForm"
                      className="contactForm"
                      onSubmit={handleSubmit}>
              {/* Add your form fields here */}
              <label htmlFor="name">Name:</label>
              <input type="text" id="name"  name="name"
                              placeholder="Name"
                              onChange={handleInputChange}
                              value={name} />
                                            <label htmlFor="name">Email:</label>

                              <input
                              type="email"
                              className="contactForm"
                              name="email"
                              placeholder="Email"
                              onChange={handleInputChange}
                              value={email}
                              
                            />

                            <div className="col-md-12">
                          <div className="form-group">
                            <label>Message</label>
                            <textarea
                              type="text"
                              className="contactForm"
                              name="message"
                         
                              onChange={handleInputChange}
                              value={message}
                            ></textarea>
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

              {/* Add more form fields as needed */}
            </form>
            <button className="close-button" onClick={togglePopup}>
              Close
            </button>
          </div>
        </div>
      )}
      <button className="open-button" onClick={togglePopup}>
        Get A Quote
      </button>
    </div>
              </nav>
              
              {/* menu button */}


             
                
            </div>
            </div>
              
            </div>
            
            </div>  
            
            </div>

          
            
         </div>
  )
}