'use client'
import { useRouter } from "next/navigation"
import { MouseEvent } from "react"

export default function Home() {
  const router = useRouter()

  return (
    <main className='w-full h-screen flex justify-center items-center'>
      <ul className='flex flex-col w-2/5 h-2/4 border-solid border-2 rounded-md gap-2 items-center justify-center'>
        <li onClick={() => router.push('/formulario')} className='border-solid border-2 rounded-md p-2 text-white w-2/4 cursor-pointer'>Formulario</li>
        <li onClick={() => router.push('/buscador')} className='border-solid border-2 rounded-md p-2 text-white w-2/4 cursor-pointer'>Buscador</li>
        <li onClick={() => router.push('/todoapp')} className='border-solid border-2 rounded-md p-2 text-white w-2/4 cursor-pointer'>ToDo App</li>
      </ul>
    </main>
  )
}
