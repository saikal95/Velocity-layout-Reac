import React from 'react';
import icon from "../Inside/icon.png";

const Awesome = ({icon, title, text}) => {
  return (
      <div className="inside__card">
        <img src={ icon } alt="icon" className="inside__card-img"/>
        <h3 className="inside__card-title">
          {title}
        </h3>
        <p className="inside__card-text">
          {text}
        </p>
    </div>
  );
};

export default Awesome;