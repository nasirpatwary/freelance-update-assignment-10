import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import Lottie from "lottie-react";

import useAuth from "../hooks/useAuth";
import SocialLogin from "../shared/SocialLogin";
import CustomLink from "../shared/CustomLink";
import Container from "../shared/Container";
import createUserDB from "../utils/createUserDB";
import success from "../assets/looties1.json";
import FormInput from "../shared/forms/FormInput";
import FormCheckbox from "../shared/forms/FormCheckbox";

const Register = () => {
  const [showEye, setShowEye] = useState(false);
  const navigate = useNavigate();
  const { createUser, updateUserProfile, logOutUser } = useAuth();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      photo: "",
      email: "",
      password: "",
      terms: false,
    },
  });

  const onSubmit = async (data) => {
    const { email, password, name, photo, terms } = data;

    if (!terms) {
      return toast.error("Please accept terms and conditions!");
    }

    try {
      const { user } = await createUser(email, password);

      await updateUserProfile(name, photo);

      await createUserDB(user);

      await logOutUser();
      toast.success("Registered successfully! Please login.");
      navigate("/login");
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Auth email already in use");
    }
  };

  return (
    <>
      <title>Register || Page</title>
      <Container className="flex flex-col lg:flex-row gap-8 items-center justify-around my-12">
        <div className="card w-full max-w-sm shadow-2xl bg-white dark:bg-gray-800 p-4 md:p-6">
          <h1 className="text-2xl font-semibold text-center mt-4 text-gray-900 dark:text-gray-100">
            Register your account
          </h1>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
          >
            <FormInput
              name="name"
              label="Name"
              control={control}
              placeholder="Your Name"
              rules={{ required: "Name is required" }}
            />

            <FormInput
              name="photo"
              label="Photo URL"
              control={control}
              placeholder="Your Photo URL"
              rules={{ required: "Photo URL is required" }}
            />

            <FormInput
              name="email"
              label="Email"
              control={control}
              placeholder="nasir@email.com"
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email format (example: example@email.com)",
                },
              }}
            />

            <FormInput
              name="password"
              label="Password"
              type={showEye ? "text" : "password"}
              control={control}
              placeholder="Your Password"
              rules={{
                required: "Password is required",
                validate: {
                  checkLength: (value) =>
                    value.length >= 6 ||
                    "Password must be at least 6 characters long",
                  hasUpper: (value) =>
                    /[A-Z]/.test(value) ||
                    "At least one uppercase letter required",
                  hasLower: (value) =>
                    /[a-z]/.test(value) ||
                    "At least one lowercase letter required",
                  hasSpecial: (value) =>
                    /[@$!%*?&]/.test(value) ||
                    "At least one special character (@$!%*?&) required",
                },
              }}
            >
              <div
                className="absolute right-4 top-3 z-10 cursor-pointer dark:text-gray-300"
                onClick={() => setShowEye(!showEye)}
              >
                {showEye ? <FaRegEye size={18} /> : <FaRegEyeSlash size={18} />}
              </div>
            </FormInput>

            {/* Terms and Conditions */}
            <FormCheckbox
              name="terms"
              control={control}
              label="Accept terms and conditions!"
              rules={{ required: "You must accept terms" }}
            />

            <button type="submit" className="btn btn-primary w-full mt-4">
              Register
            </button>
          </form>

          <div className="mt-6 space-y-4">
            <SocialLogin />
            <CustomLink
              routPath="Already Have An Account?"
              to="/login"
              path="Login"
            />
          </div>
        </div>
         <div className="max-w-1/2">
          <Lottie animationData={success} loop={true} />
        </div>
      </Container>
    </>
  );
};

export default Register;
