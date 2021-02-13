import React from 'react'
import './VideoSidebar.css'
import FavoriteIcon from '@material-ui/icons/Favorite';
import MessageIcon from "@material-ui/icons/Message";




function VideoSidebar() {


    return (
        <div className="videoSidebar">
            <div className="videoSidebar__button">
                    <FavoriteIcon fontSize="large" />
                    
            </div>
            <div className="videoSidebar__button">
                <MessageIcon
                    fontSize="large" />
               
            </div>
 
        </div>
    )
}

export default VideoSidebar
