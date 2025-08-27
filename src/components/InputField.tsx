import type { IFieldConfig, IFieldValidation, IFormValues } from "../types";

interface InputFieldProps {
  fieldConfig: IFieldConfig;
  value: string;
  validation: IFieldValidation;
  onChange: (value: string) => void;
  onBlur: (fieldName: keyof IFormValues) => void;
}

function InputField({
  fieldConfig,
  value,
  validation,
  onChange,
  onBlur,
}: InputFieldProps) {
  const {
    label,
    type,
    placeholder,
    autocomplete,
    minLength,
    maxLength,
    pattern,
    required,
  } = fieldConfig;

  const { isValid, message: validationMessage, isDirty } = validation;

  return (
    <>
      <label>
        {label}
        <input
          type={type}
          placeholder={placeholder}
          name={label}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={(e) => onBlur(e.target.value as keyof IFormValues)}
          autoComplete={autocomplete}
          minLength={minLength}
          maxLength={maxLength}
          pattern={pattern}
          required={required}
        />
        {(!isValid || isDirty) && (
          <span className="validation error-icon">✗</span>
        )}
      </label>

      {!isValid && validationMessage && (
        <div>
          <span className="validation message">{validationMessage}</span>
        </div>
      )}
    </>
  );
}

export default InputField;
