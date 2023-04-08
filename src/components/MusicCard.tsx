import React from "react";
import { MdRefresh } from "react-icons/md";
import { MusicCardProps } from "../models/Props";

const MusicCard: React.FC<MusicCardProps> = ({ track }) => {
  return (
    <div className="relative flex-wrap md:flex-col rounded-md shadow-lg">
      <div className="mx-auto">
        <img
          className="w-full rounded-t-md"
          src={track.album.cover_xl}
          alt={track.title}
        />
      </div>
      <div className="p-1 rounded-b-md bg-gray-900 bg-opacity-80">
        <h2 className="truncate md:text-md text-slate-200 dark:text-white font-medium">
          {track.title}
        </h2>
        <h3 className="text-slate-400 font-thin">{track.artist.name}</h3>
        <h3 className="text-slate-400 font-thin">{track.album.title}</h3>
      </div>
    </div>
  );
};

export default MusicCard;
