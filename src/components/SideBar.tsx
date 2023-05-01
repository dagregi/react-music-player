import { useRef, useState } from "react";
import {
  FaBars,
  FaGithub,
  FaHome,
  FaSearch,
  FaTelegram,
  FaTimes,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useOutsideClick } from "../utils";

const SideBar = () => {
  const sideRef = useRef<HTMLElement>(null);
  const [hidden, setHidden] = useState(false);
  useOutsideClick(sideRef, () => setHidden(false));
  return (
    <section className="overflow-hidden z-40 scroll-smooth" ref={sideRef}>
      <FaBars
        className={`fill-cat-text my-4 fixed left-3 ${hidden ? " hidden" : " "
          }`}
        onClick={() => setHidden(!hidden)}
      />

      <nav
        className={`flex flex-col overflow-y-auto fixed inset-y-0 w-3/5 md:w-1/4 min-h-screen items-center bg-opacity-10 backdrop-blur-sm bg-cat-surface0 transform transition-transform z-40 ease-in-out duration-200${hidden ? " translate-x-0" : " -translate-x-full"
          }`}
      >
        <main className="px-4 py-3 space-y-5 w-full flex flex-col">
          <div className="flex justify-between">
            <h1 className="bg-clip-text text-transparent text-center font-mono text-xl bg-gradient-to-br from-cat-pink to-cat-mauve">
              Placeholder
            </h1>
            <FaTimes
              className="fill-cat-text my-auto"
              onClick={() => setHidden(!hidden)}
            />
          </div>
          <NavLink
            to={"/search"}
            className={({ isActive }) =>
              isActive
                ? "flex p-2 space-x-5 text-cat-lavender ease-in-out duration-200 scale-105"
                : "flex p-2 space-x-5 text-cat-text"
            }
          >
            <span className="my-auto">
              <FaSearch size={15} />
            </span>
            <p className="text-md font-mono">Search</p>
          </NavLink>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? "flex p-2 space-x-5 text-cat-lavender ease-in-out duration-200 scale-105"
                : "flex p-2 space-x-5 text-cat-text"
            }
          >
            <span className="my-auto">
              <FaHome size={15} />
            </span>
            <p className="text-md font-mono">Home</p>
          </NavLink>
        </main>
        <div className="bg-gradient-to-r from-cat-surface1 to-transparent my-2 w-full h-0.5" />
        <div className="px-4 py-3 w-full flex flex-col gap-4">
          <Link
            to={"https://github.com/dagregi"}
            className="flex p-2 space-x-5 text-cat-text"
          >
            <span className="my-auto">
              <FaGithub />
            </span>
            <p className="text-md font-mono">Github</p>
          </Link>
          <Link
            to={"https://t.me/dagregi"}
            className="flex p-2 space-x-5 text-cat-text"
          >
            <span className="my-auto">
              <FaTelegram />
            </span>
            <p className="text-md font-mono">Telegram</p>
          </Link>
        </div>
      </nav>
    </section>
  );
};

export default SideBar;
