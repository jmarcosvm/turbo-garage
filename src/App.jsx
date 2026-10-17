import { useState } from 'react'
import Header from './components/Header.jsx'
import Banner from './components/Banner.jsx'
import ListaCarros from './components/ListaCarros.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [itensNoCarrinho, setItensNoCarrinho] = useState(0)

  function comprar() {
    setItensNoCarrinho(itensNoCarrinho + 1)
  }

  return (
    <div>
      <Header itensNoCarrinho={itensNoCarrinho} />
      <Banner />
      <ListaCarros onComprar={comprar} />
      <Footer />
    </div>
  )
}

export default App