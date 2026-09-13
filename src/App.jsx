import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Works from "./pages/Works";
import WorksCategory from "./pages/WorksCategory";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";

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

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}