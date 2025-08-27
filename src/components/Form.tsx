import InputField from "./InputField";
import SubmitButton from "./SubmitButton";
import type { IFieldConfig, IFieldValidation, IFormValues } from "../types";
import { useCallback, useState } from "react";
import { registrationFields } from "../registrationFields";
import {
  createInitialValidationState,
  isFormValid,
  validateField,
} from "../validation";

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

  const [validationState, setValidationState] = useState<
    Record<string, IFieldValidation>
  >(() => createInitialValidationState(registrationFields));

  const handleOnChangeField = useCallback(
    (fieldName: keyof IFormValues, value: string) => {
      const newFormValues = { ...formValues, [fieldName]: value };
      setFormValues(newFormValues);

      const fieldConfig = registrationFields.find(
        (field) => field.name === fieldName
      );

      if (fieldConfig) {
        const currentValidation = validationState[fieldName] || {
          isValid: true,
          message: "",
          isDirty: false,
        };

        const validation = validateField(
          fieldConfig,
          value,
          newFormValues,
          currentValidation.isDirty
        );

        setValidationState((prev) => ({
          ...prev,
          [fieldName]: validation,
        }));
      }
    },
    [formValues, validationState]
  );

  const handleOnBlurField = useCallback(
    (fieldName: keyof IFormValues) => {
      const fieldConfig = registrationFields.find(
        (field) => field.name === fieldName
      );
      const value = formValues[fieldName];

      if (fieldConfig) {
        const validation = validateField(fieldConfig, value, formValues, true);
        setValidationState((prev) => ({
          ...prev,
          [fieldName]: validation,
        }));
      }
    },
    [formValues]
  );

  const handleSubmit = () => {
    if (isFormValid(formValues)) {
      const registrationData = {
        name: formValues.name,
        username: formValues.username,
        email: formValues.email,
        password: formValues.password,
      };

      console.log("Registration Data:", registrationData);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {inputFields.map((fieldConfig) => (
        <InputField
          fieldConfig={fieldConfig}
          key={fieldConfig.name}
          value={formValues[fieldConfig.name as keyof IFormValues] || ""}
          validation={validationState[fieldConfig.name]}
          onChange={(value) =>
            handleOnChangeField(fieldConfig.name as keyof IFormValues, value)
          }
          onBlur={handleOnBlurField}
        />
      ))}
      <SubmitButton disabled={!isFormValid(formValues)}>Sign up</SubmitButton>
    </form>
  );
}

export default Form;
