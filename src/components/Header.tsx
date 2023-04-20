import SideBar from "./SideBar";

const Header = () => {
  return (
    <article className="relative w-full top-0 bg-cat-base/20 flex">
      <SideBar />
      <h1 className="bg-clip-text mx-auto text-transparent p-2 text-center font-mono text-xl bg-gradient-to-br from-cat-pink to-cat-mauve">
        Placeholder
      </h1>
    </article>
  );
};

export default Header;
