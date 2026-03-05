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

  const [completedBtnId, setCompletedBtnId] = useState(" ");
  const [completedCount, setCompletedCount] = useState([]);
  // console.log(completedBtnId);

  const completedBtn = (data) => {
    setCompletedCount([...completedCount, data]);
    // setCompletedBtnId(data);
    // console.log(completedBtnId);

    const a = clickData.filter((id) => id.id != data);

    setClickData(a);
  };

  return (
    <div className="bg-[#A1A1AA]">
      <Navbar />
      <Banner clickData={clickData} completedCount={completedCount}></Banner>
      <MainSection
        data={data}
        clickData={clickData}
        setClickData={setClickData}
        completedCount={completedCount}
        setCompletedCount={setCompletedCount}
        completedBtn={completedBtn}
        setCompletedBtnId={setCompletedBtnId}
      />
      <Footer />
    </div>
  );
}

export default App;
