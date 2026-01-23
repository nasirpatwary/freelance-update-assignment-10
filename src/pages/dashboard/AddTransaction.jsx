import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
import useAuth from "../../hooks/useAuth";
import usePostTransaction from "../../hooks/usePostTransaction";
import Container from "../../shared/Container";
import {
  FormDatePicker,
  FormInput,
  FormRadio,
  FormSelect,
  FormTextArea,
} from "../../shared/forms/FormElements";

const AddTransaction = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [mutateAsync, isPending] = usePostTransaction();

  // React Hook Form Setup
  const { control, handleSubmit } = useForm({
    defaultValues: {
      title: "",
      img: "",
      amount: "",
      category: "",
      location: "",
      rating: "",
      condition: "",
      description: "",
      name: user?.displayName || "",
      email: user?.email || "",
      date: new Date(),
    },
  });

  const onSubmit = async (data) => {
    try {
      await mutateAsync(data);
      navigate("/dashboard/myTransactions");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <>
      <title>Add Transaction | Finance Tracker</title>
      <div className="py-10">
      <Container className="max-w-4xl bg-white dark:bg-[#1e293b] rounded-3xl border border-slate-200 dark:border-slate-700 shadow-xl rounded-b-3xl transition-all">
        {/* Header Section */}
        <div className="text-center space-y-3 pt-8 px-5">
          <h3 className="text-2xl md:text-4xl font-black text-gray-900 dark:text-gray-100">
            Track Every <span className="text-primary">Step</span>
          </h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
            Monitor your transactions in real-time and stay informed every step
            of the way.
          </p>
        </div>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-4 md:p-10 space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <FormInput
              name="title"
              label="Title"
              control={control}
              placeholder="Business Title"
              rules={{ required: "Title is required" }}
            />
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
              name="img"
              label="Image URL"
              control={control}
              placeholder="Your Image URL..."
              rules={{ required: "Image URL is required" }}
            />
            <FormSelect
              name="location"
              control={control}
              label="Location"
              rules={{ required: "Please select a location" }}
              options={[
                { label: "New York, USA", value: "New York, USA" },
                { label: "Remote", value: "Remote" },
                { label: "Wall Street", value: "Wall Street" },
                { label: "Virginia, USA", value: "Virginia, USA" },
                { label: "London, UK", value: "London, UK" },
                { label: "Dubai, UAE", value: "Dubai, UAE" },
                { label: "Blockchain", value: "Blockchain" },
                { label: "Singapore", value: "Singapore" },
                { label: "Geneva, Switzerland", value: "Geneva, Switzerland" },
                { label: "Corporate Office", value: "Corporate Office" },
                { label: "San Francisco, USA", value: "San Francisco, USA" },
                { label: "Local Market", value: "Local Market" },
              ]}
            />

            {/* Amount Input */}
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
            <FormInput
              name="rating"
              control={control}
              label="Rating"
              type="number"
              placeholder="e.g. 4.5"
              rules={{
                required: "Rating is required",
                min: { value: 3.5, message: "Min rating 3.5" },
              }}
            />
            {/* Date Picker */}
            <FormDatePicker
              name="date"
              control={control}
              label="Select a Date"
              rules={{ required: "Date is required" }}
            />

            {/* Name (Read Only Style) */}
            <FormInput
              name="name"
              control={control}
              label="Your Name"
              readOnly
              className="input bg-gray-100 dark:bg-gray-700 opacity-70 cursor-not-allowed"
            />

            {/* Email (Read Only Style) */}
            <FormInput
              name="email"
              control={control}
              label="Email Address"
              readOnly
              className="input bg-gray-100 dark:bg-gray-700 opacity-70 cursor-not-allowed"
            />
          </div>

          {/* Description Textarea */}
          <FormTextArea
            name="description"
            control={control}
            label="Simple Description"
            placeholder="Optional note about this transaction..."
            rules={{ required: "Description is required" }}
          />

          {/* Submit Button */}
          <div className="text-end pt-4">
            <button
              type="submit"
              disabled={isPending}
              className="btn btn-primary px-10 rounded-xl text-white font-bold transition-all hover:scale-105 active:scale-95 disabled:bg-gray-400"
            >
              {isPending ? (
                <span className="flex items-center gap-2">
                  Submitting{" "}
                  <TbFidgetSpinner className="animate-spin" size={20} />
                </span>
              ) : (
                "Add Transaction!"
              )}
            </button>
          </div>
        </form>
      </Container>
      </div>
    </>
  );
};

export default AddTransaction;
