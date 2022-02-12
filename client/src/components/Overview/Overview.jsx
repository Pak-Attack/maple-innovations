import React from 'react';
import ProductDescription from './productDesc.jsx';
import StylesAndCart from './stylesAndCart.jsx';
import Gallery from './gallery.jsx';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: props.currentProduct,
      currentStyles: props.currentStyles,
      currentProductRating: props.currentProductRating,
      currentStyleId: 221015
    }
  }

  render() {
    const { currentProduct, currentStyles, currentProductRating, currentStyleId } = this.state;
    return (
      <div>
        <div className="pic-style-container">
          <div className="gallery-container">
            <Gallery
              currentStyles={currentStyles}
              currentStyleId={currentStyleId}
            />
          </div>
          <div className="styles-container"><StylesAndCart /></div>
        </div>
        <div className="product-info-container">
          <ProductDescription currentProduct={currentProduct} />
        </div>
      </div>
    )
  }
}

export default Overview;

  //Overview should be passed the current selected product object