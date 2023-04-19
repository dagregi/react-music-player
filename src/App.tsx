import { Route, Routes } from "react-router-dom";
import AlbumPage from "./pages/AlbumPage";
import ArtistPage from "./pages/ArtistPage";
import Home from "./pages/Home";
import Search from "./components/Search";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search/:searchTerm" element={<Search />} />
      <Route path="/album/:albumId" element={<AlbumPage />} />
      <Route path="/artist/:artistId" element={<ArtistPage />} />
    </Routes>
  );
}

export default App;
