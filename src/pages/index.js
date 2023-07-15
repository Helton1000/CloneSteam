import { useState } from 'react'
import Head from 'next/head'
import styles from '@/styles/index.module.css'
import Navbar from '@/components/navbar/navbar'
import Subtitle from '@/components/tipography/subtitle/subtitle'
import Container from '@/components/container/container'
import SaleCard from '@/components/cards/saleCards/saleCard'
import GameCard from '@/components/cards/gameCard/gameCard'

export default function Home() {
  const [cart, setCart] = useState([])

  const handleAddProduct = (info) =>{
    setCart([...cart, info])
  }

  const handleRemoveProduct = (pos) =>{
    setCart(cart.filter((obj, posObj) => posObj !== pos))
  }
  return (
    <>
      <Head>
        <title>DevSteam: A sua loja online de games</title>
        <meta name="description" content="DevSteam: A sua loja online de games" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar cart={cart} onRemove={handleRemoveProduct} />
        <Container>
          <div className={styles.session}>
            <Subtitle>Promoções</Subtitle>
            <div className={styles.salecontainer}>
              <SaleCard
                image={'league-of-legends.jpg'}
                fullPrice={125.00}
                discount={50}
                onAdd={() => handleAddProduct({name: 'League of Legends', price: 62.50, image: 'league-of-legends.jpg'})}
              />
              <SaleCard
                image={'dota-2.jpg'}
                fullPrice={185.00}
                discount={48}
                onAdd={() => handleAddProduct({name: 'Dota 2', price: 96.20
                , image: 'dota-2.jpg'})}
              />
              <SaleCard
                image={'valorant.jpg'}
                fullPrice={285.00}
                discount={63}
                onAdd={() => handleAddProduct({name: 'Valorant', price: 105.45, image: 'valorant.jpg'})}
              />
            </div>
          </div>

          
          <div className={styles.session}>
            <Subtitle>Outros Jogos</Subtitle>
            <div className={styles.gamecontainer}>
              <GameCard
                image={'counter-strike.jpg'}
                name={'Counter-Strike: Global Offensive'}
                value={'Gratuito'}
                gender={'Tiro em Primeira Pessoa(FPS), Multijogador, Ação, Estratégia'}
                onAdd={() => handleAddProduct({name: 'Counter-Strike: Global Offensive', price: 0, image: 'counter-strike.jpg'})}
              />
              <GameCard
                image={'sea-of-thievs.jpg'}
                name={'Sea of Thieves 2023 Edition'}
                value={'R$89,99'}
                onAdd={() => handleAddProduct({name: 'Sea of Thievs', price: 89.99, image: 'sea-of-thievs.jpg'})}
              />
              <GameCard
                image={'elden-ring.jpg'}
                name={'ELDEN RING'}
                value={'R$249,90'}
                gender={'Soulslike, Fantasia Sombria, RPG, Mundo Aberto'}
                onAdd={() => handleAddProduct({name: 'Elden Ring', price: 249.90, image: 'elden-ring.jpg'})}
              />
              <GameCard
                image={'fifa.jpg'}
                name={'EA SPORTS™ FIFA 23'}
                value={'R$299,00'}
                gender={'Futebol, Esportes, Controle, eSports'}
                onAdd={() => handleAddProduct({name: 'FIFA 23', price: 299.00, image: 'fifa.jpg'})}
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
