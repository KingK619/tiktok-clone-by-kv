import React, { useState, useEffect } from 'react';
import Video from './Video';
import './App.css';

function App() {
  const [videos] = useState(
    [ 

          { "description" : "HBO GO now works with Chromecast ",
            "sources" : [ "http://www.exit109.com/~dnn/clips/RW20seconds_1.mp4" ],
           
          },
          { "description" : "Introducing Frog.",
            "sources" : [ "https://assets.mixkit.co/videos/preview/mixkit-red-frog-on-a-log-1487-large.mp4" ],
            
          },
          { "description" : "Introducing Girl.  ",
            "sources" : [ "https://assets.mixkit.co/videos/preview/mixkit-cold-looking-fashion-woman-in-a-winter-environment-39879-large.mp4" ],
            
          }
    
    ]
  );

 

  return (
  
    <div className="app">
     

      <div class="app__videos">
        {videos.map(({ sources, description}) => (
          <Video
            url={sources}
            description={description}
           />
        )
        )}
      </div>

    </div>
  );
}

export default App;





 