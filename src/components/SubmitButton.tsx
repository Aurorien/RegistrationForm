import type { ReactNode } from "react";

interface SubmitButtonProps {
  children: ReactNode;
  disabled: boolean;
}

function SubmitButton({ children, disabled }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`submit-button ${disabled ? "disabled" : ""}`}
    >
      {children}
    </button>
  );
}

export default SubmitButton;
