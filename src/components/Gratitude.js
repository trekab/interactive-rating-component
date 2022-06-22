import React from "react";
import illustration from "../images/illustration-thank-you.svg";

const Gratitude = ({rating}) => {
  return (
    <div className="rating-component">
      <div className="thank-you">
        <img src={illustration} alt="thank you" />
      </div>
      <p className="rating-result">You selected {rating} out of 5</p>

      <h1 className="heading grat-heading">Thank you!</h1>
      <p className="page-p grat-p">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
};

export default Gratitude;
