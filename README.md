# Patient Management System

A secure, staff-facing Patient Management System built for a healthcare
facility, covering the full patient journey — from reception to
discharge — alongside the administrative back office that keeps a
facility running (procurement, accounts, HR).

The system is being built as a real, production-oriented application,
with role-based access control, an auditable database schema, and a
design system implemented directly from Figma, in preparation for
future integration with Kenya's Social Health Authority (SHA).

---

## Overview

Healthcare facilities depend on dozens of small, interconnected
workflows — registering a patient, triaging them, seeing a clinician,
running lab tests, dispensing medication, billing, and admitting
patients who need inpatient care — all while keeping the back office
(procurement, accounts, HR) running smoothly.

This system digitizes that entire workflow into a single, role-aware
application, so each staff member only sees and does what their role
requires.

```
 Reception → Triage → Consultation → ┬─ Laboratory
                                      ├─ Pharmacy
                                      ├─ Billing
                                      └─ Admission → Nursing → Discharge
                                                          │
                                                  (back to Consultation
                                                   or Reception)
```

Alongside the clinical workflow, an **Administration** area covers
Procurement, Accounts, and HR — the operational backbone of the
facility.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js (App Router) + TypeScript |
| Styling | Tailwind CSS + shadcn/ui |
| Backend | Next.js API Routes / Server Actions |
| Database | PostgreSQL (hosted on Neon) |
| ORM | Prisma |
| Authentication | Auth.js, credentials-based |
| Authorization | Role-Based Access Control (RBAC) |
| Version Control | Git + GitHub |
| Deployment | Vercel |

---

## Roles Supported

Every account belongs to exactly one role, and the interface adapts
accordingly. There is no public sign-up — accounts are provisioned by
an Administrator.

Administrator · Receptionist · Triage Nurse · Clinician/Doctor ·
Laboratory Staff · Pharmacist · Billing/Cashier · Nursing/Inpatient
Staff · Procurement Staff · Accounts Staff · HR Staff

---

## Project Status

Built incrementally, one module at a time, against a Figma design
system.

- [x] Project foundation (Next.js, TypeScript, Tailwind, Prisma setup)
- [x] Authentication (Auth.js, hashed passwords, role-aware sessions,
      protected routes)
- [x] Main layout & navigation
- [x] Dashboard
- [ ] Reception *(in progress)*
- [ ] Triage
- [ ] Consultation
- [ ] Laboratory
- [ ] Pharmacy
- [ ] Billing
- [ ] Nursing / Inpatient
- [ ] Procurement
- [ ] Accounts
- [ ] HR
- [ ] Administration
- [ ] Reports
- [ ] SHA integration
- [ ] Security review
- [ ] Testing
- [ ] Deployment

---

## Security

This system handles sensitive patient data, so security is treated as
a core requirement rather than an afterthought:

- Passwords are never stored in plain text — only bcrypt hashes
- All routes are protected server-side, not just hidden in the UI
- Access is enforced per role at the server/API level, not just the
  frontend
- Secrets (database URL, auth secret, admin credentials) live only in
  environment variables, never in source control
- No public sign-up — every account is provisioned intentionally

---

## Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/jovicdevelopment/patient-management-system.git
cd patient-management-system

# 2. Install dependencies
npm install

# 3. Configure environment variables
cp .env.example .env
# then fill in DATABASE_URL, AUTH_SECRET, ADMIN_EMAIL, ADMIN_PASSWORD, ADMIN_NAME

# 4. Apply the database schema
npx prisma migrate dev

# 5. Seed the first Administrator account
npx prisma db seed

# 6. Run the development server
npm run dev
```

The app will be available at `http://localhost:3000`.

---

## Design

The interface is implemented directly from a Figma design system,
screen by screen, to ensure a consistent, professional look across
every module — matching layout, spacing, typography, and component
structure rather than improvising the UI.

---

## Roadmap

The remaining clinical modules (Reception through Nursing/Inpatient),
the back-office suite (Procurement, Accounts, HR), reporting, and SHA
integration are being built next, each with its own database design,
role permissions, and Figma-matched interface — followed by a full
security review, testing pass, and deployment.

---

## License

*(To be determined)*
