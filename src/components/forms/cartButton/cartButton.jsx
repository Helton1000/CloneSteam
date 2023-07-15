import { useState } from 'react'
import styles from './cartButton.module.css'
import { BsCart4 } from 'react-icons/bs'
import CartMenu from '@/components/cartMenu/cartMenu'

export default function CartButton({cart, onRemove}){
    const [open, setOpen] = useState(false)
    return(
        <div>
            <BsCart4 
            className={styles.icon} 
            size={40} 
            // !open é para sempre que tiver true for pra false e vice e versa
            onClick={() => {setOpen(!open)}}
            />
            {open && <CartMenu cart={cart} onRemove={onRemove} />}
        </div>
    )
}