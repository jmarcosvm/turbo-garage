# Turbo Garage

Loja virtual de supercarros que fiz para aprender React. A página mostra seis carros, da Ferrari SF90 ao Koenigsegg Jesko, cada um com foto, potência e preço. O botão Comprar soma o carro no contador do carrinho, lá no topo da página.

![Tela inicial da Turbo Garage](docs/tela-inicial.png)

## O que a loja faz

- Monta o catálogo a partir de uma lista de dados, então dá para incluir um carro novo sem mexer no visual.
- Mostra os preços no formato brasileiro (R$ 5.500.000,00).
- Conta quantos carros foram adicionados ao carrinho.
- Leva até cada parte da página pelos links do menu.
- Reorganiza os cartões dos carros conforme a largura da tela: três por linha no computador e um no celular.

## Tecnologias

Usei React para montar a página e Vite para rodar o projeto e gerar a versão publicada. O visual é todo em CSS puro, com Flexbox no cabeçalho e Grid na lista de carros.

## Componentes

Dividi a página em sete componentes, cada um em seu arquivo dentro de `src/components`, menos o `App`.

**App** é o componente principal. Ele encaixa os outros na ordem da página e guarda o número de itens no carrinho com `useState`. Guardei esse número aqui porque dois componentes precisam dele: o `Header` mostra o número e o `CardCarro` muda o valor.

**Header** é o cabeçalho, que fica preso no topo enquanto a página rola. Tem o nome da loja, o menu e o contador do carrinho.

**Banner** é a faixa de abertura, com a frase da loja.

**ListaCarros** pega a lista de carros de `src/data/carros.js` e cria um `CardCarro` para cada um com `.map()`.

**CardCarro** mostra um carro só: foto, nome, potência, preço e o botão Comprar. Ele recebe o carro e a função de comprar por props, e quando alguém clica no botão, é o `App` que atualiza o carrinho.

**Sobre** tem um texto curto apresentando a loja.

**Footer** é o rodapé, com meu nome, as redes sociais da loja (fictícias) e os créditos das fotos. O ano é calculado com `new Date().getFullYear()`, então se atualiza sozinho.

O caminho das informações entre os componentes fica assim:

```
App (guarda itensNoCarrinho)
├── Header        recebe itensNoCarrinho
├── Banner
├── ListaCarros   recebe onComprar
│   └── CardCarro recebe carro e onComprar
├── Sobre
└── Footer
```

## Como rodar no seu computador

Você precisa do [Node.js](https://nodejs.org/) instalado. No terminal:

```bash
git clone https://github.com/jmarcosvm/turbo-garage.git
cd turbo-garage
npm install
npm run dev
```

Depois abra http://localhost:5173 no navegador.

## Créditos das fotos

As fotos são do [Wikimedia Commons](https://commons.wikimedia.org/) e usam a licença [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.pt-br).

- Calreyn88: Ferrari SF90 Stradale, McLaren 750S e Bugatti Chiron Sport
- Alexander Migl (Alexander-93): Lamborghini Revuelto, Porsche 911 GT3 RS e Koenigsegg Jesko

Os preços são aproximados e servem só para o estudo.

## Autor

João Marcos, [github.com/jmarcosvm](https://github.com/jmarcosvm)
