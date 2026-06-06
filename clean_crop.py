import fitz, os
import numpy as np
from PIL import Image

doc = fitz.open(r"e:\LsEl\de_nghe_hoan_chinh_trang_1_36.pdf")
PUB = r"e:\LsEl\app\public"
QDIR = os.path.join(PUB, "q")
CLEAN = os.path.join(PUB, "pages_clean")
MON = r"e:\LsEl\montage"
os.makedirs(QDIR, exist_ok=True)
os.makedirs(CLEAN, exist_ok=True)
os.makedirs(MON, exist_ok=True)
DPI = 170
THRESH = 28  # pixel "có màu" (bút mực) nếu chênh lệch kênh > ngưỡng


def render_clean(page_no):
    """Render 1 trang -> PIL, xoá mọi nét bút màu (xanh/đỏ) thành trắng."""
    p = doc[page_no - 1]
    pix = p.get_pixmap(dpi=DPI)
    img = Image.frombytes("RGB", (pix.width, pix.height), pix.samples)
    a = np.asarray(img).astype(np.int16)
    mx = a.max(axis=2)
    mn = a.min(axis=2)
    colored = (mx - mn) > THRESH          # nét bút màu
    out = np.asarray(img).copy()
    out[colored] = 255                     # -> trắng
    return Image.fromarray(out)


# Render + clean toàn bộ 36 trang, lưu bản sạch
clean_imgs = {}
for n in range(1, doc.page_count + 1):
    ci = render_clean(n)
    ci.save(os.path.join(CLEAN, "page_%02d.png" % n))
    clean_imgs[n] = ci
print("cleaned pages:", len(clean_imgs))


def crop_clean(page_no, box, name):
    im = clean_imgs[page_no]
    W, H = im.size
    x0, y0, x1, y1 = box
    c = im.crop((int(x0 * W), int(y0 * H), int(x1 * W), int(y1 * H)))
    c.save(os.path.join(QDIR, name + ".png"))
    return os.path.join(QDIR, name + ".png")


PORT_A = {1: (0.00, 0.485, 1.00, 0.762), 2: (0.00, 0.762, 1.00, 1.00)}
PORT_B = {3: (0.00, 0.035, 1.00, 0.325), 4: (0.00, 0.325, 1.00, 0.605), 5: (0.00, 0.605, 1.00, 0.995)}
LAND_PET = {
    1: (0.015, 0.55, 0.50, 0.795), 2: (0.015, 0.795, 0.50, 1.00),
    3: (0.50, 0.045, 1.00, 0.315), 4: (0.50, 0.315, 1.00, 0.595), 5: (0.50, 0.595, 1.00, 0.915),
}
KET = {
    1: (0.02, 0.20, 0.46, 0.315), 2: (0.02, 0.315, 0.46, 0.455),
    3: (0.47, 0.055, 0.975, 0.185), 4: (0.47, 0.185, 0.975, 0.30), 5: (0.47, 0.30, 0.975, 0.455),
    6: (0.02, 0.455, 0.64, 0.695), 7: (0.02, 0.695, 0.64, 0.95),
}

paths = []
pet_pairs = {
    'pet-1': (1, 2), 'pet-2': (3, 4), 'pet-3': (5, 6), 'pet-4': (7, 8),
    'pet-5': (9, 10), 'pet-6': (11, 12), 'pet-7': (13, 14), 'pet-8': (15, 16),
}
for tid, (pa, pb) in pet_pairs.items():
    for q, box in PORT_A.items():
        paths.append((f"{tid}_{q}", crop_clean(pa, box, f"{tid}_{q}")))
    for q, box in PORT_B.items():
        paths.append((f"{tid}_{q}", crop_clean(pb, box, f"{tid}_{q}")))

pet_land = {'pet-9': 17, 'pet-10': 18, 'pet-11': 19, 'pet-12': 20}
for tid, pg in pet_land.items():
    for q, box in LAND_PET.items():
        paths.append((f"{tid}_{q}", crop_clean(pg, box, f"{tid}_{q}")))

ket = {'ket-1': 21, 'ket-2': 22, 'ket-3': 23, 'ket-4': 24}
for tid, pg in ket.items():
    for q, box in KET.items():
        paths.append((f"{tid}_{q}", crop_clean(pg, box, f"{tid}_{q}")))

print("cropped:", len(paths))


def montage(items, cols, cellw, cellh, outname):
    from PIL import ImageDraw
    rows = (len(items) + cols - 1) // cols
    sheet = Image.new("RGB", (cols * cellw, rows * cellh), "white")
    d = ImageDraw.Draw(sheet)
    for i, (name, path) in enumerate(items):
        im = Image.open(path).convert("RGB")
        im.thumbnail((cellw - 8, cellh - 22))
        cx, cy = (i % cols) * cellw, (i // cols) * cellh
        sheet.paste(im, (cx + 4, cy + 18))
        d.text((cx + 4, cy + 4), name, fill="red")
    sheet.save(os.path.join(MON, outname), quality=85)


montage(paths[0:20], 5, 360, 220, "c_pet_1.jpg")
montage(paths[40:60], 5, 360, 240, "c_pet_land.jpg")
montage(paths[60:88], 4, 420, 240, "c_ket.jpg")
print("montages done")
