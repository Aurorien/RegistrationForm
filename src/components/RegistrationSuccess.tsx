import "./RegistrationSuccess.css";

interface RegistrationSuccessProps {
  onClick: () => void;
}

function RegistrationSuccess({ onClick }: RegistrationSuccessProps) {
  return (
    <div className="success-content-ctn">
      <div className="success-content">
        <h2>Registration Successful!</h2>
        <button type="button" className="back-button" onClick={onClick}>
          Back to Registration
        </button>
      </div>
    </div>
  );
}
export default RegistrationSuccess;
