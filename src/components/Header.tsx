import SideBar from "./SideBar";

const Header = () => {
  return (
    <header className="fixed w-full top-0 bg-cat-base/0 flex">
      <SideBar />
      <h1 className="bg-clip-text mx-auto text-transparent p-2 text-center font-mono text-xl bg-gradient-to-br from-cat-pink to-cat-mauve">
        Placeholder
      </h1>
    </header>
  );
};

export default Header;
