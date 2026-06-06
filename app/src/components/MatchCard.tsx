import type { MatchPart } from '../types'

interface Props {
  part: MatchPart
  answers: Record<string, string>
  mode: 'review' | 'test'
  submitted: boolean
  onSelect: (qid: string, key: string) => void
}

const qid = (n: number) => `match${n}`

export default function MatchCard({ part, answers, mode, submitted, onSelect }: Props) {
  return (
    <div className="match-wrap">
      <p className="match-intro">{part.intro}</p>

      <div className="bank">
        <div className="bank-title">Danh sách lựa chọn</div>
        <ul>
          {part.bank.map((b) => (
            <li key={b.key}>
              <b>{b.key}</b> — {b.label}
            </li>
          ))}
        </ul>
      </div>

      {part.example && (
        <div className="match-row example">
          <span className="m-name">Ví dụ · {part.example.name}</span>
          <span className="m-chips">
            <span className="chip correct">{part.example.answer}</span>
          </span>
        </div>
      )}

      {part.pairs.map((p) => {
        const sel = answers[qid(p.n)]
        // Ôn tập: mở khi dòng này đã chọn. Kiểm tra: mở khi đã nộp.
        const revealed = mode === 'review' ? sel != null : submitted
        const isRight = revealed && sel === p.answer
        const isWrong = revealed && sel != null && sel !== p.answer
        return (
          <div key={p.n} className={`match-row ${isRight ? 'ok' : ''} ${isWrong ? 'bad' : ''}`}>
            <span className="m-name">
              <span className="q-num small">{p.n}</span>
              {p.name}
            </span>
            <span className="m-chips">
              {part.bank.map((b) => {
                const chosen = sel === b.key
                const showCorrect = revealed && b.key === p.answer
                const showWrong = revealed && chosen && b.key !== p.answer
                return (
                  <button
                    key={b.key}
                    type="button"
                    title={b.label}
                    className={[
                      'chip',
                      chosen && !revealed ? 'chosen' : '',
                      showCorrect ? 'correct' : '',
                      showWrong ? 'wrong' : '',
                    ].join(' ')}
                    onClick={() => onSelect(qid(p.n), b.key)}
                  >
                    {b.key}
                  </button>
                )
              })}
            </span>
          </div>
        )
      })}
    </div>
  )
}
