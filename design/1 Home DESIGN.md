# Design System Strategy: The Humanistic Concierge

## 1. Overview & Creative North Star
Most automotive platforms are cold, clinical databases. This design system rejects the "spreadsheet" aesthetic in favor of **"The Humanistic Concierge."** 

Our Creative North Star is a high-end editorial experience that prioritizes "Mateship" over "Inventory." We move beyond the standard grid by using intentional asymmetry, layered surfaces, and generous whitespace. The goal is to make the user feel they are chatting with a trusted, knowledgeable friend in a premium lounge, rather than browsing a digital lot. We break the template look by overlapping imagery with typography and using depth to guide the eye, creating a flow that feels curated and intentional.

## 2. Colors: Tonal Warmth & Soul
The color palette balances the high-energy `primary` red with a sophisticated foundation of warm neutrals and "Trust Blue" accents.

*   **Primary Red (`#b90014`):** Use sparingly for "Moments of Action." This is our heartbeat—it signifies passion and energy but should never overwhelm the user.
*   **Neutral Foundation:** We lean heavily on `surface` (`#fbf9f4`) and `surface-container` tiers to create a "Paper & Cream" feel that is significantly warmer and more premium than pure white.
*   **The "No-Line" Rule:** We strictly prohibit the use of 1px solid borders to define sections. Boundaries must be established through color blocks. For example, a `surface-container-low` section should sit directly against a `surface` background to define a change in content without the "boxiness" of a line.
*   **Signature Textures:** For hero sections or primary CTAs, use a subtle linear gradient transitioning from `primary` to `primary_container`. This adds a "visual soul"—a slight 3D quality that feels expensive and custom.
*   **Glassmorphism:** For floating navigation or filter bars, use the `surface` color at 80% opacity with a `20px` backdrop-blur. This ensures the layout feels integrated and airy, allowing the warmth of the background photos to bleed through the UI.

## 3. Typography: The Conversational Voice
Our typography is designed to feel like a premium magazine—authoritative yet deeply accessible.

*   **Display & Headlines (Plus Jakarta Sans):** These are our "Personality Headers." Use `display-lg` and `headline-lg` with tight letter-spacing. This typeface is modern and geometric but retains a friendly "roundness" that echoes our soft-corner UI.
*   **Body & Titles (Manrope):** Chosen for its exceptional readability and "honest" character. Use `body-lg` (1rem) for general descriptions to maintain a conversational, easy-to-read pace.
*   **Editorial Contrast:** Create hierarchy by pairing a large `headline-md` with a much smaller, all-caps `label-md` in `secondary` color. This high-contrast scale mimics high-end print media.

## 4. Elevation & Depth: Tonal Layering
We do not use shadows to create "pop"; we use them to create "atmosphere."

*   **The Layering Principle:** Depth is achieved by stacking surface tokens.
    *   **Level 0 (Base):** `surface`
    *   **Level 1 (Sections):** `surface-container-low`
    *   **Level 2 (Cards):** `surface-container-lowest`
*   **Ambient Shadows:** If an element must float (like a modal or a primary floating action button), use a shadow with a blur radius of at least `32px` and an opacity of `6%`. The shadow color must be a tinted version of `on-surface` (`#1b1c19`), never pure black, to simulate natural light.
*   **The "Ghost Border":** If accessibility requires a container boundary, use the `outline-variant` token at `15%` opacity. It should be felt, not seen.
*   **Roundedness:** Adhere to the `xl` (1.5rem) scale for large cards and `lg` (1rem) for buttons. This high radius removes the "sharpness" associated with corporate software.

## 5. Components: Soft & Purposeful

### Buttons
*   **Primary:** Uses the `primary` to `primary-container` gradient. Shape: `full` (pill) or `xl`.
*   **Secondary:** `surface-container-highest` background with `on-surface` text. No border.
*   **Interaction:** On hover, buttons should subtly scale (1.02x) rather than just changing color, emphasizing a "tactile" response.

### Cards & Listings
*   **Anti-Clutter Rule:** Forbid divider lines. Use `1.5rem` to `2rem` of vertical whitespace to separate listing details.
*   **Imagery:** All vehicle or profile photos must use the `lg` (1rem) corner radius. Use "The Mateship Overlay": a subtle `surface-container-highest` tint on the bottom 20% of images to house white text overlays.

### Input Fields
*   **Style:** Use "Soft Inset" styling. Background `surface-container-high` with no border. On focus, transition to a `2px` `tertiary` (Blue) "Ghost Border" to signal trust and active listening.

### The "Companion" Widget
*   A bespoke component unique to this system. A floating `surface-container-lowest` card featuring a high-quality headshot of a "Mate" (advisor), using a `tertiary_fixed` background for the avatar to distinguish it as a helpful human element.

## 6. Do's and Don'ts

### Do
*   **Use Asymmetry:** Place a `headline-lg` off-center to create an editorial, hand-crafted feel.
*   **Prioritize Human Imagery:** Every page must feature a human connection (a hand on a steering wheel, a smiling mechanic, a family high-fiving) before showing a standalone car.
*   **Embrace Whitespace:** If a page feels full, add 24px of padding. Space is the ultimate luxury.

### Don't
*   **Don't use 1px Dividers:** Never use a line where a color shift or space can do the job.
*   **Don't use Pure Grey Shadows:** They look "muddy." Always tint shadows with the surface color.
*   **Don't use "Clinical" Stock Photos:** Avoid overly posed, white-background car shots. We want cars in the wild—on a driveway, at a campsite, or in a sunlit garage.
*   **Don't Overuse Red:** If the screen looks like an emergency room, you've used too much `primary`. Use the warm off-whites to ground the experience.