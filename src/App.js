import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Main from "./layout/Main";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { NotFoundPage } from "./pages/NotFoundPage"


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={ <NotFoundPage/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
