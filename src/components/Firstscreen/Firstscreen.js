import React from 'react';
import './Firstscreen.css'

const Firstscreen = () => {
  return (
    <div>
      <section className="firstScreen">
        <div className="container">
          <h2 className="firstScreen__title">This is velocity</h2>
          <div className="firstScreen__btns">
            <button className="firstScreen__btn_sign">Sign up</button>
            <button className="firstScreen__btn">Learn More</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Firstscreen;

