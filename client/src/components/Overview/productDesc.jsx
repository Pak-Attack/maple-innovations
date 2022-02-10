import React from 'react';

const ProductDescription = function (props) {
  return (
    <div className="prod-desc-component">
      <div className="slogan-description-container">
        <div>
          <h1>Title Slogan</h1>
        </div>
        <div>Here is a long description of this shirt. It is a yellow shirt. It has short sleeves. It does have a pretty cool pockeet. I would not recommend this shirt if you do not like yellow short sleeve shirts with a pocket
        </div>
      </div>
      <div className="product-details-container">
        <div><span className="product-detail-item">✅</span>Product detail 1</div>
        <div><span className="product-detail-item">✅</span>Product detail 2</div>
        <div><span className="product-detail-item">✅</span>Product detail 3</div>
        <div><span className="product-detail-item">✅</span>Product detail 4</div>
      </div>

    </div>
  )
};

export default ProductDescription;