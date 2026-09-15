import { Suspense, useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Players from './components/Players'
import type { Player } from './type/player'

const playersFetch = async (): Promise<Player[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
}

function App() {
  const [playersPromise] = useState(() => playersFetch());

  const [coin, setCoin] = useState(0);

  return (
    <>
      <Header
        coin={coin}
      />
      <Hero
        coin={coin}
        setCoin={setCoin}
      />
      <Suspense fallback={<div className='container flex items-center justify-center h-76'>
        <div className="loader"></div>
      </div>}>
        <Players
          playersPromise={playersPromise}
          coin={coin}
          setCoin={setCoin}
        />
      </Suspense>
      <Footer />
    </>
  )
}

export default App
