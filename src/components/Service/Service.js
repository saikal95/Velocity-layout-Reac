import  './service.css';
import image1 from './images/IMAGE (5).png';
import image2 from './images/IMAGE (6).png';

const Service = () => {
  return (

    <section className="service">
      <div className="container">
        <h2 className="service__title">services</h2>
        <p className="service__text">This is some text inside of a div block.</p>
        <div className="service__row">
          <div className="service__card">
            <img className="service__card-img" src={image1} alt=""/>
            <h3 className="service__card-title">services one</h3>
            <p className="service__card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.</p>
            <button className="service__card-btn" type="button">
              Learn more
            </button>
          </div>
          <div className="service__card">
            <img className="service__card-img" src={image2} alt=""/>
            <h3 className="service__card-title">services one</h3>
            <p className="service__card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.</p>
            <button className="service__card-btn" type="button">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
    // <div>
    //   <div className="container">
    //
    //
    //     <div className="card__row">
    //       <div className="inside_card">
    //
    //
    //         <p className="inside__card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.</p>
    //         <button className="inside__card-button">
    //           <span className="inside__card-button-text">Learn more</span>
    //         </button>
    //       </div>
    //       <div className="inside__card">
    //         <img src={image2} alt=""/>
    //         <h2 className="inside-_card-title">services two</h2>
    //         <p className="inside__card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.</p>
    //         <button className="inside__card-button">
    //           <span className="inside__card-button-text"></span></button>
    //       </div>
    //     </div>
    //   </div>
    // </div>

  );
};

export default Service;