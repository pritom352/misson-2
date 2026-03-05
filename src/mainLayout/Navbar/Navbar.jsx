import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white  px-6 py-3">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="font-bold text-xl md:text-2xl">CS — Ticket System</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-7 items-center">
          <p className="cursor-pointer">Home</p>
          <p className="cursor-pointer">FAQ</p>
          <p className="cursor-pointer">Changelog</p>
          <p className="cursor-pointer">Blog</p>
          <p className="cursor-pointer">Download</p>
          <p className="cursor-pointer">Contact</p>

          <button className=" rounded-xl px-4 py-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">
            + New Ticket
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-2xl">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="flex flex-col gap-4 mt-4 md:hidden">
          <p>Home</p>
          <p>FAQ</p>
          <p>Changelog</p>
          <p>Blog</p>
          <p>Download</p>
          <p>Contact</p>

          <button className=" rounded-xl px-4 py-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white w-fit">
            + New Ticket
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
