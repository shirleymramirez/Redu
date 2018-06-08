import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

//api key for youtube
const API_KEY = "AIzaSyA_A87KhTJlWXKOadXwDVPDckE1_pWAb-I";


//Create new component. This component will produce some HTML
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

//Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));
