import InputField from "./InputField";
import SubmitButton from "./SubmitButton";
import type { IFieldConfig, IFormValues } from "../types";
import { useCallback, useState } from "react";

interface FormProps {
  inputFields: IFieldConfig[];
}

function Form({ inputFields }: FormProps) {
  const [formValues, setFormValues] = useState<IFormValues>({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleOnChangeField = useCallback(
    (fieldLabel: keyof IFormValues, value: string) => {
      const newFormData = { ...formValues, [fieldLabel]: value };
      setFormValues(newFormData);
      console.log("fieldLabel", fieldLabel);
      console.log(formValues);
    },
    [formValues]
  );

  return (
    <form className="form" action="">
      {inputFields.map((fieldConfig) => (
        <InputField
          fieldConfig={fieldConfig}
          key={fieldConfig.label}
          value={formValues[fieldConfig.label as keyof IFormValues] || ""}
          onChange={(value) =>
            handleOnChangeField(fieldConfig.label as keyof IFormValues, value)
          }
        />
      ))}
      <SubmitButton>Sign up</SubmitButton>
    </form>
  );
}

export default Form;
