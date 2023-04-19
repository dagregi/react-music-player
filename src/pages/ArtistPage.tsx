import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getArtistOverview } from "../api/services";
import AlbumScroll from "../components/AlbumScroll";
import TrackList from "../components/TrackList";

const ArtistPage = () => {
  const { artistId } = useParams();
  const { data } = useQuery(["artist", artistId], () =>
    getArtistOverview(artistId)
  );

  return (
    <section className="bg-cat-crust">
      <div className="flex flex-col max-w-full h-auto bg-gradient-to-b from-cat-surface2 to-transparent">
        <img
          className="rounded-full w-40 h-40 mx-auto mt-3"
          src={data?.data?.artist?.visuals?.avatarImage?.sources?.at(0)?.url}
          alt={data?.data?.artist?.profile?.name}
        />
        <h1 className="text-cat-text font-bold p-2 text-3xl md:text-4xl">
          {data?.data?.artist?.profile?.name}
        </h1>
        <h2 className="text-cat-subtext0 pl-2">
          {data?.data?.artist?.stats?.followers.toLocaleString()} followers
        </h2>
      </div>
      <h1 className="text-cat-lavender font-semibold p-1 mt-4 text-2xl">
        Top tracks
      </h1>
      <div className="bg-gradient-to-br from-cat-pink to-cat-lavender mx-2 mt-2 w-4 h-1 rounded-lg" />
      <div className="flex flex-col p-2">
        {data?.data?.artist?.discography?.topTracks?.items
          ?.sort(
            (a, b) => Number(b?.track?.playcount) - Number(a?.track?.playcount)
          )
          ?.map((track, i) => (
            <TrackList
              key={track?.uid}
              track={track?.track}
              index={i}
              page="artist"
            />
          ))}
      </div>
      <h1 className="text-cat-lavender font-semibold p-1 mt-4 text-2xl">
        Popular albums
      </h1>
      <div className="bg-gradient-to-br from-cat-pink to-cat-lavender mx-2 mt-2 w-4 h-1 rounded-lg" />
      <div className="flex flex-nowrap items-center overflow-x-auto space-x-8 scroll-smooth snap-x snap-mandatory w-full mb-8 px-4 py-5">
        {data?.data?.artist?.discography?.popularReleases?.items?.map(
          (album) => (
            <AlbumScroll
              key={album?.releases?.items?.at(0)?.id}
              album={album?.releases?.items?.at(0)}
            />
          )
        )}
      </div>
    </section>
  );
};

export default ArtistPage;
