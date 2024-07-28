import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CameraTimeline } from './AnimatedCamera'
import Scene from './Scene'
import SimpleSlide from './SimpleSlide'

function getScrollProgress() {
  // This will calculate how many pixels the page is vertically
  const winScroll = window.document.documentElement.scrollTop;

  // This is responsible for subtracticing the total height of the page - where the users page is scrolled to
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  // This will calculate the final total of the percentage of how much the user has scrolled (0-1)
  return winScroll / height;
}

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    window.onscroll = e => {
      const scrolled = getScrollProgress()
      CameraTimeline.progress(scrolled)

      return () => window.onscroll = null
    }
  }, [])

  return (
    <article id="article_wrapper">
      <SimpleSlide viewportPosition={20}>
        <h1>0 haunt hunt</h1>
      </SimpleSlide>
      <SimpleSlide viewportPosition={100}>
        <p>1 haunt hunt is a custom, two player arcade game where one player takes on the role of a detective, while the other embodies a mischievous ghost.</p>
      </SimpleSlide>
      <SimpleSlide viewportPosition={200}>
        <p>2 detective has a radar to get the ghost's location, a _ to set a trap to slow down the ghost, _ to extend field of view, _ to reveal the front area. </p>
      </SimpleSlide>
      <SimpleSlide viewportPosition={300}>
        <p>3 ghost can use _ to place a moving duplicate, if a duplicate is killed, detective's movements get disturbed for a few seconds, _ to be immune and invisible from the detective's light, and able to go through the walls for 5 seconds, _ to teleport to a random location.</p>
      </SimpleSlide>
      <SimpleSlide viewportPosition={400}>
        <h2>4 acrylic top</h2>
        <p>on the top of the arcade is an laser cut acrylic that serves as a screen protector for the external monitor.</p>
      </SimpleSlide>
      <SimpleSlide viewportPosition={500}>
        <h2>6 controls</h2>
        <p>buttons and joysticks are located on the platforms on the sides.</p>
      </SimpleSlide>
      <SimpleSlide viewportPosition={600}>
        <h2>6 speaker</h2>
        <p>the hole on the front side of the cabinet is where the souund speaker is put.</p>
      </SimpleSlide>
      <SimpleSlide viewportPosition={700}>
        <h2>7 storage</h2>
        <p>on the back side, a storage is available to put the laptop.</p>
      </SimpleSlide>
      <SimpleSlide viewportPosition={800}>
        <h2>credit</h2>
      </SimpleSlide>
      <Scene />
    </article>
  )
}

export default App
