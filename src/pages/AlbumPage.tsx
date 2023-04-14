import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import { getAlbums } from "../api/services";
import TrackList from "../components/TrackList";

const AlbumPage = () => {
  const { albumId } = useParams();
  const { data } = useQuery(["album", albumId], () => getAlbums(albumId));

  return (
    <section className="bg-cat-crust text-cat-text">
      <div className="flex flex-col max-w-full h-auto bg-gradient-to-b from-cat-surface1 to-transparent">
        <img
          className="w-32 h-32 mx-auto mt-3"
          src={data?.albums?.at(0)?.images?.at(0)?.url}
          alt={data?.albums?.at(0)?.name}
        />
        <div className="p-2">
          <h1 className="text-cat-text font-bold p-2 text-3xl md:text-4xl">
            {data?.albums?.at(0)?.name}
          </h1>
          <div className="p-1 flex flex-row gap-1">
            <img
              className="w-7 h-7 overflow-hidden rounded-full"
              src={data?.albums?.at(0)?.artists?.at(0)?.name}
              alt={data?.albums?.at(0)?.artists?.at(0)?.name}
            />
            <Link to={`/artist/${data?.albums?.at(0)?.artists?.at(0)?.id}`}>
              <p className="font-light text-cat-text">
                {data?.albums?.at(0)?.artists?.at(0)?.name}
              </p>
            </Link>
          </div>
          <div className="flex gap-1 p-1">
            <h2 className="text-xs text-cat-overlay1">
              {`${data?.albums?.at(0)?.total_tracks > 1
                  ? data?.albums?.at(0)?.total_tracks + " songs,"
                  : data?.albums?.at(0)?.total_tracks + " song,"
                }`}
            </h2>
            <h3 className="text-xs text-cat-overlay1">
              {data?.albums?.at(0)?.release_date}
            </h3>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-br from-cat-pink to-cat-lavender mx-2 mt-2 w-4 h-1 rounded-lg" />
      <div className="mx-auto p-3 text-sm md:text-2xl items-center">
        {data?.albums?.at(0)?.tracks?.items?.map((track, i) => (
          <TrackList key={track?.id} track={track} index={i} page="album" />
        ))}
      </div>
    </section>
  );
};

export default AlbumPage;
