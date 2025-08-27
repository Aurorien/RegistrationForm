import type { IFieldConfig } from "./types";

export const registrationFields: IFieldConfig[] = [
  {
    label: "Name",
    name: "name",
    type: "text",
    placeholder: "Name",
    autocomplete: "name",
    minLength: 1,
    maxLength: 50,
    pattern: "^[\\u0041-\\u005A\\u0061-\\u007A\\u00C0-\\u00FF0-9 ._-]+$",
    patternMessage:
      "Name can only contain letters, numbers, dashes (-), and underscores (_)",
    required: true,
  },
  {
    label: "Username",
    name: "username",
    type: "text",
    placeholder: "Username",
    autocomplete: "username",
    minLength: 1,
    maxLength: 50,
    pattern: "^[\\u0041-\\u005A\\u0061-\\u007A\\u00C0-\\u00FF0-9\\s\\._-]+$",
    patternMessage:
      "Username can only contain letters, numbers, dashes (-), and underscores (_)",
    required: true,
  },
  {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "Email",
    autocomplete: "email",
    minLength: 1,
    maxLength: 50,
    pattern: "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
    patternMessage:
      "Please enter a valid email address, e.g. example@example.com",
    required: true,
  },
  {
    label: "Password",
    name: "password",
    type: "text",
    placeholder: "Password",
    autocomplete: "new-password",
    minLength: 8,
    maxLength: 120,
    pattern:
      "^[\\u0041-\\u005A\\u0061-\\u007A\\u00C0-\\u00FF0-9!@#$%^&*()_+=-]+$",
    patternMessage:
      "Use only letters, numbers, and special characters: !@#$%^&*()_+-=",
    required: true,
  },
  {
    label: "Confirm password",
    name: "confirmPassword",
    type: "text",
    placeholder: "Confirm Password",
    autocomplete: "new-password",
    minLength: 1,
    maxLength: 120,
    pattern:
      "^[\\u0041-\\u005A\\u0061-\\u007A\\u00C0-\\u00FF0-9!@#$%^&*()_+=-]+$",
    patternMessage:
      "Use only letters, numbers, and special characters: !@#$%^&*()_+-=",
    required: true,
  },
];
