import { useState } from "react";
import Container from "../shared/Container";
import {
  FaMoneyBillWave,
  FaChartLine,
  FaReceipt,
  FaCalculator,
  FaPiggyBank,
  FaUserShield,
} from "react-icons/fa";
import {
  MdAnalytics,
  MdNotificationsActive,
  MdAccountBalance,
} from "react-icons/md";
import { RiExchangeDollarFill } from "react-icons/ri";

const Pricing = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <Container className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Simple, Transparent Pricing
        </h1>
        <p className="text-gray-500 dark:text-gray-300">
          No contracts. No surprise fees. Just powerful AI tools built for
          creators.
        </p>

        {/* Toggle Monthly/Yearly */}
        <div className="border-2 border-primary bg-white dark:bg-gray-700 mt-8 rounded-full w-fit mx-auto flex">
          <button
            onClick={() => setToggle(true)}
            className={`py-2 px-4 rounded-l-full cursor-pointer ${
              toggle
                ? "bg-primary text-white rounded-full"
                : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`py-2 px-4 rounded-r-full cursor-pointer ${
              toggle
                ? "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200"
                : "bg-primary rounded-full text-white"
            }`}
          >
            Yearly
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center gap-6 mt-12">
        {/* Basic */}
        <div className="card bg-gray-50 dark:bg-gray-900 text-black dark:text-white border-4 h-fit border-base-100 shadow-sm">
          <div className="card-body">
            <span className="badge badge-xs badge-warning">Most Popular</span>
            <div className="flex justify-between">
              <h2 className="text-3xl font-bold">Basic</h2>
              <span className="text-xl">$29/mo</span>
            </div>
            <div className="flex items-center gap-2">
              <FaReceipt className="text-primary" />
              <span>Smart expense tracking</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCalculator className="text-primary" />
              <span>Monthly budget planner</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMoneyBillWave className="text-primary" />
              <span>Downloadable financial reports</span>
            </div>
            <div className="flex items-center gap-2">
              <RiExchangeDollarFill className="text-primary" />
              <span>Currency & tax calculator tools</span>
            </div>
            <div className="flex items-center gap-2 line-through opacity-50">
              <FaPiggyBank />
              <span>Automated savings insights</span>
            </div>
            <div className="flex items-center gap-2 line-through opacity-50">
              <FaUserShield />
              <span>Team collaboration dashboard</span>
            </div>
            <div className="mt-6">
              <button className="w-full bg-black dark:bg-white text-white dark:text-black py-2 rounded-full">
                Upgrade
              </button>
            </div>
          </div>
        </div>

        {/* Pro */}
        <div className="border-2 rounded-md bg-linear-to-r from-[#ff80b5] to-[#9089fc] bg-clip-border border-transparent">
          <div className="bg-linear-to-r from-[#ceaab9] to-[#a8a3e4] rounded-md p-4">
            <div className="card bg-gray-50 dark:bg-gray-900 shadow-sm text-black dark:text-white">
              <div className="card-body">
                <span className="badge badge-xs badge-warning">
                  Most Popular
                </span>
                <div className="flex justify-between">
                  <h2 className="text-3xl font-bold">Pro</h2>
                  <span className="text-xl">$120/mo</span>
                </div>
                <div className="flex items-center gap-2">
                  <MdAnalytics className="text-primary" />
                  <span>Advanced financial analytics</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaChartLine className="text-primary" />
                  <span>Real-time cashflow monitoring</span>
                </div>
                <div className="flex items-center gap-2">
                  <MdAccountBalance className="text-primary" />
                  <span>Multi-account integrations</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaPiggyBank className="text-primary" />
                  <span>AI-powered savings suggestions</span>
                </div>
                <div className="flex items-center gap-2 line-through opacity-50">
                  <FaChartLine />
                  <span>Investment portfolio tracking</span>
                </div>
                <div className="flex items-center gap-2 line-through opacity-50">
                  <FaUserShield />
                  <span>Team collaboration dashboard</span>
                </div>
                <div className="mt-6">
                  <button className="w-full bg-black dark:bg-white text-white dark:text-black py-2 rounded-full">
                    Upgrade
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Month */}
        <div className="card bg-gray-50 dark:bg-gray-900 border-4 h-fit text-black dark:text-white border-base-100 shadow-sm">
          <div className="card-body">
            <span className="badge badge-xs badge-warning">Most Popular</span>
            <div className="flex justify-between">
              <h2 className="text-3xl font-bold">Month</h2>
              <span className="text-xl">$70/mo</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMoneyBillWave className="text-primary" />
              <span>Full income & expense breakdown</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPiggyBank className="text-primary" />
              <span>Smart goal-based budgeting</span>
            </div>
            <div className="flex items-center gap-2">
              <FaReceipt className="text-primary" />
              <span>Unlimited financial report exports</span>
            </div>
            <div className="flex items-center gap-2">
              <MdNotificationsActive className="text-primary" />
              <span>Automated bill reminders</span>
            </div>
            <div className="flex items-center gap-2 line-through opacity-50">
              <FaChartLine />
              <span>Investment growth forecasting</span>
            </div>
            <div className="flex items-center gap-2 line-through opacity-50">
              <FaUserShield />
              <span>Priority financial support</span>
            </div>
            <div className="mt-6">
              <button className="w-full bg-black dark:bg-white text-white dark:text-black py-2 rounded-full">
                Upgrade
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Pricing;
