import React, {useState} from 'react';
import img from './IMAGE (7).png';
import './tabsection.css'

const Tabsection = () => {

  const [tab, setTab] = useState(1)

  return (
     <section className="tabSection">
       <div className="container">
         <h2 className="tabsection__title">
           Tab Section
         </h2>
         <p className="tabsection__text">
           This is some text inside of a div block.
         </p>
         <div className="some__tabs">
           <button onClick={()=> setTab(1)} className={`some__tabs-item ${tab === 1 && 'some__tabs-item-active'}`}>
             Tab Button 1
           </button>
           <button onClick={()=> setTab(2)}  className={`some__tabs-item ${tab === 2 && 'some__tabs-item-active'}`}>
             Tab Button 2
           </button>
           <button onClick={()=> setTab(3)}  className={`some__tabs-item ${tab === 3 && 'some__tabs-item-active'}`}>
             Tab Button 3
           </button>
         </div>
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