import type { IFieldConfig } from "../types";

interface InputFieldProps {
  fieldConfig: IFieldConfig;
  value: string;
  onChange: (value: string) => void;
}

function InputField({ fieldConfig, value, onChange }: InputFieldProps) {
  const {
    label,
    type,
    placeholder,
    autocomplete,
    minLength,
    maxLength,
    pattern,
  } = fieldConfig;
  console.log("value", value);
  return (
    <label>
      {label}
      <input
        type={type}
        placeholder={placeholder}
        name={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete={autocomplete}
        minLength={minLength}
        maxLength={maxLength}
        pattern={pattern}
        required
      />
    </label>
  );
}

export default InputField;
