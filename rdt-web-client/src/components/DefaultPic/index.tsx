import { Shop } from "@solar-icons/react";
import type { Icon } from "@solar-icons/react/lib/types";

export interface DefaultPicProps {
  src?: string;
  icon?: Icon;
  className?: string;
}

export const DefaultPic = ({
  src,
  icon: Icon = Shop,
  className,
}: DefaultPicProps) => {
  if (!src) {
    return (
      <div
        className={`${className} bg-[#C9A97A33] text-argil flex items-center justify-center p-1.5`}
      >
        <Icon className="size-full max-w-8 max-h-8" color="currentColor" />
      </div>
    );
  }

  return <img src={src} className={`${className} object-cover`} />;
};
