import type { DetailedHTMLProps, HTMLAttributes } from "react";
import { Overlay } from "../Overlay";
import { CloseCircle } from "@solar-icons/react";

export interface ModalProps extends DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  isOpen?: boolean;
  onClose?: () => void;
  title?: string;
  subtitle?: string;
  easyClose?: boolean;
}

export const Modal = ({
  isOpen,
  onClose,
  title,
  subtitle,
  className,
  children,
  easyClose,
  ...props
}: ModalProps) => {
  return (
    <Overlay
      {...props}
      isVisible={isOpen}
      onClick={easyClose ? onClose : undefined}
      className="p-8"
    >
      <div
        className={`
          ${className}
          rounded-lg p-8 w-full max-w-5xl flex flex-col gap-8 bg-base-background transition-opacity
          ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
      >
        <div className="w-full flex items-start justify-between gap-8">
          <div className="flex flex-col gap-2">
            <p className="font-ibm text-[26px] tracking-[-0.75px] text-base-title">
              {title}
            </p>
            <p className="text-sm text-clay">{subtitle}</p>
          </div>

          <button
            onClick={onClose}
            className="rounded-full text-clay hover:brightness-40 transition-all"
          >
            <CloseCircle color="inherit" size={24} />
          </button>
        </div>

        {children}
      </div>
    </Overlay>
  );
};
