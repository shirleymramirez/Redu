import React, { Component }from 'react';

// class-based component search bar 
// giving search bar functionality from react.component class
class SearchBar extends Component{
    render() {
        // create a new input element and pass it as a props, property onChange with
        // a value of this.onInputChange
        // will be triggers whenever events occurs
        // use of arrow function for ES6 and simplification
        return <input onChange={ event => console.log(event.target.value)} />
    }
}

export default SearchBar;
