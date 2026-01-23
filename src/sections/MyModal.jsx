import { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import { CiEdit } from "react-icons/ci";
import { usePatchTran } from "../hooks/usePatchTran";
import { FormInput, FormRadio, FormSelect, FormTextArea } from "../shared/forms/FormElements";
import { useForm } from "react-hook-form";

const MyModal = ({ category, amount, description, date, _id, condition }) => {
  const [mutateAsync, isPending] = usePatchTran();
  const [startDate, setStartDate] = useState(() => {
    const parsed = new Date(date);
    return isNaN(parsed) ? new Date() : parsed;
  });
  const modalRef = useRef();

  const handleShowModal = () => modalRef.current.showModal();
  const handleModalClose = () => modalRef.current.close();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      category,
      amount,
      description,
      date,
      condition,
    },
  });

  const onSubmit = async (data) => {
    try {
      await mutateAsync({ ...data, id: _id, date: startDate });
      modalRef.current.close();
    } catch (err) {
      console.error("Error DB ---->", err.message);
    }
  };
  return (
    <>
      <button onClick={handleShowModal}>
        <CiEdit className="cursor-pointer text-green-500" size={32} />
      </button>

      <dialog
        ref={modalRef}
        className="modal modal-bottom sm:modal-middle dark:text-gray-200"
      >
        <div className="modal-box space-y-4 dark:bg-gray-800 dark:text-gray-200">
         <div className="text-center space-y-3">
           <h3 className="font-bold text-xl">Edit Financial Entry!</h3>
          <p>
            Review and update the information for this transaction to <br />{" "}
            reflect the latest changes
          </p>
         </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <FormRadio
              name="condition"
              control={control}
              label="Income / Expense"
              options={[
                { label: "Expense", value: "expense" },
                { label: "Income", value: "income" },
              ]}
              rules={{ required: "Income / Expense" }}
            />
            <FormInput
              name="amount"
              control={control}
              label="Amount ($)"
              type="number"
              placeholder="e.g. 19.5"
              rules={{
                required: "Amount is required",
                min: { value: 0.1, message: "Min amount 0.1" },
              }}
            />
            {/* Category Select */}
            <FormSelect
              name="category"
              control={control}
              label="Category"
              rules={{ required: "Please select a category" }}
              options={[
                { label: "Housing", value: "Housing" },
                { label: "Income", value: "Income" },
                { label: "Savings", value: "Savings" },
                { label: "Business", value: "Business" },
                { label: "Services", value: "Services" },
                { label: "Food", value: "Food" },
                { label: "Donation", value: "Donation" },
                { label: "Salary", value: "Salary" },
              ]}
            />
             <div className="flex flex-col">
               <label className="label">Select a Date</label>
              <DatePicker
                className="input-field"
                selected={startDate}
                dateFormat="yyyy-MM-dd"
                placeholderText="yyyy-mm-dd"
                onChange={(d) => setStartDate(d)}
              />
             </div>
            <FormTextArea
              name="description"
              control={control}
              label="Simple Description"
              placeholder="Optional note about this transaction..."
              rules={{ required: "Description is required" }}
            />
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
