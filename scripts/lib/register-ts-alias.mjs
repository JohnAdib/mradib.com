// Entry point for node --import: registers the resolver that lets plain Node
// scripts import the repo's TypeScript data modules (see ts-alias-hooks.mjs).
import { register } from "node:module";

register(new URL("./ts-alias-hooks.mjs", import.meta.url));
