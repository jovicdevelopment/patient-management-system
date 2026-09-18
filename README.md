# Patient Management System — Stage 1

Staff-facing Patient Management System. This stage delivers the project
foundation and the login screen UI (no working authentication yet).

## Stack
- Next.js 16 + TypeScript
- Tailwind CSS
- Prisma 6.12.0 (schema is a placeholder — models come in Stage 2)
- next-auth 5.0.0-beta.32 (installed, not wired up yet)

## What's included
- Project scaffold (`src/app`, config files)
- Design tokens: calm clinical color palette in `src/app/globals.css`
- Reusable UI components: `Button`, `Card`, `Input`, `Label` (`src/components/ui`)
- `cn()` class-merging utility (`src/lib/utils.ts`)
- Login screen at `/login` (`src/app/login/page.tsx`) — UI only, form does not
  yet authenticate
- `.env.example` and a corrected `.gitignore`
- Placeholder Prisma schema (`prisma/schema.prisma`)

## Getting started
```bash
npm install
cp .env.example .env   # then fill in DATABASE_URL and AUTH_SECRET
npm run dev
```
Visit `http://localhost:3000` — it redirects to `/login`.

## Not done yet (next steps)
- Prisma schema: User/Role models
- Auth.js wired to the login form (currently posts to a route that doesn't exist yet)
- Dashboard and onward modules
