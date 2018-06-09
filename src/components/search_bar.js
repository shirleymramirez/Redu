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
            <div>
            {/* controlled formed element component - value only changes when state changes  */}
              <input
                value={this.state.term} 
                onChange={event => this.setState({ term: event.target.value })} />
            </div>
        );
    }
}

export default SearchBar;
