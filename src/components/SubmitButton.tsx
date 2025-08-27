import type { ReactNode } from "react";
import "./SubmitButton.css";

interface SubmitButtonProps {
  children: ReactNode;
  disabled?: boolean;
}

function SubmitButton({ children, disabled }: SubmitButtonProps) {
  return (
    <button type="submit" disabled={disabled} className="submit-button">
      {children}
    </button>
  );
}

export default SubmitButton;
