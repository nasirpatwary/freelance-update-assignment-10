import { format } from "date-fns";
import useCategoryTotal from "../hooks/useCategoryTotal";
import Container from "../shared/Container";

const DetailsTable = ({ category, description, date, amount, condition }) => {
  const { categoryTotal } = useCategoryTotal(category);

  return (
    <Container className="my-12">
      <div className="space-y-3 text-center">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Transaction Details
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-[70ch] mx-auto">
          Review detailed information about this transaction, including
          category, type, amount, and description to better understand your
          financial activity.
        </p>
      </div>

      <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 mt-8">
        <table className="w-full text-left table-auto">
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700 text-gray-700 dark:text-gray-200">
            <tr>
              <th className="p-4 font-medium md:w-40 bg-gray-50 dark:bg-gray-900">
                Category
              </th>
              <td className="p-4 capitalize">{category}</td>
            </tr>
            <tr>
              <th className="p-4 font-medium bg-gray-50 dark:bg-gray-900">
                Amount
              </th>
              <td className="p-4">${amount}</td>
            </tr>
            <tr>
              <th className="p-4 font-medium bg-gray-50 dark:bg-gray-900">
                Type
              </th>
              <td className="p-4 capitalize">{condition}</td>
            </tr>
            <tr>
              <th className="p-4 font-medium bg-gray-50 dark:bg-gray-900">
                Description
              </th>
              <td className="p-4">{description}</td>
            </tr>
            <tr>
              <th className="p-4 font-medium bg-gray-50 dark:bg-gray-900">
                Date
              </th>
              <td className="p-4">{format(new Date(date), "MM/dd/yyyy")}</td>
            </tr>
            <tr>
              <th className="p-4 font-medium bg-gray-50 dark:bg-gray-900">
                Total Amount
              </th>
              <td className="p-4">${categoryTotal.totalAmount}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default DetailsTable;
