import React from "react";
import TicketCard from "../Card/TicketCard";

const MainSection = ({
  data,
  clickData,
  setClickData,
  setCompletedCount,
  completedCount,
  completedBtn,
  resolvedTask,
}) => {
  console.log(resolvedTask);

  const clickedCard = (data) => {
    setClickData([...clickData, data]);
  };
  // console.log(clickData);

  return (
    <div className=" md:grid md:grid-cols-11 p-6 gap-10">
      <div className=" col-span-8">
        <h5 className="text-xl font-semibold mb-4">Customer Tickets</h5>

        {/* Grid container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {data.map((ticket) => (
            <TicketCard
              clickedCard={clickedCard}
              key={ticket.id}
              ticket={ticket}
            />
          ))}
        </div>
      </div>
      {/* right side */}
      <div className="col-span-3">
        {/* task status section */}
        <div>
          <h5 className="text-xl font-semibold mb-4">Task Status</h5>
          {clickData.length === 0 ? (
            <p>Select a ticket to add to Task Status</p>
          ) : (
            clickData.map((data) => (
              <div className=" p-3 bg-white rounded-4 mb-3">
                <p className=" mb-2">{data.title}</p>
                <button
                  onClick={() => completedBtn(data)}
                  className=" bg-green-500 text-white w-full py-2"
                >
                  Complete
                </button>
              </div>
            ))
          )}
        </div>
        <div className="mt-10">
          <h5 className="text-xl font-semibold mb-4">Resolved Task</h5>
          {resolvedTask.length === 0 ? (
            <p>No resolved tasks yet.</p>
          ) : (
            resolvedTask.map((data) => (
              <div className=" p-3 bg-[#E0E7FF] rounded-2xl mb-3">
                <p className=" mb-2">{data.title}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MainSection;
