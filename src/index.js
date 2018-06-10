import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';
const API_KEY = "AIzaSyA_A87KhTJlWXKOadXwDVPDckE1_pWAb-I";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({ key: API_KEY, term: "surfboards" }, (videos) => {
            this.setState({ videos });
            // this.setState({ videos: videos})
            //in ES6, when key and value are the same can be optimized as the above
        });
    }
  render() {
    return (
        <div>
            <SearchBar />
            <VideoDetail video={this.state.videos[0]}/>
            {/* passing data as props from parent(app) to child Videolist */}
            <VideoList videos={this.state.videos}/>
        </div>
    );
  }
}

//Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));
