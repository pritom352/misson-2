import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-black px-6 md:px-10 py-16">
      {/* Footer Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
        {/* Logo Section */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold text-white">CS — Ticket System</h1>

          <p className="max-w-[350px] text-[#A1A1AA] text-sm leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>

        {/* Company */}
        <div className="space-y-3">
          <p className="text-white font-semibold">Company</p>
          <p className="text-[#A1A1AA]">Products & Services</p>
          <p className="text-[#A1A1AA]">Customer Stories</p>
          <p className="text-[#A1A1AA]">Download Apps</p>
        </div>

        {/* Information */}
        <div className="space-y-3">
          <p className="text-white font-semibold">Information</p>
          <p className="text-[#A1A1AA]">Privacy Policy</p>
          <p className="text-[#A1A1AA]">Terms & Conditions</p>
          <p className="text-[#A1A1AA]">Join Us</p>
        </div>

        {/* Social Links */}
        <div className="space-y-3">
          <p className="text-white font-semibold">Social Links</p>

          <p className="text-[#A1A1AA] flex items-center gap-2">
            <FaXTwitter /> @CSTicket
          </p>

          <p className="text-[#A1A1AA] flex items-center gap-2">
            <FaLinkedin /> @CSTicket
          </p>

          <p className="text-[#A1A1AA] flex items-center gap-2">
            <FaFacebook /> @CSTicket
          </p>

          <p className="text-[#A1A1AA] flex items-center gap-2">
            <MdOutlineMailOutline /> support@cst.com
          </p>
        </div>
      </div>

      {/* Bottom Copyright */}
      <p className="text-white text-center mt-8 text-sm">
        © 2025 CS — Ticket System. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
