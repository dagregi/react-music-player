import React from "react";
import { MdRefresh } from "react-icons/md";
import { MusicCardProps } from "../models/Props";

const MusicCard: React.FC<MusicCardProps> = ({ track }) => {
  return (
    <div className="dark:bg-gray-900 dark:text-white bg-white text-gray-900">
      {track ? (
        <div className="relative">
          <img
            className={`w-full object-cover}`}
            src={track.album.cover_xl}
            alt={track.title}
          />
          <div
            className={`absolute bottom-0 w-full bg-gray-900 bg-opacity-25 }`}
          >
            <h2 className="truncate text-slate-400">{track.title}</h2>
          </div>
        </div>
      ) : (
        <MdRefresh size={25} className="animate-spin" />
      )}
    </div>
  );
};

export default MusicCard;
