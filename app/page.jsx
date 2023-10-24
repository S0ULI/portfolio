import Image from 'next/image'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Projects from './components/projrcts/Projects'

export default function Home() {
  return (
    <div className='mt-[64px] minh flex flex-col gap-12'>
      <Hero/>
      <AboutMe/>
      <Projects/>
    </div>
  )
}
