export type Group = 'pet' | 'ket' | 'conv'

export interface Opt {
  key: string
  label: string
}

/** Câu hỏi tranh (Part 1) hoặc trắc nghiệm (Part 3) — cùng dạng chọn A/B/C. */
export interface ChoiceQ {
  n: number
  prompt: string
  options: Opt[]
  answer: string
  /** Ảnh cắt riêng của câu (Part 1 PET). */
  img?: string
}

/** Một dòng nối trong Part 2 (người ↔ việc). */
export interface MatchPair {
  n: number
  name: string
  answer: string
}

export interface MatchPart {
  intro: string
  bank: Opt[]
  example?: { name: string; answer: string }
  pairs: MatchPair[]
  note?: string
  /** Ảnh trang đề gốc (đã xoá nét bút) của Part 2. */
  img?: string
}

export interface McqPart {
  intro: string
  example?: ChoiceQ
  questions: ChoiceQ[]
  note?: string
  /** Ảnh trang đề gốc (đã xoá nét bút) của Part 3. */
  imgs?: string[]
}

export interface Test {
  id: string
  group: Group
  title: string
  /** Ảnh trang đề gốc (còn đáp án đã tô) — dùng cho nút "Xem đề gốc". */
  images: string[]
  /** Ảnh trang đã xoá nét bút — dùng hiển thị tranh sạch. */
  cleanImages?: string[]
  /** Part 1 — câu hỏi tranh. */
  picture?: { intro: string; questions: ChoiceQ[] }
  /** Part 2 — nối. */
  match?: MatchPart
  /** Part 3 — trắc nghiệm. */
  mcq?: McqPart
}

export interface Section {
  group: Group
  title: string
  subtitle: string
  tests: Test[]
}
