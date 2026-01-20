import { Controller } from "react-hook-form";

const FormInput = ({ name, control, label, type = "text", rules, children, ...props }) => (
  <div className="form-control w-full">
    <label className="label">
      <span className="label-text text-gray-700 dark:text-gray-300">{label}</span>
    </label>
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <div className="relative">
          <input
            {...field}
            {...props}
            type={type}
            className={`input focus:border-primary w-full bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 ${
              error ? "border-red-500" : ""
            }`}
          />
          {children} {/* Eye icon এর জন্য */}
          {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
        </div>
      )}
    />
  </div>
);

export default FormInput;