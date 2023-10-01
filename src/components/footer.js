import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
//     <footer style={{backgroundColor: "#402971"}}className="ftco-footer">
//   <div className="container">
//     <div  className="row">
//       <div className="col">
//         <div className="ftco-footer-widget">
//           <h2 className="ftco-footer-logo">Kumar<span>infotech</span></h2>
//           <p>
//                   Digital Marketing Agency and Website Development Service Provider
//                         </p>
//                         <div className="col-xs-12 col-lg-3 col-xl-3 col-md-3 col-sm-12">
//                        <ul style={{ display:"flex",justifyitems: ""}}className="footer-social">
//   <li>
//     <Link to="#"> <i className="fab fa-facebook-f" /></Link>
//   </li>
//   <li>
//     <Link to="#"> <i className="fab fa-twitter" /></Link>
//   </li>
//   <li>
//     <Link to="#"> <i className="fab fa-pinterest" /></Link>
//   </li>
//   <li>
//     <Link to="#"> <i className="fab fa-linkedin" /></Link>
//   </li>
// </ul>
// </div>
//         </div>
//       </div>
//       <div className="col-md">
//         <div className="ftco-footer-widget mb-4 ml-md-5">
//           <h2 className="ftco-heading-2">Our Solutions</h2>
//           <ul className="list-unstyled">
//             <li><Link to="/services" className="py-2 d-block">IT Solution</Link></li>
//             <li><Link to="/services" className="py-2 d-block">Apps Development</Link></li>
//             <li><Link to="/services" className="py-2 d-block">Web Development</Link></li>
//             <li><Link to="/services" className="py-2 d-block">Web Hosting</Link></li>
//             <li><Link to="/services" className="py-2 d-block">Training</Link></li>
      
//           </ul>
//         </div>
//         </div>
//       <div className="col-md">
//         <div className="ftco-footer-widget mb-4 ml-md-5">
//           <h2 className="ftco-heading-2">Explore</h2>
//           <ul className="list-unstyled">
//             <li><Link to="/about" className="py-2 d-block">About Us</Link></li>
//             <li><Link to="/contacts" className="py-2 d-block">Contact</Link></li>
//             <li><Link to="/services" className="py-2 d-block">Services</Link></li>
//             <li><Link to="/Ebooks" className="py-2 d-block">E-books</Link></li>
//             <li><Link to="/contacts" className="py-2 d-block">Careers</Link></li>
      
//           </ul>
//         </div>
     
//       </div>
//       <div className="col-md">
//         <div className="ftco-footer-widget mb-4">
//           <h2 className="ftco-heading-2">Contact Information</h2>
//           <div className="block-23 mb-3">
//             <ul>
//               <li><span className="icon fa fa-map marker" /> <p>
//                           <span>Address:</span> B-Block, Durga Apts, Kalyan West
//                                       Kalyan - 421311. Maharashtra, India.
//                         </p></li>
//               <li><Link to="#"><span className="icon fa fa-phone" /><span className="text">+91 7725064078</span></Link></li>
//               <li><Link to="#"><span className="icon fa fa-paper-plane pr-4" /><span className="text"> info@Kumarinfotech.net</span></Link></li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
    
//   </div>
// <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
//   © 2021 Copyright:
//   <Link className="text-reset fw-bold" to="https://kumarinfotech.net/">Kumarinfotech.in</Link>
// </div>


// </footer>

<section style={{backgroundColor: "#402971"}} className="footer-area section-padding">
  <div className="container">
    <div className="row">
      <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="single-footer-widget">
          <Link className="footer-logo" to="#">
            <img style={{height:"100px"}}src="assets\images\1638294603074.jpg" className="white-logo" alt="logo" />
          </Link>
       
          <p>Kumarinfotech is a leading and fastest growing IT comapnies in India with best solution provider in multiple online working areas.</p>
          <ul className="footer-social">
            <li>
              <Link to="https://www.facebook.com/kumarinfotech20"> <i className="fab fa-facebook-f" />
              </Link>
            </li>
            <li>
              <Link to="https://www.twitter.com/kumarinfotech20"> <i className="fab fa-twitter" />
              </Link>
            </li>
            <li>
              <Link to="https://www.pinterest.com/kumarinfotech20"> <i className="fab fa-pinterest" />
              </Link>
            </li>
            <li>
              <Link to="https://www.linkedin.com/company/kumarinfotech/mycompany/"> <i className="fab fa-linkedin" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-2 col-md-6 col-sm-6">
        <div className="single-footer-widget">
          <div className="footer-heading">
            <h3>Our Services</h3>
          </div>
          <ul className="footer-quick-links">
            <li> <Link to="/digital">Digital Marketing</Link></li>
            <li> <Link to="/callcenter">Call Center Solutions</Link></li>
            <li> <Link to="/website">Website xDevelopment</Link></li>
            <li> <Link to="/mobiledevelopment">Mobile Development</Link></li>
            <li> <Link to="/seosem">SEO/SEM</Link></li>
          </ul>
        </div>
      </div>
      <div className="col-lg-2 col-md-6 col-sm-6">
        <div className="single-footer-widget">
          <div className="footer-heading">
            <h3>Quick Links</h3>
          </div>
          <ul className="footer-quick-links">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/webhosting">Web Hosting</Link></li>
            <li><Link to="/training">Training</Link></li>
            <li><Link to="/ecommerce">E-commerce</Link></li>
            <li><Link to="/contacts">Contact Us</Link></li>
            
          </ul>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="single-footer-widget">
          <div className="footer-heading">
            <h3>Contact Information</h3>
          </div>
          <div className="footer-info-contact">
            <span><strong>Phone:</strong> <Link to="">+917725064078</Link></span>
          </div>
          <div className="footer-info-contact">
            <span><strong>Email:</strong> <Link to="mailto:demo@example.com">info@kumarinfotech.net</Link></span>
          </div>
          <div className="footer-info-contact">
            <span><strong>Address:</strong> B-Block, Durga Apts, Kalyan West Kalyan - 421311. Maharashtra, India.</span>
          </div>
          
        </div>
      </div>
      
    </div>
    <div style={{marginTop:"5%",marginBottom:"-10%", justifyContent:"center"}}class="footer-bottom">
            <p>Copyright &copy;2023 <Link to="#0" class="text-base">KumarInfoTech.</Link> All Rights Reserved </p>
              
         </div>
  </div>
</section>

  );
};