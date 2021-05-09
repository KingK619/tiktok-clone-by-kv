import React from 'react';
import './VideoFooter.css';


function VideoFooter({  description }) {
    return (
        <div className="videoFooter">
            <div className="videoFooter__text">
                <p>{description}</p>

            </div>
  
            <img
                className="videoFooter__record"
                src="https://static.thenounproject.com/png/934821-200.png"
                alt="" />
           
        </div>
       
    )
}

export default VideoFooter
