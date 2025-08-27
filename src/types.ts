export interface IFieldConfig {
  label: string;
  type: "text" | "email";
  placeholder: string;
  autocomplete: string;
  minLength: number;
  maxLength: number;
  pattern: string;
  patternMessage: string;
}

export interface IFormValues {
  name: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}
