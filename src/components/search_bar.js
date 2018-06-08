import React, { Component }from 'react';

// class-based component search bar 
// giving search bar functionality from react.component class
class SearchBar extends Component{
    render() {

        // create a new input element and pass it as a props, property onChange with
        // a value of this.onInputChange
        // will be triggers whenever events occurs
        return <input onChange={this.onInputChange} />
    }

    // whenever the input changes, run this code
    // argument "event" object describe the context or information about the event that occured
    onInputChange(event) {
        console.log(event.target.value);
    }
}

export default SearchBar;
