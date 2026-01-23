import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Container from "../shared/Container";
import FinancialCard from "../shared/FinancialCard";
import SkeletonCard from "../shared/SkeletonCard";
import useTransactions from "../hooks/useTrransactions";

const Financials = () => {
  const { ref, inView } = useInView();

  // 1. Filter States
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [sort, setSort] = useState("");

  // 2. Hook Consumption
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useTransactions({ search, category, location, sort });

  // 3. Infinite Scroll Effect
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  return (
    <>
    <title>All Financials | Page</title>
    <div className="bg-slate-50 dark:bg-slate-950 transition-colors duration-500 min-h-screen py-10">
      <Container>
        {/* --- Filter & Search Section --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10 p-4 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
          {/* Category Filter */}
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="p-2 rounded-lg bg-slate-100 focus:ring-1 focus:ring-primary dark:bg-slate-800 dark:text-white"
          >
            <option value="">All Categories</option>
            <option value="Housing">Housing</option>
            <option value="Income">Income</option>
            <option value="Savings">Savings</option>
            <option value="Business">Business</option>
            <option value="Services">Services</option>
            <option value="Food">Food</option>
            <option value="Donation">Donation</option>
            <option value="Salary">Salary</option>
          </select>

          {/* Location Filter */}
          <select
            onChange={(e) => setLocation(e.target.value)}
            className="p-2 rounded-lg focus:ring-1 focus:ring-primary bg-slate-100 dark:bg-slate-800 dark:text-white"
          >
            <option value="">All Locations</option>
            <option value="New York, USA">New York, USA</option>
            <option value="Remote">Remote</option>
            <option value="Wall Street">Wall Street</option>
            <option value="London, UK">London, UK</option>
            <option value="Dubai, UAE">Dubai, UAE</option>
            <option value="Singapore">Singapore</option>
            {/* ... add other locations from your list */}
          </select>
          
          <input
            type="text"
            placeholder="Search title..."
            className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800 dark:text-white border border-gray-400 outline-none focus:ring-1 focus:ring-primary"
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            onChange={(e) => setSort(e.target.value)}
            className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800 dark:text-white focus:ring-1 focus:ring-primary"
          >
            <option value="">Newest</option>
            <option value="amount_asc">Amount: Low to High</option>
            <option value="amount_desc">Amount: High to Low</option>
            <option value="rating_asc">Rating: Low to High</option>
            <option value="rating_desc">Rating: High to Low</option>
            <option value="date_asc">Date: Low to High</option>
            <option value="date_desc">Date: High to Low</option>
          </select>

          {/* Reset Button */}
          <button
            onClick={() => {
              setSearch("");
              setCategory("");
              setLocation("");
              setSort("");
            }}
            className="bg-primary/30 cursor-pointer text-white focus:ring-1 focus:ring-primary rounded-xl font-medium hover:bg-primary transition"
          >
            Clear Filters
          </button>
        </div>

        {/* --- Card Grid --- */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {isLoading
            ? Array(12)
                .fill(0)
                .map((_, i) => <SkeletonCard key={i} />)
            : data?.pages.map((page) =>
                page.items.map((item) => (
                  <FinancialCard key={item._id} item={item} />
                )),
              )}
        </div>

        {/* --- Infinite Scroll Trigger (Sentinel) --- */}
        <div ref={ref} className="mt-12 py-10 flex justify-center">
          {isFetchingNextPage ? (
            <div className="flex items-center gap-2 text-primary font-semibold animate-pulse">
              <span>Loading more items...</span>
            </div>
          ) : hasNextPage ? (
            <p className="text-slate-400 text-sm">Scroll down to see more</p>
          ) : (
            <p className="text-slate-400 text-sm italic">
              You've reached the end of the market.
            </p>
          )}
        </div>
      </Container>
    </div>
    </>
  );
};

export default Financials;
