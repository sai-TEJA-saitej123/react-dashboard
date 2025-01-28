import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <img
                  src="https://doqfy.in/assets/header/Logo.svg"
                  alt="OQFY"
                  className="h-8 w-auto"
                />
              </div>
              <div className="hidden md:ml-6 md:flex md:space-x-8">
                <a
                  href="#"
                  className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium"
                >
                  Services
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium"
                >
                  User Management
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium"
                >
                  My Orders
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium"
                >
                  Reports
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium"
                >
                  Stamp Inventory
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium"
                >
                  Bar Codes
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium"
                >
                  Invoice
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0 relative">
                <div className="relative">
                  <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none">
                    <span className="sr-only">View notifications</span>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                    <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white"></span>
                  </button>
                </div>
              </div>
              <div className="ml-3 relative">
                <div className="flex items-center space-x-3">
                  <span className="text-sm font-medium text-gray-700">
                    Michael Smith
                  </span>
                  <div className="h-8 w-8 rounded-full bg-purple-600 flex items-center justify-center text-white">
                    M
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
