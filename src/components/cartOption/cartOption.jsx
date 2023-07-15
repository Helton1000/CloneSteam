import Image from 'next/image'
import styles from './cartOption.module.css'

export default function CartOption(){
    return(
        <div>
            <Image src={`/products/league-of-legends.jpg`} width={62} height={74}/>
            <div>
                <h3>League of Legends</h3>
                <h3>R$ 99,90</h3>
                <p>remover</p>
            </div>
        </div>
    )
}