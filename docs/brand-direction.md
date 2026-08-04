# Current brand direction

The supplied `brand-reference.jpeg` is preserved unchanged at `public/brand/brand-reference.jpeg` and used in the homepage hero at the client’s request. The compact header identity remains text-based because the source image has a large white canvas and is not suitable for a small horizontal header treatment.

The public interface uses deep navy and white as its dominant identity, with restrained muted gold for small rules, labels, actions and focus treatment. The interface must not introduce red CSS accents, gradients, large gold backgrounds or decorative effects that weaken the institutional presentation.

All interface colors are centralized as semantic custom properties in the `:root` block of `src/app/globals.css`. Components should not introduce scattered brand hex values.

Source Serif 4 is used for editorial headings and Source Sans 3 for body copy, navigation and interface text. Both are loaded through `next/font`. Layout uses fine rules, structured alignment, calm spacing, restrained corners and a limited elevated-panel shadow for mobile navigation.

Any future replacement logo should be supplied and approved by the client, ideally as an SVG or transparent high-resolution PNG with horizontal and compact lockups, minimum-size guidance and light/dark variants.
