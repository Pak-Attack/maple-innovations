import React from 'react';

const StylesAndCart = function (props) {
  const{
    currentStyles,
    currentProduct,
    currentProductRating
  } = props;

  const fillRating = currentProductRating * 20;
  const unfillRating = currentProductRating - fillRating;

  return (
    <div className="styles-main-container">
      <div className="styles-review-container">
        <div className="stars" style={{backgroundImage: `linear-gradient(90deg, black ${fillRating}%, white ${unfillRating}%)`}}>
          {/* ☆☆☆☆☆ */}
          ★★★★★
        </div>
        <div className="stars-overlay">
          ☆☆☆☆☆
          {/* ★★★★★ */}
        </div>
        <a className="reviews-link" href="">Read All Reviews</a>
      </div>
      <div className="styles-title-container">
        <h4>Category: Shirts</h4>
        <h2>Yellow shirt</h2>
        <h6>$45</h6>
      </div>
      <div className="styles-colors-container">
        <h2>Style > Selected Style</h2>
        <div className="swatch-container">
          <div className="one-swatch"></div>
          <div className="one-swatch"></div>
          <div className="one-swatch"></div>
          <div className="one-swatch"></div>
          <div className="one-swatch"></div>
          <div className="one-swatch"></div>
        </div>
      </div>
      <div className="styles-bag-container">
        <div className="bag-top-container">
          <select>
            <option defaultValue>Select Size</option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
          <select>
            <option defaultValue>Quantity</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div className="bag-bottom-container">
          <button>Add to Bag +</button>
          <button>Add to favorite</button>
        </div>
      </div>
    </div>
  )
};

export default StylesAndCart;