import React , {useRef,useState} from 'react';
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";


function Video({url,channel,description,likes,shares,messages,song}) {
    const [playing,setPlaying]=useState(false);
    const videoRef = useRef(null);
    const onVideoPress =() =>{
        if(playing){
        videoRef.current.play();
        setPlaying(false);
        }
        else{
            videoRef.current.pause();
            setPlaying(true);
        }
    }
    return (
        <div className="video">
            
            <video 
            className="video__player"
             width="100%" 
             height="100%"
             loop
             onClick={onVideoPress}
             ref={videoRef}
                >
            <source src={url} type="video/mp4"/>
           </video>
           <VideoFooter
              channel={channel}
              description={description}
              song={song}
              
           
            />
            <VideoSidebar
              likes={likes}
              shares={shares}
              messages={messages}
            
             />
            
        </div>
    )
}

export default Video
