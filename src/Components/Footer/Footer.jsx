import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="flex justify-between items-center px-4 py-3  bg-white text-gray-600
    mb-2"
    >
      {/* Social Media Icons */}
      <div className="flex space-x-4 ml-40">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="hover:text-purple-700 border-gray-400 rounded-2xl"
        >
          <FaFacebookF className="text-xl " />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="hover:text-purple-700"
        >
          <FaTwitter className="text-xl" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-purple-700"
        >
          <FaLinkedinIn className="text-xl" />
        </a>
      </div>

      {/* Copyright */}
      <div className="text-sm text-center mr-40">&copy; 2023 All Rights Reserved</div>
    </footer>
  );
};

export default Footer;
