import React from 'react';

const Gallery = function (props) {
  const styleOptions = props.currentStyles.results;
  const currentStyleId = props.currentStyleId;
  let currentStyleImages;
  let mainImage;
  let upButton;
  let downButton;

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

  if (currentStyleImages.length <= 7) {
    downButton = <div></div>;
  } else {
    downButton =
      <div >
        <button className="thumbnail-button previous-pics" onClick={() => scrollToThumbnail('down')}>Down</button>
      </div >;
  }

  if (props.scrolledDownValue === true) {
    upButton = <button className="thumbnail-button previous-pics" onClick={() => scrollToThumbnail('up')}>Up</button>
  } else {
    upButton = <div></div>;
  }

  let currentStyleThumbnails = currentStyleImages.map((oneThumbnail, index) => {
    if (mainImage === oneThumbnail.thumbnail_url) {
      return (
        <div className="one-thumbnail-container selected-thumbnail" key={index} onClick={() => props.handleThumbnailClick(oneThumbnail.thumbnail_url)}>
          <img className="one-thumbnail" src={oneThumbnail.thumbnail_url}></img>
        </div>
      )
    } else {
      return (
        <div className="one-thumbnail-container" key={index} onClick={() => props.handleThumbnailClick(oneThumbnail.thumbnail_url)}>
          <img className="one-thumbnail" src={oneThumbnail.thumbnail_url}></img>
        </div>
      )
    }
  })

  const scrollOnMainImageChange = function(index) {
    let targetThumbnail = document.querySelector('.thumbnail-main-carousel');
    let topSpacing;
    if (props.currentMainImageIndex > 0) {
      topSpacing = props.currentMainImageIndex * 62;
    } else {
      topSpacing = 0;
    }
    if (targetThumbnail) {
      targetThumbnail.scroll({
        top: topSpacing,
        behavior: 'smooth'
      })
    }
  }()

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
        <button className="left-button" onClick={()=>props.handleLeftRightMainImage('left', currentStyleImages)}>⇦</button>
        <button className="right-button" onClick={()=>props.handleLeftRightMainImage('right', currentStyleImages)}>⇨</button>
        <button className="zoom-button">🔍</button>
      </div>
    </div>
  )
};

export default Gallery;