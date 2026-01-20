import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Lottie from "lottie-react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

import useAuth from "../hooks/useAuth";
import SocialLogin from "../shared/SocialLogin";
import CustomLink from "../shared/CustomLink";
import Container from "../shared/Container";
import success from "../assets/looties3.json";
import FormInput from "../shared/forms/FormInput";

const Login = () => {
  const { signInUser, user } = useAuth();
  const [showEye, setShowEye] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm({
    defaultValues: { email: "", password: "" }
  });

  // Redirect if user already logged in
  useEffect(() => {
    if (user) {
      navigate(location.state || "/");
    }
  }, [user, navigate, location.state]);

  const onSubmit = async (data) => {
    try {
      await signInUser(data.email, data.password);
      toast.success("Login successful!");
      navigate(location.state || "/");
    } catch (error) {
      toast.error("Email or password doesn’t match our records.");
    }
  };

  return (
    <>
      <title>Login || Page</title>
      <Container className="flex flex-col lg:flex-row gap-8 items-center justify-around my-12">
        <div className="card w-full max-w-sm shadow-2xl bg-white dark:bg-gray-800 p-4 md:p-6">
          <h1 className="text-2xl font-semibold text-center text-gray-900 dark:text-gray-100 mb-4">
            Login your account
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <FormInput
              name="email"
              label="Email"
              control={control}
              placeholder="Enter your email"
              rules={{ 
                required: "Email is required",
              }}
            />

            <FormInput
              name="password"
              label="Password"
              type={showEye ? "text" : "password"}
              control={control}
              placeholder="Your Password"
              rules={{ required: "Password is required" }}
            >
              <div 
                className="absolute right-4 top-3 z-10 cursor-pointer dark:text-gray-300"
                onClick={() => setShowEye(!showEye)}
              >
                {showEye ? <FaRegEye size={18} /> : <FaRegEyeSlash size={18} />}
              </div>
            </FormInput>

            <button type="submit" className="btn btn-primary w-full mt-4">Login</button>
          </form>

          <div className="mt-6 space-y-4">
            <SocialLogin />
            <CustomLink
              routPath="Don’t Have An Account?"
              to="/register"
              path="Register"
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

export default Login;