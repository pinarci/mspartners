# MS Partners — Phase 3A corporate website

Professional hybrid multi-page architecture for the provisional MS Partners corporate website. The approved homepage remains the primary overview, with focused secondary pages for deeper corporate information.

## Technical stack

- Next.js 16.3 App Router with React 19.2
- TypeScript 6 in strict mode
- Tailwind CSS 4 and centralized semantic CSS tokens
- ESLint 9 with Next.js Core Web Vitals and TypeScript rules
- pnpm 11.20.0, pinned in `package.json`

Node.js 24 or newer is required. Use the pinned package manager through Corepack:

```bash
corepack pnpm install
corepack pnpm dev
```

Available checks are `corepack pnpm lint`, `corepack pnpm typecheck`, `corepack pnpm build` and `corepack pnpm start`.

## Routes and navigation

| Route | Purpose |
| --- | --- |
| `/` | Rich homepage overview |
| `/about` | Provisional company purpose and principles |
| `/services` | Six provisional service areas |
| `/approach` | Provisional five-step engagement framework |
| `/insights` | Planned editorial programme, with no fake articles |
| `/contact` | Contact-preparation guidance and pending contact state |

The site uses one primary route navigation in the shared header and marks the active destination with `aria-current="page"`. The thin decorative scroll-progress indicator works across routes and resets when the pathname changes. Homepage section IDs remain available for direct links such as `/#services`, with a centralized sticky-header offset.

## Structure

```text
src/
  app/                  Required routes, metadata, global styles and error states
  components/
    layout/             Shared header, mobile navigation and footer
    navigation/         Route navigation and scroll-progress state
    pages/              Shared compact page hero and final CTA
    sections/           Homepage sections
    ui/                 Small presentation primitives
  config/               Company, navigation and metadata configuration
  content/              Locale-ready page content and shared service/process data
  types/                Shared content contracts
public/brand/           Preserved provisional brand reference
docs/                   Architecture, brand and content guidance
```

## Editing content and brand

- Company identity: `src/config/brand.ts`
- Primary route navigation: `src/config/navigation.ts`
- Page metadata and contact/link placeholders: `src/config/site.ts`
- Page content: `src/content/home.ts`, `about.ts`, `services.ts`, `approach.ts`, `insights.ts`, `contact.ts`
- Global brand and layout tokens: the `:root` block in `src/app/globals.css`

All identity, positioning, services, methodology and metadata remain provisional. Unconfirmed information is centralized and presented with restrained public-facing language; no names, credentials, client claims, addresses, phone numbers or email addresses have been invented.

## Remaining client information and limitations

Client approval is still required for the company identity, positioning, service scope, team biographies and credentials, contact details, affiliated websites, legal/privacy information, final brand assets and English content. See `docs/content-guide.md` for the complete checklist.

Phase 3A intentionally has no Team page, individual service/article routes, real articles, contact form, backend, CMS, bilingual routing, analytics, cookies, legal pages or deployment. These are future decisions, not broken links or hidden features.
