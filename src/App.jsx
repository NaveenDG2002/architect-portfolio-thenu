import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Works from "./pages/Works";
import WorksCategory from "./pages/WorksCategory";
import Achievements from "./pages/Achievements";
import Industrial from "./pages/Industrial";
import IndustrialCategory from "./pages/IndustrialCategory";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Nav />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/works" element={<Works />}>
            <Route index element={<Navigate to="2d-3d" replace />} />
            <Route path=":slug" element={<WorksCategory />} />
          </Route>

          <Route path="/achievements" element={<Achievements />} />

          <Route path="/industrial" element={<Industrial />}>
            <Route index element={<Navigate to="working-experience" replace />} />
            <Route path=":slug" element={<IndustrialCategory />} />
          </Route>

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}