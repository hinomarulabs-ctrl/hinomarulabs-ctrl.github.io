# IMPLEMENTATION.md

Version: 1.1.0
Updated: 2026-07-04

---

# 1. Purpose

This document defines the implementation requirements for the **Trader Timer** landing page.

This document is written specifically for Codex.

LP_MASTER.md defines **WHAT** to build.

IMPLEMENTATION.md defines **HOW** to build it.

If any conflict exists, always prioritize **LP_MASTER.md**.

The goal is to build a production-ready landing page comparable to premium product websites such as Apple, Linear and Raycast.

The landing page should communicate the product experience rather than simply listing features.

Primary goals:

- Maximize App Store downloads
- Provide an excellent first impression
- Build trust within a few seconds
- Clearly communicate the product value
- Keep the design timeless and maintainable

The implementation should emphasize simplicity, clarity, performance and accessibility.

---

# 2. Project Structure

```
/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── images/
│   ├── hero.webp
│   ├── feature-1.webp
│   ├── feature-2.webp
│   ├── feature-3.webp
│   ├── feature-4.webp
│   ├── trader-cards.webp
│   ├── favicon.png
│   └── og-image.webp
│
├── LP_MASTER.md
├── IMPLEMENTATION.md
├── README.md
├── robots.txt
├── sitemap.xml
├── manifest.webmanifest
└── 404.html
```

Requirements

- Static website only
- No framework
- No build process
- No package manager
- Runs by opening index.html or through GitHub Pages

---

# 3. Technology Stack

HTML5

CSS3

Vanilla JavaScript (ES6)

Google Fonts

Lucide Icons (SVG)

No React

No Vue

No Angular

No Tailwind

No Bootstrap

No jQuery

No GSAP

No animation libraries

Keep the implementation lightweight.

---

# 4. Design System

## 4.1 Colors

Background

```
#111315
```

Surface

```
#181B1F
```

Surface Hover

```
#20242A
```

Border

```
#262A30
```

Primary

```
#2563EB
```

Primary Hover

```
#3B82F6
```

Text

```
#FFFFFF
```

Secondary Text

```
#B5BCC7
```

Muted Text

```
#8D96A5
```

Success

```
#22C55E
```

Divider

```
rgba(255,255,255,.06)
```

Hero Background

Soft dark with a very subtle blue radial gradient.

Never use pure black.

---

## 4.2 Typography

Primary Font

Inter

Fallback

system-ui, sans-serif

Hero Title

64px

700

Hero Description

22px

400

Section Title

40px

700

Section Body

18px

400

Card Title

22px

600

Button

16px

600

Caption

14px

400

Line Height

1.7

Letter Spacing

-0.02em

Always use left-aligned text.

---

## 4.3 Spacing

Only use this spacing scale.

```
8
16
24
32
48
64
96
128
```

Avoid arbitrary spacing values.

---

## 4.4 Border Radius

Button

16px

Card

20px

Screenshot

28px

Input (future use)

16px

---

## 4.5 Shadow

Use subtle shadows only.

Primary shadow

```
0 20px 60px rgba(0,0,0,.25)
```

Cards should appear elevated but never floating.

---

## 4.6 Icons

Use Lucide Icons.

Outlined style only.

24px

Primary color.

Never mix icon styles.

---

# 5. Layout Rules

Maximum Page Width

1280px

Content Width

1200px

Desktop Horizontal Padding

48px

Tablet Horizontal Padding

32px

Mobile Horizontal Padding

24px

Use consistent spacing throughout the page.

---

## 5.1 Desktop

Viewport

1280px+

Hero

Two-column layout

```
50%
50%
```

Feature Sections

Alternating layout

Image Left

Text Right

↓

Text Left

Image Right

Repeat this rhythm throughout the page.

---

## 5.2 Tablet

Viewport

768px–1279px

Hero

Single column

Text first

Image below

Feature Sections

Single column

Center screenshots

Keep text left aligned.

---

## 5.3 Mobile

Viewport

0–767px

Single-column layout.

Buttons become full width.

Images become width:100%.

No horizontal scrolling.

Keep typography readable.

---

## 5.4 Container

```
max-width: 1280px;
margin: 0 auto;
padding-inline: 24px–48px;
```

All sections must align to the same container.

---

## 5.5 Grid

Hero

```css
display: grid;
grid-template-columns: 1fr 1fr;
gap: 96px;
align-items: center;
```

Feature

```css
display: grid;
grid-template-columns: 1fr 1fr;
gap: 80px;
align-items: center;
```

Tablet & Mobile

```css
display: block;
```

---

End of Part 1
# 6. Components

Every section should be implemented as an independent reusable component.

Use reusable CSS classes.

Never hardcode spacing for individual sections.

---

## 6.1 Header

Desktop

Left

- Trader Timer Logo

Right

- Features
- FAQ
- Download

Behavior

- Sticky Header
- Transparent at page top
- Background blur after scrolling
- Smooth transition
- Duration: 250ms

The download button should always remain visible.

Desktop navigation only.

On mobile, use a hamburger menu.

---

## 6.2 Hero

Layout

Two Columns

Left

- Headline
- Description
- Store Buttons

Right

- Real App Screenshot

Rules

Do NOT crop the screenshot.

Always use the actual application screenshot.

Do not create fake UI.

Hero Height

```css
min-height: 100svh;
```

Recommended

```css
min-height: clamp(720px, 100svh, 900px);
```

Vertical Alignment

Center

Content Width

50%

Screenshot Width

Approximately 460–520px

Store buttons

Official Apple and Google badges.

---

## 6.3 Feature Sections

Total Sections

4

Alternate image positions.

Section 1

Image Left

Text Right

Section 2

Text Left

Image Right

Section 3

Image Left

Text Right

Section 4

Text Left

Image Right

Rules

One message per section.

Use only one screenshot per section.

Large screenshots are preferred.

Never place multiple screenshots in one section.

Each feature section should occupy approximately one viewport height.

---

## 6.4 Recommended Trader Cards

Display

5 Cards

- Day Trader
- Scalper
- Swing Trader
- FX / CFD
- Cryptocurrency

Desktop

5 Columns

Tablet

3 Columns

Mobile

2 Columns

Card Style

Background

Surface Color

Border

Subtle Border

Radius

20px

Padding

32px

Hover

```css
transform: translateY(-4px);
```

Transition

250ms

Cards should feel interactive without being flashy.

---

## 6.5 FAQ

Accordion Component

Only one item may remain open.

Animation

Height

Opacity

Duration

250ms

Use semantic HTML.

Recommended structure

```html
<details>
<summary>
```

or an equivalent accessible implementation.

---

## 6.6 Download CTA

Repeat the Hero message.

Headline

チャートだけに、集中しよう。

Description

Short only.

Avoid repeating all product features.

Buttons

- App Store
- Google Play

Google Play

Google Play is currently under review.

Display the button in a disabled state.

Display

Coming Soon

or

Under Review

The URL should be easily replaceable later.

Center aligned.

Large spacing.

---

# 7. Responsive Rules

Breakpoints

Desktop

1280px+

Tablet

768px–1279px

Mobile

0px–767px

Rules

No horizontal scrolling.

No layout breaking.

Maintain consistent spacing.

Navigation becomes a hamburger menu.

Buttons become full width on mobile.

Images become responsive.

Maintain screenshot aspect ratio.

Minimum touch target

44px

Typography

Use CSS clamp() whenever appropriate.

Example

```css
font-size: clamp(2rem, 4vw, 4rem);
```

Avoid fixed heights except where explicitly required.

---

# 8. Animation Rules

Animation Philosophy

Animations should never attract attention.

Users should simply feel that the page is smooth.

Minimal.

Elegant.

Professional.

---

## Hero

Headline

Fade In

Duration

700ms

Screenshot

Fade Up

Distance

24px

Duration

700ms

CTA Buttons

Fade In

Delay

200ms

---

## Feature Sections

Trigger

IntersectionObserver

Animation

Fade Up

Distance

20px

Duration

500ms

Delay

100ms

---

## Cards

Hover

TranslateY(-4px)

Transition

250ms

---

## FAQ

Accordion

Height Animation

250ms

Opacity Animation

250ms

---

## Header

Transparent

↓

Blur Background

Duration

250ms

---

Never Use

- Bounce
- Zoom
- Rotate
- Infinite Animation
- Heavy Parallax
- Flashing Effects

Animations should support the content, not distract from it.

---

# 9. Accessibility

Use semantic HTML.

Only one H1.

Every section must use H2.

Every image must include descriptive alt text.

Decorative images

```html
aria-hidden="true"
```

Buttons must have accessible labels when required.

Keyboard Navigation

Fully supported.

Visible Focus States

Required.

Minimum Contrast

WCAG AA

Do not disable text selection.

Touch targets

Minimum 44px.

---

# 10. SEO Implementation

Implement all standard SEO elements.

Required

- Meta Title
- Meta Description
- Canonical URL
- Open Graph
- Twitter Card
- robots.txt
- sitemap.xml

Structured Data

Implement

SoftwareApplication

FAQPage

using JSON-LD.

Headings

One H1 only.

Logical H2 hierarchy.

Image Optimization

Use descriptive filenames.

Example

```
trader-timer-home.webp
```

instead of

```
image1.webp
```

Lazy Load

Enable lazy loading for all images below the Hero section.

The Hero image should be eagerly loaded.

---

End of Part 2
---

# 11. Performance

Performance is a top priority.

Target scores

- Lighthouse Performance: 95+
- Lighthouse Accessibility: 100
- Lighthouse Best Practices: 100
- Lighthouse SEO: 100
- Core Web Vitals: Pass

---

## Performance Rules

Use WebP images.

Do not use PNG unless transparency is required.

Lazy load all images below the Hero section.

Preload the Hero image.

Preload the primary font.

Use `font-display: swap`.

Use the following attributes for images when appropriate.

```html
loading="lazy"
decoding="async"
```

The Hero image should use eager loading.

```html
loading="eager"
fetchpriority="high"
```

Always specify image width and height.

Prevent CLS.

Minimize JavaScript.

No unused CSS.

Minify CSS before production if practical.

Minify JavaScript before production if practical.

No render-blocking third-party scripts.

Use CSS transforms instead of top/left animations.

Prefer opacity + transform animations.

Images should not exceed 300KB whenever practical.

Compress all images before deployment.

---

# 12. Coding Rules

## HTML

Use semantic HTML.

Recommended semantic elements

```html
<header>
<nav>
<main>
<section>
<button>
```

Do not add a visible footer section.

The LP intentionally ends with the Download CTA and minimal brand close.

Never use meaningless div nesting.

One H1 only.

Every major section uses H2.

Buttons use either

```html
<a>
```

for navigation/download links

or

```html
<button>
```

for interactive UI such as FAQ toggles.

Navigation uses

```html
<nav>
```

---

## CSS

Use BEM-style naming.

Examples

```css
.header
.header__nav
.hero
.hero__content
.hero__visual
.feature
.feature--reverse
.feature__content
.feature__visual
.trader-card
.faq
.download-cta
```

Never use inline CSS.

Never use `!important`.

Use CSS variables.

Example

```css
:root {
  --color-bg: #111315;
  --color-surface: #181B1F;
  --color-primary: #2563EB;
  --color-text: #FFFFFF;
  --space-xl: 64px;
  --radius-lg: 20px;
}
```

Keep CSS readable and organized by section.

---

## JavaScript

Vanilla JavaScript only.

Keep JavaScript minimal.

Required JS features

- Sticky header state after scroll
- Mobile navigation toggle
- FAQ accordion
- IntersectionObserver reveal animations

Use passive event listeners where appropriate.

Debounce or throttle scroll events if used.

Prefer IntersectionObserver over scroll listeners.

No console.log() in production.

No external JS libraries.

---

## Images

All screenshots must be real app screenshots.

Do not create fake UI.

Do not alter the app UI itself.

Allowed image processing

- WebP conversion
- Compression
- Resizing
- Rounded corners
- Shadow
- Background placement

Not allowed

- Changing app text
- Creating fake timer UI
- Creating fake notification UI
- Editing the app interface to imply unavailable features

File naming

Use descriptive names.

Examples

```text
trader-timer-home.webp
trader-timer-timer-settings.webp
trader-timer-profile.webp
trader-timer-notification-settings.webp
trader-timer-og-image.webp
```

---

## Icons

SVG only.

Use Lucide-style outlined icons.

No bitmap icons.

Keep icon style consistent.

---

# 13. Deliverables

Codex must create or update the following files.

```text
index.html
css/style.css
js/main.js
images/
favicon.png
robots.txt
sitemap.xml
manifest.webmanifest
404.html
README.md
```

The implementation must run locally without build tools.

No npm.

No package manager.

Opening `index.html` should work.

GitHub Pages must serve the page correctly.

---

# 14. Definition of Done

The implementation is complete only if all conditions below are satisfied.

---

## Design

- Matches LP_MASTER.md
- Matches IMPLEMENTATION.md
- Uses the approved soft-dark design direction
- Uses real app screenshots
- Does not use fake app UI
- Feels like a premium product website
- Looks closer to Apple / Linear / Raycast than a generic app LP

---

## Content

- Uses the official app name: Trader Timer
- Does not use Trading Timer anywhere
- Hero copy matches LP_MASTER.md
- SEO keywords are included naturally
- No placeholder text
- No unnecessary footer links
- Google Play is shown as Coming Soon / Under Review
- App Store link uses the official URL

Official App Store URL

```text
https://apps.apple.com/jp/app/trader-timer/id6782052104
```

---

## Responsive

- Desktop layout works
- Tablet layout works
- Mobile layout works
- No horizontal scrolling
- Buttons are usable on mobile
- Header works on mobile
- Screenshots scale correctly

---

## SEO

- Title implemented
- Meta description implemented
- Canonical URL implemented
- Open Graph implemented
- Twitter Card implemented
- JSON-LD SoftwareApplication implemented
- JSON-LD FAQPage implemented
- robots.txt implemented
- sitemap.xml implemented
- One H1 only
- Logical heading hierarchy

---

## Accessibility

- WCAG AA contrast
- Keyboard navigation works
- Focus states visible
- FAQ accessible
- Images have alt text
- Decorative elements are hidden from screen readers
- Touch target is at least 44px

---

## Performance

- Lighthouse Performance 95+
- Lighthouse Accessibility 100
- Lighthouse Best Practices 100
- Lighthouse SEO 100
- Core Web Vitals pass
- No layout shift
- Images optimized
- Hero image preloaded
- Below-the-fold images lazy loaded
- No heavy JavaScript

---

## Code Quality

- Semantic HTML
- Clean CSS
- Reusable components
- No duplicate code where avoidable
- No inline styles
- No `!important`
- No console errors
- No broken links
- No unused placeholder assets

---

# 15. Final Implementation Notes for Codex

Before implementing, inspect the existing project files.

Use existing assets whenever available.

Examples

- official logo
- favicon
- app screenshots
- App Store badge
- existing CSS or HTML that should be preserved
- existing privacy/support/app-ads files

Do not delete existing operational files unless explicitly instructed.

Important existing files may include:

- app-ads.txt
- privacy.html
- support.html

Do not break these files.

---

## Asset Rules

The provided mockup image is a visual reference only.

Use official project assets when available.

If mockup assets differ from official assets, use official assets.

If screenshots are missing, obtain or generate real screenshots from the app where possible.

If screenshot processing is necessary, do it as part of implementation.

Image processing may include

- resizing
- compression
- WebP conversion
- background placement
- subtle shadow

Do not fabricate unavailable product features.

---

## Google Play Status

Google Play is currently under review.

The Google Play CTA must be visible but disabled.

Use text such as

```text
Coming Soon
```

or

```text
審査中
```

The implementation should make it easy to add the Google Play URL later.

---

## Priority Order

If unclear, prioritize in this order.

1. LP_MASTER.md
2. IMPLEMENTATION.md
3. Existing official assets
4. Approved mockup image
5. Simplicity
6. Performance
7. Accessibility
8. SEO
9. Maintainability

---

End of document.