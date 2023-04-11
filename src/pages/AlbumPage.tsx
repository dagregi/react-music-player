import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getAlbum } from "../api/api";

const AlbumPage = () => {
  const { albumId } = useParams();
  const { data } = useQuery(["album", albumId], () => getAlbum(albumId));

  return (
    <section className="bg-cat-crust text-cat-text">
      {/* <div className="w-full mx-auto"> */}
      {/*   <img */}
      {/*     className="w-full h-2/3 object-fill" */}
      {/*     src="../../img.png" */}
      {/*     alt="cover" */}
      {/*   /> */}
      {/* </div> */}
      <h1 className="text-cat-subtext1 font-mono p-2 md:text-4xl">
        {data?.title}
      </h1>
      <div className="bg-gradient-to-bl from-cat-lavender to-cat-mauve mx-2 w-4 h-1 rounded-lg"></div>
      <div className="mx-auto p-4 items-center">
        <div className="mx-auto flex flex-col gap-1 md:gap-4 text-sm md:text-2xl items-center">
          {data?.tracks?.data?.map((track, i) => (
            <p key={i}>
              {++i}. {track.title}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlbumPage;
