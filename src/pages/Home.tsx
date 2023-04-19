import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Header from "../components/Header";
import Search from "../components/Search";

const Home = () => {
  const [hidden, setHidden] = useState(false);

  return (
    <section className="bg-cat-crust">
      <Header />
      <FaSearch
        className="fill-cat-subtext1"
        onClick={() => setHidden(!hidden)}
      />
      {hidden && <Search />}
    </section>
  );
};

export default Home;
