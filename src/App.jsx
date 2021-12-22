import "./App.scss";
import { ReactComponent as Share } from "./assets/share.svg";
import { ReactComponent as Add } from "./assets/addtoplaylist.svg";
import { ReactComponent as Heart } from "./assets/heart.svg";
import { ReactComponent as Suffle } from "./assets/suffle.svg";
import { ReactComponent as Right } from "./assets/right.svg";
import { ReactComponent as Left } from "./assets/left.svg";
import { ReactComponent as Settings } from "./assets/settings.svg";
import { ReactComponent as Random } from "./assets/random.svg";
import { ReactComponent as Repeat } from "./assets/repeat.svg";
import { ReactComponent as Pause } from "./assets/pause.svg";
import { useState } from "react";

function App() {
  const [hideControll, setHideControll] = useState(false);
  const [prev, setPrev] = useState(false);
  const [next, setNext] = useState(false);
  const [center, setCenter] = useState(false);
  return (
    <div className="container">
      <div className="ui_container">
        <div className="card album_info">
          <div className="album_cover">
            <div className="album-image"></div>
          </div>
          <div className="album_info-right">
            <div className="now-playing">Now Playing</div>
            <div className="title-info">
              <div className="title">Purple Haze</div>
              <div className="singer">Jimi Hendrix</div>
              <div className="album">Woodstock</div>
            </div>
            <div className="icons">
              <div className="icon_container">
                <Heart />
              </div>
              <div className="icon_container">
                <Add />
              </div>
              <div className="icon_container">
                <Share />
              </div>
            </div>
          </div>
        </div>
        <div
          style={
            hideControll
              ? { right: "750px", width: "800px" }
              : { right: "111px" }
          }
          className="card album_controlls"
        >
          <div
            style={hideControll ? { opacity: 0 } : { opacity: 1 }}
            className="album_btns-container"
          >
            <div className="music_btns">
              <div className="music_btns-left">
                <div className="random">
                  <Random />
                </div>
                <div className="repeat">
                  <Repeat />
                </div>
              </div>
              <div className="music_btns-center">
                <div className="prev">
                  <div
                    style={prev ? { transform: "scale(.9)" } : null}
                    onMouseUp={() => setPrev(false)}
                    onMouseDown={() => setPrev(true)}
                    className="prev-container"
                  >
                    <Left />
                  </div>
                </div>
                <div className="pause">
                  <div
                    style={center ? { transform: "scale(.9)" } : null}
                    onMouseUp={() => setCenter(false)}
                    onMouseDown={() => setCenter(true)}
                    className="pause-container"
                  >
                    <Pause />
                  </div>
                </div>
                <div className="next">
                  <div
                    style={next ? { transform: "scale(.9)" } : null}
                    onMouseUp={() => setNext(false)}
                    onMouseDown={() => setNext(true)}
                    className="next-container"
                  >
                    <Right />
                  </div>
                </div>
              </div>
              <div className="music_btns-right">
                <div className="suffle">
                  <Suffle />
                </div>
                <div className="settings">
                  <Settings />
                </div>
              </div>
            </div>
            <div className="music_slider-container">
              <div className="slider">
                <input type="range" className="range" />
              </div>
              <div className="slider_range">
                <div className="slider_range-left">2:01:00</div>
                <div className="slider_range-right">4:16:00</div>
              </div>
            </div>
          </div>
          <div
            onClick={() => setHideControll(!hideControll)}
            className="gesture-line"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default App;
