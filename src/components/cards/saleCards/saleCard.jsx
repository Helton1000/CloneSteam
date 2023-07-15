import styles from './saleCard.module.css'
import Image from 'next/image'
import Button from '@/components/forms/button/button'

export default function SaleCard({ image, discount, fullPrice, discountPrice, onAdd}){
    return(
        <div className={styles.salecard}>
            <Image src={`/products/${image}`} alt={`Produto ${image}`} width={250} height={300} />
            <div className={styles.info}>
                <h3 className={styles.title}>Oferta Exclusiva</h3>
                <div className={styles.pricecard}>
                    <div className={styles.percent}>-{discount + '%'}</div>
                    <div className={styles.price}>
                        <p className={styles.fullprice}>R${Number(fullPrice).toFixed(2)}</p>
                        <h4 className={styles.discountprice}>R${discountPrice = (fullPrice - (fullPrice * (discount/100))).toFixed(2)}</h4>
                    </div>
                </div>
                <Button onClick={onAdd} fullwidth>Adicionar ao carrinho</Button>
            </div>
        </div>
    )
}

SaleCard.defaultProps ={
    image: 'league-of-legends.jpg',
    discount: '90',
    fullPrice: '199.90',
}

