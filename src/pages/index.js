import Head from 'next/head'
import styles from '@/styles/index.module.css'
import Navbar from '@/components/navbar/navbar'
import Subtitle from '@/components/tipography/subtitle/subtitle'
import Container from '@/components/container/container'
import SaleCard from '@/components/cards/saleCards/saleCard'
import GameCard from '@/components/cards/gameCard/gameCard'

export default function Home() {
  return (
    <>
      <Head>
        <title>DevSteam: A sua loja online de games</title>
        <meta name="description" content="DevSteam: A sua loja online de games" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
        <Container>
          <div className={styles.session}>
            <Subtitle>Promoções</Subtitle>
            <div className={styles.salecontainer}>
              <SaleCard
                image={'league-of-legends.jpg'}
                fullPrice={125.00}
                discount={50}
              />
              <SaleCard
                image={'dota-2.jpg'}
                fullPrice={185.00}
                discount={20}
              />
              <SaleCard
                image={'valorant.jpg'}
              />
            </div>
          </div>

          
          <div className={styles.session}>
            <Subtitle>Outros Jogos</Subtitle>
            <div className={styles.gamecontainer}>
              <GameCard
                image={'counter-strike.jpg'}
              />
              <GameCard
                image={'sea-of-thievs.jpg'}
              />
              <GameCard
                image={'elden-ring.jpg'}
              />
              <GameCard
                image={'fifa.jpg'}
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
