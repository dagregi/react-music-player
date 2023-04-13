import { TopTracksProps } from "../models/Props";

const TopTracks = ({ track, index }: TopTracksProps) => {
  return (
    <div className="flex flex-row mt-3">
      <p className="text-cat-overlay0 font-semibold mx-2">{++index}</p>
      <div className="flex flex-col mx-2 items-start">
        <h2 className="tracking-tight font-semibold text-cat-subtext1">
          {track?.title}
        </h2>
        <p className="font-light text-cat-subtext0">
          {track.rank.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default TopTracks;
