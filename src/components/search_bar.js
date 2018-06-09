import React, { Component }from 'react';

// class-based component search bar 
// giving search bar functionality from react.component class
class SearchBar extends Component{
    constructor(props) {
        super(props);

        this.state ={ term: '' };
    }
    render() {
        return (
            <div>
            {/* whenever this is update, 'this.setState' will set a new value of our 'term' input
            it causes our component to automatically rerender and push all those updated values into the DOM  */}
              <input onChange={event => this.setState({ term: event.target.value })} />
            </div>
        )
    }
}

export default SearchBar;
