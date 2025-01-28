"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function AnalyticsCharts() {
  const chartData = {
    labels: ["Initiated", "Pending", "Signed", "Expired"],
    datasets: [
      {
        data: [30, 25, 25, 20],
        backgroundColor: [
          "rgb(243, 244, 246)", // gray-100
          "rgb(147, 51, 234)", // purple-600
          "rgb(88, 28, 135)", // purple-800
          "rgb(216, 180, 254)", // purple-300
        ],
        borderWidth: 0,
        spacing: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: "75%",
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (context) => `${context.label}: ${context.parsed}%`,
        },
      },
    },
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* E-sign Count */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-6 underline underline-offset-4">
            E-sign Count
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Doughnut Chart */}
            <div className="w-40 h-40 flex-1  ">
              <Doughnut data={chartData} options={options} />
            </div>
            {/* Legend */}
            <div className="flex flex-col space-y-4 flex-1 mt-6 ml-15">
              {chartData.labels.map((label, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{
                      
                      backgroundColor:
                        chartData.datasets[0].backgroundColor[index],
                    }}
                  ></span>
                  <span className="text-sm text-gray-600">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* E-stamp Count */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-6 underline underline-offset-4">
            E-stamp Count
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Doughnut Chart */}
            <div className="w-40 h-40 flex-1 relative">
              <Doughnut data={chartData} options={options} />
              {/* Tooltip for Pending Orders */}
              <div className="absolute top-0 right-0 bg-purple-900 text-white px-3 py-2 rounded-lg text-sm">
                <div className="font-medium">Pending</div>
                <div className="text-xs">20 orders</div>
              </div>
            </div>
            {/* Legend */}
            <div className="flex flex-col space-y-4 flex-1 mt-6 ml-15">
              {chartData.labels.map((label, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{
                      backgroundColor:
                        chartData.datasets[0].backgroundColor[index],
                    }}
                  ></span>
                  <span className="text-sm text-gray-600">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
