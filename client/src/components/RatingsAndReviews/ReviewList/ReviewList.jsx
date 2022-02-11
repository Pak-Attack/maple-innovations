import React from 'react';
import ReviewListEntry from './ReviewListEntry.jsx';

  class ReviewList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        reviewCount: 2,
      }
      this.reviews = this.props.product.results.slice(0, this.state.reviewCount)

    console.log('ReviewList Props: ', this.props);
    this.addMoreReviews = this.addMoreReviews.bind(this);
  }

  addMoreReviews() {
    this.setState({
      reviewCount: this.state.reviewCount += 2
    })
  }


  render() {
    return (
      <div>
        <div>
          {this.props.product.results.length} reviews sorted by XXXXX
        </div>
        <div>
          {this.reviews.map((review, key) => (
            <ReviewListEntry review={review} key={key}/>
          ))}
        </div>
        <div>
          <button onClick={this.addMoreReviews}>More+</button><button>Add+</button>
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