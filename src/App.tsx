import { useState } from 'react'
import './App.css'
import mochalove from './assets/mocha-love.gif'
import mochacrying from './assets/mocha-crying.gif'
import mochakisses from './assets/mocha-kisses.gif'
import mochadrama from './assets/mocha-drama.gif'
import mochaheartbreak from './assets/mocha-heartbreake.webp'
import mochapampering from './assets/mocha-pampering.gif'

function App() {
  const [yes, setYes] = useState(false)
  const [noClicks, setNoClicks] = useState(0)

  const getNoGif = () => {
    const gifs = [mochalove, mochacrying, mochadrama, mochaheartbreak, mochapampering]
    return gifs[noClicks % gifs.length]
  }

  const handleNoClick = () => {
    setNoClicks(noClicks + 1)
  }

  return (
    <main className='bg-linear-to-br from-pink-300 via-pink-200 to-red-200 h-screen w-full flex flex-col items-center justify-center p-4'>
      <div className='mb-8'>
          <img src={yes ? mochakisses : getNoGif()} className="logo react w-64 h-64 rounded-lg" alt="React logo" />
      </div>
      <h1 className='text-5xl font-bold text-white drop-shadow-lg mb-4 text-center'>
        {yes ? '¡Te amo! 😘' : noClicks > 0 ? '¿Por qué me hiciste esto? 😭' : 'Vengo a hacerte una sencilla pregunta'}
      </h1>
      <div className="bg-white rounded-3xl shadow-2xl p-8 backdrop-blur-sm bg-opacity-95">
        <h3 className='text-3xl font-bold text-pink-600 mb-8 text-center'>¿Me amas? 💕</h3>
        <div className='flex gap-6 justify-center relative min-h-16'>
          {noClicks > 0 && (
            <button 
              onClick={() => setYes(true)}
              className='px-8 py-3 bg-gradient-to-r from-red-400 to-pink-500 text-white font-bold text-lg rounded-lg hover:shadow-xl hover:scale-110 transition-all duration-200 cursor-pointer'
            >
              Si ❤️
            </button>
          )}
          <button
            onClick={handleNoClick}
            className='px-8 py-3 bg-gray-400 text-white font-bold text-lg rounded-lg transition-transform duration-200 cursor-pointer hover:bg-gray-500'
          >
            No
          </button>
        </div>
        {yes && (
          <p className='text-center mt-6 text-2xl font-bold text-pink-600 animate-pulse'>
            ¡Sabía que me amabas!. Yo también te amo mucho, como no imaginas, eres mi rayito de luz y mi inspiración diaria ❤️🥺.
          </p>
        )}
      </div>
      <p className="text-white text-sm mt-8 text-center opacity-80">
        Responde con sinceridad 💕
      </p>
    </main>
  )
}

export default App
