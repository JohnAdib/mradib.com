import clsx from "clsx";
import Image, { StaticImageData } from "next/image";

interface ISectionImageFullWidth {
  src?: StaticImageData;
  alt?: string;
}

export function SectionImageFullWidth({ src, alt }: ISectionImageFullWidth) {
  if (!src) {
    return null;
  }

  return (
    <div className="relative overflow-hidden pt-16 mb-12 select-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <Image
          alt={alt || "MrAdib Image"}
          src={src}
          className={clsx(
            "dark:mb-[-10%]",
            "rounded-xl",
            "shadow-2xl ",
            "ring-1",
            "transition",
            "ring-gray-900/10",
            "hover:ring-gray-900/30",
            "dark:ring-white/10",
            "hover:dark:ring-white/30",
          )}
        />
        <div aria-hidden="true" className="relative hidden dark:block">
          <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white/60 dark:from-[#13141b] pt-[7%]" />
        </div>
      </div>
    </div>
  );
}
