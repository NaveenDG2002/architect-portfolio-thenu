import { Outlet } from "react-router-dom";
import IndustrialSubNav from "../components/IndustrialSubNav";

export default function Industrial() {
  return (
    <section style={{ padding: "96px 24px 64px", maxWidth: 1152, margin: "0 auto" }}>
      <IndustrialSubNav />
      <Outlet />
    </section>
  );
}