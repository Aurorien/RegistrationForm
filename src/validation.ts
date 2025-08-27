import { registrationFields } from "./registrationFields";
import type { IFieldConfig, IFieldValidation, IFormValues } from "./types";

export const createInitialValidationState = (fields: IFieldConfig[]) => {
  const initialState: Record<string, IFieldValidation> = {};

  fields.forEach((field) => {
    initialState[field.name] = {
      isValid: true,
      message: "",
      isDirty: false,
    };
  });

  return initialState;
};

export const validateField = (
  fieldConfig: IFieldConfig,
  value: string,
  formValues: IFormValues,
  isDirty: boolean = true
) => {
  const { label, minLength, maxLength, pattern, patternMessage, required } =
    fieldConfig;
  const fieldValue = value || "";

  let isValid = true;
  let message = "";

  if (!isDirty && fieldValue.length === 0) {
    return { isValid: true, message: "", isDirty };
  }

  if (required && fieldValue.trim().length === 0) {
    isValid = false;
    message = `${fieldConfig.label} is required`;
    return { isValid, message, isDirty };
  }

  if (fieldValue.length > 0) {
    if (minLength && fieldValue.length < minLength) {
      isValid = false;
      message = `${fieldConfig.label} must be at least ${minLength} characters`;
    }

    if (maxLength && fieldValue.length > maxLength) {
      isValid = false;
      message = `${fieldConfig.label} must be no more than ${maxLength} characters`;
    }

    if (pattern) {
      const regex = new RegExp(pattern, "u");
      if (!regex.test(fieldValue)) {
        isValid = false;
        message = `Invalid ${fieldConfig.label.toLowerCase()}. ${patternMessage}`;
      }
    }

    if (label === "Confirm password") {
      if (fieldValue !== formValues.password) {
        isValid = false;
        message = "Passwords do not match";
      }
    }
  }

  return { isValid, message, isDirty };
};

export const isFormValid = (formValues: IFormValues) => {
  const allFieldsValid = registrationFields.every((fieldConfig) => {
    const value = formValues[fieldConfig.label as keyof IFormValues];

    if (fieldConfig.required && value && value.trim().length === 0) {
      console.log(`${fieldConfig.label} is empty and required`);
      return false;
    }

    const validation = validateField(fieldConfig, value, formValues, true);
    return validation.isValid;
  });

  return allFieldsValid;
};
