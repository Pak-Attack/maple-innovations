import React from 'react';
import ProductDescription from './productDesc.jsx';
import StylesAndCart from './stylesAndCart.jsx';
import Gallery from './gallery.jsx';
import Expanded from './expanded.jsx';
import axios from 'axios';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: {
        "id": 37316,
        "campus": "hr-rfe",
        "name": "Pumped Up Kicks",
        "slogan": "Faster than a just about anything",
        "description": "The Pumped Up serves up crisp court style with a modern look. These shoes show off tennis-whites shades and are constructed with a supple leather upper and a classic rubber cupsole.",
        "category": "Kicks",
        "default_price": "89.00",
        "created_at": "2021-08-13T14:37:33.145Z",
        "updated_at": "2021-08-13T14:37:33.145Z",
        "features": [
            {
                "feature": "Sole",
                "value": "Rubber"
            },
            {
                "feature": "Material",
                "value": "FullControlSkin"
            },
            {
                "feature": "Mid-Sole",
                "value": "ControlSupport Arch Bridge"
            },
            {
                "feature": "Stitching",
                "value": "Double Stitch"
            }
        ]
    },
      currentStyles: {
        "product_id": "37316",
        "results": [
            {
                "style_id": 221027,
                "name": "White",
                "original_price": "89.00",
                "sale_price": null,
                "default?": true,
                "photos": [
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1477420143023-6a0e0b04b69a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1477420143023-6a0e0b04b69a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1518687338977-a84d3086a934?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1518687338977-a84d3086a934?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=652&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1546367791-e7447b431084?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1546367791-e7447b431084?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1498168208808-4c2706938a2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1498168208808-4c2706938a2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1001&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1556812191-381c7e7d96d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1556812191-381c7e7d96d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2982&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1526330563440-3ae2174b6bce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1526330563440-3ae2174b6bce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1655&q=80"
                    },
                    {
                        "thumbnail_url": "uhttps://images.unsplash.com/photo-1515243061678-14fc18b93935?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1515243061678-14fc18b93935?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1516199707327-5399434d0aa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1516199707327-5399434d0aa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1083&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1541444446610-749d3299b35e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1541444446610-749d3299b35e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1548861216-17dd1ac80d5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1548861216-17dd1ac80d5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=664&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1558422504-3d17542c1799?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1558422504-3d17542c1799?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                    }
                ],
                "skus": {
                    "1281202": {
                        "quantity": 14,
                        "size": "7"
                    },
                    "1281203": {
                        "quantity": 25,
                        "size": "7.5"
                    },
                    "1281204": {
                        "quantity": 9,
                        "size": "8"
                    },
                    "1281205": {
                        "quantity": 2,
                        "size": "8.5"
                    },
                    "1281206": {
                        "quantity": 18,
                        "size": "9"
                    },
                    "1281207": {
                        "quantity": 12,
                        "size": "9.5"
                    },
                    "1281208": {
                        "quantity": 10,
                        "size": "10"
                    },
                    "1281209": {
                        "quantity": 18,
                        "size": "10.5"
                    },
                    "1281210": {
                        "quantity": 11,
                        "size": "11"
                    },
                    "1281211": {
                        "quantity": 35,
                        "size": "11.5"
                    },
                    "1281212": {
                        "quantity": 25,
                        "size": "12"
                    }
                }
            },
            {
                "style_id": 221028,
                "name": "Black",
                "original_price": "89.00",
                "sale_price": null,
                "default?": false,
                "photos": [
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1536830220630-ce146cccac84?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1536830220630-ce146cccac84?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1459947727010-6267d2c1232f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1459947727010-6267d2c1232f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1526113438757-122d6d54da4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1526113438757-122d6d54da4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1563&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1523296357416-a4b3c4b9ee65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1523296357416-a4b3c4b9ee65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1510867759970-3d2ca293be77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1510867759970-3d2ca293be77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1534960680480-ca9853707e10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1534960680480-ca9853707e10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2384&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1519330377309-9ee1c6783348?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1519330377309-9ee1c6783348?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/11/converse-fields.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/11/converse-fields.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=1570&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1522032238811-74bc59578599?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1522032238811-74bc59578599?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1472186422470-1f3fbde547aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1472186422470-1f3fbde547aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1647&q=80"
                    }
                ],
                "skus": {
                    "1281213": {
                        "quantity": 14,
                        "size": "7"
                    },
                    "1281214": {
                        "quantity": 25,
                        "size": "7.5"
                    },
                    "1281215": {
                        "quantity": 9,
                        "size": "8"
                    },
                    "1281216": {
                        "quantity": 2,
                        "size": "8.5"
                    },
                    "1281217": {
                        "quantity": 18,
                        "size": "9"
                    },
                    "1281218": {
                        "quantity": 12,
                        "size": "9.5"
                    },
                    "1281219": {
                        "quantity": 10,
                        "size": "10"
                    },
                    "1281220": {
                        "quantity": 18,
                        "size": "10.5"
                    },
                    "1281221": {
                        "quantity": 11,
                        "size": "11"
                    },
                    "1281222": {
                        "quantity": 35,
                        "size": "11.5"
                    },
                    "1281223": {
                        "quantity": 25,
                        "size": "12"
                    }
                }
            }
        ]
    },
      currentStyleId: 221027,
      scrolledDownValue: false,
      currentMainImage: "https://images.unsplash.com/photo-1477420143023-6a0e0b04b69a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
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

  componentDidMount() {
    let currentProductID = this.props.currentProductID;
    axios.all([
      axios.get('/products/params', { params: { product_id: currentProductID } }),
      axios.get('/products/params/styles', { params: { product_id: currentProductID } })])
      .then(axios.spread((firstResponse, secondResponse) => {
        this.setState({
          currentProduct: firstResponse.data,
          currentStyles: secondResponse.data,
          currentStyleId: secondResponse.data.results[0].style_id
        })
      }))
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.currentProductID !== prevProps.currentProductID) {
      let currentProductID = this.props.currentProductID;
      axios.all([
        axios.get('/products/params', { params: { product_id: currentProductID } }),
        axios.get('/products/params/styles', { params: { product_id: currentProductID } })])
        .then(axios.spread((firstResponse, secondResponse) => {
          //correct data is reaching this point after click event
          this.setState({
            currentProduct: firstResponse.data,
            currentStyles: secondResponse.data,
            currentStyleId: secondResponse.data.results[0].style_id,
            currentMainImageIndex: 0,
            currentMainImage: secondResponse.data.results[0].photos[0].url
          })
        }))
      };
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
    const targetElement = document.querySelector('.main-image');
    const {
      top,
      left,
      width,
      height
    } = targetElement.getBoundingClientRect();

    const y = event.clientY - top;
    const x = event.clientX - left;

    // Calculate relative position
    const imgX = (x / width) * 100;
    const imgY = (y / height) * 100;

    // console.log({y})
    // console.log({x})
    // console.log({width})
    // console.log({height})

    this.changeMagnifyingPosition(x, y, imgX, imgY);
  }

  changeMagnifyingPosition(x, y, imgX, imgY) {
    //use a ref instead of queryselector. image-magnifier should be an id
    const magnifyingGlassElement = document.querySelector('.image-magnifier');
    const {
      mainImageHeight,
      mainImageWidth,
      currentMainImage
    } = this.state;

    // let backGroundNewXPosition = `${-(xPos)}px`;
    // let backGroundNewYPosition = `${-(yPos)}px`;

    let bigImageHeight = mainImageHeight * 2.5;
    let bigImageWidth = mainImageWidth * 2.5;
    //changes position of the magnifying glass and its background image
    magnifyingGlassElement.style.backgroundSize = `auto ${bigImageWidth}px`;
    magnifyingGlassElement.style.top = `${y}px`;
    magnifyingGlassElement.style.left = `${x}px`;
    magnifyingGlassElement.style.pointerEvents = 'none';
    magnifyingGlassElement.style.backgroundPosition = `${imgX}% ${imgY}%`;
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
    if(this.state.selectedSizeSKU && this.state.selectedQuantity) {
      axios.post('/cart', null, { params: {
        sku_id: this.state.selectedSizeSKU
      }})
        .then((results)=>{
          this.setState({
            selectedSizeSKU: '',
            selectedQuantity: 0
          })
        })
        .catch((err)=> {
          console.log('catch: ', err)
        })
    }
  }

  render() {
    const {
      currentProduct,
      currentStyles,
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
            currentProductRating={this.props.currentProductRating}
            currentStyles={currentStyles}
            handleStyleChangeClick={this.handleStyleChangeClick}
            currentStyleId={currentStyleId}
            handleSelect={this.handleSelect}
            selectedSizeSKU={selectedSizeSKU}
            selectedQuantity={selectedQuantity}
            currentMainImageIndex={currentMainImageIndex}
            handleAddToCart={this.handleAddToCart}
            totalRatings={this.props.totalRatings}/>
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
            currentProduct={currentProduct} currentProductRating={this.props.currentProductRating} currentStyles={currentStyles} />
        </div>
      </div>
    )
  }
}

export default Overview;
