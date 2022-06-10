import { ChangeEvent, FormEvent, useState } from "react"

import { ArrowLeft } from "phosphor-react"

import { CloseButton } from "../../close-button"

import { ScreenshotButton } from "../screenshot-button"

import { api } from "../../../lib/api"

import  { FeedbackType, feedbackTypes } from '../'

type Props = {
  feedbackType: FeedbackType
  onFeedbackRestartRequested: () => void
  onFeedbackSent: () => void
}

export function FeedbackContentStep ({
  feedbackType,
  onFeedbackRestartRequested,
  onFeedbackSent
}: Props) {
  const [screenshot, setScreenshot] = useState<string | null>(null)
  const feedbackTypeInfo = feedbackTypes[feedbackType]
  const [comment, setComment] = useState('')

  const handleScreenshotTook = (screenshot: string | null) => {
    setScreenshot(screenshot)
  }

  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value)
  }

  const handleSubmitFeedback = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

   try {
      const res = await api.post('/feedbacks', {
        type: feedbackType,
        screenshot,
        comment
      })

     onFeedbackSent()
   } catch (error) {

   }
  }

  return (
    <>
      <header>
        <button
          className="absolute top-5 left-5 text-zinc-400 hover:text-zinc-100"
          onClick={onFeedbackRestartRequested}
        >
          <ArrowLeft className="w-4 h-4" weight="bold" />
        </button>
        <span className="text-xl leading-6 flex items-center gap-2">
          <img
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
            className='w-6 h-6'
          />
          {feedbackTypeInfo.title}
        </span>

        <CloseButton />
      </header>
      <form className="my-4 w-full" onSubmit={handleSubmitFeedback}>
        <textarea
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalhes o que está acontecendo..."
          onChange={handleCommentChange}
        />

        <footer className="flex gap-2 mt-3">
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshotTook={handleScreenshotTook}
          />

          <button
            type="submit"
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
            disabled={!comment}
          >
            Enviar Feedback
          </button>
        </footer>
      </form>
    </>
  )
}
