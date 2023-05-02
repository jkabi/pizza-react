import "./App.css";
import Appbar from "./components/Appbar";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Menu from "./components/Menu";
import PickOfTheWeek from "./components/PickOfTheWeek";

function App() {
  return (
    <>
      <Appbar />
      <Banner />
      <Menu />
      <PickOfTheWeek />
      <Contact />
      <div className="text-center my-3 orange small">
        <p>Copyright 2022-2023</p>
      </div>
    </>
  );
}

export default App;
