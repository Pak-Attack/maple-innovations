import React from 'react';
import { TwitterLogo, FacebookLogo, PinterestLogo, Check, Minus } from "phosphor-react";

const StylesAndCart = function (props) {
  const currentStyles = props.currentStyles;
  const currentProduct = props.currentProduct;
  const currentProductRating = props.currentProductRating;
  const handleStyleChangeClick = props.handleStyleChangeClick;
  const currentStyleId = props.currentStyleId;
  const handleSelect = props.handleSelect;
  const selectedSizeSKU = props.selectedSizeSKU;
  const selectedQuantity = props.selectedQuantity;
  const currentMainImageIndex = props.currentMainImageIndex;
  const handleAddToCart = props.handleAddToCart;
  const totalRatings = props.totalRatings;

  const fillRating = currentProductRating * 20;
  const unfillRating = (currentProductRating * 20) - fillRating;
  let currentStyleName;
  let currentStyleDetailedInfo;
  let currentStyleImagesLength;

  //makes sure the provided style color is a valid CSS background color
  const colorChecker = function (colorString) {
    var testElement = new Option().style;
    testElement.color = colorString;
    return testElement.color == colorString;
  }

  //creates the color swatches, if color is invalid blue is inserted
  const colorSwatches = currentStyles.results.map((oneStyle, index) => {
    let currentColor = colorChecker(oneStyle.name.toLowerCase());
    currentColor ? currentColor = oneStyle.name : currentColor = 'blue';
    if (currentStyleId === oneStyle.style_id) {
      return (
        <div className="swatch-checkmark-parent" key={index}>
          <div
            key={index}
            className="one-swatch selected-swatch"
            onClick={() => handleStyleChangeClick(oneStyle.style_id, oneStyle.photos.length)}
            style={{ backgroundColor: `${currentColor}` }}>
          </div>
          <div className="swatch-checkmark"><Check size={12} weight={'bold'} /></div>
        </div>

      )
    } else {
      return (
        <div
          key={index}
          className="one-swatch"
          onClick={() => handleStyleChangeClick(oneStyle.style_id, oneStyle.photos.length)}
          style={{ backgroundColor: `${currentColor}` }}>
        </div>
      )
    }

  })

  //finds the current style chosen from the current product
  currentStyles.results.forEach((oneStyle) => {
    if (oneStyle.style_id === currentStyleId) {
      currentStyleName = oneStyle.name;
      currentStyleDetailedInfo = oneStyle;
    }
  })

  //creates the size select options list
  const skus = currentStyleDetailedInfo?.skus || {};
  const currentSizeOptions = Object.keys(skus);
  let sizeOptionsElements = [];
  for (let i = 0; i < currentSizeOptions.length; i++) {
    const currentSizeInfo = currentStyleDetailedInfo.skus[currentSizeOptions[i]];
    if (currentSizeInfo.quantity > 0) {
      sizeOptionsElements.push(
        <option key={i} value={currentSizeOptions[i]}>{currentSizeInfo.size}</option>
      )
    }
  }

  //creates the default setting for the size select list
  let sizeDefault;
  if (sizeOptionsElements.length > 0) {
    selectedSizeSKU
      ? sizeDefault = <option defaultValue disabled={true}>Select Size</option>
      : sizeDefault = <option defaultValue>Select Size</option>
  } else {
    sizeDefault = <option defaultValue>Out of Stock</option>;
  }

  //creates the quantity select options list and also sets default values
  let quantityOptions = [];
  let quantityDefault = [];
  if (selectedSizeSKU) {
    const currentSizeQuantity = currentStyleDetailedInfo.skus[selectedSizeSKU].quantity > 15
      ? 15
      : currentStyleDetailedInfo.skus[selectedSizeSKU].quantity;
    for (var i = 1; i < currentSizeQuantity + 1; i++) {
      i = 0
        ? quantityOptions.push(<option key={i} defaultValue value={i}>{i}</option>)
        : quantityOptions.push(<option key={i} value={i}>{i}</option>);
    }
  } else {
    quantityDefault = <option defaultValue className="no-quantity">－</option>
  }

  //renders price depending if regular or sale price
  let currentPrice = currentStyleDetailedInfo?.sale_price === null
    ? <div className="current-product-pricing">${currentStyleDetailedInfo?.original_price || 0.00}</div>
    : <div className="current-product-pricing"><span className="crossed-off-price">${currentStyleDetailedInfo?.original_price || 0.00}</span>${currentStyleDetailedInfo?.sale_price || 0.00}</div>

  //create placeholder for reviews section that conditionally renders only if there are reviews
  let starRatings = !totalRatings
    ? <div className="empty-styles-review-container"></div>
    : <div className="styles-review-container">
      <div className="stars" style={{ backgroundImage: `linear-gradient(90deg, #3A3B3C ${fillRating}%, white ${unfillRating}%)` }}>
        {/* ☆☆☆☆☆ */}
        ★★★★★
      </div>
      <div className="stars-overlay">
        ☆☆☆☆☆
        {/* ★★★★★ */}
      </div>
      <a className="reviews-link" href="#reviews-section-link">Read All Reviews ({props.totalRatings})</a>
    </div>

  //determines if add to cart button should be rendered
  let addToBag = selectedSizeSKU
    ? <button className="addtobag-button" onClick={handleAddToCart}>Add to Bag </button>
    : <button className="addtobag-button" style={{ visibility: "hidden" }}>Add to Bag </button>

  return (
    <div className="styles-main-container">
      {starRatings}
      <div className="styles-title-container">
        <h4 className="category-name">{currentProduct.category}</h4>
        <h2 className="current-product-name">{currentProduct.name}</h2>
        {currentPrice}
      </div>
      <div className="styles-colors-container">
        <h2 className="style-name"><span className="style-header">Style > </span>{currentStyleName}</h2>
        <div className="swatch-container">
          {colorSwatches}
        </div>
      </div>
      <div className="styles-bag-container">
        <div className="bag-top-container">
          <select
            className="size-select"
            onChange={handleSelect}
            name="selectedSizeSKU"
            value={selectedSizeSKU}
          >
            {sizeDefault}
            {sizeOptionsElements}
          </select>
          <select className="quantity-select" onChange={handleSelect} name="selectedQuantity">
            {quantityDefault}
            {quantityOptions}
          </select>
        </div>
        <div className="bag-bottom-container">
          {addToBag}
          <div className="share-logos-container">
            <div className="one-logo-container"><FacebookLogo size={20} className="social-media-logo" /></div>
            <div className="one-logo-container"><TwitterLogo size={20} className="social-media-logo" /></div>
            <div className="one-logo-container"><PinterestLogo size={20} className="social-media-logo" /></div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default StylesAndCart;