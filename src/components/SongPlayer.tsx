import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import {
  MdKeyboardArrowDown,
  MdPlayCircle,
  MdSkipNext,
  MdSkipPrevious,
} from "react-icons/md";

const SongPlayer = () => {
  const [minimized, setMinimized] = useState(true);
  return (
    <>
      <div
        className={`z-10 bg-opacity-10 backdrop-blur-sm bg-cat-mauve justify-around items-center px-3 py-2 mb-1.5 w-full flex flex-row fixed bottom-0 shadow-lg rounded-lg ease-in-out duration-300${minimized ? " motion-safe:scale-100" : " motion-safe:scale-0"
          }`}
        onClick={() => setMinimized(!minimized)}
      >
        <img className="object-scale-down w-12 h-12" src={} alt={} />
        <h3 className="tracking-tight truncate font-mono text-cat-text flex-auto pr-8 pl-3">
          {}
        </h3>
        <span>
          <FaPlay className="fill-cat-text flex-auto mr-2" />
        </span>
      </div>
      <section
        className={`mx-auto w-screen h-screen px-4 py-2 bg-opacity-10 backdrop-blur-md bg-cat-mauve ease-in-out duration-300${minimized ? " motion-safe:scale-0" : " motion-safe:scale-100"
          }`}
      >
        <div className="flex flex-col content-between w-full">
          <span className="text-cat-text flex flex-row items-center my-2 pb-14">
            <MdKeyboardArrowDown
              className="flex-none"
              size={26}
              onClick={() => setMinimized(!minimized)}
            />
            <h1 className="font-semibold text-lg flex-1 text-center">{}</h1>
          </span>
          <img className="object-cover my-4" src={} alt={} />
          <span className="tracking-tight my-2">
            <h2 className="text-cat-text font-bold text-2xl">{}</h2>
            <h3 className="text-cat-subtext0 font-light text-xl">{}</h3>
          </span>
          {/* TODO: Implement the bar! */}
          <div className="w-full h-1.5 bg-cat-mauve/40 rounded-lg my-2">
            <div className="w-1/2 h-1.5 bg-cat-lavender rounded-lg" />
          </div>
          <span className="flex flex-row mx-auto text-cat-text py-2 my-4">
            <MdSkipPrevious className="mx-2 self-center" size={45} />
            <MdPlayCircle className="mx-2 self-center" size={70} />
            <MdSkipNext className="mx-2 self-center" size={45} />
          </span>
        </div>
      </section>
    </>
  );
};

export default SongPlayer;
