import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { secondsToMinutes } from "../utils";
import { PlayerSliderProps } from "../models/Props";

const PlayerSlider = ({ size, currentMusic, audioRef }: PlayerSliderProps) => {
  return (
    <div
      className={`${size === "md"
          ? "hidden md:flex w-1/2 flex-col flex-auto gap-1 justify-center mx-2"
          : size === "sm" && "w-full flex flex-col gap-2 justify-center my-2"
        }`}
    >
      <Slider
        trackStyle={{ background: "#B4BEFE" }}
        handleStyle={{
          border: "2px solid #B4BEFE",
          background: "#B4BEFE",
          boxShadow: "none",
          opacity: 1,
        }}
        railStyle={{ background: "#B4BEFE66" }}
        min={0}
        max={currentMusic.duration}
        value={currentMusic.curTime}
        onChange={(val) => {
          audioRef.current!.currentTime = +val;
        }}
      />
      <div className="flex justify-between text-cat-text text-xs">
        <span>{secondsToMinutes(currentMusic?.curTime)}</span>
        <span>{secondsToMinutes(currentMusic?.duration)}</span>
      </div>
    </div>
  );
};

export default PlayerSlider;
