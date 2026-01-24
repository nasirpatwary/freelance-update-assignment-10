import toast from "react-hot-toast";
import { useModifyRole } from "../../../hooks/useUserFuntionalty";
import { useForm } from "react-hook-form";
import clsx from 'clsx';
import { FormSelect } from "../../../shared/forms/FormElements";

const TableRow = ({ email, name, image, role, _id }) => {
  const { mutateAsync } = useModifyRole();
  const { control, handleSubmit } = useForm({ defaultValues: { role } });

  const onSubmit = async (data) => {
    if (data.role === role) return;
    try {
      await mutateAsync({ role: data.role, id: _id });
      toast.success(`${name}'s role is now ${data.role}`);
    } catch (err) {
      toast.error("Role update failed");
    }
  };

  return (
    <tr className="group dark:hover:bg-indigo-500/5 transition-all">
      {/* Avatar & Name */}
      <td>
        <div className="flex items-center gap-4">
          <div className="relative shrink-0">
            <img
              referrerPolicy="no-referrer"
              src={image || "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"}
              alt={name}
              className="size-11 rounded-2xl object-cover ring-2 ring-white dark:ring-gray-800 shadow-md transition-transform group-hover:scale-105"
            />
            <div className="absolute -bottom-1 -right-1 size-3.5 bg-emerald-500 border-2 border-white dark:border-gray-950 rounded-full shadow-sm"></div>
          </div>
          <span className="truncate font-bold text-slate-700 dark:text-gray-200 text-[15px]">{name}</span>
        </div>
      </td>

      {/* Email */}
      <td className="text-nowrap text-slate-500 dark:text-gray-400 font-medium text-sm">
        {email}
      </td>

      {/* Role Badge */}
      <td className="text-nowrap text-center">
        <span className={clsx(
          "px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest border shadow-sm",
          {
            "bg-sky-50 text-sky-600 border-sky-100 dark:bg-sky-500/10 dark:text-sky-400 dark:border-sky-500/20": role === "user",
            "bg-amber-50 text-amber-600 border-amber-100 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20": role === "admin",
          }
        )}>
          {role}
        </span>
      </td>

      {/* Modify Action */}
      <td className="text-nowrap">
        <form onChange={handleSubmit(onSubmit)}>
          <FormSelect
            id="role"
            name="role"
            control={control}
            options={[
              { value: "admin", label: "Admin Access" },
              { value: "user", label: "User Access" },
            ]}
          />
        </form>
      </td>
    </tr>
  );
};

export default TableRow;