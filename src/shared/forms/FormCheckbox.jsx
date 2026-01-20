import { Controller } from "react-hook-form";

const FormCheckbox = ({ name, control, label, rules }) => (
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
            <span className="label-text dark:text-gray-300">{label}</span>
          </label>
          {error && <span className="text-red-500 text-xs">{error.message}</span>}
        </>
      )}
    />
  </div>
);

export default FormCheckbox;