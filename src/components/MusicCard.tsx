import React from "react";
import { Link } from "react-router-dom";
import { MusicCardProps } from "../models/Props";

const MusicCard: React.FC<MusicCardProps> = ({ track }) => {
  return (
    <div
      className="relative bg-cat-overlay0 bg-opacity-25 backdrop-blur-lg
      group rounded-lg shadow-lg transition ease-in-out delay-150 duration-300
      hover:scale-105"
    >
      <div className="mx-auto">
        {/* <h3 className="absolute top-0 p-2 text-cat-surface2 font-light delay-150 duration-300 scale-0 group-hover:scale-100"> */}
        {/*   {track.album.title} */}
        {/* </h3> */}
        <img
          className="p-2.5 w-full delay-150 duration-300 group-hover:rounded-t-lg group-hover:p-0"
          src={track.album.cover_xl}
          alt={track.title}
        />
      </div>
      <div className="mx-auto p-1.5">
        <h2 className="truncate font-semibold text-lg text-cat-subtext1">
          {track.title}
        </h2>
        <h3 className="truncate mt-1 text-cat-subtext0 font-light">
          <Link to={`/album/${track.album.id}`}>
            {track.album.title}
          </Link>
        </h3>
        <h3 className="truncate mt-1 text-cat-subtext0 font-light">
          {track.artist.name}
        </h3>
      </div>
    </div>
  );
};

export default MusicCard;
