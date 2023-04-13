import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import { getAlbums } from "../api/services";
import { convertTime } from "../utils";

const AlbumPage = () => {
  const { albumId } = useParams();
  const { data } = useQuery(["album", albumId], () => getAlbums(albumId));

  return (
    <section className="bg-cat-crust text-cat-text">
      <div className="flex flex-col max-w-full h-auto bg-gradient-to-b from-cat-surface1 to-transparent">
        <img
          className="w-32 h-32 mx-auto mt-3"
          src={data?.cover_big}
          alt={data?.title}
        />
        <div className="p-2">
          <h1 className="text-cat-text font-bold p-2 text-3xl md:text-4xl">
            {data?.title}
          </h1>
          <div className="p-1 flex flex-row gap-1">
            <img
              className="w-7 h-7 overflow-hidden rounded-full"
              src={data?.artist?.picture_medium}
              alt={data?.artist?.name}
            />
            <Link to={`/artist/${data?.artist?.id}`}>
              <p className="font-light text-cat-text">{data?.artist?.name}</p>
            </Link>
          </div>
          <div className="flex gap-1 p-1">
            <h2 className="text-xs text-cat-overlay1">
              {`${
                data?.nb_tracks > 1
                  ? data?.nb_tracks + " songs,"
                  : data?.nb_tracks + " song,"
              }`}
            </h2>
            <h3 className="text-xs text-cat-overlay1">
              {convertTime(data?.duration)}
            </h3>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-br from-cat-pink to-cat-lavender mx-2 mt-2 w-4 h-1 rounded-lg" />
      <div className="mx-auto p-3 text-sm md:text-2xl items-center">
        {data?.tracks?.data?.map((track, i) => (
          <div key={track.id} className="flex flex-row gap-3 mx-auto mt-3">
            <p className="text-cat-overlay0 font-semibold mx-2">{++i}</p>
            <div className="flex flex-col">
              <p className="tracking-tight font-semibold text-cat-subtext1">
                {track.title}
              </p>
              <h2 className="font-light text-cat-subtext0">
                {convertTime(track.duration)}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AlbumPage;
