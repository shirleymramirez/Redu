import React, { Component }from 'react';

// class-based component search bar 
// giving search bar functionality from react.component class
class SearchBar extends Component{
    constructor(props) {
        super(props);

        //manually updating this.state inside constructor element
        this.state ={ term: '' };
    }
    render() {
        return (
            <div className="search-bar">
            {/* controlled formed element component - value only changes when state changes  */}
              <input
                value={this.state.term} 
                onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;
