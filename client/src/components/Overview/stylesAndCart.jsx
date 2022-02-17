import React from 'react';
import { TwitterLogo, FacebookLogo, PinterestLogo } from "phosphor-react";

const StylesAndCart = function (props) {
  const {
    currentStyles,
    currentProduct,
    currentProductRating,
    handleStyleChangeClick,
    currentStyleId,
    handleSelect
  } = props;

  const fillRating = currentProductRating * 20;
  const unfillRating = (currentProductRating * 20) - fillRating;
  let currentStyleName;
  let currentStyleDetailedInfo;

  //makes sure the provided style color is a valid CSS background color
  const colorChecker = function(colorString) {
    var s = new Option().style;
    s.color = colorString;
    return s.color == colorString;
  }

  //creates the color swatches, if color is invalid blue is inserted
  let colorSwatches = currentStyles.results.map((oneStyle, index) => {
    let currentColor = colorChecker(oneStyle.name.toLowerCase());
    currentColor ? currentColor = oneStyle.name : currentColor = 'blue';
    return (
        <div
          key={index}
          className="one-swatch"
          onClick={handleStyleChangeClick}
          style={{ backgroundColor: `${currentColor}` }}>
        </div>
    )
  })

  //finds the current style chosen from the current product
  currentStyles.results.forEach((oneStyle) => {
    if(oneStyle.style_id === currentStyleId) {
      currentStyleName = oneStyle.name;
      currentStyleDetailedInfo = oneStyle;
    }
  })

  //creates the size select options list
  let currentSizeOptions = Object.keys(currentStyleDetailedInfo.skus);
  let sizeOptionsElements =[];
  for (let i = 0; i < currentSizeOptions.length; i++) {
    let currentSizeInfo = currentStyleDetailedInfo.skus[currentSizeOptions[i]];
    if (currentSizeInfo.quantity > 0) {
      sizeOptionsElements.push(
        <option key={i} value={currentSizeInfo.size}>{currentSizeInfo.size}</option>
      )
    }
  }

  return (
    <div className="styles-main-container">
      <div className="styles-review-container">
        <div className="stars" style={{ backgroundImage: `linear-gradient(90deg, black ${fillRating}%, white ${unfillRating}%)` }}>
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
        <h4 className="category-name">{currentProduct.category}</h4>
        <h2 className="current-product-name">{currentProduct.name}</h2>
        <h6 className="current-product-pricing">${currentProduct.default_price}</h6>
      </div>
      <div className="styles-colors-container">
        <h2>Style > {currentStyleName}</h2>
        <div className="swatch-container">
          {colorSwatches}
        </div>
      </div>
      <div className="styles-bag-container">
        <div className="bag-top-container">
          <select className="size-select" onChange={handleSelect} name="selectedSize">
          <option defaultValue>Select Size</option>
            {sizeOptionsElements}
          </select>
          <select className="quantity-select" onChange={handleSelect} name="selectedQuantity">
            <option defaultValue>Qty</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div className="bag-bottom-container">
          <button className="addtobag-button">Add to Bag </button>
          <div className="share-logos">
          <FacebookLogo size={32} />
          <TwitterLogo size={32} />
          <PinterestLogo size={32} />
          </div>
        </div>
      </div>
    </div>
  )
};

export default StylesAndCart;