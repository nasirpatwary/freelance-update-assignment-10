import { RiDeleteBin6Line } from "react-icons/ri";
import { format } from "date-fns";
import { Link } from "react-router";
import useDeleteTran from "../hooks/useDeleteTran";
import toast from "react-hot-toast";
import MyModal from "./MyModal";

const TableCart = ({ transaction }) => {
  const { category, amount, condition, date, _id } = transaction;
  const [mutateAsync] = useDeleteTran();

  const handleDelete = (id) => {
    toast((t) => (
      <div className="space-y-4 text-gray-900 dark:text-gray-600">
        <p>Are you sure you want to delete?</p>
        <div className="flex justify-end gap-4">
          <button
            onClick={async () => toast.dismiss(t.id)}
            className="border duration-500 border-green-600 cursor-pointer px-4 py-1 rounded font-semibold text-green-600 dark:text-green-400 dark:border-green-400"
          >
            No
          </button>
          <button
            onClick={async () => {
              toast.dismiss(t.id);
              await mutateAsync(id);
            }}
            className="border duration-500 border-red-600 cursor-pointer px-4 py-1 rounded font-semibold text-red-600 dark:text-red-400 dark:border-red-400"
          >
            Yes
          </button>
        </div>
      </div>
    ));
  };

  return (
    <tr className="border-b border-gray-200 dark:border-gray-700">
      <td className="text-nowrap text-base font-medium text-gray-700 dark:text-gray-300">
        {condition}
      </td>
      <td className="text-nowrap text-base font-medium text-gray-700 dark:text-gray-300">
        {category}
      </td>
      <td className="text-nowrap text-base font-medium text-gray-700 dark:text-gray-300">
        ${amount}
      </td>
      <td className="text-nowrap text-base font-medium text-gray-700 dark:text-gray-300">
        {format(new Date(date), "MM/dd/yyyy")}
      </td>
      <td className="text-nowrap">
        <Link
          to={`/details/${_id}`}
          className="btn-primary dark:text-gray-200 dark:bg-gray-700"
        >
          View Details
        </Link>
      </td>
      <td className="text-nowrap flex justify-end items-center gap-12">
        <MyModal {...transaction} />
        <button onClick={() => handleDelete(_id)}>
          <RiDeleteBin6Line
            className="cursor-pointer text-red-500 dark:text-red-400"
            size={24}
          />
        </button>
      </td>
    </tr>
  );
};

export default TableCart;
