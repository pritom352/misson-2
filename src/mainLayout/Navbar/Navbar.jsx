import React from "react";

const Navbar = () => {
  return (
    <div className=" bg-wh border flex justify-between items-center px-10 py-2">
      <h1 className=" font-bold text-2xl">CS — Ticket System</h1>
      <div className=" flex gap-7 items-center">
        <p>Home</p>
        <p>FAQ</p>
        <p>Changlog</p>
        <p>Blog</p>
        <p>Download</p>
        <p>Contact</p>
        <button className="border rounded-xl px-3 py-2 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white">
          <span className=" ml-1">+</span>New Ticket
        </button>
      </div>
    </div>
  );
};

export default Navbar;
