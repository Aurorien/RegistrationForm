import "./App.css";
import Form from "./components/Form";
import { registrationFields } from "./registrationFields";

function App() {
  return (
    <main>
      <h1>Register your account</h1>
      <Form inputFields={registrationFields} />
    </main>
  );
}

export default App;
