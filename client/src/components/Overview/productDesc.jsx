import React from 'react';
import { Check } from 'phosphor-react';

const ProductDescription = function (props) {
  const description = props.currentProduct.description;
  const slogan = props.currentProduct.slogan;
  const allFeatures = props.currentProduct.features;

  let productFeatures = allFeatures.map((oneFeature, index)=>{
    let currentFeature = oneFeature.feature;
    let currentValue = oneFeature.value;
    return (
      <div className="detail-item-container" key={index}>
        <div className="one-product-detail-item-feature-container">
          <p className="product-detail-item-feature">{currentFeature}</p>
          <p className="product-detail-item-feature"><span className="checkmark"><Check size={12} weight={'bold'} /></span>{currentValue}</p>
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