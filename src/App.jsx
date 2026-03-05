import { useEffect, useState } from "react";
import Footer from "./mainLayout/Footer/Footer";
import Navbar from "./mainLayout/Navbar/Navbar";
import MainSection from "./mainLayout/main/MainSection";
import Banner from "./mainLayout/Banner/Banner";
import { toast } from "react-toastify";

function App() {
  const [fetchData, setFetchData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((result) => setFetchData(result));
  }, []);

  const [clickData, setClickData] = useState([]);
  const [resolvedTask, setResolvedTask] = useState([]);

  const [completedCount, setCompletedCount] = useState([]);

  const completedBtn = (data) => {
    setCompletedCount([...completedCount, data]);

    const a = clickData.filter((id) => id.id != data.id);
    setResolvedTask([...resolvedTask, data]);

    setClickData(a);
    setFetchData(fetchData.filter((d) => d.id != data.id));
    toast("Task is resolved");
  };

  return (
    <div className="bg-[#A1A1AA]">
      <Navbar />
      <Banner clickData={clickData} completedCount={completedCount}></Banner>
      <MainSection
        fetchData={fetchData}
        clickData={clickData}
        setClickData={setClickData}
        completedCount={completedCount}
        setCompletedCount={setCompletedCount}
        completedBtn={completedBtn}
        resolvedTask={resolvedTask}
      />
      <Footer />
    </div>
  );
}

export default App;
