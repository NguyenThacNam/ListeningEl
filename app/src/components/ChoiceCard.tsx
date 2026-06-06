import type { ChoiceQ } from '../types'
import { asset } from '../storage'

interface Props {
  q: ChoiceQ
  selected?: string
  revealed: boolean
  onSelect: (key: string) => void
  numberLabel?: string
}

export default function ChoiceCard({ q, selected, revealed, onSelect, numberLabel }: Props) {
  const correct = q.answer
  const isRight = revealed && selected === correct
  const isWrong = revealed && selected != null && selected !== correct

  return (
    <div className={`q-card ${isRight ? 'ok' : ''} ${isWrong ? 'bad' : ''}`}>
      <div className="q-head">
        <span className="q-num">{numberLabel ?? `Câu ${q.n}`}</span>
        <span className="q-prompt">{q.prompt}</span>
      </div>
      {q.img && (
        <img className="q-img" src={asset(q.img)} alt={`Câu ${q.n}`} loading="lazy" />
      )}
      <div className="opt-row">
        {q.options.map((o) => {
          const chosen = selected === o.key
          const showCorrect = revealed && o.key === correct
          const showWrong = revealed && chosen && o.key !== correct
          return (
            <button
              key={o.key}
              type="button"
              className={[
                'opt',
                chosen && !revealed ? 'chosen' : '',
                showCorrect ? 'correct' : '',
                showWrong ? 'wrong' : '',
              ].join(' ')}
              onClick={() => onSelect(o.key)}
            >
              <span className="opt-key">{o.key}</span>
              <span className="opt-label">{o.label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
