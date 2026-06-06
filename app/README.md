# 🎧 Ôn Nghe — Part 1 · 2 · 3

Web ôn tập đề nghe (PET/KET) dựng bằng **React + TypeScript + Vite**, lấy trực tiếp từ file
`de_nghe_hoan_chinh_trang_1_36.pdf` mà bạn đã tô đáp án.

## Có gì trong app

- **Part 1 · Tranh (PET)** — 12 đề × 5 câu, nghe và chọn tranh A/B/C.
- **Part 1 · Tranh (KET)** — 4 đề × 7 câu.
- **Part 2 & 3 · Hội thoại** — 4 đề, gồm:
  - Part 2: nối người ↔ việc (A–H)
  - Part 3: trắc nghiệm A/B/C
  - kèm **ghi chú tiếng Việt** bạn đã viết (hiện ra như gợi ý/giải thích).

## Hai chế độ học

- **Ôn tập**: chọn xong là hiện đúng/sai ngay (học cho nhớ).
- **Kiểm tra**: tự làm hết rồi bấm **Nộp bài** để chấm điểm.

Mỗi đề có nút **Xem đề gốc** (ảnh trang PDF có tranh + đáp án đã tô) và **Làm lại**.
Tiến độ + điểm được **lưu tự động** trong trình duyệt (localStorage).

## Chạy

```bash
cd app
npm install      # chỉ lần đầu
npm run dev      # mở http://localhost:5173
```

Build bản tĩnh để mở/đem đi nơi khác:

```bash
npm run build    # ra thư mục dist/
npm run preview  # xem thử bản build
```

## Cấu trúc

- `src/data.ts` — toàn bộ câu hỏi + đáp án (sửa ở đây nếu cần chỉnh).
- `src/components/` — `ChoiceCard` (A/B/C), `MatchCard` (nối), `TestView`.
- `public/pages/` — ảnh 36 trang đề gốc.
