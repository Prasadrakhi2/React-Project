import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FachingItem from "../components/FachingItem";
import { useSelector } from "react-redux";
import LoadingState from "../components/LoadingState";

function App() {
  const fachStatus = useSelector((store) => store.fachStatus);

  return (
    <>
      <Header />
      <FachingItem />
      {fachStatus.currentlyFaching ? <LoadingState /> : <Outlet />}

      <Footer />
    </>
  );
}

export default App;
