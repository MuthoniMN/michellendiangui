import About from './components/About'
import Blogs from './components/Blog'

export default function Home() {
  return (
    <main className='flex flex-wrap'>
      <About />
      <Blogs />
    </main>
  )
}
