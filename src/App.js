
import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopAddress from './components/Home';
import Aboutus from './Aboutus';
import Header from './components/Header';
import Ebookss from './components/Ebooks';
import Contacts from './components/Contacts';
import Demo from './demo';
import Website from './components/services/Website_Development';
import Digital from './components/services/Digital_marketing';
import Callcenter from './components/services/Call_center';
import MobileDev from './components/services/Mobile_development';
import SEO from './components/services/SeoSem';
import Ecommerce from './components/ecommerce';
import Faqs from './components/Faqs';
import Training from './components/Training';
import Webhosting from './components/Webhosting';
import Portfolio from './components/portfolio';


export default function App() {
 
  return (
   <Routes>
    <Route path='/' element={<TopAddress/>}/>
    <Route path='about' element={<Aboutus/>}/>
  <Route path='header' element={<Header/>}/>
    <Route path='Ebooks' element={<Ebookss/>}/>
    <Route path='contacts' element={<Contacts/>}/>
    <Route path='demo' element={<Demo/>}/>
    <Route path='ecommerce' element={<Ecommerce/>}/>
    <Route path='portfolio' element={<Portfolio/>}/>

    

    <Route path='website' element={<Website/>}/>
    <Route path='digital' element={<Digital/>}/>
    <Route path='callcenter' element={<Callcenter/>}/>
    <Route path='mobiledevelopment' element={<MobileDev/>}/>
    <Route path='seosem' element={<SEO/>}/>
    <Route path='faq' element={<Faqs/>}/>
    <Route path='training' element={<Training/>}/>
    <Route path='webhosting' element={<Webhosting/>}/>






    {/* <Route path='demo' element={<Demo/>}/> */}







   </Routes>

  )
}
