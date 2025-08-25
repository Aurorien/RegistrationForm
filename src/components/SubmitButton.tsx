import type { ReactNode } from "react";

interface SubmitButtonProps {
  children: ReactNode;
}
function SubmitButton({ children }: SubmitButtonProps) {
  return <button type="submit">{children}</button>;
}

export default SubmitButton;
