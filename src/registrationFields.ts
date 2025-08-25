import type { IFieldConfig } from "./types";

export const registrationFields: IFieldConfig[] = [
  {
    label: "Name",
    type: "text",
    placehoder: "Name",
    autocomplete: "name",
  },
  {
    label: "Username",
    type: "text",
    placehoder: "Username",
    autocomplete: "username",
  },
  {
    label: "Email",
    type: "email",
    placehoder: "Email",
    autocomplete: "email",
  },
  {
    label: "Password",
    type: "text",
    placehoder: "Password",
    autocomplete: "new-password",
  },
  {
    label: "Confirm password",
    type: "text",
    placehoder: "Confirm Password",
    autocomplete: "new-password",
  },
];
