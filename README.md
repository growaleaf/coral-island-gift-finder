# Coral Island Loved Gift Finder

Static page. Search an item to see which villagers love it. Or pick a villager to see their full loved-gifts list.

## Data

Parsed from `../source_commonsensegamer.html` (commonsensegamer.com, "Coral Island Gift Guide: Best Gift for Each Character", published 2022-10-21, modified 2022-10-21, fetched 2026-11-25) via `../parse.py` into `../parsed.json`, then embedded in `data.js`.

A full read of the 927-line saved source file located a "Loved Gifts" heading for 53 villagers; every heading yielded a non-empty gift list, so none were skipped. The source's `<ul class="wp-block-list">` list for each villager was located by scanning forward from that villager's `<h3>` heading to the next heading, since an image block sometimes sits between the heading and its list; this never required discarding a heading.

The source also states every character except Jim loves the Pink Diamond gift. This is modeled only as a disclosed page claim (`UNIVERSAL_LOVED_NOTE` in `data.js`, shown on the page when searching for it), not merged into each villager's own list — except for Yuri, whose list already names Pink Diamond directly from the source.

Only "Loved" gifts are covered. The source does not provide liked/disliked tiers for this title, so none are shown.

## Files

- `index.html` — the page
- `data.js` — the villagers' loved-gift data (also usable from Node via `module.exports`)
- `test.js` — known-answer tests, run with `node test.js`

## Caveat

Single source. Community gift guides can disagree with each other and with in-game behavior. Verify in-game.
