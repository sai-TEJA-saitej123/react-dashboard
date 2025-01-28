import React from "react";
import { WalletIcon, CalendarDateRangeIcon } from "@heroicons/react/24/solid";
import { GrDropbox } from "react-icons/gr";
import { FaClock } from "react-icons/fa";
import { LuInbox } from "react-icons/lu";
import { TbShoppingCartCancel } from "react-icons/tb";

import AnalyticsCharts from "../AnalyticsCharts/Analyticscharts";
const pendingActions = [
  {
    id: "trd35468",
    timeLeft: "10 days left",
    message: "2 files are waiting to be Uploaded",
  },
  {
    id: "3325567",
    timeLeft: "10 days left",
    message: "2 files are waiting to be Uploaded",
  },
  {
    id: "7629347",
    timeLeft: "10 days ago",
    message: "2 files are waiting to be Uploaded",
  },
  {
    id: "5673428",
    timeLeft: "10 days ago",
    message: "2 files are waiting to be Uploaded",
  },
];
const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ">
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
                <WalletIcon className="h-6 w-6 text-purple-600" />
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
              <div className="p-4  rounded-lg">
                <div className="space-y-3">
                  {pendingActions.map((action) => (
                    <div
                      key={action.id}
                      className="border border-gray-100 rounded-lg p-3"
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-gray-800 font-medium">
                          #{action.id}
                        </span>
                        <span className="text-gray-500 text-xs">
                          {action.timeLeft}
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm">{action.message}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-span-12 lg:col-span-9 space-y-6 ">
          <div className="flex justify-between items-center ">
            <h2 className="text-lg font-medium">Frequently Used</h2>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border-2 border-purple-600">
              <h3 className="font-medium mb-2">Contract Execution Upload</h3>
              <p className="text-sm text-gray-500 mb-4">
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <button className="text-purple-600 text-sm font-medium cursor-pointer">
                Get started →
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg border-2 border-purple-600">
              <h3 className="font-medium mb-2">E-Stamp Services</h3>
              <p className="text-sm text-gray-500 mb-4">
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <button className="text-purple-600 text-sm font-medium cursor-pointer">
                Get started →
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg border-2 border-purple-600">
              <h3 className="font-medium mb-2">E-Sign Services</h3>
              <p className="text-sm text-gray-500 mb-4">
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <button className="text-purple-600 text-sm font-medium cursor-pointer">
                Get started →
              </button>
            </div>
          </div>
          {/* input boxes */}
          <div className="flex items-center space-x-4">
            <select className="border rounded-md px-3 py-2 text-sm w-60 bg-white">
              <option>All branches</option>
            </select>
            <div className="flex items-center space-x-2 ml-90">
              <select className=" border-gray-700 rounded-md px-3 py-2 text-black text-sm bg-white">
                <option>Custom range</option>
              </select>
              <span className=" p-2 rounded-md text-sm flex items-center space-x-2 bg-white text-black">
                March 2020
                <CalendarDateRangeIcon className="h-6 w-6 ml-2" />
              </span>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-medium">Order Details</h2>
              <button className="text-purple-600 text-sm underline underline-offset-4">
                View All
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-2xl font-bold">18</span>
                  <GrDropbox className="h-7 w-7 text-purple-700" />
                </div>
                <p className="text-sm text-gray-500">Total Orders</p>
                <p className="text-xs text-green-500">+24%</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-2xl font-bold">10</span>
                  <FaClock className="h-7 w-7 text-purple-700" />
                </div>
                <p className="text-sm text-gray-500">In Progress</p>
                <p className="text-xs text-green-500">+24%</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-2xl font-bold">5</span>
                  <LuInbox className="h-7 w-7 text-purple-700" />
                </div>
                <p className="text-sm text-gray-500">Completed Order</p>
                <p className="text-xs text-green-500">+24%</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-2xl font-bold">3</span>
                  <TbShoppingCartCancel className="h-7 w-7 text-purple-700" />
                </div>
                <p className="text-sm text-gray-500">Cancelled Order</p>
                <p className="text-xs text-red-500">-12%</p>
              </div>
            </div>
          </div>
          <div>
            <AnalyticsCharts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
