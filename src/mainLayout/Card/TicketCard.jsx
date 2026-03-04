import React from "react";

const TicketCard = ({ ticket, clickedCard }) => {
  const { id, title, description, customer, priority, status, createdAt } =
    ticket;

  return (
    <div
      onClick={() => clickedCard(ticket)}
      className="bg-white rounded-lg shadow-md p-5 cursor-pointer hover:shadow-lg transition duration-300"
    >
      {/* Top Section */}
      <div className="flex justify-between items-start">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>

        {/* Status Badge */}
        <span className="flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          {status}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-500 text-sm mt-2 line-clamp-2">{description}</p>

      {/* Bottom Section */}
      <div className="flex justify-between items-center mt-4 text-sm">
        <div className="flex items-center gap-4">
          <span className="text-gray-500">#{id}</span>

          <span
            className={`font-semibold ${
              priority === "High"
                ? "text-red-500"
                : priority === "Medium"
                  ? "text-yellow-500"
                  : "text-green-500"
            }`}
          >
            {priority.toUpperCase()} PRIORITY
          </span>
        </div>

        <div className="flex items-center gap-3 text-gray-500">
          <span>{customer}</span>
          <span>{createdAt}</span>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
