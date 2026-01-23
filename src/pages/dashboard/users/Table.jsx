import toast from "react-hot-toast";
import { useModifyRole } from "../../../hooks/useUserFuntionalty";
import { useForm } from "react-hook-form";
import clsx from 'clsx';
import { FormSelect } from "../../../shared/forms/FormElements";

const Table = ({ email, name, image, role, _id }) => {
  const { mutateAsync } = useModifyRole();
  const { control, handleSubmit } = useForm({
    defaultValues: { role },
  });

  const onSubmit = async (data) => {
    if (data.role === "") {
      return toast.error("Please select a role");
    }
    const updateDoc = { role: data.role, id: _id };
    try {
      await mutateAsync(updateDoc);
    } catch (err) {
      toast.error("Failed to update role");
    }
  };

  return (
    <tr className="hover:bg-slate-50 dark:hover:bg-gray-800/30 transition-colors">
      <td>
            <img
              referrerPolicy="no-referrer"
              src={image || "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"}
              alt={name}
              className="size-10 rounded-full"
            />
      </td>

      <td className="font-semibold text-slate-800 dark:text-white text-nowrap">
        {name}
      </td>
      
      <td className="text-slate-500 dark:text-gray-400 text-nowrap">
        {email}
      </td>

      <td>
        <span
          className={clsx(
            "px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border",
            {
              // User Role Styling
              "bg-sky-50 text-sky-600 border-sky-200 dark:bg-sky-500/10 dark:text-sky-400 dark:border-sky-500/20": role === "user",
              // Admin Role Styling
              "bg-emerald-50 text-emerald-600 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20": role === "admin",
            }
          )}
        >
          {role}
        </span>
      </td>

      <td>
        <form onChange={handleSubmit(onSubmit)} className="max-w-[140px] mx-auto">
          <FormSelect
            id="role"
            name="role"
            control={control}
            // Custom styling pass করা যেতে পারে যদি FormSelect সাপোর্ট করে
            options={[
              { value: "admin", label: "Make Admin" },
              { value: "user", label: "Make User" },
            ]}
          />
        </form>
      </td>
    </tr>
  );
};

export default Table;