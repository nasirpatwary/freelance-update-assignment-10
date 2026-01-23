import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { SiOnlyoffice } from "react-icons/si";

import { TfiEmail } from "react-icons/tfi";
import { FormInput, FormTextArea } from "../shared/forms/FormElements";
const Contact = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      fastName: "",
      lastName: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    if (data) {
      toast.success("Contact successfully!");
    }
  };
  return (
    <>
    <title>Financial Contact | Page</title>
    <section className="min-h-[calc(100vh-352px)] my-10">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-4xl font-extrabold dark:text-gray-200 text-slate-900 mb-4">
            Contact Our Experts
          </h2>
          <p className="text-slate-600 dark:text-gray-300 mb-8 leading-relaxed text-lg">
            Have questions about your account or our investment strategies? Our
            team is available 24/7.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
             <SiOnlyoffice className="dark:text-gray-300" />
              <div>
                <h4 className="font-bold dark:text-gray-300">Headquarters</h4>
                <p className="text-slate-500  dark:text-gray-300 text-sm">
                  Financial District, New York, NY 10004
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <TfiEmail className="dark:text-gray-300" />
              <div>
                <h4 className="font-bold  dark:text-gray-300">Email Support</h4>
                <p className="text-slate-500 text-sm  dark:text-gray-200">
                  advisory@fintech-core.com
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.form
         onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-4 md:p-6 rounded-3xl"
        >
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <FormInput
              name="fastName"
              label="Fast Name"
              control={control}
              placeholder="Fast Name"
              rules={{ required: "fast is required" }}
            />
            <FormInput
              name="lastName"
              label="Last Name"
              control={control}
              placeholder="Last Name"
              rules={{ required: "last is required" }}
            />
          </div>
            <FormTextArea
              name="description"
              control={control}
              label="Simple Description"
              placeholder="Optional note about this transaction..."
              rules={{ required: "Description is required" }}
            />
          <div className="mt-6 text-end">
            <button
            type="submit"
            className="btn btn-primary px-10 rounded-xl text-white font-bold transition-all hover:scale-105 active:scale-95 disabled:bg-gray-400"
          >
            Submit Inquiry
          </button>
          </div>
        </motion.form>
      </div>
    </section>
    </>
  );
};

export default Contact;
