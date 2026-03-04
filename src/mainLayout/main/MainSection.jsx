import React from "react";
import TicketCard from "../Card/TicketCard";

const MainSection = ({ data }) => {
  return (
    <div className="p-6">
      <h5 className="text-xl font-semibold mb-4">Customer Tickets</h5>

      {/* Grid container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {data.map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default MainSection;
