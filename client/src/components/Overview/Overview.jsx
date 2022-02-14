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
      currentStyleId: 221015,
      scrolledDownValue: false,
      currentMainImage: '',
      currentMainImageIndex: 0
    }
    this.carouselScrolledDown = this.carouselScrolledDown.bind(this);
    this.handleThumbnailClick = this.handleThumbnailClick.bind(this);
    this.handleLeftRightMainImage = this.handleLeftRightMainImage.bind(this);
    this.scrollOnMainImageChange = this.scrollOnMainImageChange.bind(this);
  }

  carouselScrolledDown(distFromTop) {
    if (distFromTop > 0) {
      this.setState({
        scrolledDownValue: true
      });
    } else {
      this.setState({
        scrolledDownValue: false
      });
    }
  }

  handleThumbnailClick(imageURL, index) {
    let scrolled;
    if (index !== 0) {
      scrolled = true;
    } else {
      scrolled = false;
    }
    this.setState({
      currentMainImage: imageURL,
      currentMainImageIndex: index,
      scrolledDownValue: scrolled
    })
    this.scrollOnMainImageChange(index)
  }

  handleLeftRightMainImage(direction, allThumbnails) {
    let newMainImage;
    let newIndex;
    if (direction === 'left') {
      if (this.state.currentMainImageIndex > 0) {
        newMainImage = allThumbnails[this.state.currentMainImageIndex - 1].thumbnail_url;
        newIndex = this.state.currentMainImageIndex - 1;
        this.setState({
          currentMainImage: newMainImage,
          currentMainImageIndex: newIndex,
          scrolledDownValue: true
        })
      }
    } else {
      if (this.state.currentMainImageIndex < allThumbnails.length - 1) {
        newMainImage = allThumbnails[this.state.currentMainImageIndex + 1].thumbnail_url;
        newIndex = this.state.currentMainImageIndex + 1;
        this.setState({
          currentMainImage:newMainImage,
          currentMainImageIndex: newIndex
        })
      }
    }
    this.scrollOnMainImageChange(newIndex)
  }

  scrollOnMainImageChange (newIndex) {
    let targetThumbnail = document.querySelector('.thumbnail-main-carousel');
    let topSpacing;
    if (newIndex > 0) {
      topSpacing = newIndex * 62;
    } else {
      topSpacing = 0;
    }
    if (targetThumbnail) {
      targetThumbnail.scroll({
        top: topSpacing,
        behavior: 'smooth'
      })
    }
  }

  render() {
    const {
      currentProduct,
      currentStyles,
      currentProductRating,
      currentStyleId,
      scrolledDownValue,
      currentMainImage,
      currentMainImageIndex
    } = this.state;
    return (
      <div className="overview-main-container">
        <div className="pic-style-container">
          <div className="gallery-container">
            <Gallery
              currentStyles={currentStyles}
              currentStyleId={currentStyleId}
              carouselScrolledDown={this.carouselScrolledDown}
              scrolledDownValue={scrolledDownValue}
              currentMainImage={currentMainImage}
              handleThumbnailClick={this.handleThumbnailClick}
              handleLeftRightMainImage={this.handleLeftRightMainImage}
              currentMainImageIndex={currentMainImageIndex}
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
