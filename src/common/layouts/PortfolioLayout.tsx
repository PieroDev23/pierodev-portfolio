import { Outlet } from "react-router";
import { Navigation } from "../components";


export function PortfolioLayout() {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </>
  )
}