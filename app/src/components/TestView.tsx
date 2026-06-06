import { useMemo, useState } from 'react'
import type { Test } from '../types'
import { countQuestions } from '../data'
import { asset } from '../storage'
import ChoiceCard from './ChoiceCard'
import MatchCard from './MatchCard'

interface Props {
  test: Test
  answers: Record<string, string>
  submitted: boolean
  mode: 'review' | 'test'
  onAnswer: (qid: string, key: string) => void
  onSubmit: () => void
  onReset: () => void
}

export default function TestView({ test, answers, submitted, mode, onAnswer, onSubmit, onReset }: Props) {
  const [showImages, setShowImages] = useState(false)

  // Một câu được "mở đáp án" khi: chế độ Ôn tập + đã chọn, HOẶC chế độ Kiểm tra + đã nộp.
  const revealOf = (selected?: string) =>
    mode === 'review' ? selected != null : submitted

  const { total, answered, correct } = useMemo(() => {
    let total = 0
    let answered = 0
    let correct = 0
    const check = (qid: string, ans: string) => {
      total++
      const sel = answers[qid]
      if (sel != null) answered++
      if (sel === ans) correct++
    }
    test.picture?.questions.forEach((q) => check(`pic${q.n}`, q.answer))
    test.match?.pairs.forEach((p) => check(`match${p.n}`, p.answer))
    test.mcq?.questions.forEach((q) => check(`mcq${q.n}`, q.answer))
    return { total, answered, correct }
  }, [test, answers])

  const showScore = mode === 'review' ? answered > 0 : submitted

  return (
    <div className="test-view">
      <header className="tv-head">
        <h2>{test.title}</h2>
        <div className="tv-meta">{countQuestions(test)} câu</div>
      </header>

      <div className="tv-tools">
        <button className="btn ghost" onClick={() => setShowImages((v) => !v)}>
          {showImages ? 'Ẩn đề gốc' : '🖼️ Xem đề gốc (có tranh)'}
        </button>
        <button className="btn ghost" onClick={onReset}>
          ↺ Làm lại đề này
        </button>
        {mode === 'test' && !submitted && (
          <button className="btn primary" onClick={onSubmit}>
            ✓ Nộp bài
          </button>
        )}
      </div>

      {showImages && (
        <div className="orig-images">
          <p className="hint">Đây là ảnh đề gốc bạn đã tô đáp án — dùng để xem tranh hoặc đối chiếu.</p>
          {test.images.map((src) => (
            <img key={src} src={asset(src)} alt={test.title} loading="lazy" />
          ))}
        </div>
      )}

      {showScore && (
        <div className={`score-bar ${correct === total ? 'perfect' : ''}`}>
          Kết quả: <b>{correct}</b> / {total} đúng
          {mode === 'test' && <span> · đã trả lời {answered}/{total}</span>}
        </div>
      )}

      {test.picture && (
        <section className="part">
          <h3 className="part-title">Part 1 · Tranh</h3>
          <p className="part-intro">{test.picture.intro}</p>
          {!test.picture.questions[0]?.img && (
            <div className="page-pics">
              <p className="hint">Nhìn tranh của các câu trong ảnh đề dưới đây rồi chọn A/B/C.</p>
              {(test.cleanImages ?? test.images).map((src) => (
                <img key={src} src={asset(src)} alt={test.title} loading="lazy" />
              ))}
            </div>
          )}
          {test.picture.questions.map((q) => (
            <ChoiceCard
              key={q.n}
              q={q}
              selected={answers[`pic${q.n}`]}
              revealed={revealOf(answers[`pic${q.n}`])}
              onSelect={(k) => onAnswer(`pic${q.n}`, k)}
            />
          ))}
        </section>
      )}

      {test.match && (
        <section className="part">
          <h3 className="part-title">Part 2 · Nối</h3>
          {test.match.img && (
            <div className="page-pics">
              <p className="hint">Đề gốc (đã xoá đáp án):</p>
              <img src={asset(test.match.img)} alt="Part 2" loading="lazy" />
            </div>
          )}
          <MatchCard
            part={test.match}
            answers={answers}
            mode={mode}
            submitted={submitted}
            onSelect={onAnswer}
          />
          {(mode === 'review' || submitted) && test.match.note && (
            <div className="note">💡 {test.match.note}</div>
          )}
        </section>
      )}

      {test.mcq && (
        <section className="part">
          <h3 className="part-title">Part 3 · Trắc nghiệm</h3>
          <p className="part-intro">{test.mcq.intro}</p>
          {test.mcq.imgs && test.mcq.imgs.length > 0 && (
            <div className="page-pics">
              <p className="hint">Đề gốc (đã xoá đáp án):</p>
              {test.mcq.imgs.map((src) => (
                <img key={src} src={asset(src)} alt="Part 3" loading="lazy" />
              ))}
            </div>
          )}
          {test.mcq.example && (
            <ChoiceCard
              q={test.mcq.example}
              selected={test.mcq.example.answer}
              revealed
              onSelect={() => {}}
              numberLabel="Ví dụ"
            />
          )}
          {test.mcq.questions.map((q) => (
            <ChoiceCard
              key={q.n}
              q={q}
              selected={answers[`mcq${q.n}`]}
              revealed={revealOf(answers[`mcq${q.n}`])}
              onSelect={(k) => onAnswer(`mcq${q.n}`, k)}
            />
          ))}
          {(mode === 'review' || submitted) && test.mcq.note && (
            <div className="note">💡 {test.mcq.note}</div>
          )}
        </section>
      )}
    </div>
  )
}
