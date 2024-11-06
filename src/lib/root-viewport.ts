import type { Viewport } from "next";

export const rootViewport: Viewport = {
  width: "device-width",
  minimumScale: 1,
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "dark",
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "#f8f859",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "#1d1a22",
    },
  ],
};
