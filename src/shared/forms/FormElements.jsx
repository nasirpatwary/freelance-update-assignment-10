import { Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// ১. Reusable Input (Text, Number, Password)

export const FormInput = ({
  name,
  control,
  label,
  type = "text",
  rules,
  children,
  ...props
}) => (
  <div className="form-control w-full">
    <label className="label mb-1">
      <span className="label-text text-gray-700 dark:text-gray-300">
        {label}
      </span>
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
            className={`input-field ${
              error ? "border-red-500" : ""
            }`}
          />
          {children} {/* Eye icon এর জন্য */}
          {error && (
            <p className="text-red-500 text-sm mt-1">{error.message}</p>
          )}
        </div>
      )}
    />
  </div>
);

// ২. Reusable Select Option
export const FormSelect = ({ name, control, label, options, rules }) => (
  <div className="form-control flex flex-col w-full">
    <label className="label mb-1">
      <span className="label-text text-gray-700 dark:text-gray-300">
        {label}
      </span>
    </label>
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <>
          <select
            {...field}
            className={`select outline-0 w-full bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 focus:border-primary focus:outline-none ${
              error ? "border-red-500" : ""
            }`}
          >
            <option value="">Select {label}</option>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {error && (
            <p className="text-red-500 text-xs mt-1">{error.message}</p>
          )}
        </>
      )}
    />
  </div>
);

// ৩. Reusable Date Picker
export const FormDatePicker = ({ name, control, label, rules }) => (
  <div className="form-control flex flex-col w-full">
    <label className="label mb-1">
      <span className="label-text text-gray-700 dark:text-gray-300">
        {label}
      </span>
    </label>
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <>
          <DatePicker
            selected={field.value}
            onChange={(date) => field.onChange(date)}
            placeholderText="YYYY-MM-DD"
            dateFormat="yyyy-MM-dd"
            className={`input-field ${
              error ? "border-red-500" : ""
            }`}
          />
          {error && (
            <p className="text-red-500 text-xs mt-1">{error.message}</p>
          )}
        </>
      )}
    />
  </div>
);

// ৪. Reusable Textarea
export const FormTextArea = ({ name, control, label, rules, ...props }) => (
  <div className="form-control flex flex-col w-full">
    <label className="label mb-1">
      <span className="label-text text-gray-700 dark:text-gray-300">
        {label}
      </span>
    </label>
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <>
          <textarea
            {...field}
            {...props}
            rows={4}
            className={`textarea rounded-xl w-full bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 focus:border-primary focus:outline-none ${
              error ? "border-red-500" : ""
            }`}
          />
          {error && (
            <p className="text-red-500 text-xs mt-1">{error.message}</p>
          )}
        </>
      )}
    />
  </div>
);

// ৫. Reusable Radio Group
export const FormRadio = ({ name, control, label, options, rules }) => (
  <div className="form-control w-full">
    <label className="label mb-1">
      <span className="label-text text-gray-700 dark:text-gray-300">
        {label}
      </span>
    </label>
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <div className="flex gap-6 mt-2">
          {options.map((opt) => (
            <label
              key={opt.value}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                value={opt.value}
                checked={field.value === opt.value}
                onChange={() => field.onChange(opt.value)}
                className={`radio radio-primary radio-sm ${
                  error ? "border-red-500" : ""
                }`}
              />
              <span className="text-gray-600 dark:text-gray-400">
                {opt.label}
              </span>
            </label>
          ))}
          {error && (
            <p className="text-red-500 text-xs mt-1">{error.message}</p>
          )}
        </div>
      )}
    />
  </div>
);

// ৬. Reusable Checkbox
export const FormCheckbox = ({ name, control, label, rules }) => (
  <div className="form-control flex flex-col space-y-3">
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <>
          <label className="label cursor-pointer justify-start gap-3 px-0">
            <input
              type="checkbox"
              className={`checkbox checkbox-sm checkbox-primary ${error ? "border-red-500" : ""}`}
              checked={field.value}
              onChange={(e) => field.onChange(e.target.checked)}
            />
            <span className="text-black mt-1">{label}</span>
          </label>
          {error && (
            <span className="text-red-500 text-xs">{error.message}</span>
          )}
        </>
      )}
    />
  </div>
);
