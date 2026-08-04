# Provisional brand direction

The supplied `brand-reference.jpeg` was found and preserved unchanged at `public/brand/brand-reference.jpeg`. It is a visual reference only. Its large white canvas and lack of transparency make it unsuitable as the primary header logo, and it must not be considered a final production logo.

The temporary header wordmark is text-based. It communicates the provisional company name without tracing, recreating or materially altering the supplied mark. A final asset should be an approved SVG whenever possible, or a high-resolution transparent PNG, with horizontal and compact lockups, clear-space guidance, minimum sizes and light/dark variants.

The provisional palette uses deep navy (`#092D65`) as the dominant color and brand red (`#C9050F`) as a limited accent. Navy carries the large corporate surfaces because it supports a discreet, trustworthy tone. Red is reserved for small rules, labels, actions and emphasis so the site does not feel aggressive or political.

All brand colors are defined once as semantic custom properties in the `:root` block of `src/app/globals.css`. Replace the token values there to update the site globally; components should not introduce scattered brand hex values. Two lighter red values currently support readable hover and dark-background treatments and should be consolidated into approved expanded brand tokens after the final palette is supplied.

The Phase 2 typography pairs Source Serif 4 for major editorial headings with Source Sans 3 for body copy, navigation and interface text. Both are loaded through `next/font` and self-hosted by the application. The pairing is provisional and should be reassessed alongside the final identity.

Phase 2 introduces a more formal visual grammar built from fine rules, structured panels, generous whitespace and a CSS-only audit-document composition in the hero. Corners remain restrained, shadows are limited to elevated panels, and transitions use a centralized timing scale. Red should remain approximately 5–10% of the visible composition and must not become a large background color.
