from PIL import Image
import sys

src = sys.argv[1]
dst = sys.argv[2]

img = Image.open(src).convert("RGBA")
data = img.getdata()

# Sample background color from corners
w, h = img.size
corners = [data[0], data[w-1], data[(h-1)*w], data[(h-1)*w + w-1]]
bg_r = sum(c[0] for c in corners) // 4
bg_g = sum(c[1] for c in corners) // 4
bg_b = sum(c[2] for c in corners) // 4

tolerance = 35

new_data = []
for pixel in data:
    r, g, b, a = pixel
    if abs(r - bg_r) <= tolerance and abs(g - bg_g) <= tolerance and abs(b - bg_b) <= tolerance:
        new_data.append((r, g, b, 0))
    elif abs(r - bg_r) <= 60 and abs(g - bg_g) <= 60 and abs(b - bg_b) <= 60:
        # Soft edge - partial transparency
        dist = max(abs(r - bg_r), abs(g - bg_g), abs(b - bg_b))
        alpha = int(255 * (dist - 35) / 25)
        alpha = max(0, min(255, alpha))
        new_data.append((r, g, b, alpha))
    else:
        new_data.append((r, g, b, 255))

img.putdata(new_data)
img.save(dst, "PNG", optimize=False)
print(f"Saved: {dst} ({w}x{h})")
