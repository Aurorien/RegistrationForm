import { registrationFields } from "./registrationFields";
import type { IFieldConfig, IFormValues } from "./types";

export const isFormValid = (formValues: IFormValues) => {
  const allFieldsValid = registrationFields.every((fieldConfig) => {
    const value = formValues[fieldConfig.label as keyof IFormValues];
    const validation = validateField(fieldConfig, value, formValues, true);
    return validation.isValid;
  });

  return allFieldsValid;
};

export const validateField = (
  fieldConfig: IFieldConfig,
  value: string,
  formValues: IFormValues,
  isDirty: boolean = true
) => {
  const { label, minLength, maxLength, pattern, patternMessage, required } =
    fieldConfig;
  let isValid = true;
  let message = "";

  if (!isDirty && value && value.length === 0) {
    return { isValid: true, message: "", isDirty };
  }

  if (required && value && value.length === 0) {
    isValid = false;
    message = `${fieldConfig.label} is required`;
  }

  if (value && value.length > 0) {
    if (minLength && value && value.length < minLength) {
      isValid = false;
      message = `${fieldConfig.label} must be at least ${minLength} characters`;
    }

    if (maxLength && value && value.length > maxLength) {
      isValid = false;
      message = `${fieldConfig.label} must be no more than ${maxLength} characters`;
    }

    if (pattern) {
      const regex = new RegExp(pattern);
      if (!regex.test(value)) {
        isValid = false;
        message = `Invalid ${fieldConfig.label.toLowerCase()}. ${patternMessage}`;
      }
    }

    if (label === "Confirm password") {
      if (value !== formValues.password) {
        isValid = false;
        message = "Passwords do not match";
      } else {
        isValid = true;
        message = "";
      }
    }
  }

  return { isValid, message, isDirty };
};
