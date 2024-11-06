import { Metadata } from "next";
import { defaultDescriptionFa, defaultTitleFa } from "./constants/fa";

export const rootMetadataFa: Metadata = {
  title: {
    // template: '%s' + separator + myNameFa,
    template: "%s",
    default: defaultTitleFa,
  },
  description: defaultDescriptionFa,
};
