import { useEffect, useState } from "react";
import Footer from "./mainLayout/Footer/Footer";
import Navbar from "./mainLayout/Navbar/Navbar";
import MainSection from "./mainLayout/main/MainSection";
import Banner from "./mainLayout/Banner/Banner";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);

  const [clickData, setClickData] = useState([]);

  return (
    <div className="bg-[#A1A1AA]">
      <Navbar />
      <Banner clickData={clickData}></Banner>
      <MainSection
        data={data}
        clickData={clickData}
        setClickData={setClickData}
      />
      <Footer />
    </div>
  );
}

export default App;
