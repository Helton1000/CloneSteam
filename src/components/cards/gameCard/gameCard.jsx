import styles from './gameCard.module.css'
import Image from 'next/image'
import Button from '@/components/forms/button/button'

export default function GameCard({image, name, gender, value}) {
    return(
        <div className={styles.gamecard}>
            <Image className={styles.image} src={`/products/${image}`} alt={`Produto ${image}`} width={300} height={145}/>
            <div className={styles.info}>
                <h3 className={styles.title}>{name}</h3>
                <p className={styles.category}>{gender}</p>
                <div className={styles.pricing}>
                    <h2 className={styles.price}>{value}</h2>
                    <Button>Adiconar ao carrinho</Button>
                </div>
            </div>
        </div>
    )
}

GameCard.defaultProps ={
    image: 'counter-strike.jpg',
    name: 'Jogos',
    value: 'R$99,90',
    gender: 'Ação, Estratégia, Multijogador.'
}