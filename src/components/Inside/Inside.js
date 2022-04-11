import "./inside.css"
import icon from './icon.png'
import icon2 from './icon2.png'
import icon3 from './icon3.png'
import Awesome from "../Awesome/Awesome";



const Inside = () => {
  return (
    <section className="inside">
     <div className="container">
       <h2 className="inside__title"> what we do</h2>
       <p className="inside__text">
         This is some text inside of a div block.
       </p>
       <div className="inside__row">
         <Awesome icon={icon} title="Craphic design" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."/>
         <Awesome icon={icon2} title="Awesome Code" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."/>
         <Awesome icon={icon3} title="Free Template" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."/>
       </div>
     </div>
    </section>
  );
};

export default Inside;