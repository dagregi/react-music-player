import { useEffect, useRef, useState } from "react";
import {
  FaChevronDown,
  FaPause,
  FaPauseCircle,
  FaPlay,
  FaPlayCircle,
  FaStepBackward,
  FaStepForward,
} from "react-icons/fa";
import PlayerSlider from "./PlayerSlider";

const Player = () => {
  const [minimized, setMinimized] = useState(true);

  return (
    <>
      <div
        className={`z-10 bg-opacity-10 backdrop-blur-sm bg-cat-mauve items-center justify-around mx-auto px-3 py-2 mb-1.5 w-full flex flex-row fixed bottom-0 shadow-lg rounded-lg ease-in-out duration-300${minimized ? " motion-safe:scale-100" : " motion-safe:scale-0"
          }`}
      >
        <img
          className="sm:object-scale-down md:flex-shrink-0 w-14 h-14"
          src={"test"}
          alt={"test"}
        />
        <h3
          className="tracking-tight truncate flex-auto md:flex-initial font-mono text-cat-text px-3"
          onClick={() => setMinimized(!minimized)}
        >
          {/* {currentMusic.title} */}
        </h3>
        {/* <PlayerSlider */}
        {/*   size="md" */}
        {/*   currentMusic={currentMusic} */}
        {/*   audioRef={audioRef} */}
        {/* /> */}
        <button
          className="flex-none text-center mx-2 md:mx-4"
          onClick={() => {
            if (true) {
              audioRef.current?.pause();
            } else {
              audioRef.current?.play();
            }
          }}
        >
          {false ? (
            <FaPause className="fill-cat-text" />
          ) : (
            <FaPlay className="fill-cat-text" />
          )}
        </button>
      </div>
      <section
        className={`mx-auto fixed top-0 z-20 w-screen h-screen px-4 py-2 bg-opacity-10 backdrop-blur-md bg-cat-mauve ease-in-out duration-300${minimized ? " motion-safe:scale-0" : " motion-safe:scale-100"
          }`}
      >
        <div className="flex flex-col content-between w-full">
          <span className="text-cat-text flex flex-row items-center my-2 pb-14">
            <FaChevronDown
              className="flex-none"
              size={25}
              onClick={() => setMinimized(!minimized)}
            />
            <h1 className="font-semibold text-lg flex-1 text-center">
              {/* {currentMusic.title} */}
            </h1>
          </span>
          <img className="object-cover my-4" src={"test"} alt={"test"} />
          <span className="tracking-tight my-2">
            <h2 className="text-cat-text font-bold text-2xl">
              {/* {currentMusic.title} */}
            </h2>
            <h3 className="text-cat-subtext0 font-light text-xl">
              {/* {currentMusic.artist} */}
            </h3>
          </span>
          {/* <PlayerSlider */}
          {/*   size="sm" */}
          {/*   currentMusic={currentMusic} */}
          {/*   audioRef={audioRef} */}
          {/* /> */}
          <span className="flex flex-row mx-auto text-cat-text py-2 my-4">
            <button>
              <FaStepBackward
                className="mx-3 fill-cat-subtext1 self-center"
                size={30}
              />
            </button>
            <button
              onClick={() => {
                if (true) {
                  audioRef.current?.pause();
                } else {
                  audioRef.current?.play();
                }
              }}
            >
              {true ? (
                <FaPauseCircle className="mx-3 self-center" size={55} />
              ) : (
                <FaPlayCircle className="mx-3 self-center" size={55} />
              )}
            </button>
            <button>
              <FaStepForward
                className="mx-3 fill-cat-subtext1 self-center"
                size={30}
              />
            </button>
          </span>
        </div>
      </section>
    </>
  );
};

export default Player;
