# MS Partners corporate website

English-only corporate website for MS Partners, built with Next.js 16.3, React 19.2, TypeScript 6 and pnpm 11.20.0.

## Local development

Node.js 24 or newer is required. Use the package-manager version pinned in `package.json`:

```bash
corepack pnpm install
corepack pnpm dev
```

Available checks are:

```bash
corepack pnpm lint
corepack pnpm typecheck
corepack pnpm build
corepack pnpm start
```

## Current routes

| Route | Purpose |
| --- | --- |
| `/` | Corporate overview |
| `/about` | Client-approved company positioning |
| `/services` | Professional placeholder pending final service approval |
| `/areas-of-work` | Broad Areas of Work placeholder pending final approval |
| `/contact` | Contact placeholders, planned Maidan location, map and enquiry preparation |
| `/approach` | Permanent redirect to `/areas-of-work` |

The shared header and footer use the centralized route list in `src/config/navigation.ts`. Active navigation uses `aria-current="page"`; the accessible mobile menu and scroll-progress indicator remain shared across routes.

## Client-source-of-truth policy

Only information supplied or approved in writing by the client may be presented as a company fact. Inferred service catalogues, target-customer sections, differentiator lists and fixed methodologies must remain unpublished until approved. Confirmed identity is centralized in `src/config/brand.ts`; pending contact and location data is centralized in `src/config/contact.ts`.

## Pending contact information

The corporate email is intentionally stored as `null` with a `pending` status. The Contact page displays “Pending confirmation” without creating a `mailto:` link.

When the corporate email is confirmed:

1. Set `corporateEmail` in `src/config/contact.ts` to the approved address.
2. Change `corporateEmailStatus` to `"confirmed"`.
3. Run lint, type-check and build. The existing Contact component will render the address as a `mailto:` link.

The Maidan building address identifies only the planned Ankara location. Virtual-office and unit details remain `null` and are not described as a registered or correspondence address. When approved, add only the confirmed detail to `ankaraOfficeDetails` in `src/config/contact.ts`, and update the building/address fields only if the client confirms a different public location.

## Google Maps Embed API

Copy `.env.example` to the appropriate local environment file or add this variable in Vercel:

```text
NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY=
```

Do not commit a real key. When the variable is present at build time, the Contact page uses the official Google Maps Embed API place mode for the Maidan complex. When it is absent, the page uses the client-supplied Google Maps share location to render a no-key embedded preview. The exact share link remains available as the external “View Maidan on Google Maps” destination.

The Google Cloud key must be restricted:

- Restrict API usage to the Maps Embed API.
- Apply HTTP referrer restrictions for every approved production and preview domain.

No Maps JavaScript package or consent-management dependency is used in this phase.

## Content locations

- Company identity and legal entities: `src/config/brand.ts`
- Contact and map configuration: `src/config/contact.ts`
- Navigation: `src/config/navigation.ts`
- Metadata: `src/config/site.ts`
- Public page copy: `src/content/`
- Design tokens and responsive presentation: `src/app/globals.css`

There is no contact backend, final email, confirmed office unit, legal page, analytics integration or production-domain configuration in the repository.
