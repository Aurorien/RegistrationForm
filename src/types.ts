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
}
