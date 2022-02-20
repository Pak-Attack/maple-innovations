import React from 'react';
import { CaretDown, CaretUp, ArrowLeft, ArrowRight, CornersOut } from 'phosphor-react';

const Gallery = function (props) {
  const styleOptions = props.currentStyles.results;
  const currentStyleId = props.currentStyleId;
  const expandedView = props.expandedView;
  const currentMainImageIndex = props.currentMainImageIndex;
  const scrolledDownValue = props.scrolledDownValue;
  let currentStyleImages;
  let mainImage;
  let upButton;
  let downButton;
  let leftButton;
  let rightButton;

  styleOptions.forEach((oneStyle, index) => {
    if (oneStyle.style_id === currentStyleId) {
      currentStyleImages = oneStyle.photos;
      if (!currentStyleImages[currentMainImageIndex]) {
        mainImage = currentStyleImages[0].url;
      } else {
        mainImage = currentStyleImages[currentMainImageIndex].url;
      }
    }
  });

  //Determines if a down button is necessary in the thumbnail carousel
  if (currentStyleImages.length <= 7
    || currentMainImageIndex === currentStyleImages.length - 1) {
    downButton = <div className="thumbnail-button" style={{visibility:"hidden"}}><CaretDown size={18} /></div>;
  } else {
    downButton =
      <div >
        <div className="thumbnail-button" onClick={() => scrollToThumbnail('down')}><CaretDown size={18} /></div>
      </div >;
  }

  //creates an up button if the list is scrolled
  if (currentStyleImages.length <= 7 || !scrolledDownValue) {
    upButton = <div className="thumbnail-button" style={{visibility:"hidden"}}><CaretUp size={18} /></div>;
  } else if (props.scrolledDownValue === true) {
    upButton =
      <div>
        <div className="thumbnail-button" onClick={() => scrollToThumbnail('up')}><CaretUp size={18} /></div>
      </div>
  } else {
    upButton =
      <div>
        <div className="thumbnail-button" style={{ visibility: "hidden" }}><CaretUp size={18} />
        </div>
      </div>
  }

  //determines if left button should be visibile
  if (currentMainImageIndex > 0) {
    leftButton = <div className="left-button" onClick={() => onClickHandler('left', currentStyleImages)}><ArrowLeft size={24} /></div>
  } else {
    <div className="left-button" style={{ visibility: "hidden" }}><ArrowLeft size={24} /></div>
  }

  //determines if right button should be visibile
  if (currentMainImageIndex < currentStyleImages.length - 1) {
    // console.log('should render');
    rightButton = <div className="right-button" onClick={() => onClickHandler('right', currentStyleImages)}><ArrowRight size={24} /></div>
  } else {
    // console.log('hidden');
    <div className="right-button" style={{ visibility: "hidden" }}><ArrowRight size={24} /></div>
  }

  let currentStyleThumbnails = currentStyleImages.map((oneThumbnail, index) => {
    if (index === props.currentMainImageIndex) {
      return (
        <div className="one-thumbnail-container selected-thumbnail" key={index} onClick={() => props.handleThumbnailClick(oneThumbnail.url, index)}>
          <img className="one-thumbnail" src={oneThumbnail.thumbnail_url}></img>
        </div>
      )
    } else {
      return (
        <div className="one-thumbnail-container" data-index={index} key={index} onClick={() => props.handleThumbnailClick(oneThumbnail.url, index)}>
          <img className="one-thumbnail" src={oneThumbnail.thumbnail_url}></img>
        </div>
      )
    }
  })

  const onClickHandler = function (xChange, currentStyleImages) {
    props.handleLeftRightMainImage(xChange, currentStyleImages);
  }

  const scrollToThumbnail = function (direction) {
    let targetThumbnail = document.querySelector('.thumbnail-main-carousel');
    let topSpacing;
    if (direction === 'up') {
      topSpacing = targetThumbnail.scrollTop - 62.4;
    }
    if (direction === 'down') {
      topSpacing = targetThumbnail.scrollTop + 62.4;
    }
    if (targetThumbnail) {
      targetThumbnail.scroll({
        top: topSpacing,
        behavior: 'smooth'
      })
      props.carouselScrolledDown(topSpacing)
    }
  }

  return (
    <div>
      <div className="main-image-container">
        <img className="main-image" src={mainImage} onClick={props.handleExpandedViewClick}></img>
        <div className="thumbnail-main-container">
          {upButton}
          <div className="thumbnail-main-carousel">
            {currentStyleThumbnails}
          </div>
          {downButton}
        </div>
        {leftButton}
        {rightButton}
        <div className="zoom-button" onClick={props.handleExpandedViewClick}><CornersOut size={18} /></div>
      </div>
    </div>
  )
};

export default Gallery;