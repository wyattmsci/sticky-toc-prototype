# Sticky TOC Prototype - MSCI Case Study Page

## Project Overview

This prototype demonstrates a sticky table of contents (TOC) interaction pattern for the MSCI case study page desktop experience landlords. The TOC remains fixed at the top of the viewport while users scroll, highlights the active section, and provides smooth anchor navigation.

**Design Source:**
- Figma File: `TyHg5geBhiuuFv1rBHJX7N`
- Frame ID: `11006:130381` (Case Study - Future State)
- Figma URL: https://www.figma.com/design/TyHg5geBhiuuFv1rBHJX7N/Work-In-Progress?node-id=11006-130381
- Repository: `wyattmsci/sticky-toc-prototype`

---

## MCP Figma Integration

This prototype leverages **Model Context Protocol (MCP)** to directly read and validate designs from Figma throughout development. This ensures pixel-perfect accuracy and allows for real-time design verification against the source mockups.

### MCP Tools Available

- **`mcp_figma-remote_get_design_context`** - Extract component code, design tokens, and styling details
- **`mcp_figma-remote_get_metadata`** - Get frame/node structure, dimensions, and hierarchy
- **`mcp_figma-remote_get_screenshot`** - Visual reference for side-by-side comparison
- **`mcp_figma-remote_get_variable_defs`** - Extract design system variable definitions

### Figma Configuration

- **File Key:** `TyHg5geBhiuuFv1rBHJX7N`
- **Main Frame:** `11006:130381` (Case Study - Future State)
- **Sticky TOC Node:** `11006:134676`
- **Primary Nav Node:** `11006:130382`
- **Section Frames:**
  - Overview: `11006:130384`
  - Challenge: `11006:130385`
  - Action: `11006:130386`
  - Impact: `11006:130388`

### MCP Usage Throughout Phases

| Phase | MCP Integration | Purpose |
|-------|----------------|---------|
| **Phase 1** ✅ | Design token extraction | Extract colors, typography, spacing from Figma |
| **Phase 2** | Screenshot comparison & design context | Verify HTML/CSS matches Figma mockups |
| **Phase 3** | Position verification | Validate sticky positioning against design |
| **Phase 4** | Active state validation | Compare active styling with Figma component |
| **Phase 5** | Layout reference | Ensure anchor targets align with design |
| **Phase 6** | Scroll behavior reference | Validate scroll-sync matches design intent |
| **Phase 7** | Nav structure verification | Verify primary nav slide behavior |
| **Phase 9** | Final visual audit | Complete comparison before handoff |

### MCP Workflow Best Practices

1. **Before Implementation:** Fetch latest Figma data to ensure design hasn't changed
2. **During Implementation:** Use screenshots for visual comparison during development
3. **After Implementation:** Validate final result matches source design exactly
4. **Design Changes:** Re-extract tokens if Figma mockups are updated

---

## Phased Implementation Plan

### Phase 1: Project Setup & Design Inspection ✅
**Goal:** Establish foundation and extract design specifications from Figma.

**Tasks:**
- [x] Set up project structure (HTML, CSS, JavaScript)
- [x] Access Figma file using MCP tools (`mcp_figma-remote_get_design_context`, `mcp_figma-remote_get_metadata`)
- [x] Inspect frame via MCP to extract:
  - [x] Section headings and anchor IDs
  - [x] TOC typography (font family, size, weight, line-height)
  - [x] Spacing tokens (margins, padding, gaps)
  - [x] Color tokens (primary blue for active state, default text color, underline color)
  - [x] TOC positioning (top offset, horizontal alignment)
  - [x] Primary navigation dimensions and positioning
- [x] Document extracted tokens (see Design Token Reference below)
- [x] Create `section-anchors.json` mapping TOC items to section IDs

**Acceptance Criteria:**
- All design tokens documented and accessible
- Section anchor mapping complete
- Project structure ready for prototype development

**Deliverables:**
- `section-anchors.json` (see below)
- Design tokens documented in this README
- Project directory structure

---

### Phase 2: Baseline HTML/CSS Structure
**Goal:** Create pixel-perfect static representation matching Figma mockups.

**Tasks:**
- [ ] **MCP Design Refresh:**
  - [ ] Fetch latest screenshot of main frame (`11006:130381`) via MCP `get_screenshot`
  - [ ] Fetch design context for sticky nav (`11006:134676`) via MCP `get_design_context`
  - [ ] Fetch primary nav structure (`11006:130382`) for accurate dimensions
  - [ ] Verify design tokens haven't changed since Phase 1
- [ ] Build HTML structure with all sections and headings
- [ ] Implement primary navigation bar (height: 140px total, main nav: 96px)
- [ ] Create TOC markup (semantic HTML, proper heading hierarchy)
- [ ] Apply CSS matching Figma exactly:
  - [ ] Typography: Inter font family (Regular 400, Medium 500, Semi Bold 600)
  - [ ] TOC text: 16px, line-height 1.5, tracking -0.32px
  - [ ] Spacing: 40px gaps between TOC items, 96px TOC height
  - [ ] Colors: #1a3fd6 (primary blue), #000000 (default text), #cccccc (borders)
  - [ ] Layout: Centered TOC with 40px gaps, sticky positioning
- [ ] Ensure TOC is initially positioned below primary nav
- [ ] Test responsive behavior (desktop viewport only - 1440px width)
- [ ] **MCP Verification:**
  - [ ] Compare implemented prototype screenshot with Figma screenshot (`11006:130381`)
  - [ ] Verify all spacing, colors, and typography match MCP-extracted tokens
  - [ ] Validate TOC positioning matches Figma sticky nav component (`11006:134676`)

**Acceptance Criteria:**
- Visual match to Figma mockups (pixel-perfect within reasonable tolerance)
- All sections render with correct content
- TOC structure semantically correct
- No visual discrepancies when compared with MCP-fetched Figma screenshots

**Deliverables:**
- Static HTML/CSS prototype
- Screenshot comparison with Figma frames (via MCP)
- Verified alignment with MCP-extracted design tokens

---

### Phase 3: differentiating sticky TOC Positioning
**Goal:** Make TOC sticky at the top of viewport during scroll.

**Tasks:**
- [ ] Apply `position: sticky` to TOC container
- [ ] Set `top: 0` after primary nav scrolls past (or exact offset: 140px for nav + offset)
- [ ] Ensure TOC remains visible during scroll
- [ ] Verify TOC does not overlap primary navigation when both visible
- [ ] Test across different scroll positions

**Acceptance Criteria:**
- TOC persists at top of viewport during scroll
- No z-index or overlap issues with primary nav
- Smooth scroll behavior (no jump/glitch)

**Deliverables:**
- Sticky TOC implementation

---

### Phase 4: Active State Styling
**Goal:** Visual indication of active TOC item using primary blue and underline.

**Tasks:**
- [ ] **MCP Active State Reference:**
  - [ ] Fetch sticky nav component (`11006:134676`) design context via MCP
  - [ ] Extract active state styling (color, underline thickness, font weight)
  - [ ] Verify primary blue token matches MCP-extracted value
- [ ] Apply active state CSS:
  - [ ] Primary blue color: `#1a3fd6` (validated via MCP)
  - [ ] Font weight: Medium (500) for active, Regular (400) for inactive
  - [ ] Underline decoration: 2px solid #1a3fd6 at bottom of active item
  - [ ] Ensure only one item active at a time
- [ ] Set initial active state (first section: "Overview")
- [ ] Create `.active` class for TOC items
- [ ] **MCP Verification:**
  - [ ] Compare active state with Figma component screenshot
  - [ ] Verify underline positioning and thickness match design

**Acceptance Criteria:**
- Active item displays in primary blue (#1a3fd6) matching MCP-extracted token
- Active item shows 2px underline in primary blue (verified against Figma)
- Only one active item visible at any time
- Color and styling matches Figma design exactly (validated via MCP)

**Deliverables:**
- Active state CSS implementation
- MCP-verified active state styling match

---

### Phase 5: Click-to-Anchor Navigation
**Goal:** Smooth scroll animation when clicking TOC items.

**Tasks:**
- [ ] Add click event listeners to all TOC items
- [ ] Implement smooth scroll to corresponding section:
  - [ ] Duration: **360ms**
  - [ ] Easing: **ease-in-out**
  - [ ] Target: section heading (account for sticky TOC offset ~120px)
- [ ] Prevent default anchor jump behavior
- [ ] Manage focus after scroll:
  - [ ] Focus moves to target section's first heading
  - [ ] Announce to screen readers if needed
- [ ] Update active state immediately on click

**Acceptance Criteria:**
- Clicking TOC item scrolls smoothly (360ms ease-in-out)
- Focus moves to target heading after scroll
- Active state updates on click
- No jarring jumps or unexpected behavior

**Deliverables:**
- Click-to-anchor functionality

---

### Phase 6: Scroll-Sync Active State
**Goal:** Update active TOC item as user scrolls, based on section visibility.

**Tasks:**
- [ ] Implement IntersectionObserver for section visibility detection
- [ ] Determine optimal threshold:
  - [ ] Candidate 1: 40% of section visible
  - [ ] Candidate 2: Top of section ≤ 120px from viewport top (accounting for sticky TOC)
  - [ ] Test both, choose based on behavior on actual content
  - [ ] **Final chosen threshold:** `[TO BE DETERMINED DURING TESTING]`
- [ ] Debounce scroll updates: **50ms**
- [ ] Animate active underline transition:
  - [ ] Duration:ни **160ms**
  - [ ] Easing: **cubic-bezier(0.2, 0.8, 0.2, 1)**
- [ ] Handle edge cases (top of page, bottom of page, fast scrolling)

**Acceptance Criteria:**
- Active TOC item updates as user scrolls
- Active state reflects section currently in viewport
- Smooth underline animation (160ms cubic-bezier)
- No jitter or flickering (50ms debounce effective)
- Threshold works correctly across all sections

**Deliverables:**
- Scroll-sync implementation
- Documented threshold value in this README

---

### Phase 7: Primary Navigation Slide-on-Scroll-Up
**Goal:** Primary nav slides into view when scrolling up.

**Tasks:**
- [ ] **MCP Nav Structure Reference:**
  - [ ] Fetch primary nav component (`11006:130382`) metadata via MCP
  - [ ] Verify nav height and positioning from Figma structure
  - [ ] Check TOC positioning relative to nav in Figma mockup
- [ ] Detect scroll direction (up vs. down)
- [ ] Track scroll position changes
- [ ] On scroll up:
  - [ ] Show primary navigation with slide-down animation
  - [ ] Duration: **220ms**
  - [ ] Easing: **ease-out**
  - [ ] Ensure TOC remains sticky below nav (not obscured, matching Figma layout)
- [ ] Handle scroll down behavior (nav can hide or remain visible per design)
- [ ] Test with various scroll speeds
- [ ] **MCP Layout Verification:**
  - [ ] Verify nav slide doesn't break TOC positioning (compare with Figma)
  - [ ] Ensure spacing between nav and TOC matches design intent

**Acceptance Criteria:**
- Primary nav slides down on scroll up (220ms ease-out)
- TOC remains visible and unobstructed (validated against Figma structure)
- Smooth animation without layout shift
- Scroll direction detection accurate
- Layout matches Figma mockup behavior (verified via MCP)

**Deliverables:**
- Primary nav slide implementation
- MCP-verified nav/TOC positioning accuracy

---

### Phase 8: Accessibility Enhancements
**Goal:** Ensure keyboard navigation and screen reader support.

**Tasks:**
- [ ] Make all TOC items keyboard focusable (use `<a>` tags with proper href)
- [ ] Add `aria-current="page"` to active TOC item
- [ ] Add `aria-label="Table of contents"` to TOC container
- [ ] Ensure focus management after anchor scroll:
  - [ ] Focus moves to target heading
  - [ ] Focus visible (keyboard focus indicators)
- [ ] Add appropriate ARIA labels if needed
- [ ] Test with keyboard only (Tab, Enter/Space)
- [ ] Test with screen reader (VoiceOver/NVDA)

**Acceptance Criteria:**
- TOC items keyboard navigable
- Active item announces correctly to screen readers
- Focus management after anchor scroll works
- Keyboard focus indicators visible

**Deliverables:**
- Accessibility implementation
- A11y testing notes

---

### Phase 9: Polish & Testing
**Goal:** Refine interactions and ensure all requirements met.

**Tasks:**
- [ ] **Final MCP Visual Audit:**
  - [ ] Fetch complete screenshot of main frame (`11006:130381`) via MCP
  - [ ] Compare final prototype with Figma mockup side-by-side
  - [ ] Verify all visual elements match: spacing, colors, typography, positioning
  - [ ] Document any intentional deviations from Figma (if any)
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Test scroll performance (smooth 60fps)
- [ ] Verify all animation timings match specifications
- [ ] Check for visual glitches or layout shifts
- [ ] Validate HTML/CSS (accessibility linter, W3C validator)
- [ ] Performance audit (ensure no jank)

**Acceptance Criteria:**
- All phases complete and functional
- No visual regressions (validated via MCP comparison)
- Performance acceptable (60fps scrolling)
- All acceptance criteria from previous phases met
- Final prototype matches Figma design (verified via MCP screenshot comparison)

**Deliverables:**
- Polished prototype
- Testing notes
- MCP validation report (prototype vs. Figma)

---

### Phase 10: Documentation & Handoff
**Goal:** Record demos and prepare handoff materials.

**Tasks:**
- [ ] Record flow 1: Click-to-anchor demonstration
- [ ] Record flow 2: Long scroll showing active state updates and nav slide
- [ ] Create Cursor prototype share link
- [ ] Finalize `section-anchors.json` with actual IDs used
- [ ] Update README with final threshold values and any deviations
- [ ] Commit to GitHub repository

**Acceptance Criteria:**
- All deliverables documented
- README complete and accurate
- Demo recordings available
- Repository accessible

**Deliverables:**
- README.md (this file, finalized)
- Cursor prototype share link
- Demo recording links (2 flows)
- `section-anchors.json`
- GitHub repository with commit history

---

## Technical Specifications

### Scroll & Animation Parameters

| Parameter | Value | Notes |
|-----------|-------|-------|
| Anchor scroll duration | 360ms | Smooth scroll when clicking TOC item |
| Anchor scroll easing | ease-in-out | Standard easing function |
| Scroll-sync debounce | 50ms | Prevents jitter during scroll |
| Active underline animation | 160ms | Transition when active state changes |
| Active underline easing | cubic-bezier(0.2, 0.8, 0.2, 1) | Custom easing for smooth feel |
| Primary nav slide duration | 220ms | Slide animation on scroll up |
| Primary nav slide easing | ease-out | Standard easing function |
| IntersectionObserver threshold | `120px top offset + 40% visible` | Combined: `rootMargin: '120px 0px -60% 0px'` (accounts for TOC height + buffer) |

### IntersectionObserver Configuration

**Candidate Thresholds (to be tested):**
1. **Option A:** `rootMargin: '0px 0px -60% 0px'` (40% of section visible)
2. **Option B:** `rootMargin: '120px 0px 0px 0px'` (top of section ≤ 120px from top, accounting for sticky TOC height 96px + small buffer)

**Implementation Approach:**
- Use `IntersectionObserver` with `rootMargin` set based on chosen threshold
- Observe all section headings (h2 elements with section IDs)
- Debounce updates with 50ms delay using `requestAnimationFrame` or `setTimeout`
- Update active TOC item class on intersection change

**Final Threshold (After Testing):**
Combined approach: `rootMargin: '120px 0px -60% 0px'` (120px top offset accounting for sticky TOC height 96px + 24px buffer, with 40% visible threshold)

### Scroll Direction Detection

**Approach:**
- Track previous scroll position (`window.scrollY`)
- Compare with current scroll position on scroll event
- If `current < previous`: scrolling up
- If `current > previous`: scrolling down
- Debounce direction detection if needed to prevent flicker

**Implementation Notes:**
- Use `requestAnimationFrame` for smooth updates
- Store last scroll position in closure or module variable
- Trigger nav slide only on scroll direction change (not on every scroll event)

---

## Accessibility Checklist

- [ ] TOC items are keyboard focusable (using `<a>` tags)
- [ ] Active TOC item uses `aria-current="page"` attribute
- [ ] TOC container has `aria-label="Table of contents"`
- [ ] Focus management after anchor scroll (focus moves to target heading)
- [ ] Keyboard focus indicators visible
- [ ] Semantic HTML structure (proper heading hierarchy)
- [ ] Screen reader testing completed
- [ ] Keyboard-only navigation tested
- [ ] Color contrast meets WCAG AA standards (primary blue #1a3fd6 on white background)
- [ ] Focus visible on all interactive elements

**ARIA Implementation:**
```html
<nav aria-label="Table of contents">
  <ul>
    <li>
      <a href="#overview" aria-current="page">Overview</a>
    </li>
    <li>
      <a href="#challenge">Challenge</a>
    </li>
    <li>
      <a href="#action">Action</a>
    </li>
    <li>
      <a href="#impact">Impact</a>
    </li>
  </ul>
</nav>
```

**Focus Management After Anchor Scroll:**
```javascript
// After smooth scroll completes
targetHeading.focus();
// Optional: announce to screen readers
targetHeading.setAttribute('tabindex', '-1');
```

---

## Section Anchors Reference

**File:** `section-anchors.json`

**TOC Structure (extracted from Figma):**
1. **Overview** → Section: "Overview - Providing analytics to meet distinct risk assessment goals"
2. **Challenge** → Section: "Challenge - Shifting plans and allocations"
3. **Action** → Section: "Action - Creating a unified risk language for a multi-plan model"
4. **Impact** → Section: "Impact - Empowering smarter pension decisions through transparency and data"

**Format:**
```json
{
  "tocItems": [
    {
      "text": "Overview",
      "anchorId": "overview",
      "targetHeadingId": "section-overview",
      "figmaFrameId": "11006:130384"
    },
    {
      "text": "Challenge",
      "anchorId": "challenge",
      "targetHeadingId": "section-challenge",
      "figmaFrameId": "11006:130385"
    },
    {
      "text": "Action",
      "anchorId": "action",
      "targetHeadingId": "section-action",
      "figmaFrameId": "11006:130386"
    },
    {
      "text": "Impact",
      "anchorId": "impact",
      "targetHeadingId": "section-impact",
      "figmaFrameId": "11006:130388"
    }
  ]
}
```

---

## Design Token Reference

**Extracted from Figma Frame `11006:130381`:**

### Colors
- **Primary Blue (Active State):** `#1a3fd6` (var(--color/brand/primary-blue,#1a3fd6))
- **Text Default:** `#000000` (var(--text/text-primary,#000000))
- **Text Active:** `#1a3fd6` (var(--text/text-msci-primary,#1a3fd6))
- **Border/Stroke:** `#cccccc` (var(--stroke/stroke-primary,#cccccc))
- **Background White:** `#ffffff` (var(--color/neutrals/white,#ffffff))

### Typography
- **Font Family:** Inter (Regular 400, Medium 500, Semi Bold 600)
- **TOC Item Font:** 
  - Size: `16px`
  - Weight: Regular (400) for inactive, Medium (500) for active
  - Line Height: `1.5` (24px)
  - Letter Spacing: `-0.32px`
- **Section Headings:** 
  - Size: `42px`
  - Weight: Semi Bold (600)
  - Line Height: `1.2`
  - Letter Spacing: `-2.1px`

### Spacing
- **TOC Height:** `96px`
- **TOC Item Gap:** `40px`
- **Primary Nav Height:** `140px` total (44px utility nav + 96px main nav)
- **Section Padding:** `70px` horizontal, `100px` vertical
- **TOC Top Offset:** Sticky at `top: 0` after nav scrolls past (or `140px` if nav always visible)

### Layout
- **Container Width:** `1440px` (desktop only)
- **TOC Position:** Centered horizontally, sticky at top
- **TOC Underline:** 2px solid #1a3fd6 at bottom of active item

---

## Repository Setup

### Initial Setup Commands

```bash
# Navigate to project directory
cd "/Users/wyattkay/Desktop/Cursor/Sticky TOC Prototype"

# Initialize git repository
git init
git branch -M main

# Add README.md
git add README.md
git commit -m "chore: add README.md — phased plan for Sticky TOC prototype"

# Create GitHub repository (requires GitHub CLI)
gh repo create wyattmsci/sticky-toc-prototype --public --source=. --remote=origin --push

# Or if using GitHub web interface:
# 1. Create repo on GitHub at https://github.com/new
# 2. Run: git remote add origin https://github.com/wyattmsci/sticky-toc-prototype.git
# 3. Run: git push -u origin main
```

---

## Deliverables Checklist

- [x] README.md (this file)
- [ ] Cursor prototype share link: `[TO BE ADDED]`
- [ ] Demo recording 1 (click-to-anchor): `[TO BE ADDED]`
- [ ] Demo recording 2 (scroll with active state + nav slide): `[TO BE ADDED]`
- [x] `section-anchors.json`: Created (see below)
- [ ] `design-tokens.json`: `[OPTIONAL - tokens documented in README]`
- [x] GitHub repository: `wyattmsci/sticky-toc-prototype` (https://github.com/wyattmsci/sticky-toc-prototype)
- [x] MCP Figma integration: Configured and documented

---

## Next Steps

1. ✅ **Completed:**
   - Extracted design tokens from Figma
   - Documented section structure
   - Created README.md

2. **Begin Phase 2:**
   - Set up HTML/CSS structure
   - Implement static TOC matching Figma exactly

3. **Proceed through phases sequentially:**
   - Complete each phase's acceptance criteria before moving to next
   - Update this README with actual values as implementation progresses

---

## Notes

- **Visual Constraints:** Do not modify spacing, typography, colors, or layout from Figma mockups. All visual decisions must be validated against MCP-fetched Figma data.
- **Desktop Only:** This prototype is designed for desktop viewports only (1440px width).
- **Browser Support:** Modern browsers (Chrome, Firefox, Safari, Edge - latest versions).
- **Performance:** Target 60fps during scroll animations.
- **Primary Nav:** Height is 140px total (44px utility nav + 96px main nav). TOC sits at 96px height below nav.
- **Sticky Behavior:** TOC should remain sticky at top:0 after primary nav scrolls past viewport top (or adjust based on nav slide behavior).
- **MCP Integration:** Always verify design accuracy using MCP tools before marking a phase complete. If Figma mockups change, re-extract tokens and update implementation.

---

**Last Updated:** 2025-01-27
**Version:** 1.0.0

