import { ReactNode } from "react"

type ButtonProps = {
  text?: string
}

function Button ({ text = 'Default' }: ButtonProps) {
  return <button className="bg-violet-500 text-violet-100 p-2 h-10 rounded hover:bg-violet-700 transition-colors">
    {text}
  </button>
}

export function App() {
  return (
    <>
      <h1>Feedget</h1> 
      <div className="flex gap-2">
        <Button text='Enviar' />
        <Button text='Ok' />
        <Button  />
      </div>
    </>
  )
}

export default App
