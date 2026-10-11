# Project architecture

- Keep checkout destinations, post-payment URLs, and offer-specific WhatsApp links centralized in `src/lib/checkout.ts` so every campaign page uses the same source of truth.
- Keep focused sales landing pages isolated from institutional navigation so purchase intent is not diverted.
- Keep `/` as the public editorial storefront for the four active BST sales pages, while `/guias-bst` permanently redirects home, so product discovery stays consolidated without duplicating content.
- Keep Meta tracking centralized in `src/lib/pixel.ts` and initialize only the current official Pixel in the root route, preventing duplicate page and product-view events.
- Scope BST3A's visual theme to its page wrapper and use the compact ContactSection variant at the end of its footer, preserving institutional pages and distraction-free sales content.