# Project Guidance

## User Preferences

- Preserve all existing features, design, and content exactly
- Single tagline: 'Your Reliable Partner for Corporate Gifting Solutions' (never 'India's Trusted Corporate Gifting Company')
- Navy blue, white, and gold color palette — warm, professional corporate style
- Playfair Display for headings, system fonts for body
- B2B corporate focus — HR, procurement, operations teams audience
- Full screen width layout with no unnecessary side margins
- Mobile-first responsive design
- No custom image logo — styled text 'OfNeeds' only
- No 'Branded' mentions in any copy
- Starter Packs cards: equal height/width grid, Playfair Display headings, buttons pinned to bottom

## Verified Commands

- **typecheck**: `cd src/frontend && pnpm typecheck`
- **fix**: `cd src/frontend && pnpm fix`
- **build**: `cd src/frontend && pnpm build`

## Learnings

- `react-router-dom` must be installed explicitly — not in base template deps
- `SiLinkedin` is not available in react-icons/si; use `Linkedin` from lucide-react instead
- LSP rule: all `<button>` elements need explicit `type="button"` or `type="submit"`
- LSP rule: `<a>` elements with `onClick` handlers get flagged — remove onClick or use button
- LSP rule: avoid array index as React key — use a unique field from the item instead
- Layout must use `<Outlet />` from react-router-dom (not children prop) when using nested Routes

