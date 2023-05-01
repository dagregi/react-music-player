import { Link } from "react-router-dom";
import { AlbumCardProps } from "../models/Props";

const AlbumCard = ({ album }: AlbumCardProps) => {
  return (
    <div
      className="bg-cat-overlay0 z-10 bg-opacity-25
      group rounded-lg shadow-lg transition ease-in-out delay-150 duration-300
      hover:scale-105"
    >
      <div className="mx-auto">
        <img
          className="p-2.5 delay-150 duration-300 group-hover:rounded-t-lg group-hover:p-0"
          src={album?.coverArt?.sources?.at(2)?.url}
          alt={album?.name}
        />
      </div>
      <div className="mx-auto p-1.5">
        <h2 className="tracking-tight truncate font-semibold text-lg text-cat-subtext1">
          <Link to={`/album/${album?.uri?.slice(14)}`}>{album?.name}</Link>
        </h2>
        <h3 className="text-cat-subtext0 truncate font-light mt-2">
          <Link to={`/artist/${album?.artists?.items?.at(0)?.uri?.slice(15)}`}>
            {album?.artists?.items?.at(0)?.profile?.name}
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default AlbumCard;
