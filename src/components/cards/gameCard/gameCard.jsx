import styles from './gameCard.module.css'
import Image from 'next/image'
import Button from '@/components/forms/button/button'

export default function GameCard({image}){
    return(
        <div className={styles.gamecard}>
            <Image className={styles.image} src={`/products/${image}`} alt={`Produto ${image}`} width={300} height={145}/>
            <div className={styles.info}>
                <h3 className={styles.title}>Counter strike: Global ofensive</h3>
                <p className={styles.category}>Ação, estratégia, multijogador.</p>
                <div className={styles.pricing}>
                    <h2 className={styles.price}>R$ 99,90</h2>
                    <Button>Adiconar ao carrinho</Button>
                </div>
            </div>
        </div>
    )
}

// GameCard.defaultProps ={
//     image: 'counter-strike.jpg'
// }