import { Shop } from "@solar-icons/react";

export interface ProfilePicProps {
  src?: string;
  className?: string;
}

export const ProfilePic = ({ src, className }: ProfilePicProps) => {
  if (!src) {
    return (
      <div
        className={`${className} bg-[#C9A97A33] text-argil flex items-center justify-center p-1.5`}
      >
        <Shop className="size-full max-w-8 max-h-8" color="currentColor" />
      </div>
    );
  }

  return <img src={src} className={`${className} object-cover`} />;
};
