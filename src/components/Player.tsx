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
import { usePlayer } from "../utils";
import PlayerSlider from "./PlayerSlider";

const Player = () => {
  const [minimized, setMinimized] = useState(true);

  const audioRef = useRef<HTMLAudioElement>();
  const { currentMusic, setCurrentMusic, playList } = usePlayer();

  useEffect(() => {
    audioRef.current = new Audio(currentMusic.src);

    // play and pause
    audioRef.current.addEventListener("play", () => {
      setCurrentMusic({ isPlaying: true });
    });
    audioRef.current.addEventListener("pause", () => {
      setCurrentMusic({ isPlaying: false });
    });

    // got to the next music when current one finished
    audioRef.current.addEventListener("ended", (e: any) => {
      skipNext(new URL(e.target.src).pathname);
    });

    //lets trigger when audio is ready
    audioRef.current.addEventListener("canplay", () => {
      audioRef.current?.play();
    });

    // time and duration
    audioRef.current.addEventListener("loadedmetadata", (e: any) => {
      setCurrentMusic({
        curTime: e.target.currentTime,
        duration: e.target.duration,
      });
    });
    audioRef.current.addEventListener("timeupdate", (e: any) => {
      setCurrentMusic({
        curTime: e.target.currentTime,
      });
    });

    return () => {
      audioRef.current?.pause();
    };
  }, [currentMusic.src]);

  const skipNext = (src: string) => {
    const idx = playList.findIndex((m) => m.src === src);

    // if we are in last music
    if (idx === playList.length - 1) {
      // go to first one
      setCurrentMusic(playList[0], true);
    } else {
      setCurrentMusic(playList[idx + 1], true);
    }
  };

  const skipPrev = (src: string) => {
    const idx = playList.findIndex((m) => m.src === src);

    if (idx === 0) {
      setCurrentMusic(playList[playList.length - 1]);
    } else {
      setCurrentMusic(playList[idx - 1]);
    }
  };

  return (
    <>
      <div
        className={`z-10 bg-opacity-10 backdrop-blur-sm bg-cat-mauve items-center justify-around mx-auto px-3 py-2 mb-1.5 w-full flex flex-row fixed bottom-0 shadow-lg rounded-lg ease-in-out duration-300${minimized ? " motion-safe:scale-100" : " motion-safe:scale-0"
          }`}
      >
        <img
          className="sm:object-scale-down md:flex-shrink-0 w-14 h-14"
          src={currentMusic.cover}
          alt={currentMusic.title}
        />
        <h3
          className="tracking-tight truncate flex-auto md:flex-initial font-mono text-cat-text px-3"
          onClick={() => setMinimized(!minimized)}
        >
          {currentMusic.title}
        </h3>
        <PlayerSlider
          size="md"
          currentMusic={currentMusic}
          audioRef={audioRef}
        />
        <button
          className="flex-none text-center mx-2 md:mx-4"
          onClick={() => {
            if (currentMusic.isPlaying) {
              audioRef.current?.pause();
            } else {
              audioRef.current?.play();
            }
          }}
        >
          {currentMusic.isPlaying ? (
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
              {currentMusic.title}
            </h1>
          </span>
          <img
            className="object-cover my-4"
            src={currentMusic.cover}
            alt={currentMusic.title}
          />
          <span className="tracking-tight my-2">
            <h2 className="text-cat-text font-bold text-2xl">
              {currentMusic.title}
            </h2>
            <h3 className="text-cat-subtext0 font-light text-xl">
              {currentMusic.artist}
            </h3>
          </span>
          <PlayerSlider
            size="sm"
            currentMusic={currentMusic}
            audioRef={audioRef}
          />
          <span className="flex flex-row mx-auto text-cat-text py-2 my-4">
            <button onClick={() => skipPrev(currentMusic?.src)}>
              <FaStepBackward className="mx-3 self-center" size={35} />
            </button>
            <button
              onClick={() => {
                if (currentMusic.isPlaying) {
                  audioRef.current?.pause();
                } else {
                  audioRef.current?.play();
                }
              }}
            >
              {currentMusic.isPlaying ? (
                <FaPauseCircle className="mx-3 self-center" size={50} />
              ) : (
                <FaPlayCircle className="mx-3 self-center" size={50} />
              )}
            </button>
            <button onClick={() => skipNext(currentMusic?.src)}>
              <FaStepForward className="mx-3 self-center" size={35} />
            </button>
          </span>
        </div>
      </section>
    </>
  );
};

export default Player;
