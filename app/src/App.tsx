import { useEffect, useMemo, useState } from 'react'
import { sections, allTests, countQuestions } from './data'
import { loadState, saveState } from './storage'
import TestView from './components/TestView'

export default function App() {
  const [state, setState] = useState(loadState)
  const [currentId, setCurrentId] = useState<string>(allTests[0].id)
  const [navOpen, setNavOpen] = useState(false)

  useEffect(() => {
    saveState(state)
  }, [state])

  const current = useMemo(
    () => allTests.find((t) => t.id === currentId) ?? allTests[0],
    [currentId],
  )
  const answers = state.answers[currentId] ?? {}
  const submitted = !!state.submitted[currentId]

  const setAnswer = (qid: string, key: string) =>
    setState((s) => {
      // Trong chế độ Kiểm tra, nếu đã nộp thì khoá không cho đổi.
      if (s.mode === 'test' && s.submitted[currentId]) return s
      const cur = s.answers[currentId] ?? {}
      // Bấm lại đúng đáp án đang chọn -> bỏ chọn.
      const next = cur[qid] === key ? undefined : key
      const newCur = { ...cur }
      if (next === undefined) delete newCur[qid]
      else newCur[qid] = next
      return { ...s, answers: { ...s.answers, [currentId]: newCur } }
    })

  const submit = () =>
    setState((s) => ({ ...s, submitted: { ...s.submitted, [currentId]: true } }))

  const reset = () =>
    setState((s) => {
      const a = { ...s.answers }
      delete a[currentId]
      const sub = { ...s.submitted }
      delete sub[currentId]
      return { ...s, answers: a, submitted: sub }
    })

  const setMode = (mode: 'review' | 'test') => setState((s) => ({ ...s, mode }))

  // Tiến độ mỗi đề: số câu đã trả lời / tổng.
  const progressOf = (testId: string) => {
    const a = state.answers[testId] ?? {}
    return Object.keys(a).length
  }

  // Số câu đúng mỗi đề (để tô màu sidebar).
  const correctOf = (testId: string) => {
    const t = allTests.find((x) => x.id === testId)!
    const a = state.answers[testId] ?? {}
    let c = 0
    t.picture?.questions.forEach((q) => a[`pic${q.n}`] === q.answer && c++)
    t.match?.pairs.forEach((p) => a[`match${p.n}`] === p.answer && c++)
    t.mcq?.questions.forEach((q) => a[`mcq${q.n}`] === q.answer && c++)
    return c
  }

  return (
    <div className="app">
      <aside className={`sidebar ${navOpen ? 'open' : ''}`}>
        <div className="brand">
          <div className="logo">🎧</div>
          <div>
            <div className="brand-title">Ôn Nghe</div>
            <div className="brand-sub">Part 1 · 2 · 3</div>
          </div>
        </div>

        <div className="mode-switch">
          <button
            className={state.mode === 'review' ? 'active' : ''}
            onClick={() => setMode('review')}
          >
            Ôn tập
          </button>
          <button
            className={state.mode === 'test' ? 'active' : ''}
            onClick={() => setMode('test')}
          >
            Kiểm tra
          </button>
        </div>
        <p className="mode-hint">
          {state.mode === 'review'
            ? 'Chọn xong là hiện đúng/sai ngay.'
            : 'Tự làm hết rồi bấm “Nộp bài” để chấm.'}
        </p>

        <nav className="nav">
          {sections.map((sec) => (
            <div key={sec.group} className="nav-section">
              <div className="nav-section-title">
                {sec.title}
                <span className="nav-section-sub">{sec.subtitle}</span>
              </div>
              {sec.tests.map((t) => {
                const done = progressOf(t.id)
                const total = countQuestions(t)
                const correct = correctOf(t.id)
                const complete = done >= total
                return (
                  <button
                    key={t.id}
                    className={`nav-item ${currentId === t.id ? 'current' : ''}`}
                    onClick={() => {
                      setCurrentId(t.id)
                      setNavOpen(false)
                    }}
                  >
                    <span className="ni-title">{t.title}</span>
                    <span className={`ni-badge ${complete ? 'full' : done ? 'partial' : ''}`}>
                      {done ? `${correct}/${total}` : `${total} câu`}
                    </span>
                  </button>
                )
              })}
            </div>
          ))}
        </nav>

        <div className="sidebar-foot">
          Đáp án lấy từ phần bạn đã tô trong đề gốc.
        </div>
      </aside>

      <main className="main">
        <div className="topbar">
          <button className="hamburger" onClick={() => setNavOpen((v) => !v)}>
            ☰
          </button>
          <span className="topbar-title">{current.title}</span>
          <span className={`topbar-mode ${state.mode}`}>
            {state.mode === 'review' ? 'Ôn tập' : 'Kiểm tra'}
          </span>
        </div>

        <TestView
          key={current.id}
          test={current}
          answers={answers}
          submitted={submitted}
          mode={state.mode}
          onAnswer={setAnswer}
          onSubmit={submit}
          onReset={reset}
        />
      </main>

      {navOpen && <div className="backdrop" onClick={() => setNavOpen(false)} />}
    </div>
  )
}
