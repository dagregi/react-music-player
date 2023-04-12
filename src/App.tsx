import { Route, Routes } from "react-router-dom";
import AlbumPage from "./pages/AlbumPage";
import ArtistPage from "./pages/ArtistPage";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/album/:albumId" element={<AlbumPage />} />
      <Route path="/artist/:artistId" element={<ArtistPage />} />
    </Routes>
  );
}

export default App;
