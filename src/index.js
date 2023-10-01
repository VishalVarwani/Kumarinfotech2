import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import Footer from './components/footer';
import {BrowserRouter} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

import Demo from './demo';
  // ... Add more items



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
      <ScrollToTop/>

      {/* <Quote/> */}
    <Header/>
    {/* <Demo /> */}
    <App />

    {/* <Aboutus/> */}
    <Footer/>
    {/* <Contacts/> */}
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();