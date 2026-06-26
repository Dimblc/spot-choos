from PIL import Image
import os

SOURCE_DIR = "C:/Users/Admin/Downloads"
OUTPUT_DIR = "public/img-webp"

# Исходник → (целевое имя, max_width, max_height)
IMAGES = {
    "burger.jpg": ("burger-hero.webp", 1200, 1200),
    "lettuce.jpg": ("lettuce.webp", 400, 400),
    "meat.jpg": ("meat.webp", 400, 400),
    "tomato.jpg": ("tomato.webp", 400, 400),
    "cheese.jpg": ("cheese.webp", 400, 400),
    "burgerwithhands.jpg": ("burger-with-hands.webp", 800, 800),
    "foto1.jpg": ("foto1.webp", 1200, 1200),
    "foto2.jpg": ("foto2.webp", 1200, 1200),
    "foto3.jpg": ("foto3.webp", 1200, 1200),
}


def process_image(src_name, dst_name, max_w, max_h):
    src_path = os.path.join(SOURCE_DIR, src_name)
    dst_path = os.path.join(OUTPUT_DIR, dst_name)

    if not os.path.exists(src_path):
        print(f"SKIP: {src_path} not found")
        return

    with Image.open(src_path) as img:
        # Конвертируем в RGBA, чтобы сохранить прозрачность, если она есть
        if img.mode in ("P", "RGBA") or (img.mode == "RGB" and "transparency" in img.info):
            img = img.convert("RGBA")
        else:
            img = img.convert("RGB")

        # Масштабируем с сохранением пропорций, если больше целевого
        img.thumbnail((max_w, max_h), Image.LANCZOS)

        img.save(dst_path, "WEBP", quality=85, method=6)
        print(f"SAVED: {dst_path} ({img.size[0]}x{img.size[1]})")


if __name__ == "__main__":
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    for src, (dst, max_w, max_h) in IMAGES.items():
        process_image(src, dst, max_w, max_h)
