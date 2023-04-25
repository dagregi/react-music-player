import { TrackListProps } from "../models/Props";
import { convertTime } from "../utils";

const TrackList = ({ track, index, page }: TrackListProps) => {
  return (
    <div className="flex px-3 py-2">
      <p className="text-cat-overlay0 font-semibold basis-10">{++index}</p>
      <div className="flex-auto flex-col mx-2">
        <h2 className="tracking-tight font-semibold text-cat-subtext1">
          {track?.name}
        </h2>
        <p className="font-light text-cat-subtext0">
          {page === "artist"
            ? Number(track?.playcount).toLocaleString()
            : page === "album" && convertTime(track?.duration_ms)}
        </p>
      </div>
    </div>
  );
};

export default TrackList;
