import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import { registrationFields } from "./registrationFields";

function App() {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const onSuccess = (success: boolean) => setIsSuccess(success);

  return (
    <main>
      {!isSuccess && <h1>Register your account</h1>}
      <Form inputFields={registrationFields} onSuccess={onSuccess} />
    </main>
  );
}

export default App;
