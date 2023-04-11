import { Route, Routes } from "react-router-dom";
import AlbumPage from "./pages/AlbumPage";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/album/:albumId" element={<AlbumPage />} />
    </Routes>
  );
}

export default App;
