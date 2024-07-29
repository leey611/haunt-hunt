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
      <SimpleSlide viewportPosition={15}>
        <h1>haunt hunt</h1>
        <h2 id="subtitle">an indie, custom arcade game</h2>
      </SimpleSlide>
      <SimpleSlide viewportPosition={100}>
        <p>haunt hunt is a custom, two player arcade game where one player takes on the role of a detective, while the other embodies a mischievous ghost.</p>
      </SimpleSlide>
      <SimpleSlide viewportPosition={200}>
        <p>detective has a radar to get the ghost's location, a _ to set a trap to slow down the ghost, _ to extend field of view, _ to reveal the front area. </p>
      </SimpleSlide>
      <SimpleSlide viewportPosition={300}>
        <p>ghost can use _ to place a moving duplicate, if a duplicate is killed, detective's movements get disturbed for a few seconds, _ to be immune and invisible from the detective's light, and able to go through the walls for 5 seconds, _ to teleport to a random location.</p>
      </SimpleSlide>
      <SimpleSlide viewportPosition={400}>
        <h2>acrylic top</h2>
        <p>on the top of the arcade is an laser cut acrylic that serves as a screen protector for the external monitor.</p>
      </SimpleSlide>
      <SimpleSlide viewportPosition={500}>
        <h2>controls</h2>
        <p>buttons and joysticks are located on the platforms on the sides.</p>
      </SimpleSlide>
      <SimpleSlide viewportPosition={600}>
        <h2>speaker</h2>
        <p>the hole on the front side of the cabinet is where the souund speaker is put.</p>
      </SimpleSlide>
      <SimpleSlide viewportPosition={700}>
        <h2>storage</h2>
        <p>on the back side, a storage is available to put the laptop.</p>
      </SimpleSlide>
      <SimpleSlide viewportPosition={800}>
        <h2>credits</h2>
        <ul>
          <li>eric shen - game development</li>
          <li>johnny zhou - physical computing, game design</li>
          <li>yu lee - fabrication, documentation</li>
        </ul>
        <h2>special thanks</h2>
        <ul id='special_thanks'>
          <li>@newarcadeitp</li>
          <li>@wondervillenyc</li>
        </ul>
      </SimpleSlide>
      <Scene />
    </article>
  )
}

export default App
