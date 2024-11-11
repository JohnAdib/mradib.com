import clsx from "clsx";
import React from "react";

interface SectionProps {
  id?: string;
  heading: string;
  title: string;
  children: React.ReactNode;
}

export function ArticleSection({ id, heading, title, children }: SectionProps) {
  const createdId = heading
    .toLowerCase()
    .replace(/['?]/g, "")
    .replace(/’/g, "")
    .replace(/\s/g, "-");

  const myId = id || createdId;

  return (
    <section id={myId}>
      <h2 className={clsx("text-sm md:text-base", "mb-0", "font-light")}>
        {heading}
      </h2>
      <h3>{title}</h3>
      <div>{children}</div>
    </section>
  );
}
