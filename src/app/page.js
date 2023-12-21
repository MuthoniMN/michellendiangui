import Image from 'next/image'
import About from './components/About'

export default function Home() {
  return (
    <main>
      <h1 className='text-3xl text-center font-bold'>My Portfolio</h1>

      <About />
    </main>
  )
}
