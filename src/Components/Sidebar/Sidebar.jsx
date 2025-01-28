import React from "react";
import { WalletIcon } from "@heroicons/react/24/solid";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-12 gap-6">
        {/* Sidebar */}
        <div className="col-span-12 lg:col-span-3 space-y-6">
          {/* Welcome Back */}
          <div className="bg-white rounded-lg p-6">
            <div className="flex items-center space-x-2">
              <div>
                <p className="font-medium">👋Welcome back, Michael</p>
                <p className="text-sm text-gray-500">25 Nov, 2023 - Tuesday</p>
              </div>
            </div>
          </div>

          {/* Wallet */}
          <div className="bg-white rounded-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="font-medium">My Wallet</h2>
              <div>
                <WalletIcon className="h-6 w-6" />
              </div>
            </div>
            <div className="mb-2">
              <p className="text-2xl font-bold">₹ 2,50,000</p>
              <p className="text-sm text-gray-500">Current Balance</p>
            </div>
            <p className="text-sm">
              Running low?{" "}
              <a href="#" className="text-purple-600 hover:underline">
                Notify admin now
              </a>
            </p>
          </div>

          {/* Pending Actions */}
          <div className="bg-white rounded-lg p-6">
            <h2 className="font-medium mb-4">Pending Actions</h2>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">#trd35468</span>
                  <span className="text-xs text-gray-500">10 days left</span>
                </div>
                <p className="text-xs text-gray-500">
                  2 files are waiting to be Uploaded
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">#3325567</span>
                  <span className="text-xs text-gray-500">10 days left</span>
                </div>
                <p className="text-xs text-gray-500">
                  2 files are waiting to be Uploaded
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-span-12 lg:col-span-9 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-medium">Frequently Used</h2>
            <div className="flex items-center space-x-4">
              <select className="border rounded-md px-3 py-2 text-sm">
                <option>All branches</option>
              </select>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">Custom range</span>
                <select className="border rounded-md px-3 py-2 text-sm">
                  <option>March 2020</option>
                </select>
              </div>
            </div>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-medium mb-2">Contract Execution Upload</h3>
              <p className="text-sm text-gray-500 mb-4">
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <button className="text-purple-600 text-sm font-medium">
                Get started →
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-medium mb-2">E-Stamp Services</h3>
              <p className="text-sm text-gray-500 mb-4">
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <button className="text-purple-600 text-sm font-medium">
                Get started →
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-medium mb-2">E-Sign Services</h3>
              <p className="text-sm text-gray-500 mb-4">
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <button className="text-purple-600 text-sm font-medium">
                Get started →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
