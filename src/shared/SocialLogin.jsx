import { useLocation, useNavigate } from "react-router";
import { toast } from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import createUserDB from "../utils/createUserDB";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
  const { signInGoogle, signInGithub } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state || "/";

  const handleLogin = async (providerMethod) => {
    try {
      const { user } = await providerMethod();
      
      // DB te create korar function call
      const success = await createUserDB(user);
      console.log("User created in DB:", success);  
      if (success) {
        toast.success("Login Successful!");
        navigate(from, { replace: true });
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Google Login */}
      <button
        onClick={() => handleLogin(signInGoogle)}
        className="btn w-full bg-white text-black border-[#e5e5e5] truncate"
      >
        <FcGoogle size={20} /> Login with Google
      </button>

      {/* GitHub Login */}
      <button
        onClick={() => handleLogin(signInGithub)}
        className="btn w-full bg-black text-white border-black"
      >
        <FaGithub size={20} /> Login with GitHub
      </button>
    </div>
  );
};

export default SocialLogin;