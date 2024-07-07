export interface ISectionFeature {
  name: string;
  description: string;
  href?: string;
  icon: any;
}

export interface ISectionFeaturesList {
  features?: ISectionFeature[];
}

function FeatureLinkEl({ href }: { href?: string }) {
  if (!href) {
    return null;
  }

  return (
    <div className="mt-6">
      <a href={href} className="text-sm font-semibold leading-6 text-indigo-400">
        Learn more <span aria-hidden="true">→</span>
      </a>
    </div>
  );
}

export function SectionFeaturesList({ features }: ISectionFeaturesList) {
  if (!features || features.length === 0) {
    return null;
  }

  return (
    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
      <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
        {features.map((feature) => (
          <div key={feature.name} className="flex flex-col">
            <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
              <feature.icon aria-hidden="true" className="h-5 w-5 flex-none text-indigo-600 dark:text-indigo-400" />
              {feature.name}
            </dt>
            <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
              <p className="flex-auto">{feature.description}</p>
              <FeatureLinkEl href={feature.href} />
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
