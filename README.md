# 🎧 ListeningEl — Web ôn nghe PET/KET

Web ôn tập đề nghe (Part 1 tranh, Part 2 nối, Part 3 trắc nghiệm) dựng bằng
**React + TypeScript + Vite**. Dữ liệu lấy từ một bộ đề nghe đã làm và đánh dấu đáp án.

## Chạy

```bash
cd app
npm install
npm run dev      # http://localhost:5173
```

Build bản tĩnh:

```bash
cd app
npm run build    # ra app/dist
npm run preview
```

## Nội dung

- **Part 1 · Tranh (PET)** — 12 đề × 5 câu, mỗi câu có ảnh tranh A/B/C riêng (đã xoá đáp án).
- **Part 1 · Tranh (KET)** — 4 đề × 7 câu, hiển thị nguyên trang đề đã làm sạch.
- **Part 2 & 3 · Hội thoại** — 4 đề: nối người ↔ việc (A–H) và trắc nghiệm A/B/C, kèm ghi chú gợi ý.

Hai chế độ: **Ôn tập** (chọn là hiện đúng/sai ngay) và **Kiểm tra** (làm hết rồi nộp bài).
Tiến độ lưu trong trình duyệt (localStorage).

## Cấu trúc

| Đường dẫn | Mô tả |
|---|---|
| `app/` | Mã nguồn web (React + Vite) |
| `app/src/data.ts` | Toàn bộ câu hỏi + đáp án |
| `app/public/q/` | Ảnh tranh từng câu Part 1 PET |
| `app/public/pages_clean/` | Ảnh trang đề đã xoá nét bút |
| `app/public/pages/` | Ảnh trang đề gốc (còn đáp án đã tô) |
| `clean_crop.py`, `render_app.py` | Script Python tạo ảnh từ file PDF gốc |
