import { useEffect, useState } from "react";
import Footer from "./mainLayout/Footer/Footer";
import Navbar from "./mainLayout/Navbar/Navbar";
import MainSection from "./mainLayout/main/MainSection";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);

  return (
    <div className="bg-[#A1A1AA]">
      <Navbar />
      <MainSection data={data} />
      <Footer />
    </div>
  );
}

export default App;
