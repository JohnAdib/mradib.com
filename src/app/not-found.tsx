"use client";

import { Page404 } from "@/components/page-404/page-404";
import { permanentRedirect, usePathname } from "next/navigation";
import { useEffect } from "react";

export default function NotFound() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.endsWith("/")) {
      const urlWithoutTrailingSlash = pathname.slice(0, -1);

      if (urlWithoutTrailingSlash.length > 0) {
        console.warn("URL ends with a slash! redirecting...");
        permanentRedirect(urlWithoutTrailingSlash);
      }
    }
  }, [pathname]);

  return (
    <>
      <Page404 />
    </>
  );
}
