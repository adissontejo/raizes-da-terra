import type { Icon } from "@solar-icons/react/lib/types";
import { Modal } from "../Modal";
import type { ReactNode } from "react";
import { Button } from "../Button";

export interface ConfirmModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  onConfirm?: () => void;
  title?: string;
  subtitle?: string;
  solarIcon?: Icon;
  content?: ReactNode;
  cancelText?: string;
  confirmText?: string;
}

export const ConfirmModal = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  subtitle,
  solarIcon,
  content,
  cancelText = "Cancelar",
  confirmText = "Confirmar",
}: ConfirmModalProps) => {
  const Icon = solarIcon;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      subtitle={subtitle}
      className="max-w-150"
    >
      <div
        className="
          w-full rounded-lg border border-[#C9A97A4D] bg-[#C9A97A0D] p-8
          flex flex-col items-center gap-4 text-base-text
        "
      >
        {Icon && <Icon size={40} color="inherit" />}
        {content}
      </div>

      <div className="w-full pt-2 flex gap-4">
        <Button
          type="button"
          variant="outline"
          label={cancelText}
          onClick={onClose}
          className="flex-1"
        />
        <Button
          type="button"
          variant="danger"
          label={confirmText}
          solarIcon={solarIcon}
          iconPosition="left"
          onClick={onConfirm}
          className="flex-1"
        />
      </div>
    </Modal>
  );
};
