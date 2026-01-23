import { HiOutlineMailOpen } from "react-icons/hi";
import { FaPaperPlane } from "react-icons/fa";
import Container from "../shared/Container";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FormInput } from "../shared/forms/FormElements";

const Newsletter = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: { email: "" },
  });

  const onSubmit = async (data) => {
    if (data.email) {
      toast.success(
        `Success! Check ${data.email} for your freelance starter kit.`,
      );
    }
  };
  return (
    <>
      <Container>
        <div className="relative overflow-hidden bg-primary/10 dark:bg-primary/5 border border-primary/20 rounded-3xl p-8 md:p-16">
          {/* Decorative Background Circles */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                <HiOutlineMailOpen size={20} />
                <span>Weekly Freelance Insights</span>
              </div>

              <h2 className="text-2xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                Scale your freelance{" "}
                <span className="text-primary">career</span> faster.
              </h2>

              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-[40ch]">
                Get the latest job alerts, pricing strategies, and tax tips
                delivered straight to your inbox. No spam, just growth.
              </p>

              <ul className="space-y-3">
                {[
                  "High-paying gig alerts",
                  "Portfolio review tips",
                  "Tax & Invoice templates",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Form */}
            <div className="bg-white dark:bg-[#1e1d2a] p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col md:flex-row"
              >
                <FormInput
                  name="email"
                  label="Email"
                  control={control}
                  placeholder="Enter your email"
                  rules={{
                    required: "Email is required",
                  }}
                />
                  <button
                    type="submit"
                    className="
                    group mt-7
                    btn rounded-l-none rounded-xl bg-black text-white hover:bg-primary border-0 duration-500

                    dark:bg-primary dark:text-white dark:hover:bg-black

                  "
                  >
                    Join Now
                    <FaPaperPlane className="translate-x-0 group-hover:translate-x-2 duration-500" />
                  </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Newsletter;
