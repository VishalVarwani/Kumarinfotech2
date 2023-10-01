import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./css/header.css";

const Demo = () => {
  const [clicked, setClicked] = useState(false);

  const handleclick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <div className='em40_header_area_main fixed-top'>
        <nav>
          <div className="col-md-3 col-sm-3 col-xs-4">
            <div className="logo">
              <Link to="/" className="main_sticky_main_l" title="Kumarinfotech">
                <img style={{ width: "300px" }} src="https://media.licdn.com/dms/image/C5603AQEy8iD7SkjIuA/profile-displayphoto-shrink_800_800/0/1638294603074?e=2147483647&v=beta&t=_1FQUV5_BnRbiFj7pwME36uth3pVHhsV_bXOKaRK0OA" alt="Kumarinfotech" />
              </Link>
            </div>
          </div>

          <ul id="navbar" className={clicked ? "active" : ""}>
            <li>
              <Link className="active" to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/training">Training</Link>
            </li>
            <li>
              <Link to="/webhosting">Web-Hosting</Link>
            </li>
            <li className="">
              <Link to="/ecommerce">E-Commerce</Link>
            </li>
            <li className="dropdown">
              <Link to="">Services</Link>
              <ul className="dropdown-content">
                <li><Link to="/digital">Digital Marketing Services</Link></li>
                <li><Link to="/callcenter">Call Center Solutions</Link></li>
                <li><Link to="/website">Web Design & Development</Link></li>
                <li><Link to="/mobiledevelopment">Mobile Development</Link></li>
                <li><Link to="/seosem">SEO/SEM</Link></li>
              </ul>
            </li>
            <li className="">
              <Link to="/contacts">Contact Us</Link>
            </li>
          </ul>
          <div id='mobile' onClick={handleclick}>
            <i id="bar" className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </nav>
      </div>
      {/* menu button */}
    </>
  );
};

export default Demo;
