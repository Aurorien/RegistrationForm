import type { IFieldConfig } from "./types";

export const registrationFields: IFieldConfig[] = [
  {
    label: "Name",
    type: "text",
    placeholder: "Name",
    autocomplete: "name",
    minLength: 1,
    maxLength: 50,
    pattern: "^[a-zA-Z0-9_-]+$",
    patternMessage:
      "Name can only contain letters, numbers, dashes (-), and underscores (_)",
  },
  {
    label: "Username",
    type: "text",
    placeholder: "Username",
    autocomplete: "username",
    minLength: 1,
    maxLength: 50,
    pattern: "^[a-zA-Z0-9_-]+$",
    patternMessage:
      "Username can only contain letters, numbers, dashes (-), and underscores (_)",
  },
  {
    label: "Email",
    type: "email",
    placeholder: "Email",
    autocomplete: "email",
    minLength: 1,
    maxLength: 50,
    pattern: "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
    patternMessage:
      "Please enter a valid email address, e.g. example@example.com",
  },
  {
    label: "Password",
    type: "text",
    placeholder: "Password",
    autocomplete: "new-password",
    minLength: 8,
    maxLength: 120,
    pattern: "^[a-zA-Z0-9!@#$%^&*()_+\\-=]+$",
    patternMessage:
      "Use only letters, numbers, and safe special characters (!@#$%^&*()_+-=[]{}|;:,.<>?~`)",
  },
  {
    label: "Confirm password",
    type: "text",
    placeholder: "Confirm Password",
    autocomplete: "new-password",
    minLength: 1,
    maxLength: 120,
    pattern: "^[a-zA-Z0-9!@#$%^&*()_+\\-=]+$",
    patternMessage:
      "Use only letters, numbers, and safe special characters (!@#$%^&*()_+-=[]{}|;:,.<>?~`)",
  },
];
