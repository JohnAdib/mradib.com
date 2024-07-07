import Image, { StaticImageData } from 'next/image';

interface ISectionImageFullWidth {
  src?: StaticImageData;
  alt?: string;
}

export function SectionImageFullWidth({
  src,
  alt,
}: ISectionImageFullWidth) {
  if (!src) {
    return null;
  }

  return (
    <div className="relative overflow-hidden pt-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Image
          alt={alt || 'MrAdib Image'}
          src={src}
          width={2432}
          height={1442}
          className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10 dark:ring-white/10"
        />
        <div aria-hidden="true" className="relative">
          <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white/60 dark:from-[#282A36]/60 pt-[7%]" />
        </div>
      </div>
    </div>
  );
}
