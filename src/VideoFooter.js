import { MusicNote } from "@material-ui/icons";
import Ticker from "react-ticker";

import "./VideoFooter.css";

const VideoFooter = ({ channel, description, song }) => {
  return (
    <div className="video-footer">
      <div className="video-footer__text">
        <h3>@{channel}</h3>
        <p>{description}</p>
        <div className="video-footer__ticker">
          <MusicNote className="video-footer__ticker__icon" />
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>{song}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img
        className="video-footer__record"
        src="https://static.thenounproject.com/png/934821-200.png"
        alt=""
      />
    </div>
  );
};

export default VideoFooter;
