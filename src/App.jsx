import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Ribi from "./pages/Ribi";
import Kite from "./pages/Kite";
import Lesgo from "./pages/Lesgo";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/kite" element={<Kite />} />
          <Route path="/lesgo" element={<Lesgo />} />
          <Route path="/ribi" element={<Ribi />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
