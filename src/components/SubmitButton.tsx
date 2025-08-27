import type { ReactNode } from "react";

interface SubmitButtonProps {
  children: ReactNode;
  disabled: boolean;
  onClick: () => void;
}

function SubmitButton({ children, disabled, onClick }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      onClick={onClick}
      disabled={disabled}
      className={`submit-button ${disabled ? "disabled" : ""}`}
    >
      {children}
    </button>
  );
}

export default SubmitButton;
