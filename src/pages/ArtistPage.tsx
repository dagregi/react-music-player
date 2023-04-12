import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getArtist } from "../api/services";

const ArtistPage = () => {
  const { artistId } = useParams();
  const { data } = useQuery(["artist", artistId], () => getArtist(artistId));
  const top = useQuery(["top"], () => getArtist(`${artistId}/top`));
  console.log(top.data);
  return (
    <section className="bg-cat-crust">
      <div className="flex flex-col max-w-full h-auto bg-gradient-to-b from-cat-surface2 to-transparent">
        <img
          className="rounded-full w-40 h-40 mx-auto mt-3"
          src={data?.picture_xl}
          alt={data?.name}
        />
        <h1 className="text-cat-text font-bold p-2 text-3xl md:text-4xl">
          {data?.name}
        </h1>
        <h2 className="text-cat-subtext0 pl-2">
          {data?.nb_fan?.toLocaleString()} fans
        </h2>
      </div>
      <h1 className="text-cat-lavender font-semibold p-1 mt-4 text-2xl">
        Top tracks
      </h1>
      <div className="bg-gradient-to-br from-cat-pink to-cat-lavender mx-2 mt-2 w-4 h-1 rounded-lg" />
      <div>{/* TODO: Add top songs for the artist */}</div>
      <h1 className="text-cat-lavender font-semibold p-1 mt-4 text-2xl">
        Popular albums
      </h1>
      <div className="bg-gradient-to-br from-cat-pink to-cat-lavender mx-2 mt-2 w-4 h-1 rounded-lg" />
      <div>{/* TODO: Add popular albums display */}</div>
    </section>
  );
};

export default ArtistPage;
