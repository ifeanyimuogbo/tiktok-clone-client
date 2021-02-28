import { useEffect, useState } from "react";

import "./App.css";
import Video from "./Video";
import axios from "./axios";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://polar-spire-48105.herokuapp.com/v2/posts"
        );
        setVideos(response.data);
        return response;
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  }, []);
  return (
    <div className="app">
      <div className="app__videos">
        {videos.map((video, index) => (
          <Video
            key={index}
            url={video.url}
            channel={video.channel}
            description={video.description}
            song={video.song}
            likes={video.likes}
            comments={video.comments}
            shares={video.shares}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
