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
      mainImage = currentStyleImages[0].thumbnail_url;
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

  //make these dynamics by getting the height of each individual thumbnail.
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
      props.carouselScrolledDown(targetThumbnail.scrollTop, direction)
    }
  }

  let currentStyleThumbnails = currentStyleImages.map((oneThumbnail, index) => {
    return (
      <div className="one-thumbnail-container" key={index}>
        <img className="one-thumbnail" src={oneThumbnail.thumbnail_url}></img>
      </div>
    )
  })

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
      </div>
    </div>
  )
};

export default Gallery;