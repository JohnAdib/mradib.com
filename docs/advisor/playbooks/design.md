# Playbook: design

The site itself is evidence. A founder judges the craft of the page as a
proxy for the craft of the person.

## Visual direction

- Bold and unique. The bar: nobody else's personal site looks like this. If
  a design choice could appear on a template, push further.
- One striking idea per page beats five decorations. Restraint executed
  perfectly reads as confidence.
- Motion and detail signal craft: purposeful transitions, typographic care,
  a perfect dark mode. Nothing default, nothing broken.
- Bold never means loud. Whitespace, hierarchy, and one strong accent go
  further than color everywhere.

## Engineering rules (from CLAUDE.md, still binding)

- Maximum of about 100 lines per file; split components before crossing it.
- Single responsibility: data in src/data, presentation in components,
  composition in pages.
- Reuse primitives first: Container, Section, Card, Button, Prose,
  SimpleLayout. Extend a primitive before inventing a parallel one.
- TypeScript strict, Biome clean. Run npm run check:fix, npm run
  check-types, and npm run build before committing.

## Checklist for any visual change

- [ ] Would this screen make a designer ask "who built this?"
- [ ] Polished in both dark mode and light mode
- [ ] Responsive from phone to wide desktop
- [ ] Built from existing primitives, or a new primitive worth keeping
- [ ] No file crossed 100 lines
