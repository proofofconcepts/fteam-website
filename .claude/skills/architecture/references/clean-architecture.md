# Clean Architecture in Next.js

## Core Principle

Clean Architecture separates code into layers with a strict dependency rule: **inner layers know nothing about outer layers**. Dependencies always point inward.

```
UI (Next.js pages/components)
       ↓
Application (use cases / server actions)
       ↓
Domain (entities, interfaces)
       ↑ (infrastructure implements domain interfaces)
Infrastructure (DB, APIs, external services)
```

---

## The Layers

### 1. Domain (innermost)
Pure business logic. No framework dependencies — no Next.js, no Prisma, no fetch.

```ts
// src/domain/entities/user.ts
export interface User {
  id: string;
  name: string;
  email: string;
}

// src/domain/repositories/user_repository.ts
export interface UserRepository {
  findById(id: string): Promise<User | null>;
  save(user: User): Promise<void>;
}
```

### 2. Application (use cases)
Orchestrates domain logic. Calls repositories via interfaces. Can be Next.js Server Actions.

```ts
// src/application/use_cases/get_user.ts
import { UserRepository } from "@/domain/repositories/user_repository";

export async function getUser(id: string, repo: UserRepository) {
  const user = await repo.findById(id);
  if (!user) throw new Error("User not found");
  return user;
}
```

### 3. Infrastructure (outermost, external)
Concrete implementations of domain interfaces — databases, external APIs, email services.

```ts
// src/infrastructure/repositories/prisma_user_repository.ts
import { UserRepository } from "@/domain/repositories/user_repository";
import { prisma } from "@/lib/prisma";

export class PrismaUserRepository implements UserRepository {
  async findById(id: string) {
    return prisma.user.findUnique({ where: { id } });
  }
  async save(user: User) {
    await prisma.user.upsert({ where: { id: user.id }, update: user, create: user });
  }
}
```

### 4. UI / Delivery (Next.js specific)
Pages, Server Components, Client Components, API Routes. Calls use cases — never domain directly.

```ts
// src/app/users/[id]/page.tsx
import { getUser } from "@/application/use_cases/get_user";
import { PrismaUserRepository } from "@/infrastructure/repositories/prisma_user_repository";

export default async function UserPage({ params }: { params: { id: string } }) {
  const repo = new PrismaUserRepository();
  const user = await getUser(params.id, repo);
  return <div>{user.name}</div>;
}
```

---

## Folder Structure

```
src/
├── app/                        # Next.js App Router (UI layer)
│   ├── layout.tsx
│   ├── page.tsx
│   └── users/[id]/page.tsx
├── components/                 # UI components (UI layer)
├── application/                # Use cases / Server Actions
│   └── use_cases/
├── domain/                     # Entities and interfaces (no deps)
│   ├── entities/
│   └── repositories/
├── infrastructure/             # Concrete implementations
│   └── repositories/
└── lib/                        # Shared utilities (db clients, etc.)
```

---

## Next.js-Specific Mapping

| Clean Architecture Layer | Next.js Equivalent |
|--------------------------|-------------------|
| UI / Delivery            | `app/` pages, Server & Client Components, Route Handlers |
| Application              | Server Actions (`"use server"`), service functions |
| Domain                   | `domain/entities/`, `domain/repositories/` (interfaces) |
| Infrastructure           | `infrastructure/` (Prisma, fetch wrappers, email libs) |

---

## Key Rules

1. **Domain has zero imports from other layers** — no `next`, no `prisma`, no `fetch`.
2. **Use cases depend on domain interfaces**, not concrete implementations.
3. **Infrastructure implements domain interfaces** — dependency inversion.
4. **UI calls use cases**, not repositories or domain directly.
5. **Server Actions are use cases** — keep business logic out of components.

---

## Anti-patterns to Avoid

```ts
// BAD: business logic inside a component
export default async function Page() {
  const users = await prisma.user.findMany({ where: { active: true } }); // ❌
  return <UserList users={users} />;
}

// GOOD: component calls a use case
export default async function Page() {
  const users = await getActiveUsers(new PrismaUserRepository()); // ✅
  return <UserList users={users} />;
}
```

```ts
// BAD: domain entity imports a library
import { prisma } from "@/lib/prisma"; // ❌ in domain layer

// GOOD: domain defines an interface, infrastructure implements it
export interface UserRepository { ... } // ✅ domain
export class PrismaUserRepository implements UserRepository { ... } // ✅ infrastructure
```

---

## Benefits

- **Testability** — use cases are pure functions; swap infrastructure with mocks in tests.
- **Replaceability** — swap Prisma for Drizzle, or Formspree for Resend, without touching domain.
- **Scalability** — each layer evolves independently.
- **Clarity** — clear boundaries; easy to know where new code belongs.
