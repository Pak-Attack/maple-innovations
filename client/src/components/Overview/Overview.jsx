import React from 'react';
import ProductDescription from './productDesc.jsx';
import StylesAndCart from './stylesAndCart.jsx';
import Gallery from './gallery.jsx';
import Expanded from './expanded.jsx';
// import { caretleft } from "phosphor-react";

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: props.currentProduct,
      currentStyles: props.currentStyles,
      currentProductRating: props.currentProductRating,
      currentStyleId: props.currentStyles.results[0].style_id,
      scrolledDownValue: false,
      currentMainImage: '',
      currentMainImageIndex: 0,
      expandedView: false,
      magnified: false,
      mainImageHeight: 0,
      mainImageWidth: 0,
      selectedSizeSKU: '',
      selectedQuantity: 0
    }
    this.carouselScrolledDown = this.carouselScrolledDown.bind(this);
    this.handleThumbnailClick = this.handleThumbnailClick.bind(this);
    this.handleLeftRightMainImage = this.handleLeftRightMainImage.bind(this);
    this.scrollOnMainImageChange = this.scrollOnMainImageChange.bind(this);
    this.handleExpandedViewClick = this.handleExpandedViewClick.bind(this);
    this.handleMagnifyingClick = this.handleMagnifyingClick.bind(this);
    this.handleMagnifyingMovement = this.handleMagnifyingMovement.bind(this);
    this.changeMagnifyingPosition = this.changeMagnifyingPosition.bind(this);
    this.handleStyleChangeClick = this.handleStyleChangeClick.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  carouselScrolledDown(distFromTop) {
    //element.scroll was not scrolling the exact amount. Unsure why so distfromtop > 5 is to compensate for the decimal remainders.
    if (distFromTop > 5) {
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
    let scrolled = index !== 0
      ? true
      : false;

    this.setState({
      currentMainImage: imageURL,
      currentMainImageIndex: index,
      scrolledDownValue: scrolled
    })
    this.scrollOnMainImageChange(index)
  }

  handleExpandedViewClick() {
    if (!this.state.expandedView) {
      this.setState({
        expandedView: true
      })
    } else {
      this.setState({
        expandedView: false
      })
    }
  }

  handleLeftRightMainImage(direction, allThumbnails) {
    let newMainImage;
    let newIndex;
    let newScrollValue;
    if (direction === 'left') {
      if (this.state.currentMainImageIndex === 1) {
        newMainImage = allThumbnails[this.state.currentMainImageIndex - 1].url;
        newIndex = this.state.currentMainImageIndex - 1;
        newScrollValue = false;
      } else {
        newMainImage = allThumbnails[this.state.currentMainImageIndex - 1].url;
        newIndex = this.state.currentMainImageIndex - 1;
        newScrollValue = true;
      }
    } else {
      if (this.state.currentMainImageIndex < allThumbnails.length - 1) {
        newMainImage = allThumbnails[this.state.currentMainImageIndex + 1].url;
        newIndex = this.state.currentMainImageIndex + 1;
        newScrollValue = true;
      }
    }
    this.setState({
      currentMainImage: newMainImage,
      currentMainImageIndex: newIndex,
      scrolledDownValue: newScrollValue
    })
    this.scrollOnMainImageChange(newIndex)
  }

  scrollOnMainImageChange(newIndex) {
    let yChange;
    this.state.expandedView ? yChange = 30 : yChange = 62
    let targetThumbnail = document.querySelector('.thumbnail-main-carousel');
    let topSpacing;
    if (newIndex > 0) {
      topSpacing = newIndex * yChange;
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

  handleMagnifyingClick(event) {
    const targetElement = event.currentTarget;
    const {
      width,
      height
    } = targetElement.getBoundingClientRect();
    if (this.state.magnified) {
      this.setState({
        magnified: false,
        mainImageWidth: width,
        mainImageHeight: height
      })
    } else {
      this.setState({
        magnified: true,
        mainImageWidth: width,
        mainImageHeight: height
      })
    }
  }

  handleMagnifyingMovement(event) {
    const targetElement = document.querySelector('.main-image')
    const {
      top,
      left,
    } = targetElement.getBoundingClientRect();
    const y = event.pageY - top - window.pageYOffset - 100;
    const x = event.pageX - left - window.pageXOffset - 150;
    this.changeMagnifyingPosition(x, y)
  }

  changeMagnifyingPosition(x, y) {
    //use a ref instead of queryselector. image-magnifier should be an id
    const magnifyingGlassElement = document.querySelector('.image-magnifier');
    const {
      mainImageHeight,
      mainImageWidth,
      currentMainImage} = this.state;

    let backGroundNewXPosition = `${(-x * 2.5)}px`;
    let backGroundNewYPosition = `${-y * 2.5}px`;
    let bigImageHeight = mainImageHeight * 2.5;
    let bigImageWidth = mainImageWidth * 2.5;
    //changes position of the magnifying glass and its background image
    magnifyingGlassElement.style.backgroundSize = `${bigImageHeight}px ${bigImageWidth}px`;
    magnifyingGlassElement.style.top = `${y}px`;
    magnifyingGlassElement.style.left = `${x}px`;
    magnifyingGlassElement.style.pointerEvents = 'none';
    magnifyingGlassElement.style.backgroundPosition = `${backGroundNewXPosition} ${backGroundNewYPosition}`;
    magnifyingGlassElement.style.backgroundRepeat = 'no-repeat';

  }

  handleStyleChangeClick(productId, thumbnailLength) {
    if (this.state.currentMainImageIndex <= thumbnailLength - 1) {
      this.setState({
        currentStyleId: productId,
        selectedSizeSKU: '',
        selectedQuantity: 0
      })
    } else {
      this.setState({
        currentStyleId: productId,
        selectedSizeSKU: '',
        selectedQuantity: 0,
        currentMainImageIndex: 0,
        scrolledDownValue: false
      })
    }
  }

  handleSelect(event) {
    let targetStateElement = event.target.name;
    let newStateValue =
    targetStateElement === 'selectedQuantity'
      ? Number(event.target.value)
      : event.target.value;

    this.setState({
      [targetStateElement]: newStateValue
    })
  }

  handleAddToCart() {
    this.state.selectedSizeSKU && this.state.selectedQuantity
    ? console.log("added to cart")
    : console.log("pick a size and quantity")
  }

  render() {
    const {
      currentProduct,
      currentStyles,
      currentProductRating,
      currentStyleId,
      scrolledDownValue,
      currentMainImage,
      currentMainImageIndex,
      expandedView,
      magnified,
      mainImageHeight,
      mainImageWidth,
      selectedSizeSKU,
      selectedQuantity
    } = this.state;

    let galleryView;
    if (!this.state.expandedView) {
      galleryView =
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
            expandedView={expandedView}
            handleExpandedViewClick={this.handleExpandedViewClick}
          />
        </div>
    } else {
      galleryView =
        <div className="gallery-container-expanded">
          <Expanded
            currentStyles={currentStyles}
            currentStyleId={currentStyleId}
            carouselScrolledDown={this.carouselScrolledDown}
            scrolledDownValue={scrolledDownValue}
            currentMainImage={currentMainImage}
            handleThumbnailClick={this.handleThumbnailClick}
            handleLeftRightMainImage={this.handleLeftRightMainImage}
            currentMainImageIndex={currentMainImageIndex}
            expandedView={expandedView}
            handleExpandedViewClick={this.handleExpandedViewClick}
            magnified={magnified}
            handleMagnifyingClick={this.handleMagnifyingClick}
            handleMagnifyingMovement={this.handleMagnifyingMovement}
            mainImageHeight={mainImageHeight}
            mainImageWidth={mainImageWidth}
          />
        </div>
    }

    let styleView;
    if (!this.state.expandedView) {
      styleView =
        <div className="styles-container">
          <StylesAndCart
            currentProduct={currentProduct}
            currentProductRating={currentProductRating}
            currentStyles={currentStyles}
            handleStyleChangeClick={this.handleStyleChangeClick}
            currentStyleId={currentStyleId}
            handleSelect={this.handleSelect}
            selectedSizeSKU={selectedSizeSKU}
            selectedQuantity={selectedQuantity}
            currentMainImageIndex={currentMainImageIndex}
            handleAddToCart={this.handleAddToCart}/>
        </div>

    } else {
      styleView = <div></div>
    }

    return (
      <div className="overview-main-container">
        <div className="pic-style-container">
          {galleryView}
          {styleView}
        </div>
        <div className="product-info-container">
          <ProductDescription
          currentProduct={currentProduct} currentProductRating={currentProductRating} currentStyles={currentStyles}/>
        </div>
      </div>
    )
  }
}

export default Overview;
