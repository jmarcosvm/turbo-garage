import CardCarro from './CardCarro.jsx'
import carros from '../data/carros.js'

function ListaCarros({ onComprar }) {
  return (
    <section id="carros">
      <h2>Nossos Carros</h2>
      <div className="grade">
        {carros.map((carro) => (
          <CardCarro key={carro.id} carro={carro} onComprar={onComprar} />
        ))}
      </div>
    </section>
  )
}

export default ListaCarros