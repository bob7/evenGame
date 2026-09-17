# Number Game

`even.html` is a self-contained browser game. Open it directly in a modern browser; it has no build step or external dependencies.

## Board and rules

Cells are numbered from **0**, from top-left to bottom-right. All cells start with a white background. Available moves are not highlighted.

1. Player 1 chooses a set **R of four cells** they have not previously selected. Their current picks have bright red top halves. They may choose cells already used by Player 2.
2. Player 2 chooses an unused pair **(2i, 2i+1)** by clicking either member. At least one member must lie between **min(R)** and **max(R)**, inclusive. The clicked member itself may be outside the range. For example, if R is `{1, 2, 3, 4}`, the legal pairs are `(0, 1)`, `(2, 3)`, and `(4, 5)`.
3. Both members receive green bottom fills and become unavailable to Player 2 in future rounds. Player 1's four current top fills then become dim red with a light gray tint. Invalid picks leave the board unchanged.
4. A player loses when they cannot make a valid move.

Pairs follow cell numbering, including across row boundaries. Since the square grid has an odd side length, its final cell has no partner and is unavailable to Player 2. Player 1 can still select that cell.

## Controls

The compact controls are arranged in four groups: **[− size +] [P1-auto P2-auto] [Demo Step svg gif] [Full view Rules]**. Groups wrap on narrower windows.

| Button | What it does |
| --- | --- |
| `−` / `+` | Decrease or increase the square grid's side length by two, with a minimum of three, and start a fresh game. The number between the buttons shows the side length. |
| `P1-auto` / `P2-auto` | Toggle computer play for the corresponding player. |
| `Demo` / `Pause` | Start an automated game, pause it, or resume it. Starting a demo after a finished game creates a fresh game. |
| `Step` | Start a stepped demo or advance the current demo by one turn: Player 1's four selections, then Player 2's pair. |
| `svg` | Download a vector snapshot of the board as it currently appears. |
| `gif` | Download matching looping replay files in both **animated SVG** and raster **GIF** formats when a demo is paused, stepped, or finished. |
| Full-view icon | Fit the square grid within the browser window with padding, accounting for the controls. It adapts to window resizing and preserves the current game. Click again to restore the standard size. This changes the layout within the browser, rather than entering operating-system fullscreen. |
| `Rules` | Open the in-game guide. |

## Exports

Use `svg` for a snapshot. For an animated replay, start `Demo` and pause it, or use `Step` to build the replay one turn at a time, then click `gif` to download both formats. Completed demos can also be exported.

The replay includes the initial board and recorded turns through the current transition. Both export types preserve the white backgrounds, bright red current picks, dim gray-tinted red completed picks, and green bottom fills on both members of selected pairs. Animated replay frames do not include the hidden cell-number text.
