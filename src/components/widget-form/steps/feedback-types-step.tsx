import { FeedbackType, feedbackTypes } from ".."

type Props = {
  onFeedbackTypesChanged: (type: FeedbackType) => void
}

export function FeedbackTypesStep ({ onFeedbackTypesChanged }: Props) {
  return (
    <div className="flex py-8 gap-2 w-full">
      {Object.entries(feedbackTypes).map(([key, value]) => {
        return (
          <button
            key={key}
            className="bg-zinc-800 rounded-lg py-5 w-24 flex flex-col flex-1 items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
            onClick={() => onFeedbackTypesChanged(key as FeedbackType)}
          >
            <img src={value.image.source} alt={value.image.alt} />
            <span>{value.title}</span>
          </button>
        )
      })}
    </div>
  )
}
