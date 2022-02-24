import React from 'react';
import { MagnifyingGlass, XCircle } from 'phosphor-react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSearchText: '',
      searched: false,
      searchMatchData: []
    }
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.handleSearchSelection = this.handleSearchSelection.bind(this);
    this.handleCloseSearchResults = this.handleCloseSearchResults.bind(this);
    this.handleSearchEnterEsc = this.handleSearchEnterEsc.bind(this);
  }

  handleSearchChange(event) {
    this.setState({
      currentSearchText: event.target.value
    })
  }

  //gets matching items where its name contains the currentsearchtext
  handleSearchClick(props) {
    var searchResults = [];
    this.props.allProducts.forEach((oneItem) => {

      var currentName = oneItem.name.toLowerCase();
      if (currentName.includes(this.state.currentSearchText.toLowerCase())) {
        searchResults.push({
          category: oneItem.category,
          name: oneItem.name,
          price: oneItem.default_price,
          id: oneItem.id
        })
      }
    })
    this.setState({
      searchMatchData: searchResults,
      searched: true
    })
  }

  handleSearchEnterEsc(event) {

    if (event.key === "Enter") {
      event.preventDefault();
      this.handleSearchClick();
    }
    // if (event.keyCode === 27) {
    //   event.preventDefault();
    //   this.handleCloseSearchResults();
    // }
  }

  handleSearchSelection(id) {
    this.props.handleChangeOfProductID(id)
    this.setState({
      currentSearchText: '',
      searched: false,
      searchMatchData: []
    })
  }

  handleCloseSearchResults() {
    this.setState({
      searched: false,
      currentSearchText: ''
    })
  }

  render() {
    let formattedSearchResults;
    if (this.state.searched && (this.state.searchMatchData.length > 0)) {
      formattedSearchResults =
        this.state.searchMatchData.map((oneMatch, index) => {
          return (
            <div key={index} className="one-search-result-container" onClick={() => this.handleSearchSelection(oneMatch.id)}>
              <div className="search-result-category">
                <span className="search-title">Category:</span>{oneMatch.category}</div>
              <div className="search-result-name">
                <span className="search-title">Product:</span> {oneMatch.name}</div>
              <div className="search-result-price">${oneMatch.price}</div>
            </div>
          )
        })
    } else {
      formattedSearchResults =
        <div className="no-results-container">
          <div className="no-results">No matching items</div>
        </div>
    }

    let searchResultsContainer;
    if (!this.state.searched) {
      searchResultsContainer = null;
    } else {
      searchResultsContainer = <div className="search-results-container">
        <div className="close-search-results-container" onClick={this.handleCloseSearchResults}><XCircle size={14} weight="light" /></div>
        {formattedSearchResults}
      </div>
    }

    return (
      <div className="search-bar-container">
        <div className="brand-logo">
          Maple Innovations
        </div>
        <div className="input-searchbutton-container">
          <div>
            <input
              type="text"
              placeholder="Search"
              className="search-input"
              value={this.state.currentSearchText}
              onKeyPress={this.handleSearchEnterEsc}
              onChange={this.handleSearchChange}></input>
          </div>
          <div className="search-bar-button">
            <MagnifyingGlass size={18} onClick={this.handleSearchClick} />
          </div>
        </div>
        {searchResultsContainer}
      </div>
    )
  }
}



// const SearchBar = function (props) {
//   const{handleSearchChange, handleSearchClick} = props


//   return (
//     <div className="search-bar-container">
//       <div className="brand-logo">
//         Maple Innovations
//       </div>
//       <div className="input-searchbutton-container">
//         <div>
//           <input
//             type="text"
//             placeholder="Search"
//             className="search-input"
//             onChange={handleSearchChange}></input>
//         </div>
//         <div className="search-bar-button">
//           <MagnifyingGlass size={18} onClick={handleSearchClick}/>
//         </div>
//       </div>
//     </div>
//   )
// }

export default SearchBar;