import { Route, Routes } from "react-router"
import HomePage from "./home/page"
import ContactPage from "./contact/page"
import { PortfolioLayout } from "./common/layouts"

function App() {
  return (
    <Routes>
      <Route element={<PortfolioLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  )
}

export default App
