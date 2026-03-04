import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-black px-10 py-20">
      <div className="border flex justify-between ">
        {/* CS — Ticket System  */}
        <div className=" space-y-4">
          <h1 className=" text-2xl font-bold text-white">CS — Ticket System</h1>
          <p className=" max-w-[350px] text-[#A1A1AA]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className=" space-y-4">
          <p className=" text-white">Company</p>
          <p className=" text-[#A1A1AA]">Products & Services</p>
          <p className=" text-[#A1A1AA]">Custoper Stories</p>
          <p className=" text-[#A1A1AA]">Download Apps</p>
        </div>
        <div className=" space-y-4">
          <p className=" text-white">Information</p>
          <p className=" text-[#A1A1AA]">Privacy Policy</p>
          <p className=" text-[#A1A1AA]">Terms & Conditions</p>
          <p className=" text-[#A1A1AA]">Join Us</p>
        </div>
        <div className=" space-y-4">
          <p className=" text-white">Socila Links</p>
          <p className=" text-[#A1A1AA] flex items-center gap-2">
            <FaXTwitter /> @CS — Ticket System
          </p>
          <p className=" text-[#A1A1AA] flex items-center gap-2">
            <FaLinkedin /> @CS — Ticket System
          </p>
          <p className=" text-[#A1A1AA] flex items-center gap-2">
            <FaFacebook /> @CS — Ticket System
          </p>
          <p className=" text-[#A1A1AA] flex items-center gap-2">
            <MdOutlineMailOutline /> support@cst.com
          </p>
        </div>
      </div>
      <p className=" text-white text-center mt-10">
        © 2025 CS — Ticket System. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
