import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import Container from "../shared/Container";
import { useForm } from "react-hook-form";
import { FormInput } from "../shared/forms/FormElements";
import banner from "../assets/three.jpg";
const Profile = () => {
  const { user, updateUserProfile } = useAuth();
  const { control, handleSubmit } = useForm({
    defaultValues: { name: user.displayName, photo: user.photoURL },
  });
  const onSubmit = async (data) => {
    try {
      await updateUserProfile(data.name, data.photo);
      toast.success("Profile updated successfully");
    } catch (error) {
      toast.error("Error updating profile");
    }
  };

  return (
    <>
      <title>My Profile</title>
      <div className="relative py-12 lg:h-screen dark:bg-gray-900 bg-no-repeat bg-cover" style={{backgroundImage: `url(${banner})`}}>
        <div className="absolute inset-0 bg-black/50 dark:bg-black/80 backdrop-blur-[2px]" />
        <Container className="flex items-center justify-center">
          <div className="card backdrop-blur-sm w-full max-w-sm shrink-0 bg-white/30 dark:bg-gray-800 text-gray-800 dark:text-gray-100">
            <div className="text-center mt-8">
              <img
                referrerPolicy="no-referrer"
                src={user?.photoURL}
                alt="Profile"
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <h2 className="text-2xl font-bold">
                {user?.displayName || "User Name"}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">{user?.email}</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body space-y-4">
              <FormInput
                name="name"
                label="Name"
                control={control}
                placeholder="Enter your name"
                rules={{
                  required: "Name is required",
                }}
              />
              <FormInput
                name="photo"
                label="Photo URL"
                control={control}
                placeholder="Enter your photo URL"
                rules={{
                  required: "Photo URL is required",
                }}
              />
              <button type="submit" className="btn btn-primary w-full">
                Update Profile
              </button>
            </form>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Profile;
