import { Route, Routes } from "react-router-dom";
import AlbumPage from "./pages/AlbumPage";
import ArtistPage from "./pages/ArtistPage";
import Home from "./pages/Home";
import Search from "./components/Search";
import Header from "./components/Header";
import { PlayerProvider } from "./utils";

function App() {
  return (
    <PlayerProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/album/:albumId" element={<AlbumPage />} />
        <Route path="/artist/:artistId" element={<ArtistPage />} />
      </Routes>
    </PlayerProvider>
  );
}

export default App;
