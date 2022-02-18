import React from 'react';
import ReviewListEntry from './ReviewListEntry.jsx';

  class ReviewList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        reviewCount: 2,
      }

    console.log('ReviewList Props: ', this.props);
    this.addMoreReviews = this.addMoreReviews.bind(this);
  }

  addMoreReviews() {
    this.setState({
      reviewCount: this.state.reviewCount += 2
    })
  }

  render() {
    const {reviewCount} = this.state
    return (
      <div>
        <div>
          {this.props.product.results.length} reviews sorted by XXXXX
        </div>
        <div>
          {this.props.product.results.slice(0, reviewCount).map((review, key) => (
            <ReviewListEntry
              review={review}
              key={key}
            />
          ))}
        </div>
        <div>
          {(this.props.product.results.length < 2 && this.props.product.results.length !== 0) || this.props.product.results.length >= reviewCount ? (<button onClick={this.addMoreReviews}>More+</button>) : null}
          <button>Add New Review</button>
        </div>
      </div>
    )
  }
}

export default ReviewList;

// const ReviewList = ({product}) => {
//   console.log('ReviewList Props: ', product)
//   return (

//     <div>
//       <div>
//         {product.results.length} reviews sorted by XXXXX
//       </div>
//       <div>
//         {product.results.map((review, key) => (
//           <ReviewListEntry review={review} key={key}/>
//         ))}
//       </div>
//       <div>
//         <button>More+</button><button>Add+</button>
//       </div>
//     </div>
//   )
// }