---
name: architecture
description: Review or plan code architecture following Clean Architecture principles, applied to Next.js projects.
---

## When to invoke

TRIGGER when:
- User asks to create a new feature, module, or service
- User uses phrases like "following the architecture", "architecture pattern", "clean architecture"
- User asks where to put new code or how to structure something
- Code review touches layer boundaries (components calling DB directly, logic in pages, etc.)

DO NOT TRIGGER when:
- Making a pure UI change (styling, copy, layout) with no new logic
- Fixing a typo or renaming a variable

---

When reviewing or designing architecture, follow the Clean Architecture principles documented in the references below.

## References

- **Guide:** `.claude/skills/architecture/references/clean-architecture.md` — Full explanation of Clean Architecture layers, Next.js mapping, folder structure, rules, and anti-patterns. Read this before making any architectural decisions.
- **Diagram:** `.claude/skills/architecture/assets/clean-arch.webp` — Visual diagram of the Clean Architecture circles (Entities → Use Cases → Interface Adapters → Frameworks & Drivers). Use this to validate layer boundaries.

## How to apply

1. **Read** `.claude/skills/architecture/references/clean-architecture.md` for the full guide.
2. **View** `.claude/skills/architecture/assets/clean-arch.webp` to visualize the layer structure.
3. Map each piece of code to one of the four layers:
   - **Domain** — entities and repository interfaces (no external dependencies)
   - **Application** — use cases and Server Actions (depend only on domain)
   - **Infrastructure** — concrete implementations (Prisma, APIs, email, etc.)
   - **UI** — Next.js pages, Server Components, Client Components
4. Flag any violations of the dependency rule (outer layers depending on inner layers incorrectly).
5. Suggest folder structure and file placement that reflects the layer boundaries.

## Checklist

- [ ] Domain layer has no imports from Next.js, Prisma, or any external lib
- [ ] Use cases only depend on domain interfaces, not concrete implementations
- [ ] Infrastructure implements domain interfaces (dependency inversion)
- [ ] UI calls use cases — not repositories or domain entities directly
- [ ] Business logic lives in use cases, not in components or API routes
- [ ] Folder structure reflects layer separation (`domain/`, `application/`, `infrastructure/`, `app/`)
