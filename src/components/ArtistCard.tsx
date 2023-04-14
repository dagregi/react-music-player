import { ArtistCardProps } from "../models/Props";

const ArtistCard = ({ artist }: ArtistCardProps) => {
  return (
    <section className="flex flex-col group transition ease-in-out delay-150 duration-300 hover:scale-105">
      <img
        className="mx-auto rounded-full delay-150 duration-300"
        src={artist?.visuals?.avatarImage?.sources?.at(0)?.url}
        alt={artist?.profile?.name}
      />
      <h2 className="mx-auto mt-3 tracking-tight font-semibold text-cat-subtext1">
        {artist?.profile?.name}
      </h2>
    </section>
  );
};

export default ArtistCard;
