function CardCarro({ carro, onComprar }) {
  const precoFormatado = carro.preco.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return (
    <article>
      <img src={carro.imagem} alt={carro.nome} width="300" />
      <h3>{carro.nome}</h3>
      <p>{carro.potencia} cv</p>
      <p>{precoFormatado}</p>
      <button onClick={onComprar}>Comprar</button>
    </article>
  )
}

export default CardCarro