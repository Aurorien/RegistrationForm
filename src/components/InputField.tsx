import { useState } from "react";
import type { IFieldConfig, IFieldValidation, IFormValues } from "../types";
import "./InputField.css";

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
    required,
  } = fieldConfig;

  const { isValid, message: validationMessage, isDirty } = validation;

  const [showPassword, setShowPassword] = useState(false);
  const inputType = type === "password" && showPassword ? "text" : type;

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <label className="input-field">
        <span>
          {label}
          {(!isValid || isDirty) && (
            <span className="validation error-icon">✗</span>
          )}
        </span>
        <div className="input-wrapper">
          <input
            type={inputType}
            placeholder={placeholder}
            name={label}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onBlur={(e) => onBlur(e.target.value as keyof IFormValues)}
            autoComplete={autocomplete}
            minLength={minLength}
            maxLength={maxLength}
            required={required}
          />
          {type === "password" && (
            <button
              type="button"
              className="password-toggle"
              onClick={togglePasswordVisibility}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <span className="material-symbols-outlined">
                  visibility_off
                </span>
              ) : (
                <span className="material-symbols-outlined">visibility</span>
              )}
            </button>
          )}
        </div>

        <div className="validation message-ctn">
          {!isValid && validationMessage && (
            <span className="validation message">{validationMessage}</span>
          )}
        </div>
      </label>
    </>
  );
}

export default InputField;
