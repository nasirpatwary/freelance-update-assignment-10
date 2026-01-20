import { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import { CiEdit } from "react-icons/ci";
import { usePatchTran } from "../hooks/usePatchTran";

const MyModal = ({ category, amount, description, date, _id, condition }) => {
  const [mutateAsync, isPending] = usePatchTran();
  const [startDate, setStartDate] = useState(() => {
    const parsed = new Date(date);
    return isNaN(parsed) ? new Date() : parsed;
  });
  const modalRef = useRef();

  const handleShowModal = () => modalRef.current.showModal();
  const handleModalClose = () => modalRef.current.close();

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const updatesData = {
      id: _id,
      category: form.category.value,
      amount: form.amount.value,
      condition: form.condition.value,
      description: form.description.value,
      date: startDate,
    };
    await mutateAsync(updatesData);
    modalRef.current.close();
  };

  return (
    <>
      <button onClick={handleShowModal}>
        <CiEdit className="cursor-pointer text-green-500" size={32} />
      </button>

      <dialog
        ref={modalRef}
        className="modal modal-bottom sm:modal-middle dark:bg-gray-900 dark:text-gray-200"
      >
        <div className="modal-box space-y-2 text-center dark:bg-gray-800 dark:text-gray-200">
          <h3 className="font-bold text-xl">Edit Financial Entry!</h3>
          <p>
            Review and update the information for this transaction to reflect
            the latest changes
          </p>

          <form onSubmit={handleUpdate}>
            <fieldset className="fieldset">
              <label className="label">Income / Expense</label>
              <div className="flex gap-6 mt-1 justify-center">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="condition"
                    value="expense"
                    className="radio peer focus:outline-1 focus:outline-primary"
                    defaultChecked={condition === "expense"}
                  />
                  <span className="peer-focus:text-primary">Expense</span>
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="condition"
                    value="income"
                    className="peer radio focus:outline-1 focus:outline-primary"
                    defaultChecked={condition === "income"}
                  />
                  <span className="peer-focus:text-primary">Income</span>
                </label>
              </div>

              <label className="label">Category</label>
              <select
                name="category"
                defaultValue={category}
                className="input-field"
              >
                <option value="" disabled>
                  Select a Category
                </option>
                <option value="housing">Housing</option>
                <option value="food">Food</option>
                <option value="savings">Savings</option>
              </select>

              <label className="label">Amount ($)</label>
              <input
                type="number"
                name="amount"
                placeholder="e.g. 19.5"
                className="input-field"
                defaultValue={amount}
              />

              <label className="label">Select a Date</label>
              <DatePicker
                className="input-field"
                selected={startDate}
                dateFormat="yyyy-MM-dd"
                placeholderText="yyyy-mm-dd"
                onChange={(d) => setStartDate(d)}
              />

              <label className="label">Simple Description</label>
              <textarea
                name="description"
                placeholder="Optional note..."
                className="input-field"
                rows={4}
                defaultValue={description}
              ></textarea>
            </fieldset>

            <div className="flex justify-end gap-4 mt-4">
              <button
                type="button"
                onClick={handleModalClose}
                className="btn-secondary"
              >
                Cancel
              </button>
              <button type="submit" className="btn-primary">
                {isPending ? "Updating..." : "Update"}
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default MyModal;
