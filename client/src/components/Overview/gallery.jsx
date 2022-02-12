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

  console.log(currentStyleImages);
  let currentStyleThumbnails = currentStyleImages.map((oneThumbnail, index)=> {
    return (
      <div className="one-thumbnail-container" key={index}><img className="one-thumbnail" src={oneThumbnail.thumbnail_url}></img></div>
    )
  })

  return (
    <div>
      <div className="main-image-container">
        <img className="main-image" src={mainImage}></img>
        <div className="thumbnail-main-container">
         {currentStyleThumbnails}
        </div>
      </div>
    </div>
  )
};

export default Gallery;