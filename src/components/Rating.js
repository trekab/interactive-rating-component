import React from "react";
import star from "../images/icon-star.svg";

const Rating = () => {
  return (
    <div className="rating-component">
      <div className="star">
        <img src={star} alt="star icon" />
      </div>
      <h1 className="heading">How did we do?</h1>
      <form>
        <p className="page-p">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div>
          <input type="radio" id="one" name="rating" value="1" />
          <label for="one">1</label>
          <input type="radio" id="two" name="rating" value="2" />
          <label for="two">2</label>
          <input type="radio" id="three" name="rating" value="3" />
          <label for="three">3</label>
          <input type="radio" id="four" name="rating" value="4" />
          <label for="four">4</label>
          <input type="radio" id="five" name="rating" value="5" />
          <label for="five">5</label>
        </div>
        <button type="submit" className="submit-btn">SUBMIT</button>
      </form>
    </div>
  );
};

export default Rating;