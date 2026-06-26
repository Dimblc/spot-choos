"""Embolden letter glyphs in ComicCAT.otf while keeping digits/symbols unchanged."""

import math
import shutil
from fontTools.ttLib import TTFont
from fontTools.pens.recordingPen import RecordingPen
from fontTools.pens.ttGlyphPen import TTGlyphPen

FONT_PATH = "public/fonts/ComicCAT.otf"
BACKUP_PATH = "public/fonts/ComicCAT_original.otf"
DELTA = 40  # offset in font units (2048 UPM ~ 2% per side)


def is_letter(cp):
    """Latin A-Z, a-z; Cyrillic А-Я, а-я, Ё, ё."""
    if 0x0041 <= cp <= 0x005A:
        return True
    if 0x0061 <= cp <= 0x007A:
        return True
    if 0x0410 <= cp <= 0x042F:
        return True
    if 0x0430 <= cp <= 0x044F:
        return True
    if cp in (0x0401, 0x0451):
        return True
    return False


def signed_area(coords, start, end):
    """Shoelace formula — negative = clockwise (outer), positive = counter-clockwise (inner)."""
    area = 0.0
    for i in range(start, end + 1):
        j = i + 1 if i < end else start
        x1, y1 = coords[i]
        x2, y2 = coords[j]
        area += x1 * y2 - x2 * y1
    return area / 2.0


def contour_bbox_center(coords, start, end):
    xs = [coords[i][0] for i in range(start, end + 1)]
    ys = [coords[i][1] for i in range(start, end + 1)]
    return (min(xs) + max(xs)) / 2.0, (min(ys) + max(ys)) / 2.0


def main():
    # Backup original
    shutil.copy2(FONT_PATH, BACKUP_PATH)
    print(f"Backup saved: {BACKUP_PATH}")

    font = TTFont(FONT_PATH)
    cmap = font.getBestCmap()
    glyf = font["glyf"]
    gs = font.getGlyphSet()

    modified = 0
    skipped = 0
    decomposed = 0

    for cp, glyph_name in sorted(cmap.items()):
        if not is_letter(cp):
            continue

        g = glyf[glyph_name]

        # Decompose composite glyphs into simple glyphs
        if g.isComposite():
            rec = RecordingPen()
            gs[glyph_name].draw(rec)
            tt_pen = TTGlyphPen(glyf)
            for cmd, args in rec.value:
                getattr(tt_pen, cmd)(*args)
            g = tt_pen.glyph()
            glyf[glyph_name] = g
            decomposed += 1

        if g.numberOfContours <= 0:
            skipped += 1
            continue

        coords = g.coordinates  # GlyphCoordinates object — modify in place
        end_pts = g.endPtsOfContours

        start = 0
        for ep in end_pts:
            area = signed_area(coords, start, ep)
            cx, cy = contour_bbox_center(coords, start, ep)

            # Outer (clockwise, negative area) → expand outward
            # Inner (counter-clockwise, positive area) → shrink inward
            direction = 1 if area < 0 else -1

            for i in range(start, ep + 1):
                x, y = coords[i]
                dx = x - cx
                dy = y - cy
                dist = math.sqrt(dx * dx + dy * dy)
                if dist < 0.001:
                    continue
                new_x = x + direction * DELTA * dx / dist
                new_y = y + direction * DELTA * dy / dist
                coords[i] = (round(new_x), round(new_y))

            start = ep + 1

        # Recalculate glyph bounds
        g.recalcBounds(glyf)
        modified += 1

    print(f"Modified: {modified} letter glyphs")
    print(f"Decomposed: {decomposed} composite glyphs")
    print(f"Skipped: {skipped} empty glyphs")

    # Ensure bounding boxes are recalculated on save
    font.recalcBBoxes = True

    # Save
    font.save(FONT_PATH)
    print(f"Font saved: {FONT_PATH}")


if __name__ == "__main__":
    main()
