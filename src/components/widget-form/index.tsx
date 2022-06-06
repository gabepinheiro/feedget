import { useState } from "react";

import { CloseButton } from "../close-button";

import bugImageUrl from '../../assets/bug.svg'
import ideaImageUrl from '../../assets/idea.svg'
import otherImageUrl from '../../assets/other.svg'
import { FeedbackTypesStep } from "./steps";

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Imagem de um inseto.'
    }
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImageUrl,
      alt: 'Imagem de uma lâmpada.'
    }
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: otherImageUrl,
      alt: 'Imagem de balão de pensamento.'
    }
  }
}

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm () {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

  const handleFeedbackTypesChanged = (type: FeedbackType) => {
    setFeedbackType(type)
  }

  return (
    <div className="w-[calc(100vw-2rem)] md:w-auto bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg">
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>

        <CloseButton />
      </header>

      {!feedbackType && (
        <FeedbackTypesStep
          onFeedbackTypesChanged={handleFeedbackTypesChanged}
        />
      )}

      {feedbackType && <p>Hello World</p>}

      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela <a href="https://www.rocketseat.com.br/" className="underline underline-offset-2">Rocketseat</a>
      </footer>
    </div>
  )
}
