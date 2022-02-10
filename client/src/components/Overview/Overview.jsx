import React from 'react';
import ProductDescription from './productDesc.jsx';
import StylesAndCart from './stylesAndCart.jsx';
import Gallery from './gallery.jsx';

class Overview extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    }
  }

    render() {
      return(
        <div>
          <div className="pic-style-container">
            <div className="gallery-container"><Gallery /></div>
            <div className="styles-container"><StylesAndCart /></div>
          </div>
          <div className="product-info-container">
           <ProductDescription />
          </div>
        </div>
      )
    }
  }

  export default Overview;