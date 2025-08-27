import type { IFieldConfig } from "../types";

interface InputFieldProps {
  fieldConfig: IFieldConfig;
}

  const {
    label,
    type,
    placeholder,
    autocomplete,
    minLength,
    maxLength,
    pattern,
  } = fieldConfig;
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
