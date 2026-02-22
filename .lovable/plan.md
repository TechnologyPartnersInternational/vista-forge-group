

# Service Pages Redesign - Cleaner, More Professional Layout

## What Changes

A complete visual overhaul of the shared `ServicePage.tsx` component and the standalone `EnvironmentDetail.tsx` page to create a polished, enterprise-grade design with better text positioning, consistent typography, and cleaner spacing.

## Design Changes

### 1. Hero Section
- Remove the icon box from the hero; let the title and subtitle stand alone with more breathing room
- Left-align text cleanly with a thin accent line above the title for visual anchoring
- Reduce hero height slightly for a tighter, more editorial feel

### 2. Overview / Intro Section
- Left-align the overview text instead of centring it, for a more professional editorial look
- Use a two-column layout: heading on the left, paragraph on the right
- Consistent font sizing: heading at `text-3xl md:text-4xl`, body at `text-base md:text-lg`

### 3. Service Sections (the alternating image + text blocks)
- Remove the circular number badge from images; use a clean image with rounded corners
- Remove the icon box next to section titles; use a simple, bold heading
- Add a subtle top border or section number as plain text (e.g. "01") above the heading for structure
- Set description text to `text-base leading-relaxed` with proper line height
- Change the highlight checklist from a 2-column grid to a single-column list for readability
- Remove the per-section "Discuss your needs" link to reduce clutter; the CTA at the bottom serves this purpose

### 4. CTA Section
- Keep the navy background CTA block but simplify to one clear button instead of two
- Tighten padding and use consistent font weight

### 5. Typography Consistency
- All body/description text: `text-base` (16px) with `leading-relaxed`
- All section headings: `text-2xl md:text-3xl font-semibold` (not bold)
- All highlight items: `text-sm` with `font-medium`
- Ensure the Inter font renders consistently throughout

### 6. Environment Detail Page
- Apply the same layout changes to `EnvironmentDetail.tsx` which has its own custom layout (not using `ServicePage.tsx`)
- Match the updated patterns for hero, intro, sections, and CTA

## Files to Modify

1. **`src/components/ServicePage.tsx`** - Complete layout restructure (hero, intro, sections, CTA)
2. **`src/pages/EnvironmentDetail.tsx`** - Match the new ServicePage patterns

## Technical Details

- No new dependencies required
- No data structure changes needed; the `ServiceSection` interface stays the same
- All changes are purely presentational (CSS/layout in JSX)
- The same component serves Digital, Laboratory, Waste Management, Engineering, and Training pages, so a single file update covers five service pages at once

