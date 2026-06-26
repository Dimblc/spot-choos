from PIL import Image, ImageDraw, ImageFont
import os

OUTPUT_DIR = "public/img-webp"
IMG_DIR = "public/img"
os.makedirs(OUTPUT_DIR, exist_ok=True)
os.makedirs(IMG_DIR, exist_ok=True)


def draw_text_center(draw, text, bbox, font_size=40, fill="white"):
    try:
        font = ImageFont.truetype("arial.ttf", font_size)
    except:
        font = ImageFont.load_default()
    x1, y1, x2, y2 = bbox
    cx, cy = (x1 + x2) / 2, (y1 + y2) / 2
    bbox_text = draw.textbbox((0, 0), text, font=font)
    tw, th = bbox_text[2] - bbox_text[0], bbox_text[3] - bbox_text[1]
    draw.text((cx - tw / 2, cy - th / 2), text, font=font, fill=fill)


def make_burger():
    size = 1000
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    cx, cy = size // 2, size // 2

    # Bottom bun
    draw.ellipse([cx - 350, cy + 100, cx + 350, cy + 280], fill="#EF6F2E", outline="#4C0016", width=12)
    # Meat
    draw.rounded_rectangle([cx - 380, cy - 20, cx + 380, cy + 120], radius=40, fill="#8B4513", outline="#4C0016", width=12)
    # Cheese
    draw.polygon([cx - 360, cy - 60, cx + 360, cy - 60, cx + 300, cy - 140, cx - 300, cy - 140], fill="#FFC614", outline="#4C0016", width=8)
    # Lettuce
    draw.rounded_rectangle([cx - 390, cy - 160, cx + 390, cy - 80], radius=60, fill="#77C41E", outline="#4C0016", width=10)
    # Top bun
    draw.ellipse([cx - 340, cy - 340, cx + 340, cy - 100], fill="#FF9D3F", outline="#4C0016", width=12)
    # Sesame seeds
    for dx, dy in [(-120, -240), (0, -260), (120, -230), (-60, -190), (60, -200), (-180, -180), (180, -170)]:
        draw.ellipse([cx + dx - 10, cy + dy - 6, cx + dx + 10, cy + dy + 6], fill="#F5E3CD")

    draw_text_center(draw, "BURGER", [cx - 200, cy - 50, cx + 200, cy + 50], font_size=80, fill="#4C0016")
    img.save(f"{OUTPUT_DIR}/burger-hero.webp", "WEBP")


def make_circle(text, color, outline="#4C0016", size=400):
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    pad = 20
    draw.ellipse([pad, pad, size - pad, size - pad], fill=color, outline=outline, width=8)
    draw_text_center(draw, text, [pad, pad, size - pad, size - pad], font_size=60, fill="white")
    return img


def make_tomato():
    make_circle("TOMATO", "#F91814").save(f"{OUTPUT_DIR}/tomato.webp", "WEBP")


def make_cheese():
    size = 400
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    pad = 20
    draw.polygon([pad, pad, size - pad, pad, size - pad - 40, size - pad, pad + 40, size - pad], fill="#FFC614", outline="#4C0016", width=8)
    draw_text_center(draw, "CHEESE", [pad, pad, size - pad, size - pad], font_size=60, fill="#4C0016")
    img.save(f"{OUTPUT_DIR}/cheese.webp", "WEBP")


def make_meat():
    make_circle("MEAT", "#8B4513").save(f"{OUTPUT_DIR}/meat.webp", "WEBP")


def make_lettuce():
    size = 400
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    pad = 20
    # Wavy shape
    draw.rounded_rectangle([pad, pad + 80, size - pad, size - pad - 80], radius=80, fill="#77C41E", outline="#4C0016", width=8)
    draw_text_center(draw, "LETTUCE", [pad, pad, size - pad, size - pad], font_size=60, fill="white")
    img.save(f"{OUTPUT_DIR}/lettuce.webp", "WEBP")


def make_plane():
    size = 300
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    # Simple plane shape
    body = [30, 150, 270, 150, 270, 170, 220, 170, 180, 210, 140, 210, 140, 170, 30, 170]
    wing = [140, 150, 200, 90, 230, 90, 180, 150]
    tail = [60, 150, 90, 110, 120, 110, 90, 150]
    draw.polygon(body, fill="#F4A804", outline="#4C0016", width=4)
    draw.polygon(wing, fill="#F4A804", outline="#4C0016", width=4)
    draw.polygon(tail, fill="#F4A804", outline="#4C0016", width=4)
    draw_text_center(draw, "PLANE", [0, 220, size, 270], font_size=30, fill="#4C0016")
    img.save(f"{IMG_DIR}/plane.png", "PNG")


if __name__ == "__main__":
    make_burger()
    make_tomato()
    make_cheese()
    make_meat()
    make_lettuce()
    make_plane()
    print("Placeholders generated.")
