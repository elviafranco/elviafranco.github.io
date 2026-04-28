import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Ribi from "./pages/Ribi";
import Kite from "./pages/Kite";
import Lesgo from "./pages/Lesgo";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route element={<Ribi />} />
        <Route element={<Kite />} />
        <Route element={<Lesgo />} />
      </Routes>
    </>
  );
}

export default App;
