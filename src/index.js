import _ from 'lodash';
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

        this.state = { 
            videos: [],
            selectedVideo: null 
        };
        this.videoSearch('cats');
    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term }, videos => {
          this.setState({ 
              videos: videos, 
              selectedVideo: videos[0] 
            });
          // this.setState({ videos: videos})
          //in ES6, when key and value are the same can be optimized as the above
        });
    }

  render() {
             // created an fat arrow function and passed it to debounce
             // debounce does is it takes the inner function "((term) => { this.videoSearch(term) }"
             // and can be callled once every 300 milliseconds
             const videoSearch = _.debounce(term => {
               this.videoSearch(term);
             }, 300);

             return <div>
                 <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
                 <VideoDetail video={this.state.selectedVideo} />
                 {/* passing data as props from parent(app) to child Videolist */}
                 <VideoList onVideoSelect={selectedVideo => this.setState(
                       { selectedVideo }
                     )} videos={this.state.videos} />
               </div>;
           }
}

//Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));
