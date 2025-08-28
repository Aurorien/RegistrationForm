export interface IFieldConfig {
  label: string;
  name: string;
  type: "text" | "email" | "password";
  placeholder: string;
  autocomplete: string;
  minLength: number;
  maxLength: number;
  pattern: string;
  patternMessage: string;
  required: boolean;
}

export interface IFormValues {
  name: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IFieldValidation {
  isValid: boolean;
  message: string;
  isDirty: boolean;
}
