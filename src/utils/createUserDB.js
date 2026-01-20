import axios from "axios";
import { toast } from "react-hot-toast";

const createUserDB = async (user) => {
  if (!user?.email || !user?.displayName || !user?.photoURL) return;

  const newUser = {
    email: user.email,
    name: user.displayName,
    image: user.photoURL,
  };

  try {
    await axios.post(`${import.meta.env.VITE_LOCALHOST}/users`, newUser);
    return true;
  } catch (error) {
    const message = error.response?.data?.message || "Database sync failed";
    toast.error(message);
    console.error("User DB Error:", error);
    return false;
  }
};

export default createUserDB;