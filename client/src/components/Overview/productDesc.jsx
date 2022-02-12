import React from 'react';

const ProductDescription = function (props) {
  const description = props.currentProduct.description;
  const slogan = props.currentProduct.slogan;
  const allFeatures = props.currentProduct.features;

  let productFeatures = allFeatures.map((oneFeature, index)=>{
    let currentFeature = oneFeature.feature;
    let currentValue = oneFeature.value;
    return (
      <div className="detail-item-container" key={index}>
        <div>
          <p className="product-detail-item-feature"><span>✅</span>{currentFeature}</p>
          <p className="product-detail-item-feature">{currentValue}</p>
        </div>
      </div>
    )
  })

  return (
    <div className="prod-desc-component">
      <div className="slogan-description-container">
        <div>
          <h1>{slogan}</h1>
        </div>
        <div>{description}
        </div>
      </div>
      <div className="product-details-container">
        {productFeatures}
      </div>

    </div>
  )
};

export default ProductDescription;