import React from 'react';
import img from './IMAGE (7).png';
import './tabsection.css'

const Tabsection = () => {
  return (
     <section className="tabSection">
       <div className="container">
         <h2 className="tabsection__title">
           Tab Section
         </h2>
         <p className="tabsection__text">
           This is some text inside of a div block.
         </p>
         <ul className="some__tabs">
           <li className="some__tabs-item">
             Tab Button 1
           </li>
           <li className="some__tabs-item">
             Tab Button 2
           </li>
           <li className="some__tabs-item">
             Tab Button 3
           </li>
         </ul>
         <div className="tabsection__content">
           <img src={img} alt="Image of tabsection" className="tabsection__img"/>
         </div>
         <h3 className="some-item-title">
           Some Title Here
         </h3>
         <p className="some-item-text">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
           Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
           Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
         </p>
       </div>
     </section>
  );
};

export default Tabsection;