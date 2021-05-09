import React, { useState, useEffect } from 'react';
import Video from './Video';
import './App.css';

function App() {
  const [videos] = useState(
    [ 
          
          { "description" : "Guess the bike model ...",
            "sources" : [ "https://assets.mixkit.co/videos/preview/mixkit-man-traveling-fast-by-motorcycle-on-a-road-39931-large.mp4" ],
            
          },
          
          { "description" : "Look at this cutie.",
            "sources" : [ "https://media.istockphoto.com/videos/jack-russell-begging-on-yellowflowered-ground-video-id1146454849" ],
           
          },
          { "description" : "EAT-SLEEP-WORK-REPEAT!",
            "sources" : [ "https://media.istockphoto.com/videos/young-woman-training-on-a-rooftop-enjoying-freedom-vertical-format-video-id1258720345" ],
            
          },
          { "description" : "Introducing Girl.",
            "sources" : [ "https://assets.mixkit.co/videos/preview/mixkit-cold-looking-fashion-woman-in-a-winter-environment-39879-large.mp4" ],
            
          },  { "description" : "Nature is beautiful... ",
          "sources" : [ "https://assets.mixkit.co/videos/preview/mixkit-man-runs-past-ground-level-shot-32809-large.mp4 " ],
        
        },{ "description" : "That's how it's done.",
        "sources" : [ "https://assets.mixkit.co/videos/preview/mixkit-very-excited-little-girl-opening-a-christmas-gift-with-her-39744-large.mp4" ],
        
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





 