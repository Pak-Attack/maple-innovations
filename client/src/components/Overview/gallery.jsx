import React from 'react';

const Gallery = function (props) {
  const styleOptions = props.currentStyles.results;
  const currentStyleId = props.currentStyleId;
  let currentStyleImages;
  let mainImage;
  let upButton;
  let downButton;

  //creates array of current images for the selected style and sets the main photo on initial page load
  styleOptions.forEach((oneStyle, index) => {
    if (oneStyle.style_id === currentStyleId) {
      currentStyleImages = oneStyle.photos;
      if (props.currentMainImage === '') {
        mainImage = currentStyleImages[0].thumbnail_url;
      } else {
        mainImage = props.currentMainImage;
      }
    }
  });

  //Determines if a down button is necessary in the thumbnail carousel
  if (currentStyleImages.length <= 7) {
    downButton = <div className="thumbnail-button"></div>;
  } else {
    downButton =
      <div >
        <button className="thumbnail-button" onClick={() => scrollToThumbnail('down')}>Down</button>
      </div >;
  }

  //creates an up button if the list is scrolled
  if (props.scrolledDownValue === true) {
    upButton =
      <div>
        <button className="thumbnail-button" onClick={() => scrollToThumbnail('up')}>Up</button>
      </div>
  } else {
    upButton =
      <div>
        <button className="thumbnail-button" style={{ visibility: "hidden" }}>
        </button>
      </div>
  }

  let currentStyleThumbnails = currentStyleImages.map((oneThumbnail, index) => {
    if (index === props.currentMainImageIndex) {
      return (
        <div className="one-thumbnail-container selected-thumbnail" key={index} onClick={() => props.handleThumbnailClick(oneThumbnail.thumbnail_url)}>
          <img className="one-thumbnail" src={oneThumbnail.thumbnail_url}></img>
        </div>
      )
    } else {
      return (
        <div className="one-thumbnail-container" data-index={index} key={index} onClick={() => props.handleThumbnailClick(oneThumbnail.thumbnail_url, index)}>
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
      topSpacing = targetThumbnail.scrollTop - 62;
    }
    if (direction === 'down') {
      topSpacing = targetThumbnail.scrollTop + 62;
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
        <img className="main-image" src={mainImage}></img>
        <div className="thumbnail-main-container">
          {upButton}
          <div className="thumbnail-main-carousel">
            {currentStyleThumbnails}
          </div>
          {downButton}
        </div>
        <button className="left-button" onClick={() => onClickHandler('left', currentStyleImages)}>⇦</button>
        <button className="right-button" onClick={() => onClickHandler('right', currentStyleImages)}>⇨</button>
        <button className="zoom-button">🔍</button>
      </div>
    </div>
  )
};

export default Gallery;