import React from "react";
import { Link } from "react-router-dom";
import { MusicCardProps } from "../models/Props";

const MusicCard: React.FC<MusicCardProps> = ({ track }) => {
  return (
    <div
      className="bg-cat-overlay0 bg-opacity-25 backdrop-blur-sm
      group rounded-lg shadow-lg transition ease-in-out delay-150 duration-300
      hover:scale-105"
    >
      <div className="mx-auto">
        <img
          className="p-2.5 delay-150 duration-300 group-hover:rounded-t-lg group-hover:p-0"
          src={track.album.cover_xl}
          alt={track.title}
        />
      </div>
      <div className="mx-auto p-1.5">
        <h2 className="truncate font-semibold text-lg text-cat-subtext1">
          {track.title}
        </h2>
        <h3 className="truncate mt-1 text-cat-subtext0 font-light">
          <Link to={`/album/${track.album.id}`}>{track.album.title}</Link>
        </h3>
        <h3 className="truncate mt-1 text-cat-subtext0 font-light">
          <Link to={`/artist/${track.artist.id}`}>{track.artist.name}</Link>
        </h3>
      </div>
    </div>
  );
};

export default MusicCard;
