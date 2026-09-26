IBM Plex Sans Thai, as `.woff` subsets, used only by `scripts/render-og.mjs` to
draw the share card (`src/app/opengraph-image.png`). The pages themselves load
Plex through `next/font`, not from here.

The card is drawn by real Chrome and committed as a static PNG rather than built
with `next/og`: Satori mis-stacks Thai marks ("ที่ทั้งคน" came out "ทีท้ังคน").
Re-run `node scripts/render-og.mjs` after changing the home sentence or the
project list.

Copied from `@fontsource/ibm-plex-sans-thai@5.2.8`. Licensed under the SIL Open
Font License 1.1; the licence travels with the files (`OFL-LICENSE.txt`), as it
requires.
