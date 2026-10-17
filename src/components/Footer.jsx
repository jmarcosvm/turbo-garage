function Footer() {
  const ano = new Date().getFullYear()

  return (
    <footer id="contato">
      <p>© {ano} Turbo Garage, desenvolvido por João Marcos</p>

      <ul>
        <li>📷 @turbogarage.br</li>
        <li>𝕏 @turbogarage</li>
        <li>📧 contato@turbogarage.com</li>
      </ul>

      <p className="creditos">
        Fotos: Calreyn88 e Alexander Migl (Alexander-93), via Wikimedia Commons (CC BY-SA 4.0).
      </p>
    </footer>
  )
}

export default Footer