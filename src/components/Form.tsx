import InputField from "./InputField";
import SubmitButton from "./SubmitButton";
import type { IFieldConfig } from "../types";

interface FormProps {
  inputFields: IFieldConfig[];
}

function Form({ inputFields }: FormProps) {
  return (
    <form className="form" action="">
      {inputFields.map((fieldConfig) => (
        <InputField fieldConfig={fieldConfig} key={fieldConfig.label} />
      ))}
      <SubmitButton>Sign up</SubmitButton>
    </form>
  );
}

export default Form;
