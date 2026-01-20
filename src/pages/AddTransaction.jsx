import useAuth from "../hooks/useAuth";
import Container from "../shared/Container";
import { useNavigate } from "react-router";
import DatePicker from "react-datepicker";
import { useState } from "react";
import usePostTransaction from "../hooks/usePostTransaction";
import { TbFidgetSpinner } from "react-icons/tb";
import toast from "react-hot-toast";

const CreateProduct = () => {
  const [startDate, setStartDate] = useState(null);
  const navigate = useNavigate();
  const [mutateAsync, isPending] = usePostTransaction();
  const { user } = useAuth();

  const handleAddTransaction = async (e) => {
    e.preventDefault();
    const form = e.target;
    const transactionData = {
      name: form.name.value,
      email: form.email.value,
      category: form.category.value,
      amount: form.amount.value,
      condition: form.condition.value,
      description: form.description.value,
      date: startDate,
    };

    const isEmpty = Object.values(transactionData).some(
      (v) => v === "" || v === null
    );
    if (isEmpty) return toast.error("All fields are required!");

    await mutateAsync(transactionData);
    navigate("/myTransactions");
  };

  return (
    <>
      <title>Add Transaction</title>
      <Container className="max-w-3xl shadow my-12">
        <div className="text-center space-y-3 pt-5">
          <h3 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
            Track Every Step
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Monitor your transactions in real-time and stay informed every step
            of the way.
          </p>
        </div>
        <form
          onSubmit={handleAddTransaction}
          className="p-5 shadow rounded-lg my-12 bg-white dark:bg-gray-800"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="label text-gray-900 dark:text-gray-100">
                Income / Expense
              </label>
              <div className="flex gap-6 mt-1">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="condition"
                    value="expense"
                    className="radio peer border-gray-400 dark:border-gray-300 focus:outline-1 focus:outline-primary checked:bg-primary"
                  />
                  <span className="peer-focus:text-primary dark:text-gray-100">
                    Expense
                  </span>
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="condition"
                    value="income"
                    className="radio peer border-gray-400 dark:border-gray-300 focus:outline-1 focus:outline-primary checked:bg-primary"
                  />
                  <span className="peer-focus:text-primary dark:text-gray-100">
                    Income
                  </span>
                </label>
              </div>
            </div>

            <div>
              <label className="label text-gray-900 dark:text-gray-100">
                Category
              </label>
              <select
                name="category"
                className="input-field dark:bg-gray-800 text-black"
              >
                <option value="" disabled selected>
                  Select a Category
                </option>
                <option value="housing">Housing / Rent</option>
                <option value="food">Food & Groceries</option>
                <option value="savings">Savings / Investments</option>
              </select>
            </div>

            <div>
              <label className="label text-gray-900 dark:text-gray-100">
                Amount ($)
              </label>
              <input
                type="number"
                name="amount"
                placeholder="e.g. 19.5"
                className="input-field"
              />
            </div>

            <div>
              <label className="label text-gray-900 dark:text-gray-100">
                Name
              </label>
              <input
                type="text"
                name="name"
                readOnly
                defaultValue={user?.displayName}
                placeholder="Your Name"
                className="input-field bg-gray-100 dark:bg-gray-700"
              />
            </div>

            <div>
              <label className="label text-gray-900 dark:text-gray-100">
                Email
              </label>
              <input
                type="email"
                name="email"
                readOnly
                defaultValue={user?.email}
                placeholder="test@gmail.com"
                className="input-field bg-gray-100 dark:bg-gray-700"
              />
            </div>

            <div className="flex flex-col">
              <label className="label text-gray-900 dark:text-gray-100">
                Select a Date
              </label>
              <DatePicker
                className="input-field"
                selected={startDate}
                dateFormat="yyyy-MM-dd"
                placeholderText="yyyy-mm-dd"
                onChange={(date) => setStartDate(date)}
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="label text-gray-900 dark:text-white">
              Simple Description
            </label>
            <textarea
              name="description"
              placeholder="Optional note..."
              className="input-field"
              rows={4}
            ></textarea>
          </div>

          <div className="text-end">
            <button type="submit" className="btn btn-primary mt-6">
              {isPending ? (
                <span className="flex items-center">
                  Submitting{" "}
                  <TbFidgetSpinner size={20} className="animate-spin m-auto" />
                </span>
              ) : (
                "Add Transaction!"
              )}
            </button>
          </div>
        </form>
      </Container>
    </>
  );
};

export default CreateProduct;
