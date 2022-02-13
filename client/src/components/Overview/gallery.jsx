import React from 'react';

const Gallery = function (props) {
  const styleOptions = props.currentStyles.results;
  const currentStyleId = props.currentStyleId;
  let currentStyleImages;
  let mainImage;

  styleOptions.forEach((oneStyle, index) => {
    if (oneStyle.style_id === currentStyleId) {
      currentStyleImages = oneStyle.photos;
      mainImage = currentStyleImages[0].thumbnail_url;
    }
  });

  let currentStyleThumbnails = currentStyleImages.map((oneThumbnail, index) => {
    var thumbnailID;
    if (index === 0) {
      thumbnailID = "previous-pics"
    } else if (index === 7) {
      thumbnailID = "remaining-pics";
    } else {
      thumbnailID = "";
    }
    return (
      <div className="one-thumbnail-container" key={index} id={thumbnailID}>
        <img className="one-thumbnail" src={oneThumbnail.thumbnail_url}></img>
      </div>
    )
  })

  return (
    <div>
      <div className="main-image-container">
        <img className="main-image" src={mainImage}></img>
        <div className="thumbnail-main-container">
        <a className="thumbnail-button previous-pics" href="#previous-pics">Previous</a>
          <div className="thumbnail-main-carousel">
            {currentStyleThumbnails}
          </div>
          <a className="thumbnail-button remaining-pics-button" href="#remaining-pics">More</a>
        </div>
      </div>
    </div>
  )
};

export default Gallery;