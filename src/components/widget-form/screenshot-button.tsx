import html2canvas from 'html2canvas'

import { Camera } from "phosphor-react";

export function ScreenshotButton () {
  const handleTakeScreenshot = async () => {
    const canvas = await html2canvas(document.querySelector('html')!)
    const base64Image = canvas.toDataURL('image/png')

    console.log(base64Image)
  }

  return (
    <button
      type='button'
      className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors"
      onClick={handleTakeScreenshot}
    >
      <Camera className="w-6 h-6" />
    </button>
  )
}
