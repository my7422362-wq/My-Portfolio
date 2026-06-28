# TODO - Contact section responsive refactor

## Steps
- [x] Step 1: Update `ContactRow` value styling to prevent clipping/overflow on mobile (remove `truncate`, add `break-words overflow-wrap:anywhere min-w-0`, keep `flex-1`).

- [ ] Step 2: Verify flex containers in `ContactRow` don’t constrain wrapping (add `min-w-0` where needed).
- [ ] Step 3: Adjust outer Contact section horizontal padding for mobile while preserving desktop layout.
- [x] Step 4: Refactor bottom CTA card layout to stack + center on mobile, while keeping desktop layout unchanged.

- [x] Step 5: Add tiny-screen typography tweaks for widths below 390px.

- [x] Step 6: Ensure mobile touch targets are at least ~44px high for links/cards.

- [ ] Step 7: Run typecheck/build and do quick visual verification (no horizontal scrolling, no clipped text).


