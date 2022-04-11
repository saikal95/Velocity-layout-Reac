import {BsTwitter} from "react-icons/bs";
import {BsFacebook} from "react-icons/bs";
import {BsPinterest} from "react-icons/bs";
import {FaGoogle} from "react-icons/fa";
import {SiWebflow} from "react-icons/si";
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
       <div className="footer__top">
         <div className="footer__content">
           <h2 className="footer__title">
             about velocity
           </h2>
           <p className="footer__text">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
           </p>
         </div>
         <div className="footer__content">
           <ul className="footer__list">
             <h2 className="footer__title">
               useful links
             </h2>
             <li className="footer__list-item">
               <a href="#" className="footer__link">
                 Phasellus gravida semper nisi
               </a>
             </li>
             <li className="footer__list-item">
               <a href="#" className="footer__link">
                 Suspendise nissi elit
               </a>
             </li>
             <li className="footer__list-item">
               <a href="#" className="footer__link">
                 Etiam sollicitudin ipsum
               </a>
             </li>
           </ul>

         </div>
         <div className="footer__list">
           <ul className="footer__list">
             <h2 className="footer__title">
               social
             </h2>
             <li className="footer__list-item">
               <BsTwitter/>
               <a href="#" className="footer__link">
                 Twitter
               </a>
             </li>
             <li className="footer__list-item">
               <BsFacebook/>
               <a href="#" className="footer__link">
                 Facebook
               </a>
             </li>
             <li className="footer__list-item">
             <BsPinterest/>
               <a href="#" className="footer__link">
                 Pinterest
               </a>
             </li>
             <li className="footer__list-item">
               <FaGoogle/>
               <a href="#" className="footer__link">
                 Google
               </a>
             </li>
             <li className="footer__list-item">
              <SiWebflow/>
               <a href="#" className="footer__link">
                 Webflow
               </a>
             </li>
           </ul>
         </div>
       </div>
      </div>
      <div className="footer__bottom">
        Copyright Velocity Inc. Made in Webflow.
      </div>
    </footer>
  );
};

export default Footer;