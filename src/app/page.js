import About from './components/About'
import Blogs from './components/Blog'
import LatestProjects from './components/LatestProjects'

export default function Home() {
  return (
    <main className='flex flex-wrap'>
      <About />
      <Blogs />
      <LatestProjects />
    </main>
  )
}
