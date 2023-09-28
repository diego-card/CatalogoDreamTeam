import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import jogadorService from '../../../backend/services/jogadores'
import bandeiraService from '../../../backend/services/bandeiras'
import goleiroService from '../../../backend/services/goleiros';
import Home from './pages/Home';
import Colecoes from './pages/Colecoes';
import ColecaoInfo from './components/ColecaoInfo'
import Navbar from './components/Navbar';
import CardInfo from './components/CardInfo';
import Paises from './pages/Paises';
import Times from './pages/Times';
import PaisInfo from './components/PaisInfo';
import TimeInfo from './components/TimeInfo';
import './styles/App.css'
import Posicoes from './pages/Posicoes';
import PosicaoInfo from './components/PosicaoInfo';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cards, setCards] = useState([])
  // const [jogadores, setJogadores] = useState([])
  // const [goleiros, setGoleiros] = useState([])
  const [bandeiras, setBandeiras] = useState([])

  useEffect(() => {
    // Make an HTTP GET request to the API.
    jogadorService.getAll().then(jogadores => {
      goleiroService.getAll().then(goleiros => {
        const combinedData = [...jogadores, ...goleiros]
        combinedData.sort((a, b) => b.habilidade - a.habilidade);
        setCards(combinedData)
        setIsLoading(false)
      })
    })
      .catch((error) => {
        setError(error)
        setIsLoading(false)
      });

      bandeiraService.getAll().then(bandeiras =>{
        const tudo = [...bandeiras]
        setBandeiras(tudo)
    })
  }, []); // Empty dependency array to run the effect only once.

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className='has-background-grey' id='page'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home cards={cards} bandeiras={bandeiras} />}></Route>
          <Route path='/colecoes' element={<Colecoes />}></Route>
          <Route path='/colecoes/:colecao' element={<ColecaoInfo cards={cards} bandeiras={bandeiras} />}></Route>
          <Route path='/posicoes' element={<Posicoes />}></Route>
          <Route path='/posicoes/:posicao' element={<PosicaoInfo cards={cards} bandeiras={bandeiras} />}></Route>
          <Route path='/times' element={<Times />}></Route>
          <Route path='/times/:time' element={<TimeInfo cards={cards} bandeiras={bandeiras} />}></Route>
          <Route path='/paises' element={<Paises />}></Route>
          <Route path='/paises/:pais' element={<PaisInfo cards={cards} bandeiras={bandeiras} />}></Route>
          <Route path='/carta/:id' element={<CardInfo cards={cards} bandeiras={bandeiras} />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
