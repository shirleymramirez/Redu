import React from 'react';

const VideoListItem = ({video}) => {
    // arguments has a property video, same with the syntax below
    // above is an ES6 syntax
    // const video = props.video;

    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        <li className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl}/>
                </div>
            </div>
            <div className="media-body">
                <div className="media-heading">{video.snippet.title}</div>
            </div>
        </li>
    );
};

export default VideoListItem;