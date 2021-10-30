import './App.css';
import { useRef, useEffect } from 'react';
import { Sampler } from 'tone';
import Container from './components/Container';

import A1 from './assets/audio/go-to-hell.wav';
import A2 from './assets/audio/kiss-my-butt.wav';
import A3 from './assets/audio/shut-up.wav';
import img from './assets/image/logo.svg'

function App() {

  let sampler = useRef(null);

  useEffect(() => {
    sampler.current = new Sampler(
      { A1, A2, A3 }
    ).toDestination()
  }, []);

  const audioTracks = [
    { name: 'go-to-hell', handleClick: () => sampler.current.triggerAttack('A1') },
    { name: 'kiss-my-butt', handleClick: () => sampler.current.triggerAttack('A2') },
    { name: 'shut-up', handleClick: () => sampler.current.triggerAttack('A3') },
  ]

  return (
    <div className="App">
      <h1 className="header">
        <img
          className="header-img"
          src={img}
          alt="Li'l-Bastard"
        />
      </h1>
      <Container 
        audioTracks={audioTracks}
      />
    </div>
  );
}

export default App;