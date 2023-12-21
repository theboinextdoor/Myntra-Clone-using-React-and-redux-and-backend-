import FetchItems from "../component/FetchItems";
import Footer from "../component/Footer";
import Header from "../component/Header";
import {Outlet} from "react-router-dom"

function App() {
 
  return (
    <>
     <Header />
     <FetchItems/>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
