import InputField from "./InputField";
import SubmitButton from "./SubmitButton";
import type { IFieldConfig, IFieldValidation, IFormValues } from "../types";
import { useCallback, useState, type FormEvent } from "react";
import { registrationFields } from "../registrationFields";
import {
  createInitialValidationState,
  isFormValid,
  validateField,
} from "../validation";
import "./Form.css";
import RegistrationSuccess from "./RegistrationSuccess";
import { initialFormValues } from "../constants";

interface FormProps {
  inputFields: IFieldConfig[];
  onSuccess: (success: boolean) => void;
}

function Form({ inputFields, onSuccess }: FormProps) {
  const [formValues, setFormValues] = useState<IFormValues>(initialFormValues);

  const [validationState, setValidationState] = useState<
    Record<string, IFieldValidation>
  >(() => createInitialValidationState(registrationFields));
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleOnChangeField = useCallback(
    (fieldName: keyof IFormValues, value: string) => {
      const newFormValues = { ...formValues, [fieldName]: value };
      setFormValues(newFormValues);

      const fieldConfig = registrationFields.find(
        (field) => field.name === fieldName
      );

      if (fieldName === "password") {
        const confirmPasswordFieldConfig = registrationFields.find(
          (field) => field.name === "confirmPassword"
        );
        if (
          validationState["confirmPassword"].isDirty &&
          confirmPasswordFieldConfig &&
          value !== formValues.confirmPassword
        ) {
          setValidationState((prev) => ({
            ...prev,
            [confirmPasswordFieldConfig.name]: {
              isValid: false,
              message: "Passwords do not match",
              isDirty: true,
            },
          }));
        }
      }

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

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isFormValid(formValues)) {
      const registrationData = {
        name: formValues.name,
        username: formValues.username,
        email: formValues.email,
        password: formValues.password,
      };

      console.log("Registration Data:", registrationData);

      setIsSubmitted(true);
      onSuccess(true);
    }
  };

  const handleBackToRegistration = () => {
    setIsSubmitted(false);
    onSuccess(false);
    setFormValues(initialFormValues);
    setValidationState(createInitialValidationState(registrationFields));
  };

  if (isSubmitted)
    return <RegistrationSuccess onClick={handleBackToRegistration} />;

  return (
    <form className="form" onSubmit={(event) => handleSubmit(event)}>
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
