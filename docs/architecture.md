# Architecture decisions

## Hybrid homepage and detail-page strategy

The site uses the Next.js App Router under `src/app`. The rich homepage remains the main overview and first impression; `/about`, `/services`, `/approach`, `/insights` and `/contact` provide intentionally structured detail without removing or duplicating the homepage sections. There is no Team route and no dynamic service or article routing in Phase 3A.

Shared secondary-page presentation is deliberately small: `PageHero` supplies one compact H1 treatment and `PageCta` supplies the closing action or status. Page-specific semantic structures remain in each Server Component rather than being forced through a generic page-builder schema.

## Server and Client Components

The root layout, route pages, shared page components, footer and homepage sections are Server Components. Client code is limited to two focused responsibilities:

- `SiteNavigationState` reads the pathname for active-route state and updates the scroll-progress CSS custom property with requestAnimationFrame throttling.
- `MobileNavigation` manages the accessible menu, scroll lock, Escape key, focus restoration and breakpoint cleanup. It remounts for each pathname so menu state cannot leak between routes.

## Navigation and scrolling

Primary navigation has stable real-route destinations on every page and uses `aria-current="page"`. Homepage sections retain stable IDs for direct hash URLs, while one centralized scroll margin keeps those targets below the sticky primary header.

The decorative progress rule remains global. Its effect depends on the current pathname, immediately resets the CSS value, and recalculates against the newly loaded document. Scroll updates mutate a ref-backed CSS property rather than causing a React render for each pixel.

## Centralized content model

Company and site-wide configuration lives under `src/config`; editable editorial content lives under `src/content`; shared contracts live under `src/types`. Services and process steps are shared between their homepage previews and detail pages so names and stable IDs cannot diverge. Locale-ready `LocalizedContent` wrappers prepare content for English and Turkish without implementing routing prematurely.

## Future bilingual strategy

A future phase should approve Turkish translations and select locale-aware URLs, metadata, navigation and fallback behavior. The current content wrappers allow translated objects to be added without rewriting presentation components, but full internationalization is intentionally absent.

## Future extensions

- Individual service routes may later use stable service IDs after scope and copy approval.
- Real insights may later use an editorial data source and article routes after content governance is defined; current concepts are explicitly non-clickable planned items.
- A contact form may later use server-side validation, spam protection, rate limiting, privacy-approved retention and an explicitly selected delivery provider. Approved contact details and privacy disclosures are prerequisites.
- A Team or Leadership page can be added to the route configuration later without changing the navigation model.

## Deployment and dependencies

No production domain, host or deployment environment is assumed. Before deployment, define canonical URLs, social imagery, security headers, caching, legal/privacy requirements and empirical browser/accessibility QA.

Dependencies remain limited to the framework, rendering, styling, type checking and linting tools. Navigation, scroll state and layouts use Next.js, React and browser capabilities; Phase 3A adds no package.
