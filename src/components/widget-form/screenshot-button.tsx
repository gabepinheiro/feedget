import { useState } from 'react';

import html2canvas from 'html2canvas'

import { Camera } from "phosphor-react";

import { Loading } from '../loading'

type Props = {
  onScreenshotTook: (screenshot: string) => void
}

export function ScreenshotButton ({ onScreenshotTook }: Props) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)

  const handleTakeScreenshot = async () => {
    setIsTakingScreenshot(true)

    const canvas = await html2canvas(document.querySelector('html')!)
    const base64Image = canvas.toDataURL('image/png')

    onScreenshotTook(base64Image)

    setTimeout(() => {
      setIsTakingScreenshot(false)
    }, 2000)
  }

  return (
    <button
      type='button'
      className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors"
      onClick={handleTakeScreenshot}
    >
      {isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6" />}
    </button>
  )
}
