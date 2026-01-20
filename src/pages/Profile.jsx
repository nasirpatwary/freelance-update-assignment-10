import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import Container from "../shared/Container";

const Profile = () => {
  const { user, updateUserProfile, setLoading } = useAuth();

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;

    try {
      await updateUserProfile(name, photo);
      toast.success("Profile updated successfully");
      setLoading(false);
    } catch (error) {
      toast.error("Error updating profile");
    }
  };

  return (
    <>
      <title>My Profile</title>
      <div className="py-12 lg:h-screen dark:bg-gray-900">
      <Container className="flex items-center justify-center">
        <div className="card backdrop-blur-sm w-full max-w-sm shrink-0 shadow-2xl bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100">
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
          <form onSubmit={handleUpdate} className="card-body">
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input-field bg-gray-100 dark:bg-gray-700"
                placeholder="Your Name"
                defaultValue={user?.displayName || ""}
                required
              />
              <label className="label">Photo URL</label>
              <input
                type="text"
                name="photo"
                className="input-field bg-gray-100 dark:bg-gray-700"
                placeholder="Your Photo URL"
                defaultValue={user?.photoURL || ""}
                required
              />
              <button className="btn btn-neutral mt-4">Save Changes</button>
            </fieldset>
          </form>
        </div>
      </Container>
      </div>
    </>
  );
};

export default Profile;
