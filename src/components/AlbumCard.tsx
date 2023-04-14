import { Link } from "react-router-dom";
import { AlbumCardProps } from "../models/Props";

const AlbumCard = ({ album }: AlbumCardProps) => {
  return (
    <div className="flex-none snap-center p-4">
      <Link to={`/album/${album?.id}`}>
        <img
          className="mx-auto max-w-full h-auto object-cover"
          src={album?.coverArt?.sources?.at(0)?.url}
          alt={album?.name}
        />
        <div className="px-4 py-2 max-w-full h-auto text-center">
          <h2 className="tracking-tight truncate font-semibold text-cat-subtext1">
            {album?.name}
          </h2>
          <h3 className="text-cat-subtext0 font-light mt-1">
            {album.date.year}
          </h3>
        </div>
      </Link>
    </div>
  );
};

export default AlbumCard;
