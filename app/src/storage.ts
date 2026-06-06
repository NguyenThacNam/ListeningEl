export interface SavedState {
  // answers[testId][qid] = đáp án đã chọn (vd "A")
  answers: Record<string, Record<string, string>>
  // submitted[testId] = đã nộp bài (dùng cho chế độ Kiểm tra)
  submitted: Record<string, boolean>
  mode: 'review' | 'test'
}

const KEY = 'listening-review-v1'

export function loadState(): SavedState {
  try {
    const raw = localStorage.getItem(KEY)
    if (raw) return { mode: 'review', answers: {}, submitted: {}, ...JSON.parse(raw) }
  } catch {
    /* ignore */
  }
  return { answers: {}, submitted: {}, mode: 'review' }
}

export function saveState(s: SavedState) {
  try {
    localStorage.setItem(KEY, JSON.stringify(s))
  } catch {
    /* ignore */
  }
}

export function asset(path: string): string {
  return import.meta.env.BASE_URL + path
}
