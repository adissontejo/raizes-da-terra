import { Link } from "react-router";

interface NavButtonProps {
  label: string;
  to: string;
}

export const NavButton = ({ label, to }: NavButtonProps) => {
  return (
    <Link
      to={to}
      className="text-sm text-clay hover:brightness-50 transition-[filter]"
    >
      {label}
    </Link>
  );
};
