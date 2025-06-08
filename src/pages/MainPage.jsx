import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

import { Stacked, Pie, Button, LineChart, SparkLine } from '../components';
import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import product9 from '../data/product9.png';

const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color: (currentMode === 'Dark') && 'white' }} value="1" dataSource={dropdownData} popupHeight="220px" popupWidth="120px" />
  </div>
);

const Ecommerce = () => {
  const { currentColor, currentMode } = useStateContext();

  return (
    <div className="mt-24">
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
      <div className="flex justify-between items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-5 shadow-md">
  <div>
    <p className="uppercase tracking-wide text-sm text-gray-500 dark:text-gray-400 font-semibold">Total Earnings</p>
    <p className="text-3xl font-extrabold text-gray-900 dark:text-white mt-1">₹63,448.78</p>
  </div>
  <button
    type="button"
    style={{ backgroundColor: currentColor }}
    className="text-3xl text-white rounded-full p-4 hover:shadow-lg transition-shadow duration-300"
  >
    <BsCurrencyDollar />
  </button>
</div>

          <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
            />
          </div>
        </div>
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map((item) => (
            <div key={item.title} className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400  mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

   <div className="flex flex-col md:flex-row gap-8 justify-center p-6 bg-gray-50 dark:bg-gray-900 rounded-xl">

  <div className="bg-white dark:bg-secondary-dark-bg dark:text-gray-200 rounded-2xl p-6 flex-1 max-w-4xl shadow-md">
    <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-4 mb-6">
      <h2 className="text-2xl font-bold">Monthly Financial Snapshot</h2>
      <div className="flex space-x-6 text-sm font-medium">
        <div className="flex items-center text-red-600">
          <GoPrimitiveDot className="mr-1" />
          Expenditure
        </div>
        <div className="flex items-center text-green-600">
          <GoPrimitiveDot className="mr-1" />
          Allocated Budget
        </div>
      </div>
    </div>

    <div className="flex flex-wrap justify-between gap-8">
      <div className="flex flex-col border-r border-gray-300 dark:border-gray-700 pr-8 flex-1 min-w-[260px]">
        <div>
          <p className="text-4xl font-extrabold inline-block">₹93,438</p>
          <span className="ml-4 bg-green-600 text-white text-xs font-semibold rounded-full px-3 py-1 align-middle">
            +23%
          </span>
        </div>
        <p className="text-gray-500 mt-1 uppercase tracking-wide">Allocated Budget</p>

        <div className="mt-10">
          <p className="text-3xl font-semibold">₹48,487</p>
          <p className="text-gray-500 mt-1 uppercase tracking-wide">Expenditure</p>
        </div>

        <div className="mt-8">
          <SparkLine
            currentColor={currentColor}
            id="line-sparkLine"
            type="Line"
            height="90px"
            width="100%"
            data={SparklineAreaData}
            color={currentColor}
          />
        </div>

        <div className="mt-8">
          <Button
            color="white"
            bgColor={currentColor}
            text="Export Report"
            borderRadius="12px"
            className="px-6 py-3 font-semibold text-lg"
          />
        </div>
      </div>

      <div className="flex justify-center items-center flex-1 min-w-[320px]">
        <Stacked currentMode={currentMode} width="100%" height="360px" />
      </div>
    </div>
  </div>

  {/* Right Panel - Earnings & Sales Breakdown */}
 <div className="flex flex-col gap-8 w-full max-w-xl">
  {/* Income Summary Card */}
<div className="flex flex-col gap-8 w-full max-w-xl">
  {/* Income Summary Card */}
  <div className="rounded-2xl p-6 shadow-xl text-white bg-gradient-to-r from-emerald-500 to-lime-500">
    <div className="flex justify-between items-start">
      <div>
        <h3 className="text-sm uppercase font-light opacity-80">Income Summary</h3>
        <p className="text-4xl font-extrabold mt-1">₹63,448.78</p>
        <p className="text-sm mt-1 opacity-80">Current Month</p>
      </div>
      <div className="w-32 h-20">
        <SparkLine
          currentColor="#ffffff"
          id="column-sparkLine"
          height="80px"
          type="Column"
          data={SparklineAreaData}
          width="100%"
          color="rgba(255, 255, 255, 0.9)"
        />
      </div>
    </div>
  </div>

  {/* Annual Sales Card */}
  <div className="bg-gray-100 dark:bg-secondary-dark-bg dark:text-gray-200 rounded-2xl p-6 shadow-md flex items-center justify-between">
    <div>
      <p className="text-3xl font-bold text-gray-900 dark:text-white">₹43,246</p>
      <p className="text-sm uppercase tracking-wider text-gray-600 dark:text-gray-400 mt-1">Annual Sales</p>
    </div>
    <div className="w-36 h-36">
      <Pie id="pie-chart" data={ecomPieChartData} legendVisiblity={false} height="160px" />
    </div>
  </div>
</div>


  <div className="bg-white dark:bg-secondary-dark-bg dark:text-gray-200 rounded-2xl p-6 shadow-lg flex items-center justify-between">
    <div>
      <p className="text-3xl font-bold text-gray-900 dark:text-white">₹43,246</p>
      <p className="text-sm uppercase tracking-wider text-gray-500 mt-1">Annual Sales</p>
    </div>
    <div className="w-36 h-36">
      <Pie id="pie-chart" data={ecomPieChartData} legendVisiblity={false} height="160px" />
    </div>
  </div>
</div>

</div>

<div className="flex gap-10 m-4 flex-wrap justify-center">
  <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl">
    <div className="flex justify-between items-center gap-2">
      <p className="text-xl font-semibold">Latest Transactions</p>
      <DropDown currentMode={currentMode} />
    </div>
    <div className="mt-10 w-72 md:w-400">
      {recentTransactions.map((item) => (
        <div key={item.title} className="flex justify-between mt-4">
          <div className="flex gap-4">
            <button
              type="button"
              style={{
                color: item.iconColor,
                backgroundColor: item.iconBg,
              }}
              className="text-2xl rounded-lg p-4 hover:drop-shadow-xl"
            >
              {item.icon}
            </button>
            <div>
              <p className="text-md font-semibold">{item.title}</p>
              <p className="text-sm text-gray-400">{item.desc}</p>
              {/* Date removed */}
            </div>
          </div>
          <p className={`text-${item.pcColor}`}>{item.amount}</p>
        </div>
      ))}
    </div>
    <div className="flex justify-between items-center mt-5 border-t-1 border-color">
      <div className="mt-3">
        <Button
          color="white"
          bgColor={currentColor}
          text="Add"
          borderRadius="10px"
        />
      </div>

      <p className="text-gray-400 text-sm">36 Recent Transactions</p>
    </div>
  </div>
  <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl w-96 md:w-760">
    <div className="flex justify-between items-center gap-2 mb-10">
      <p className="text-xl font-semibold">Sales Overview</p>
      <DropDown currentMode={currentMode} />
    </div>
    <div className="md:w-full overflow-auto">
      <LineChart />
    </div>
  </div>
</div>

     <div className="flex flex-wrap justify-center">
        <div className="md:w-400 bg-gradient-to-br from-indigo-600 to-purple-700 text-white rounded-2xl p-6 m-3 shadow-lg">
  <div className="flex justify-between items-center border-b border-white/30 pb-3">
    <h2 className="text-2xl font-bold tracking-wide">This Week's Overview</h2>
    <button type="button" className="text-2xl text-white opacity-70 hover:opacity-100 transition">
      <IoIosMore />
    </button>
  </div>

  <div className="mt-8 space-y-6">
    {weeklyStats.map((item) => (
      <div
        key={item.title}
        className="flex justify-between items-center bg-white/20 rounded-xl p-4 hover:bg-white/30 transition"
      >
        <div className="flex items-center gap-4">
          <div
            style={{ background: item.iconBg }}
            className="text-2xl p-3 rounded-full shadow-md flex items-center justify-center"
          >
            {item.icon}
          </div>
          <div>
            <p className="text-lg font-semibold">{item.title}</p>
            <p className="text-sm text-white/80">{item.desc}</p>
          </div>
        </div>

        <p className={`font-bold text-lg ${item.pcColor === 'green' ? 'text-green-300' : 'text-red-300'}`}>
          {item.amount}
        </p>
      </div>
    ))}

    <div className="mt-8 bg-white/20 rounded-lg p-4 shadow-inner">
      <SparkLine
        currentColor="white"
        id="area-sparkLine"
        height="160px"
        type="Area"
        data={SparklineAreaData}
        width="100%"
        color="rgba(255, 255, 255, 0.8)"
      />
    </div>
  </div>
</div>

        <div className="w-400 bg-gray-50 dark:bg-gray-800 dark:text-gray-100 rounded-3xl p-8 m-4 shadow-lg">
  <div className="flex justify-between items-center">
    <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">HealthPlus Project Overview</p>
    <button type="button" className="text-2xl text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
      <IoIosMore />
    </button>
  </div>

  <p className="text-xs cursor-pointer bg-indigo-500 text-white py-1 px-3 rounded-full inline-block mt-8 font-semibold">
    Updated: 15 June 2025
  </p>

  <div className="flex gap-6 border-b border-gray-300 dark:border-gray-700 mt-7 pb-5">
    {medicalproBranding.data.map((item) => (
      <div key={item.title} className="pr-6 border-r border-gray-300 dark:border-gray-700 last:border-r-0">
        <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">{item.title}</p>
        <p className="text-base font-medium mt-1">{item.desc}</p>
      </div>
    ))}
  </div>

  <div className="mt-6">
    <p className="text-lg font-semibold mb-3 text-gray-700 dark:text-gray-300">Teams Involved</p>
    <div className="flex gap-4 flex-wrap">
      {medicalproBranding.teams.map((item) => (
        <span
          key={item.name}
          style={{ background: item.color }}
          className="text-white py-1 px-4 rounded-full text-sm cursor-pointer hover:brightness-110 transition"
        >
          {item.name}
        </span>
      ))}
    </div>
  </div>

  <div className="mt-6">
    <p className="text-lg font-semibold mb-3 text-gray-700 dark:text-gray-300">Project Leaders</p>
    <div className="flex gap-5">
      {medicalproBranding.leaders.map((item, index) => (
        <img
          key={index}
          className="rounded-full w-10 h-10 border-2 border-indigo-500"
          src={item.image}
          alt={`Leader ${index + 1}`}
        />
      ))}
    </div>
  </div>

  <div className="flex justify-between items-center mt-8 border-t border-gray-300 dark:border-gray-700 pt-5">
    <Button
      color="white"
      bgColor={currentColor}
      text="Add New Entry"
      borderRadius="12px"
    />
    <p className="text-gray-500 dark:text-gray-400 text-sm">42 Recent Activities</p>
  </div>
</div>

        <div className="w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">Today's Highlights</p>
            <button type="button" className="text-xl font-semibold text-gray-500">
              <IoIosMore />
            </button>
          </div>
          <div className="mt-10">
            <img
              className="md:w-96 h-50 "
              src={product9}
              alt=""
            />
           
            <div className="mt-8">
  <p className="font-semibold text-lg">Explore React 18.2 – The Latest Stable Release!</p>
  <p className="text-gray-400">By Alex Johnson</p>
  <p className="mt-8 text-sm text-gray-400">
    React 18.2 builds upon the powerful concurrent rendering features introduced earlier,
    focusing on improved stability and developer experience. It includes bug fixes, performance enhancements,
    and updated developer tools to help you build faster, more resilient user interfaces.
  </p>
  <div className="mt-3">
    <Button
      color="white"
      bgColor={currentColor}
      text="Discover What's New"
      borderRadius="10px"
    />
  </div>
</div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
