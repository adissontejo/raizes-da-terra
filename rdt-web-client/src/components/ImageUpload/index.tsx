import { GalleryAdd } from "@solar-icons/react";
import { useMemo } from "react";

export interface ImageUploadProps {
  label?: string;
  className?: string;
  preselectedSrc?: string;
}

export const ImageUpload = ({
  label,
  className,
  preselectedSrc,
}: ImageUploadProps) => {
  // TO-DO: add upload image src logic
  const src = useMemo(() => {
    return preselectedSrc;
  }, [preselectedSrc]);

  return (
    <div className={`${className} flex flex-col gap-1.5`}>
      {label && <p className="font-medium text-xs text-base-title">{label}</p>}
      <button className="w-full aspect-square">
        {src ? (
          <img
            src={src}
            className="w-full h-full rounded-lg object-cover cursor-pointer"
          />
        ) : (
          <div
            className="
              w-full h-full rounded-lg border-2 border-[#C9A97A80] border-dashed [dashes:6,4] p-4 text-clay
              flex flex-col justify-center items-center gap-3 hover:bg-[#C9A97A20] transition-colors
            "
          >
            <GalleryAdd size={32} color="inherit" />
            <p className="font-medium text-xs">Fazer upload</p>
          </div>
        )}
      </button>
    </div>
  );
};
