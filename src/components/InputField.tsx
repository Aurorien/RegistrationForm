import type { IFieldConfig } from "../types";

interface InputFieldProps {
  fieldConfig: IFieldConfig;
}

function InputField({ fieldConfig }: InputFieldProps) {
  return (
    <label>
      {fieldConfig.label}
      <input
        type={fieldConfig.type}
        placeholder={fieldConfig.label}
        name={fieldConfig.label}
        autoComplete={fieldConfig.autocomplete}
        required
      />
    </label>
  );
}

export default InputField;
