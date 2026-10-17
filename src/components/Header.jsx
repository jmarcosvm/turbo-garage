function Header({ itensNoCarrinho }) {
  return (
    <header>
      <strong>Turbo Garage</strong>
      <nav>
        <a href="#carros">Carros</a>
        <a href="#contato">Contato</a>
      </nav>
      <span>🛒 {itensNoCarrinho}</span>
    </header>
  )
}

export default Header

