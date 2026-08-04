# Architecture decisions

## Public route strategy

The site uses the Next.js App Router under `src/app`. The homepage is the main overview; `/about`, `/services`, `/areas-of-work` and `/contact` provide focused detail. The legacy `/approach` route uses Next.js `permanentRedirect` to send visitors to `/areas-of-work` with HTTP 308 semantics.

Services and Areas of Work deliberately contain broad approval-state copy rather than public catalogues or methodologies. No individual service routes, target-audience route, insights route, Team route or functioning contact form exists.

## Server and Client Components

The root layout, route pages, shared page components, footer and homepage sections are Server Components. Client code is limited to:

- `SiteNavigationState`, which reads the pathname for active-route state and updates the scroll-progress CSS property.
- `MobileNavigation`, which manages the accessible menu, body scroll lock, Escape key, focus restoration and breakpoint cleanup.

The Contact page resolves the optional Maps Embed API URL during rendering. Without a key it uses the embeddable preview associated with the client-supplied Google Maps share location. It does not load a Maps JavaScript package.

## Navigation and scrolling

Primary navigation uses real route destinations and `aria-current="page"`. The compact homepage Services and Areas of Work previews retain stable IDs, with a centralized scroll offset for the sticky header. The decorative progress rule remains global and recalculates after route changes without triggering React renders on every scroll event.

## Centralized content model

Confirmed company identity lives in `src/config/brand.ts`. Nullable contact, office and map configuration lives in `src/config/contact.ts`. Navigation and metadata remain in their own configuration modules. Approved editorial content lives under `src/content`, and shared TypeScript contracts live under `src/types`.

The public site is English-only. Additional locales should not be added without written client approval covering translated content, URLs, metadata and fallback behavior.

## Future extensions

- Add the confirmed corporate email by updating the nullable contact configuration and its status.
- Add approved virtual-office or unit details only after the client confirms they are suitable for public display.
- Replace broad Services and Areas of Work copy only after titles, descriptions, scope and methodology are approved.
- A future contact form requires server-side validation, spam protection, rate limiting, privacy-approved retention and an approved delivery provider.

## Deployment and dependencies

No production domain is assumed in source. The Google Maps key is supplied through the public environment variable documented in the README and must be API- and referrer-restricted. Dependencies remain limited to the existing framework, rendering, styling, type-checking and linting tools.
