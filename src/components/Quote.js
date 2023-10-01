import React, { useState } from "react";
import Popup from 'reactjs-popup';

import { ToastContainer, toast } from "react-toastify";
import { Link } from 'react-router-dom'
import "../css/breadcumb.css"
import "./stylee.css"

import "react-toastify/dist/ReactToastify.css";
// import firebaseDB from 'firebase'
import "../Demo.scss";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

export default function Pepsi() {
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
    {/* breadcumb area */}
<div className="breadcumb-area">
  <div className="container">
    
    <div className="row">
      <div className="col-md-12 txtc text-center cca">
        <div className="brpt">
          <h2>Contact Us</h2>
        </div>
        <div className="breadcumb-inner">
          
          <ul>
            
            <li>You here! <i className="icofont-thin-right" /></li>
            <li><a href="/">Home</a></li>
            <li><i className="icofont-thin-right" /></li>
            <li><span className="current">Contact Us</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
{/* End breadcumb area */}
    <section className="contact-section">
      <div className="">
        <ToastContainer position="top-center" />
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="wrapper">
              <div className="row no-gutters">
                <div className="col-md-6">
                  <div className="contact-wrap w-100 p-lg-5 p-4">
                    <h3 className="mb-4">Send us a message</h3>
                    <Popup trigger={<button> Trigger</button>} position="right center">
                    <div>
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
                            <textarea
                              type="text"
                              className="form-control"
                              name="message"
                              placeholder="Message"
                              cols="30"
                              rows="6"
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
                      </div>
                    </form>
                    </div>
  </Popup>
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-stretch">
                  <div className="info-wrap w-100 p-lg-5 p-4 img">
                    <h3>Contact us</h3>
                    <p className="mb-4">
                      We're open for any suggestion or just to have a chat
                    </p>
                    <div className="dbox w-100 d-flex align-items-start">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-map-marker"></span>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>Address:</span> B-Block, Durga Apts, Kalyan West
                                      Kalyan - 421311. Maharashtra, India.
                        </p>
                      </div>
                    </div>
                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-phone"></span>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>Phone:</span>
                          <a href="tel://123456789">+91 7725064078</a>
                        </p>
                      </div>
                    </div>
                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-paper-plane"></span>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>Email:</span>
                          <a href="info@Kumarinfotech.net">
                          info@Kumarinfotech.net                           
                          </a> <br/>
                          <a href="hr@Kumarinfotech.net">
                          hr@Kumarinfotech.net                           
                          </a>
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
      
    </section>
    <h1 className="section-subheading" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Find us on google maps</h1>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 100}}><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d232345.40901054456!2d80.832243!3d24.506341!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398479c5c2a7ee51%3A0x753b1bcab12a31b7!2skumarinfotech%20%7C%20Website%20Development!5e0!3m2!1sen!2sin!4v1690868890818!5m2!1sen!2sin"
     width="1500" height="450" style={{border:"0", }} 
    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe> </div>
    </div>
  );
}

