import type { DetailedHTMLProps, HTMLAttributes } from "react";

export interface OverlayProps extends DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  isVisible?: boolean;
}

export const Overlay = ({
  isVisible,
  children,
  className,
  ...props
}: OverlayProps) => {
  return (
    <div
      {...props}
      className={`
      ${className}
      w-screen h-screen fixed z-20 top-0 left-0 transition-colors flex flex-col items-center justify-center
      ${isVisible ? "bg-[#C9A97A33]" : "bg-transparent pointer-events-none"}
    `}
    >
      {children}
    </div>
  );
};
