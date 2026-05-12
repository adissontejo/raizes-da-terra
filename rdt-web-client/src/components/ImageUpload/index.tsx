import { GalleryAdd } from "@solar-icons/react";

export interface ImageUploadProps {
  label?: string;
  className?: string;
}

export const ImageUpload = ({ label, className }: ImageUploadProps) => {
  return (
    <div className={`${className} flex flex-col gap-1.5`}>
      {label && <p className="font-medium text-xs text-base-title">{label}</p>}
      <button
        className="
          w-full h-full rounded-lg border-2 border-[#C9A97A80] border-dashed [dashes:6,4] p-4 text-clay
          flex flex-col justify-center items-center gap-3 hover:bg-[#C9A97A20] transition-colors
        "
      >
        <GalleryAdd size={32} color="inherit" />
        <p className="font-medium text-xs">Fazer upload</p>
      </button>
    </div>
  );
};
